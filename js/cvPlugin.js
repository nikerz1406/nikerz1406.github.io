class ColorsPage{
    constructor(){
        this.option()
        this.helper = new Helper()
        this.exec()
    }
    valueColor(){
        var randColor = this.helper.randomInt(0, 8);
        while (randColor == $("[data-color]").data("color")) {
        randColor = this.helper.randomInt(0, 8);
        }
        return randColor;
    }
    option(){
        this.Colors = [
            { lig:"#7AE1F0", str:"#A6251B", mid:"#FFC954"},
            { lig:"#FFA726", str:"#4d2982", mid:"#e66565"},
            { lig:"#4ba697", str:"#00322a", mid:"#49b32d"},
            { lig:"#C7C7C7", str:"#212121", mid:"#6B6B6B"},
            { lig:"#FFEB3B", str:"#67196C", mid:"#6064B1"},
            { lig:"#A1E232", str:"#0b5761", mid:"#FA968F"},
            { lig:"#ffc413", str:"#0b5e9e", mid:"#ffa27d"},
            { lig:"#b7c7a8", str:"#1b3243", mid:"#d0b8af"},
            { lig:"#1ac673", str:"#e91e62", mid:"#a9bb41"}
        ];

        this.border = {
            str:[
                "#social>div>div"
            ]
        }
        this.texts = {
            lig:[
                ".custom-box h6",
                ".custom-box>div:nth-child(1)>b",
            ],
            str:[
                "#skill td",
                ".custom-box a",
                ".custom-box li"
            ]
        }
        this.backgrounds = {
            lig:[
            "header>div:nth-child(1)",
            ".card-header",
            "footer>div:nth-child(2)",
            ".list-style",
            ".uncheck",
            "div.skill-circle:nth-child(3)",
            "#main"
            ],
            str:[
            "header>div:nth-child(2)",
            "header>div:nth-child(2)>span",
            ".card-header>span",
            "footer>div:nth-child(1)",
            ".list-style>span",
            "#translate",
            ".check",
            "div.skill-circle:nth-child(2)",
            ],
            mid:[
            "div.skill-circle:nth-child(1)"
            ]
        }
        
    }
    addColor(){
        var ran = this.valueColor();
        var ligColor = this.Colors[ran]["lig"];
        var strColor = this.Colors[ran]["str"];
        var midColor = this.Colors[ran]["mid"];

        $("[data-color]").data("color",ran)
        $("header").data("ligcolor",ligColor)
        $("header").data("strcolor",strColor)
        $("header").data("midcolor",midColor)
        
        return {
            lig:ligColor,
            str:strColor,
            mid:midColor
        }
    }
    getColor(){
        var color = {};
        color.lig = $("header").data("ligcolor");
        color.str = $("header").data("strcolor");
        color.mid = $("header").data("midcolor");
        return color;
    }
    exec(){
        
        this.addColor();
        
        var color = this.getColor();
        
        this.backgrounds.lig.forEach(function(i,v){
            $(i).animate({ "background-color": color.lig }, 500)
        })
        this.backgrounds.str.forEach(function(i,v){
            $(i).animate({ "background-color": color.str }, 500)
        })
        this.backgrounds.mid.forEach(function(i,v){
            $(i).animate({ "background-color": color.mid }, 500)
        })

        this.texts.lig.forEach(function(i,v){
            $(i).animate({ "color": color.lig }, 500)
        })
        this.texts.str.forEach(function(i,v){
            $(i).animate({ "color": color.str }, 500)
        })

        this.border.str.forEach(function(i,v){
            $(i).animate({ "border-color": color.str }, 500)
        })
    }
}

