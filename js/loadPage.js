class AnimationStyle{
    constructor(el,time,strColor="#4d2982",isFragment = false){
        this.helper = new Helper();
        this.$el = el;
        this.width = $(el).width();
        this.height = $(el).height();
        this.strColor = strColor;
        var position = isFragment ? "fixed" : "absolute";
        this.option = {
            "z-index":"1000",
            "position": position,
            "background-color":this.strColor,
            "box-shadow": "0px 0px 50px 0px" + this.strColor,
            "-webkit-box-shadow": "0px 0px 50px 0px" + this.strColor,
            "-moz-box-box-shadow": "0px 0px 50px 0px" + this.strColor
        }
        this.time = time;
        this.render();

    }
    animation1(){
        let mode = 2;

        let child = this.helper.createChild(this.$el,mode);
        
        child
        .css(this.option)
        .css({
            "height":this.height/2,
            "width":this.width*1.3,
            "left":this.width*-0.2
        })
        .addClass("Animation1")
        .animate({ backgroundColor: this.strColor }, "slow");

        child.eq(0).css({
            "transform-origin": "0% 100%",
            "top":"0"
        })

        child.eq(1)
        .css({
            "transform-origin": "100% 0%",
            "top":this.height/2
        })
    }
    animation2(){
        let mode = 2;

        let child = this.helper.createChild(this.$el,mode);

        child
        .css(this.option)
        .css({
            "height":this.height/2,
            "width":this.width*1.3,
            "left":this.width*-0.2
        })
        .addClass("Animation2")
        .animate({ backgroundColor: this.strColor }, "slow");

        child.eq(0)
        .css({
            "transform-origin": "100% 100%",
            "top":"0"
        })

        child.eq(1)
        .css({
            "transform-origin": "0% 0%",
            "top":this.height/2
        })
    }
    animation3(){
        let mode = 1;

        let child = this.helper.createChild(this.$el,mode);

        child
        .css(this.option)
        .css({
            "transform-origin":"0% 0%",
            "top":"0",
            "width":this.width*1.1,
            "height":this.width
        })
        .addClass("Animation3")
        .animate({ backgroundColor: this.strColor }, "slow");

    }
    animation4(){
        let mode = 1;

        let child = this.helper.createChild(this.$el,mode);

        child
        .css(this.option)
        .css({
            "transform-origin": "100% 100%",
            "top": "0",
            "width":this.width*1.1,
            "height":this.height*3,
            "top":this.height*-2,
            "left":this.width*-0.1
        })
        .addClass("Animation4")
        .animate({ backgroundColor: this.strColor }, "slow");

    }
    animation5(){
        let mode = 4;

        let child = this.helper.createChild(this.$el,mode);

        child
        .css(this.option)
        .css({
            "width":this.width,
            "height":this.height
        })
        .addClass("Animation5")
        .animate({ backgroundColor: this.strColor }, "slow");

        child.eq(0)
        .css("top",this.height*-1)
        .animate({
            top: "+=" + this.height / 2,
        }, this.time/2.5)
        .animate({
            top: "-=" + this.height / 2,
        }, this.time/2.5);

        child.eq(1)
        .css("top",this.height)
        .animate({
            top: "-=" + this.height / 2,
        }, this.time/2.5)
        .animate({
            top: "+=" + this.height / 2,
        }, this.time/2.5);

        child.eq(2)
        .css({
            "top":0,
            "left":this.width*-1
        })
        .animate({
            left: "+=" + this.width,
        }, this.time/2.5)
        .animate({
            left: "-=" + this.width,
        }, this.time/2.5);

        child.eq(3)
        .css({
            "top":0,
            "left":this.width
        })
        .animate({
            left: "-=" + this.width,
        }, this.time/2.5)
        .animate({
            left: "+=" + this.width,
        }, this.time/2.5);

    }
    animation6(){
        let mode = 1;

        let child = this.helper.createChild(this.$el,mode);

        child
        .css(this.option)
        .css({
            "top":this.height/2,
            "left":this.width/2
        })
        .addClass("Animation6")
        .animate({ backgroundColor: this.strColor }, "slow")
        .animate({
            top: "-=" + (this.height / 2),
            height: "+=" + this.height,
            width: "+=" + this.width,
            left: "-=" + (this.width / 2)
        }, this.time/4)
        .animate({
            top: "+=" + (this.height / 2),
            height: "-=" + this.height,
            width: "-=" + this.width,
            left: "+=" + (this.width / 2)
        }, this.time/2);

    }
    animation7(){
        let mode = 1;

        let child = this.helper.createChild(this.$el,mode);

        child
        //.css(this.option)
        .css({
            "top":this.height/2,
            "left":this.width/2,
            "border": '0 solid ' + this.strColor,
            "z-index":"1000",
            "position": "absolute",
            "background-color":"none",
            "box-shadow": "0px 0px 50px 0px" + this.strColor,
            "-webkit-box-shadow": "0px 0px 50px 0px" + this.strColor,
            "-moz-box-box-shadow": "0px 0px 50px 0px" + this.strColor
        })
        .addClass("Animation7")
        .animate({
            top: "-=" + (this.height / 2),
            left: "-=" + (this.width / 2),
            borderWidth: (this.height / 2) + "px " + (this.width / 2) + "px"
        }, this.time/2)
        .animate({
            top: "-=" + (this.height / 2),
            height: "+=" + this.height,
            width: "+=" + this.width,
            left: "-=" + (this.width / 2)
        }, this.time/2);

    }
    animation8(){
        let mode = 1;

        let child = this.helper.createChild(this.$el,mode);

        child
        //.css(this.option)
        .css({
            "z-index": "1000",
            "position": "absolute",
            "border-radius": "50%",
            "background-color": "none",
            "top":this.height/2,
            "left":this.width/2,
            "border": '0 solid ' + this.strColor,
        })
        .addClass("Animation8")
        .animate({
            top: "-=" + (this.width),
            left: "-=" + (this.width),
            borderWidth: (this.width) + "px " + (this.width) + "px"
        }, this.time/1.5)
        .animate({
            top: "-=" + (this.width * 1.2 / 2),
            height: "+=" + (this.width * 1.2),
            width: "+=" + (this.width * 1.2),
            left: "-=" + (this.width * 1.2 / 2)
        }, this.time/2.5);

    }
    animation9(){
        let mode = 1;

        let child = this.helper.createChild(this.$el,mode);

        child
        .css(this.option)
        .css({
            "border-radius": "50%",
            "top": this.height/2,
            "left": this.width / 2,
            "transform-origin":"0% 100%"
        })
        .addClass("Animation9")
        .animate({ backgroundColor: this.strColor }, "slow")
        .animate({
            top: "-=" + (this.width * 1.1 / 2),
            height: "+=" + (this.width * 1.1),
            width: "+=" + (this.width * 1.1),
            left: "-=" + (this.width * 1.1 / 2)
        }, this.time/2.5)
        .animate({
            top: "+=" + (this.width * 1.1 / 2),
            height: "-=" + (this.width *1.1),
            width: "-=" + (this.width * 1.1),
            left: "+=" + (this.width * 1.1 / 2)
        }, this.time/2.5);


    }
    animation10(){
        let mode = 2;
        let deg = Math.round(Math.atan2(this.height,this.width) * 180 / Math.PI);
        let child = this.helper.createChild(this.$el,mode);

        child
        .css(this.option)
        .css({
            "height": this.height,
            "width" : this.width*1.5,
            "transform": "rotate(0deg)"
        })
        .addClass("Animation10")
        .animate({ backgroundColor: this.strColor }, "slow");

        child.eq(0)
        .css({
            "top":this.height*-1,
            "transform-origin": "0% 100%",
            "left": "0",
        })
        .animate({
            deg: deg
        }, {
                duration: this.time/2.5,
                step: function (now) {
                    $(this).css({
                        transform: 'rotate(' + now + 'deg)'
                    });
                }
            })
        .animate({
            deg: 0
        }, {
                duration: this.time/3,
                step: function (now) {
                    $(this).css({
                        transform: 'rotate(' + now + 'deg)'
                    });
                }
            });

        child.eq(1)
        .css({
            "top":this.height,
            "transform-origin": "100% 0%",
            "right": "0"
        })
        .animate({
            deg: deg
        }, {
                duration: this.time/2.5,
                step: function (now) {
                    $(this).css({
                        transform: 'rotate(' + now + 'deg)'
                    });
                }
            })
        .animate({
                    deg: 0
                }, {
                        duration: this.time/3,
                        step: function (now) {
                            $(this).css({
                                transform: 'rotate(' + now + 'deg)'
                            });
                        }
                    });


    }
    render(){
        let random = this.helper.randomIntFromInterval(1,10);
        let functionName = "animation"+random;
        this[functionName]();

    }

}

