class Timeline {
    constructor(){
        this._steps = []; // {offset, name, fn}
        this._timers = [];
        this._started = false;
    }

    add(offsetMs, name, fn){
        this._steps.push({ offsetMs: Math.max(0, offsetMs|0), name, fn });
        return this;
    }

    start(){
        if(this._started) return Promise.reject(new Error('Timeline already started'));
        this._started = true;
        if(this._steps.length === 0) return Promise.resolve();

        // schedule timers and return Promise that resolves after last step
        return new Promise((resolve) => {
            const maxOffset = Math.max(...this._steps.map(s=>s.offsetMs));
            for(const step of this._steps){
                const t = setTimeout(()=>{
                    try{ step.fn && step.fn(); }catch(e){ console.error('Timeline step failed', step.name, e); }
                }, step.offsetMs);
                this._timers.push(t);
            }

            // resolve when the last scheduled step finishes (allow small buffer)
            const doneTimer = setTimeout(()=> resolve(), maxOffset + 10);
            this._timers.push(doneTimer);
        });
    }

    cancel(){
        for(const t of this._timers) clearTimeout(t);
        this._timers = [];
        this._started = false;
    }
}
class Controller {
        constructor(options = {}){
            this.contentSelector = options.content || '#content';
            this.loadingRoot = options.loadingRoot || '#loading';
            this.time = options.time || 2000; // ms
            this.frontId = options.frontId || 'front-page';
            this.backId = options.backId || 'back-page';

            this.init();
        }
        init(){
            this.initHelper();
            this.initTimeline();
            this.initPages();
            this.initLoading();
            this.initCurtain();
        }
        initTimeline(){
            // Use Timeline to declare the timeline in one place
            this.timeline = new Timeline();
        }
        initHelper(){
            this.helper = new Helper();
        }
        initLoading(){
            // create loading spinner in loadingRoot
            this.$loading = $('<div>').attr('id', this.loadingRoot.replace('#', '')).css({
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 9999,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            });
            this.spinner = new Spinner()
        }
        initCurtain(times = 2000){
            let _time = this.time || times;
            this.curtain = new Curtain(_time);
        }
        // Wrap existing content into front page and create a hidden back page
        initPages(){
            this.$content = $(this.contentSelector);
            if(this.$content.length === 0){
                console.warn('Controller: content selector not found:', this.contentSelector);
                return;
            }

            // If already initialized, skip
            if(this.$content.find('#'+this.frontId).length) return;

            // Move existing children into front container
            const children = this.$content.children().detach();

            // Create containers
            this.$front = children
                .attr('id', this.frontId)
                .attr('class', 'screen-front')

            this.$back = $('<div>')
                .attr('id', this.backId)
                .attr('class', 'screen-back')


            // Empty the main content container and append front + back
            this.$content.empty().append(this.$front).append(this.$back);
        }

        // Start the curtain sequence and load url into back page.
        // url: optional; if not provided, CurtainFactory will use its own url option or load nothing.
        start(url){

        this.url = url || null;
        if(!this.helper.is_support()){
            this.performanceMobile()
            console.log('Curtain not yet supported on mobile devices.');
            return;
        }
            
        this.timeline.cancel();
        
        // Stage curtain come in
        this.timeline.add(0, 'curtain-in', () => {
            // start snippet loading
            // start curtain
            this.performanceMark();

        });

        // Stage curtain full width
        this.timeline.add(this.time / 2, 'curtain-middle', () => {
            var time_start = this.time / 2;
            this._onSwapPage(time_start);
        });

        // Stage curtain come out
        this.timeline.add(this.time + 10, 'curtain-out', () => {
            // curtainFactory.completed should also call this._onComplete via its callback,
            // but ensure final state here too.
            this._onComplete();
        });

        // start timeline (returns a Promise you could await)
        this.timeline.start().catch(()=>{ console.log('Timeline start error') });
    }
    async performanceMobile(){
        await this._onSwapPage(0);
        this.$front.remove()
    }
    performanceMark(){

        // append loading spinner
        $('body').append(this.$loading);
        this.$loading.append(this.spinner);
        // start curtain
        $('body').append(this.curtain)
        $('body').css('overflow', 'hidden'); // prevent scrolling during curtain

    }

        // Called when curtain reaches halfway point
        async _onSwapPage(time_start = 0){
            this.$back.css('z-index', 0).stop(true).animate({opacity: 1}, time_start);

            // Move front page behind and fade out
            this.$front.stop(true).animate({opacity: 0}, time_start, ()=>{
                this.$front.css('z-index', -1);
            });

            // Load content into back page if URL provided
            var html = await this.helper.send(this.url,{ html : true})
            this.$back.append(html);

        }

        // Called when curtain finishes (CurtainFactory.completed)
        _onComplete(){
            // Ensure back page visible and front hidden
            this._makeBackVisible();

            // // clear timers
            // if(this.halfwayTimer) clearTimeout(this.halfwayTimer);
            // this.halfwayTimer = null;

            this.$loading.remove();
            this.curtain.remove();
            console.log('Curtain sequence complete');
            this.$front.remove();

            $('body').css('overflow', 'auto'); // restore scrolling
        }

        _makeBackVisible(){
            if(!this.$back || !this.$front) return;
            this.$back.stop(true).css('z-index', 0).animate({opacity: 1}, 150);
            this.$front.stop(true).css('z-index', -1).css('opacity', 0);
        }
    }

    // expose Controller for other scripts to use
    window.Controller = Controller;
$(document).ready(function(){
    
    // Curtain initialization has been moved to the <head> of index.html to start
    // the curtain as early as possible (before page content displays).

    // Implement the "Steps to implement" from index.html:
    // - init controller
    // - append page with index negative and opacity 0
    // - init curtain
    // - action curtain
    // - when curtain run halfway, transition page to opacity 1 and index 0

    // there are 5 entities:
    // curtain
    // front page
    // back page
    // spinner
    // controller

    // role of controller:
    // - manage the timing of curtain and page transition
    // - trigger curtain action
    // - trigger page transition at curtain full screen

    // TODO: Example usage (uncomment to auto-start)
    var controller = new Controller({
        content:'#content', 
        time:2000
    });
    controller.start('fragments/temp2.html');

})