class Translate{
    constructor(){
        this.option()
        this.exec()
    }
    option(){
        this.data = [
            {name:'skill'},
            {name:'birthday'},
            {name:'personality'},
            {name:'translate'},
            {name:'h-about'},
            {name:'about'},
            {name:'coop'},
            {name:'ex-spec'},
            {name:'edu'},
            {name:'edu-time'},
            {name:'specaility'},
            {name:'school'},
            {name:'experience'},
            {name:'ex-time'},
            {name:'ex-co-time'},
            {name:'j-detail'},
            {name:'h-attr'},
            {name:'ele-attr'},
            {name:'h-skill'},
            {name:'acc'},
            {name:'achie'},
            {name:'t-achie'},
            {name:'achie-des'},
            {name:'contact'},
            {name:'watting'},
            {name:'tech'}
        ];
        
    }
    exec(){
        this.data.forEach(function(i,v){
            Translate.prototype.pushData(i.name);
        })

    }
}
Translate.prototype.PushString = function(str, selector = this, indexStr = 0, jubTime = 20) {
    if (indexStr <= str.length) {
        $(selector).text(str.slice(0, indexStr));
    } else { }
    
    setTimeout(function () { 

        Translate.prototype.PushString(str, selector, indexStr, jubTime); }, jubTime);
    indexStr++;
}
Translate.prototype.pushData = function(data, jubTime = 20, delay = 0) {
    var selector = '[data-'+data+']';
    // save data
    setTimeout(function () {
        $(selector).each(function () {
            var temp = $(this).data(data);
            $(this).data(data, $(this).text());
            Translate.prototype.PushString(temp, this, 0, jubTime);
        })
    }, delay)
}

function skillIn(el){
    var ligColor = $("header").data("ligcolor");
    var strColor = $("header").data("strcolor");
    var pos = $(el).closest("td").index();
    var root = $(el).closest("tr");

    root.find("td").each(function(){
        var i = $(this).index();
        var s = $(this).find("div");

        if(pos>=i&&i>1){
            s.css("background",strColor).addClass("border-circle");
        }else{
            s.css("background",ligColor).removeClass("border-circle");
        }
    })
}

function skillOut(el){
    var ligColor = $("header").data("ligcolor");
    var strColor = $("header").data("strcolor");
    var root = $(el).closest("td").closest("tr");
        root.find("div.uncheck").css("background",ligColor)
        root.find("div.check").css("background",strColor)
        root.find("div").removeClass("border-circle")
}

function attrIn(el){
    var circles = $(el).find("div.skill-circle")
        var newTop = $(el).closest("#attributes").width()*0.03;

        circles.eq(0).finish().animate({
            top: "+=" + newTop,
            left: "-=" + newTop,
            opacity: 0.7
        });

        circles.eq(1).finish().animate({
            left: "+=" + newTop
            , opacity: 0.7
        });

        circles.eq(2).finish().animate({
            top: "-=" + newTop,
            left: "-=" + newTop
            , opacity: 0.7
        });
}

function attrOut(el){
    var circles = $(el).find("div.skill-circle")
        var newTop = $(el).closest("#attributes").width()*0.03;

        circles.eq(0).finish().animate({
            top: "-=" + newTop,
            left: "+=" + newTop,
             opacity: 0.5
        });

        circles.eq(1).finish().animate({
            left: "-=" + newTop
            , opacity: 0.5
        });

        circles.eq(2).finish().animate({
            top: "+=" + newTop,
            left: "+=" + newTop,
            opacity: 0.5
        });
}

function headerIn(e){
    $(e).prev().find("H5").addClass("rubberBand");
}

function headerOut(e){
    $(e).prev().find("H5").removeClass("rubberBand");
}

function achIn(e){
    $(e).prev().find("span").addClass("rotateSquare");
}

function achOut(e){
    $(e).prev().find("span").removeClass("rotateSquare");
}

function pushString(str, selector = this, indexStr = 0, jubTime = 20) {
    if (indexStr <= str.length) {
        $(selector).text(str.slice(0, indexStr));
    } else { }
    setTimeout(function () { pushString(str, selector, indexStr, jubTime); }, jubTime);
    indexStr++;
}


function triggerTranslate(){
    var btn = $('button#translate');
    btn.off()

    var time = $('[data-about]').text().length*20;

    btn
    .animate({opacity:0},time/6)
    .animate({opacity:0},time*2/3)
    .animate({opacity:1},time/6)

    new Translate();
    new ColorsPage();

    setTimeout(() => {
        btn.on('click',triggerTranslate)
    }, time);
   
}

// main exec<?
$(document).ready(function(){

    $("#skill .card-body div.tb-circle")
    .hover(
        (e) => skillIn(e.target),(e) => skillOut(e.target)
    )

    $("#attributes .card-body").hover(
        (e) => attrIn(e.target),(e) => attrOut(e.target)
    )

    $(".card-body").hover(
        (e) => headerIn(e.target),(e) => headerOut(e.target)
    )
    
    $("#achievement p").hover(
        (e)=>achIn(e.target),(e)=>achOut(e.target)
    )

    // btn translate 
    $('button#translate').on("click",triggerTranslate)

})