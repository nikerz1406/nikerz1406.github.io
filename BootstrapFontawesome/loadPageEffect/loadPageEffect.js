/**
 * JavaScript effect v1.0.0
 * https://lehue.space
 * Copyright 2019 - Le Hue
 * Released under the MIT license
 * @param {int} randLoad  : random loading
 * @param {int} randCur   : random curtain
 * @param {string} coverId : div parent
 * @param {string} idInsite : div child ( screen page )
 */
let loadPage = function (randLoad, randCur, coverId, idInsite) {

    var screen = coverId;
    var main = idInsite;
    var loading = idInsite + "ld";
    this.show = function () {
        addLoading(randLoad);
        animation(randCur);
    }
    // add loading page
    function addLoading(randCur) {
        $("#" + loading).children().html("");
        switch (randCur) {
            case 1:
                createLoading("lds-dual-ring", 0);
                break;
            case 2:
                createLoading("lds-roller", 8);
                break;
            case 3:
                createLoading("lds-circle", 1);
                break;
            case 4:
                createLoading("lds-fb", 3);
                break;
            case 5:
                createLoading("lds-ring", 4);
                break;
            case 6:
                createLoading("lds-ellipsis", 4);
                break;
            case 7:
                createLoading("lds-ripple", 2);
                break;
            case 8:
                createLoading("lds-spinner", 12);
                break;
            case 9:
                createLoading("lds-grid", 9);
                break;
            case 10:
                createLoading("lds-hourglass", 0);
                break;
            case 11:
                createLoading("lds-default", 12);
                break;
            case 12: createLoading("lds-heart", 1);
                break;
            default:
                createLoading("lds-fb", 3);
                break;
        }
    }
    // sub add loading
    function createLoading(loadingClass, n) {
        $("#" + screen).append("<div id='" + loading + "' style='opacity:0'></div>");
        $("#" + loading).css("position", "absolute");
        $("#" + loading).css("z-index", "1500");
        $("#" + loading).append("<div></div>");
        $("#" + screen + ">div#" + loading).animate({ opacity: 1 }, 1000)
        setTimeout(function () {
            $("#" + screen + ">div#" + loading).remove();
        }, 2000);
        var rect = $(window)

        $("#" + loading).children().attr("class", loadingClass);
        //console.log($("#" + loading));
        for (var i = 0; i < n; i++) {
            $("." + loadingClass).append("<div></div>");
        }
        $("#" + loading).css("top", rect.height() / 2 - $("." + loadingClass).css("height").split("px")[0] / 2);
        $("#" + loading).css("left", rect.width() / 2 - $("." + loadingClass).css("width").split("px")[0] / 2);
    }
    // animation lib
    function animation(step) {
        // you can get color on this step
        var ligColor = "#FFA726";
        var strColor = "#4d2982";
        switch (step) {
            case 1: // animation 1   
                createCurtain(2);
                // css    
                $("#" + screen + ">div:nth-child(3)").css("transform-origin", "0% 100%");
                $("#" + screen + ">div:nth-child(4)").css("transform-origin", "100% 0%");
                var rect = $(window)
                $("#" + screen + ">div:nth-child(3)").css("top", "0");
                $("#" + screen + ">div:nth-child(4)").css("top", rect.height() / 2);
                $("#" + screen + ">div").each(function () {
                    if (($(this).attr("id") != main) && ($(this).attr("id") != loading)) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("height", rect.height() / 2);
                        $(this).css("width", rect.width() * 1.2);
                        $(this).attr("class", "Animation1");
                        $(this).css("background-color", strColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).animate({ backgroundColor: strColor }, "slow");
                    }
                })
                break;
            case 2: // animation 2
                createCurtain(2);
                $("#" + screen + ">div:nth-child(3)").css("transform-origin", "100% 100%");
                $("#" + screen + ">div:nth-child(4)").css("transform-origin", "0% 0%");
                var rect = $(window)
                $("#" + screen + ">div:nth-child(3)").css("top", "0");
                $("#" + screen + ">div:last-child").css("top", rect.height() / 2);
                $("#" + screen + ">div").each(function () {
                    if (($(this).attr("id") != main) && ($(this).attr("id") != loading)) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("height", rect.height() / 2);
                        $(this).css("width", rect.width() * 1.2);
                        $(this).css("left", rect.width() * -0.1);
                        $(this).attr("class", "Animation2");
                        $(this).css("background-color", strColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).animate({ backgroundColor: strColor }, "slow");
                    }
                })
                break;
            case 3:
                createCurtain(1);
                $("#" + screen + ">div:nth-child(3)").css("transform-origin", "0% 0%");
                $("#" + screen + ">div:nth-child(3)").css("top", "0");
                var rect = $(window)
                $("#" + screen + ">div").each(function () {
                    if (($(this).attr("id") != main) && ($(this).attr("id") != loading)) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("width", rect.width() * 1.1);
                        $(this).css("height", rect.width());
                        $(this).attr("class", "Animation3");
                        $(this).css("background-color", strColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).animate({ backgroundColor: strColor }, "slow");
                    }
                })
                break;
            case 4:
                createCurtain(1);
                $("#" + screen + ">div:nth-child(3)").css("transform-origin", "100% 100%");
                $("#" + screen + ">div:nth-child(3)").css("top", "0");
                var rect = $(window)
                $("#" + screen + ">div").each(function () {
                    if (($(this).attr("id") != main) && ($(this).attr("id") != loading)) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("width", rect.width() * 1.1);
                        $(this).css("height", rect.height() * 3);
                        $(this).css("top", rect.height() * -2);
                        $(this).css("left", rect.width() * -0.1);
                        $(this).attr("class", "Animation4");
                        $(this).css("background-color", strColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).animate({ backgroundColor: strColor }, "slow");
                    }
                })
                break;
            case 5:
                createCurtain(4);
                var rect = $(window)
                //css
                $("#" + screen + ">div").each(function () {
                    if (($(this).attr("id") != main) && ($(this).attr("id") != loading)) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("width", rect.width());
                        $(this).css("height", rect.height());
                        $(this).attr("class", "Animation5");
                        $(this).css("background-color", strColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).animate({ backgroundColor: strColor }, "slow");
                    }
                })
                // position
                $("#" + screen + ">div:nth-child(3)").css("top", rect.height() * -1.1);
                $("#" + screen + ">div:nth-child(4)").css("top", rect.height());
                $("#" + screen + ">div:nth-child(5)").css("left", rect.width() * -1);
                $("#" + screen + ">div:nth-child(6)").css("left", rect.width());
                $("#" + screen + ">div:nth-child(5)").css("top", "0");
                $("#" + screen + ">div:nth-child(6)").css("top", "0");
                //Animation
                $("#" + screen + ">div:nth-child(3)").animate({
                    top: "+=" + rect.height() / 2,
                }, 600);

                $("#" + screen + ">div:nth-child(4)").animate({
                    top: "-=" + rect.height() / 2,

                }, 600);

                $("#" + screen + ">div:nth-child(5)").animate({
                    left: "+=" + rect.width(),

                }, 600);

                $("#" + screen + ">div:nth-child(6)").animate({
                    left: "-=" + rect.width(),

                }, 600);
                setTimeout(function () {
                    $("#" + screen + ">div:nth-child(3)").animate({
                        top: "-=" + rect.height() / 2,

                    }, 600);

                    $("#" + screen + ">div:nth-child(4)").animate({
                        top: "+=" + rect.height() / 2,

                    }, 600);

                    $("#" + screen + ">div:nth-child(5)").animate({
                        left: "-=" + rect.width(),

                    }, 600);

                    $("#" + screen + ">div:nth-child(6)").animate({
                        left: "+=" + rect.width(),

                    }, 600);
                }, 1000);
                break;
            case 6:
                //square
                createCurtain(1);
                var rect = $(window)
                $("#" + screen + ">div").each(function () {
                    if (($(this).attr("id") != main) && ($(this).attr("id") != loading)) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("top", rect.height() / 2);
                        $(this).css("left", rect.width() / 2);
                        $(this).attr("class", "Animation6");
                        $(this).css("background-color", strColor);
                        //$(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).animate({ backgroundColor: strColor }, "slow");
                    }
                })
                $("#" + screen + ">div:nth-child(3)").animate({
                    top: "-=" + (rect.height() / 2),
                    height: "+=" + rect.height(),
                    width: "+=" + rect.width(),
                    left: "-=" + (rect.width() / 2)
                }, 500);
                setTimeout(function () {
                    $("#" + screen + ">div:nth-child(3)").animate({
                        top: "+=" + (rect.height() / 2),
                        height: "-=" + rect.height(),
                        width: "-=" + rect.width(),
                        left: "+=" + (rect.width() / 2)
                    }, 1000);
                }, 500);
                break;
            case 7:
                //square
                createCurtain(1);
                var rect = $(window)
                $("#" + screen + ">div").each(function () {
                    if (($(this).attr("id") != main) && ($(this).attr("id") != loading)) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        //$(this).css("border", '0 solid #4d2982');
                        $(this).css("top", rect.height() / 2);
                        $(this).css("left", rect.width() / 2);
                        $(this).css("background-color", "none");
                        $(this).attr("class", "Animation7");
                        $(this).css("border", '0 solid ' + strColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                    }
                })
                $("#" + screen + ">div:nth-child(3)").animate({
                    top: "-=" + (rect.height() / 2),
                    left: "-=" + (rect.width() / 2),
                    borderWidth: (rect.height() / 2) + "px " + (rect.width() / 2) + "px"
                }, 1000);
                setTimeout(function () {
                    $("#" + screen + ">div:nth-child(3)").animate({
                        top: "-=" + (rect.height() / 2),
                        height: "+=" + rect.height(),
                        width: "+=" + rect.width(),
                        left: "-=" + (rect.width() / 2)
                    }, 1000);
                }, 1000);
                break;
            case 8: // circle
                createCurtain(1);
                var rect = $(window)
                $("#" + screen + ">div").each(function () {
                    if (($(this).attr("id") != main) && ($(this).attr("id") != loading)) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("border-radius", '50%');
                        //$(this).css("border", '0 solid #4d2982');
                        $(this).css("top", rect.height() / 2);
                        $(this).css("left", rect.width() / 2);
                        $(this).css("background-color", "none");
                        $(this).attr("class", "Animation8");
                        $(this).css("border", '0 solid ' + strColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                    }
                })
                $("#" + screen + ">div:nth-child(3)").animate({
                    top: "-=" + (rect.width()),
                    left: "-=" + (rect.width()),
                    borderWidth: (rect.width()) + "px " + (rect.width()) + "px"
                }, 1000);
                setTimeout(function () {
                    $("#" + screen + ">div:nth-child(3)").animate({
                        top: "-=" + (rect.width() * 1.2 / 2),
                        height: "+=" + (rect.width() * 1.2),
                        width: "+=" + (rect.width() * 1.2),
                        left: "-=" + (rect.width() * 1.2 / 2)
                    }, 1000);
                }, 1000);
                break;
            case 9:
                //square
                createCurtain(1);
                var rect = $(window)
                $("#" + screen + ">div").each(function () {
                    if (($(this).attr("id") != main) && ($(this).attr("id") != loading)) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("border-radius", "50%");
                        $(this).css("top", rect.height() / 2);
                        $(this).css("left", rect.width() / 2);
                        $(this).attr("class", "Animation9");
                        $(this).css("background-color", strColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).animate({ backgroundColor: strColor }, "slow");
                    }
                })
                $("#" + screen + ">div:nth-child(3)").animate({
                    top: "-=" + (rect.width() * 1.1 / 2),
                    height: "+=" + (rect.width() * 1.1),
                    width: "+=" + (rect.width() * 1.1),
                    left: "-=" + (rect.width() * 1.1 / 2)
                }, 500);
                setTimeout(function () {
                    $("#" + screen + ">div:nth-child(3)").animate({
                        top: "+=" + (rect.width() * 1.1 / 2),
                        height: "-=" + (rect.width() * 1.1),
                        width: "-=" + (rect.width() * 1.1),
                        left: "+=" + (rect.width() * 1.1 / 2)
                    }, 1000);
                }, 500);
                break;
            case 10:
                createCurtain(2);
                var rect = $(window);
                var straight = Math.sqrt(Math.pow(rect.height(), 2) + Math.pow(rect.width(), 2));

                // css 
                $("#" + screen + ">div").each(function () {
                    if (($(this).attr("id") != main) && ($(this).attr("id") != loading)) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("height", rect.height())
                        $(this).css("width", straight)
                        $(this).attr("class", "Animation10");
                        $(this).css("background-color", strColor);
                        $(this).animate({ backgroundColor: strColor }, "slow");
                        $(this).css("transform", "rotate(90deg)");
                    }
                })
                $("#" + screen + ">div:nth-child(3)").css("transform-origin", "0% 0%");
                $("#" + screen + ">div:nth-child(4)").css("transform-origin", "100% 100%");
                $("#" + screen + ">div:nth-child(4)").css("right", 0);
                $("#" + screen + ">div:nth-child(4)").css("top", 0);
                $("#" + screen + ">div:nth-child(3)").css("left", 0);
                $("#" + screen + ">div:nth-child(3)").css("top", 0);
                //animation
                // default position
                $("#" + screen + ">div:nth-child(3)").animate({
                    deg: 90
                }, {
                        duration: 0,
                        step: function (now) {
                            $(this).css({
                                transform: 'rotate(' + now + 'deg)'
                            });
                        }
                    });
                $("#" + screen + ">div:nth-child(4)").animate({
                    deg: 90
                }, {
                        duration: 0,
                        step: function (now) {
                            $(this).css({
                                transform: 'rotate(' + now + 'deg)'
                            });
                        }
                    });
                //end default
                var deg = Math.atan2(rect.height(), rect.width()) * 180 / Math.PI;
                $("#" + screen + ">div:nth-child(3)").animate({
                    deg: deg
                }, {
                        duration: 400,
                        step: function (now) {
                            $(this).css({
                                transform: 'rotate(' + now + 'deg)'
                            });
                        }
                    });
                $("#" + screen + ">div:nth-child(4)").animate({
                    deg: deg
                }, {
                        duration: 400,
                        step: function (now) {
                            $(this).css({
                                transform: 'rotate(' + now + 'deg)'
                            });
                        }
                    });

                setTimeout(() => {
                    $("#" + screen + ">div:nth-child(3)").animate({
                        deg: 90
                    }, {
                            duration: 400,
                            step: function (now) {
                                $(this).css({
                                    transform: 'rotate(' + now + 'deg)'
                                });
                            }
                        });
                    $("#" + screen + ">div:nth-child(4)").animate({
                        deg: 90
                    }, {
                            duration: 400,
                            step: function (now) {
                                $(this).css({
                                    transform: 'rotate(' + now + 'deg)'
                                });
                            }
                        });
                }, 1500);

                break;
            default:
                break;
        }
    }
    // sub animation lib
    function createCurtain(quantity) {
        for (i = 0; i < quantity; i++) {
            $("#" + screen).append("<div></div>");
        }

        // remove element
        setTimeout(function () {
            $("#" + screen + ">div").each(function () {
                if (($(this).attr("id") != main) && ($(this).attr("id") != loading)) {
                    $(this).remove();
                }
            })
        }, 2000);
    }
}