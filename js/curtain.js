class Spinner{
    constructor(){
        this.helper = new Helper();
        this.options = [
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
        ];
        
        return this.build();
    }
    build(){
        this.id = `spinner${this.helper.randomID()}`;

        let randLoad = this.helper.randomInt(0, this.options.length - 1);
        let op = this.options[randLoad];
        let loadingClass = op.name;

        let spinner = $('<div>').addClass(loadingClass).css({
            "text-align": "center",
            "vertical-align": "middle",
            "position": "absolute",
            "display": "table-cell",
            "left": "47vw",
            "top": "50vh",
        })

        this.helper.createChild(spinner,op.value);

        var container = $('<div>').attr("id",this.id).css({
            "z-index":"1500",
            "position":"fixed",
            "display": "table",
            "width": "100vw",
            "height": "100vh",
        })
        container.append(spinner);
        return container;
        
    }
}

class ColorsStyle{
    constructor(){
        set();
        return this;    
    }
    set(){
        this.options = [
            { lig:"#7AE1F0", str:"#A6251B", mid:"#FFC954"},
            { lig:"#FFA726", str:"#4d2982", mid:"#e66565"},
            { lig:"#4ba697", str:"#00322a", mid:"#49b32d"},
            { lig:"#C7C7C7", str:"#212121", mid:"#6B6B6B"},
            { lig:"#FFEB3B", str:"#67196C", mid:"#6064B1"},
            { lig:"#A1E232", str:"#0b5761", mid:"#FA968F"},
            { lig:"#ffc413", str:"#0b5e9e", mid:"#ffa27d"},
            { lig:"#b7c7a8", str:"#1b3243", mid:"#d0b8af"},
            { lig:"#1ac673", str:"#e91e62", mid:"#a9bb41"}
        ]
        return this;
    }
    get(){
        return this.options;
    }
}