class loadPage{
    constructor(el,strColor="#4d2982"){
        this.$el = $(el);
        this.helper = new Helper();
        this.name = this.$el.attr("id");
        this.loading = 'sub-'+this.name;
        this.width = $(el).width();
        this.height = $(el).height();
        this.strColor = strColor;
        this.render()
        return true;
        
    }
    async addLoading(time){

        let option = [
            {name:"lds-dual-ring",value:0},
            {name:"lds-roller",value:8},
            {name:"lds-circle",value:1},
            {name:"lds-fb",value:3},
            {name:"lds-ring",value:4},
            {name:"lds-ellipsis",value:5},
            {name:"lds-ripple",value:2},
            {name:"lds-spinner",value:12},
            {name:"lds-grid",value:9},
            {name:"lds-hourglass",value:0},
            {name:"lds-default",value:12},
            {name:"lds-heart",value:1}
        ]

        let randLoad = this.helper.randomIntFromInterval(0, 11);
        let op = option[randLoad];
        let loadingClass = op.name;

        let ld = $('<div>').attr("id",this.loading).css({
            "opacity":"0",
            "z-index":"1500",
            "position": "fixed",
            "top":this.height/2-30,
            "left":this.width/2-30
        });
        
        let spinner = $('<div>').addClass(loadingClass)
        this.helper.createChild(spinner,op.value);
        ld.append(spinner);
        this.$el.append(ld);

        // show and hide
        await ld.animate({ opacity: 1 }, time/2)
        //await ld.animate({ opacity: 0 }, time)

    }
    clear(timeout){
        this.$el.css("z-index",2000)
        // clear context
        setTimeout(() => {
            this.$el
            .html("")
            .css("z-index",-1000)
        }, timeout);     

    }
    render(){
        let time = 2000;
        new AnimationStyle(this.$el,time,this.strColor);
        this.addLoading(time);
        this.clear(time);
    }
}

class Helper{
    createChild(selector,n){
        for (var i = 0; i < n; i++) {
            selector.append($("<div>"));
        }
        return selector.find("div");
    }
    randomIntFromInterval(min, max) // min and max included
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}