class Curtain{
    constructor(time = 2000){
        this.helper = new Helper();
        this.strColor = "rgb(233,233,233)";
        this.time = time;
        return this.build();
    }
}
Curtain.prototype.buildContainer = function(name = 'curtain'){
    var loadingID = `${name}${ this.helper.randomID() }`;
    this.container = $('<div>').attr("id",loadingID);
    this.container.css(this.default_css);
}
Curtain.prototype.initSizeScreen = function(){
    
    this.height = 100;

    // support portrait screen
    this.width = window.innerHeight/window.innerWidth >=1.5 ? 100 : 150;

    this.default_css = {
        "z-index":"1000",
        "position": "fixed",
        "background-color":this.strColor,
        "box-shadow": "0px 0px 50px 0px " + this.strColor,
        "-webkit-box-shadow": "0px 0px 50px 0px " + this.strColor,
        "-moz-box-box-shadow": "0px 0px 50px 0px " + this.strColor
    }
}
Curtain.prototype.build = function(){

    this.initSizeScreen();
    this.buildContainer();
    this.buildAnimation();
    
    return this.container;
}
Curtain.prototype.buildAnimation = function(){

    // TODO : animation8 9 10

    let number = this.helper.randomInt(1,7);
    let functionName = `animation${number}`
    this[functionName]();

}
Curtain.prototype.covertTime = function(mode = 's'){
    if(mode == 's' || mode == 'second'){
        return this.time/1000;
    }
    return this.time;
}
Curtain.prototype.animation10 = function(){
    
    let mode = 2; 

    let deg = Math.round(Math.atan2(this.height,this.width) * 180 / Math.PI + 2);
    let child = this.helper.createChild(this.container,mode);

    let second_time = this.covertTime();

    child
    .css({
        ...this.default_css,
        ...{
            "height": `${this.height}vh`,
            "width" : `${this.width*2}vw`,
            "transform": "rotate(0deg)",
            "-webkit-animation": `Animation8 ${second_time}s ease`,
            "animation": `Animation8 ${second_time}s ease`
        }
    })
    .addClass("Animation10")
    .animate({ backgroundColor: this.strColor }, "slow");

    child.eq(0)
    .css({
        "top":`${this.height*-1}vh`,
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
        "top":`${this.height}vh`,
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
Curtain.prototype.animation9 = function(){
    let mode = 1;
    let child = this.helper.createChild(this.container,mode);

    let second_time = this.covertTime();

    child
    .css({
        ...this.default_css,
        ...{
            "border-radius": "50%",
            "top": `${this.height/2}vh`,
            "left": `${this.width/2}vw`,
            "-webkit-animation": `Animation8 ${second_time}s ease`,
            "animation": `Animation8 ${second_time}s ease`
        }
    })
    .addClass("Animation9")
    .animate({ backgroundColor: this.strColor }, "slow")
    .animate({
        top:`-=${this.width * 1.1 / 2}vw`,
        height: `+=${this.width * 1.1}vw`,
        width:`+=${this.width * 1.1}vw`,
        left: `-=${this.width * 1.1 / 2}vw`,
    }, this.time/2.5)
    .animate({
        top: `+=${this.width * 1.1 / 2}vw`,
        height:  `-=${this.width * 1.1}vw`,
        width: `-=${this.width * 1.1}vw`,
        left: `+=${this.width * 1.1 / 2}vw`,
    }, this.time/2.5);

}
Curtain.prototype.animation8 = function(){
    this.resetWidth()

    let mode = 1;
    let child = this.helper.createChild(this.container,mode);

    let second_time = this.covertTime();

    child
    .css({
        "z-index": "1000",
        "border-radius": "50%",
        "position": "absolute",
        "background-color": "none",
        "top":`${this.height/2}vh`,
        "left":`${this.width/2}vw`,
        "border": '0 solid ' + this.strColor,
        "-webkit-animation": `Animation8 ${second_time}s ease`,
        "animation": `Animation8 ${second_time}s ease`
    })
    .addClass("Animation8")
    .animate({
        top: `-=${this.width}vw`,
        left: `-=${this.width}vw`,
        borderWidth: `${this.width}vw ${this.width}vw`
    }, this.time/1.5)
    .animate({
        top:`-=${this.width * 1.2 / 2}vw`,
        height: `+=${this.width * 1.2}vw`,
        width: `+=${this.width * 1.2}vw`,
        left: `-=${this.width * 1.2 / 2}vw`
    }, this.time/2.5);

}
Curtain.prototype.animation7 = function(){
    this.resetWidth()

    let mode = 1;
    let child = this.helper.createChild(this.container,mode);

    let second_time = this.covertTime();

    child
    .css({
        ...this.default_css,
        ...{
            "position":"absolute",
            "top":`${this.height/2}vh`,
            "left":`${this.width/2}vw`,
            "border": '0 solid ' + this.strColor,
            "background-color":"none",
            "-webkit-animation": `Animation7 ${second_time}s ease`,
            "animation": `Animation7 ${second_time}s ease`,
        }
    })
    .addClass("Animation7")
    .animate({
        top:`-=${this.height / 2}vh`,
        left:`-=${this.width / 2}vw`,
        borderWidth:`${this.height / 2}vh ${this.width / 2}vw`,
    }, this.time/2)
    .animate({
        top: `-=${this.height/2}vh`,
        height:`+=${this.height}vh`,
        width: `+=${this.width}vw`,
        left: `-=${this.width/2}vw`
    }, this.time/2);

}
Curtain.prototype.animation6 = function(){
    this.resetWidth()

    let mode = 1;

    let child = this.helper.createChild(this.container,mode);

    let second_time = this.covertTime();

    child
    .css({
        ...this.default_css,
        ...{
            "top":`${this.height/2}vh`,
            "left":`${this.width/2}vw`,
            "-webkit-animation": `Animation6 ${second_time}s ease`,
            "animation": `Animation6 ${second_time}s ease`
        }
    })
    .addClass("Animation6")
    .animate({ backgroundColor: this.strColor }, "slow")
    .animate({
        top:`-=${ this.height / 2 }vh`,
        height:`+=${ this.height }vh`,
        width:`+=${this.width}vw`,
        left:`-=${this.width/2}vw`
    }, this.time/4)
    .animate({
        top:`+=${this.height / 2}vh`,
        height:`-=${this.height}vh`,
        width: `-=${this.width}vw`,
        left: `+=${this.width / 2}vw`
    }, this.time/2);

}
Curtain.prototype.resetWidth = function(){
    // reset width when symmetry curtain
    this.width = 100
}
Curtain.prototype.animation5 = function(){
    this.resetWidth()

    let mode = 4;
    let child = this.helper.createChild(this.container,mode);
    console.log({
        w:this.width,
        h:this.height,
    })

    

    let second_time = this.covertTime();

    child
    .css({
        ...this.default_css,
        ...{
            "width":`${this.width}vw`,
            "height":`${this.height}vh`,
            "-webkit-animation": `Animation5 ${second_time}s ease`,
            "animation": `Animation5 ${second_time}s ease`
        }
    })
    .addClass("Animation5")
    .animate({ backgroundColor: this.strColor }, "slow");

    child.eq(0)
    .css("top",`${this.height*-1}vh`)
    .animate({
        top: `+=${this.height / 2}vh`,
    }, this.time/2.5)
    .animate({
        top: `-=${this.height / 2}vh`,
    }, this.time/2.5);

    child.eq(1)
    .css("top",`${this.height}vh`)
    .animate({
        top: `-=${this.height / 2}vh`,
    }, this.time/2.5)
    .animate({
        top: `+=${this.height / 2}vh`,
    }, this.time/2.5);

    child.eq(2)
    .css({
        "top":0,
        "left":`${this.width*-1}vw`
    })
    .animate({
        left:`+=${this.width}vw`,
    }, this.time/2.5)
    .animate({
        left:`-=${this.width}vw`,
    }, this.time/2.5);

    child.eq(3)
    .css({
        "top":0,
        "left":`${this.width}vw`
    })
    .animate({
        left:`-=${this.width}vw`,
    }, this.time/2.5)
    .animate({
        left:`+=${this.width}vw`,
    }, this.time/2.5);

}
Curtain.prototype.animation4 = function(){
    let mode = 1;
    let child = this.helper.createChild(this.container,mode);

    let second_time = this.covertTime();

    child
    .css({
        ...this.default_css,
        ...{
            "transform-origin": "100% 100%",
            "top": "0",
            "width":`${this.width*1.5}vw`,
            "height":`${this.height*3}vh`,
            "top":`${this.height*-2}vh`,
            "left":`${this.width*-0.1}vw`,
            "-webkit-animation": `Animation4 ${second_time}s ease`,
            "animation": `Animation4 ${second_time}s ease`
        }   
    })
    .addClass("Animation4")
    .animate({ backgroundColor: this.strColor }, "slow");

}
Curtain.prototype.animation3 = function(){
    let mode = 1;
    let child = this.helper.createChild(this.container,mode);

    let second_time = this.covertTime();

    child
    .css({
        ...this.default_css,
        ...{
            "transform-origin":"0% 0%",
            "top":"0",
            "width":`${this.width*1.5}vw`,
            "height":`${this.height}vh`,
            "-webkit-animation": `Animation3 ${second_time}s ease`,
            "animation": `Animation3 ${second_time}s ease`
        }
    })
    .addClass("Animation3")
    .animate({ backgroundColor: this.strColor }, "slow");

}
Curtain.prototype.animation2 = function(){
    let mode = 2;
    let child = this.helper.createChild(this.container,mode);
    
    let second_time = this.covertTime();

    child
    .addClass("Animation2")
    .css({
        ...this.default_css,
        ...{
            "height":`${this.height/2}vh`,
            "width":`${this.width*1.8}vw`,
            "left":`${this.width*-0.2}vw`,
            "animation":`Animation2 ${second_time}s ease`,
            "-webkit-animation":`Animation2 ${second_time}s ease`,
        }
    })
    .animate({ backgroundColor: this.strColor }, "slow");

    child.eq(0).css({
        "transform-origin": "0% 100%",
        "top":`${this.height/2}vh`
    })

    child.eq(1)
    .css({
        "transform-origin": "100% 0%",
        "top":"0"
    })

}
Curtain.prototype.animation1 = function(){
    let mode = 2;
    let child = this.helper.createChild(this.container,mode);
    
    let second_time = this.covertTime();

    child
    .addClass("Animation1")
    .css({
        ...this.default_css,
        ...{
            "height":`${ this.height/2 }vh`,
            "width":`${this.width*1.3 }vw`,
            "left":`${this.width*-0.2}vw`,
            "animation":`Animation1 ${second_time}s ease`,
            "-webkit-animation":`Animation1 ${second_time}s ease`,
        }
    })
    .animate({ 
        backgroundColor: this.strColor,
     });

    child.eq(0).css({
        "transform-origin": "0% 100%",
        "top":"0"
    })
    child.eq(1)
    .css({
        "transform-origin": "100% 0%",
        "top":`${ this.height/2 }vh`
    })

}

class CurtainFactory{
    constructor(option){

        this.root = option.id ? $(option.id) : $("#loading");
        this.content = option.content ? $(option.content) : $("#content");
        this.curtain = option.curtain ? option.curtain : null;
        this.spinner = option.spinner ? option.spinner : null;
        this.url = option.url ? option.url : null;
        this.time = option.time ? option.time : 2000;
        this.callback = option.completed ? option.completed : null;
        this.helper = new Helper();

        // check is support
        if(this.helper.is_support() == false){
            this.loadPage();
            return null;
        }

        var curtain = new Curtain(this.time);

        this.buildCurtain(curtain)
        .buildSpinner()
        .render();
    }
}
CurtainFactory.prototype.loadPage = async function(){
    var page = await this.helper.send(this.url,{ html : true})
    this.content.html(page)
}
CurtainFactory.prototype.buildSpinner = function(spiner){
    this.spinner = spiner ? spiner : (new Spinner());
    return this;
}
CurtainFactory.prototype.buildCurtain = function(curtain){
    this.curtain = curtain ? curtain : (new Curtain());
    return this;
}
CurtainFactory.prototype.render = function(){
    var _this = this;
    this.root.html("");
    var time = this.time;
    this.root.append(this.spinner);
    this.root.append(this.curtain);

    $("body").css({
        "overflow":"hidden"
    })

    setTimeout(()=>{
        _this.clean();
        $("body").css({
            "overflow":"scroll",
            "overflow-x":"hidden",
        })
        
        if(this.callback) this.callback();
    },time)
    
    setTimeout(async ()=>{
        this.loadPage()
    },(time/2))

}
CurtainFactory.prototype.clean = function(){
    this.root.html("");
}