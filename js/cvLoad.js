// load ajax home page
$(document).ready(function () {
    function createCurtain(quantity) {
        // alert
        var preStr = $("[data-contract]").text();
        var str = $("[data-social]").text();//$("#contract").data("loading");
        PushString(str, "#contract H5", 0);
        setTimeout(function () {
            if ($("[data-lang]").data == 1) {
                $("[data-contract]").text("LIÊN HỆ");
                $("[data-contract]").data("contract", "CONTRACT");
                $("[data-social]").text("Vui lòng đợi...");
                $("[data-social]").data("social", "Please wait...");
                preStr = "LIÊN HỆ";
            }
            PushString(preStr, "#contract H5", 0);
        }, 2000);
        // create element
        for (i = 0; i < quantity; i++) {
            $("#screen").append("<div></div>");
        }
        // remove element
        setTimeout(function () {
            $("#screen>div").each(function () {
                if (($(this).attr("id") != "main") && ($(this).attr("id") != "loading")) {
                    $(this).remove();
                }
            })
        }, 2000);
    }
    function animation(step) {
        var ligColor = $("header>div:nth-child(1)").css("background-color");
        var strColor = $("header>div:nth-child(2)").css("background-color");
        var rect = $("#screen");
        var heightEffect = rect.height();
        var witdhEffect = rect.width();
        if (rect.height() > rect.width()) {
            // effect moblie
            heightEffect = rect.width();
            witdhEffect = rect.height();
        }
        switch (step) {

            case 1: // animation 1   
                createCurtain(2);
                // css    
                $("#screen>div:nth-child(3)").css("transform-origin", "0% 100%");
                $("#screen>div:nth-child(4)").css("transform-origin", "100% 0%");
                //var rect = $("#screen");

                $("#screen>div:last-child").css("top", heightEffect / 2);
                $("#screen>div").each(function () {
                    if (($(this).attr("id") != "main") && ($(this).attr("id") != "loading")) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("height", heightEffect / 2);
                        $(this).css("width", witdhEffect * 1.2);
                        $(this).attr("class", "Animation1");
                        $(this).css("background-color", ligColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).animate({ backgroundColor: strColor }, "slow");
                    }
                })
                break;
            case 2: // animation 2
                createCurtain(2);
                $("#screen>div:nth-child(3)").css("transform-origin", "100% 100%");
                $("#screen>div:nth-child(4)").css("transform-origin", "0% 0%");
                //var rect = $("#screen");
                $("#screen>div:last-child").css("top", heightEffect / 2);
                $("#screen>div").each(function () {
                    if (($(this).attr("id") != "main") && ($(this).attr("id") != "loading")) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("height", heightEffect / 2);
                        $(this).css("width", witdhEffect * 1.2);
                        $(this).css("left", witdhEffect * -0.1);
                        $(this).attr("class", "Animation2");
                        $(this).css("background-color", ligColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).animate({ backgroundColor: strColor }, "slow");
                    }
                })
                break;
            case 3:
                createCurtain(1);
                $("#screen>div:nth-child(3)").css("transform-origin", "0% 0%");
                //var rect = $("#screen");
                $("#screen>div").each(function () {
                    if (($(this).attr("id") != "main") && ($(this).attr("id") != "loading")) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("width", witdhEffect * 1.1);
                        $(this).css("height", witdhEffect);
                        $(this).attr("class", "Animation3");
                        $(this).css("background-color", ligColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).animate({ backgroundColor: strColor }, "slow");
                    }
                })
                break;
            case 4:
                createCurtain(1);
                $("#screen>div:nth-child(3)").css("transform-origin", "100% 100%");
                //var rect = $("#screen");
                $("#screen>div").each(function () {
                    if (($(this).attr("id") != "main") && ($(this).attr("id") != "loading")) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("width", witdhEffect * 1.1);
                        $(this).css("height", heightEffect * 3);
                        $(this).css("top", heightEffect * -2);
                        $(this).css("left", witdhEffect * -0.1);
                        $(this).attr("class", "Animation4");
                        $(this).css("background-color", ligColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).animate({ backgroundColor: strColor }, "slow");
                    }
                })
                break;
            case 5:
                createCurtain(4);
                //var rect = $("#screen");
                //css
                $("#screen>div").each(function () {
                    if (($(this).attr("id") != "main") && ($(this).attr("id") != "loading")) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("width", witdhEffect);
                        $(this).css("height", heightEffect);
                        $(this).attr("class", "Animation5");
                        $(this).css("background-color", ligColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).animate({ backgroundColor: strColor }, "slow");
                    }
                })
                // position
                $("#screen>div:nth-child(3)").css("top", heightEffect * -1);
                $("#screen>div:nth-child(4)").css("top", heightEffect);
                $("#screen>div:nth-child(5)").css("left", witdhEffect * -1);
                $("#screen>div:nth-child(6)").css("left", witdhEffect);
                //Animation
                $("#screen>div:nth-child(3)").animate({
                    top: "+=" + rect.position().top,
                }, 1000);

                $("#screen>div:nth-child(4)").animate({
                    top: "-=" + rect.position().top,

                }, 1000);

                $("#screen>div:nth-child(5)").animate({
                    left: "+=" + witdhEffect,

                }, 1000);

                $("#screen>div:nth-child(6)").animate({
                    left: "-=" + witdhEffect,

                }, 1000);
                setTimeout(function () {
                    $("#screen>div:nth-child(3)").animate({
                        top: "-=" + rect.position().top,

                    }, 1000);

                    $("#screen>div:nth-child(4)").animate({
                        top: "+=" + rect.position().top,

                    }, 1000);

                    $("#screen>div:nth-child(5)").animate({
                        left: "-=" + witdhEffect,

                    }, 1000);

                    $("#screen>div:nth-child(6)").animate({
                        left: "+=" + witdhEffect,

                    }, 1000);
                }, 1000);
                break;
            case 6:
                //square
                createCurtain(1);
                //var rect = $("#screen");
                $("#screen>div").each(function () {
                    if (($(this).attr("id") != "main") && ($(this).attr("id") != "loading")) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("top", heightEffect / 2);
                        $(this).css("left", witdhEffect / 2);
                        $(this).attr("class", "Animation6");
                        $(this).css("background-color", ligColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).animate({ backgroundColor: strColor }, "slow");
                    }
                })
                $("#screen>div:nth-child(3)").animate({
                    top: "-=" + (heightEffect / 2),
                    height: "+=" + heightEffect,
                    width: "+=" + witdhEffect,
                    left: "-=" + (witdhEffect / 2)
                }, 500);
                setTimeout(function () {
                    $("#screen>div:nth-child(3)").animate({
                        top: "+=" + (heightEffect / 2),
                        height: "-=" + heightEffect,
                        width: "-=" + witdhEffect,
                        left: "+=" + (witdhEffect / 2)
                    }, 1000);
                }, 500);
                break;
            case 7:
                //square
                createCurtain(1);
                //var rect = $("#screen");
                $("#screen>div").each(function () {
                    if (($(this).attr("id") != "main") && ($(this).attr("id") != "loading")) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        //$(this).css("border", '0 solid #4d2982');
                        $(this).css("top", heightEffect / 2);
                        $(this).css("left", witdhEffect / 2);
                        $(this).css("background-color", "none");
                        $(this).attr("class", "Animation7");
                        $(this).css("border", '0 solid ' + strColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                    }
                })
                $("#screen>div:nth-child(3)").animate({
                    top: "-=" + (heightEffect / 2),
                    left: "-=" + (witdhEffect / 2),
                    borderWidth: (heightEffect / 2) + "px " + (witdhEffect / 2) + "px"
                }, 1000);
                setTimeout(function () {
                    $("#screen>div:nth-child(3)").animate({
                        top: "-=" + (heightEffect / 2),
                        height: "+=" + heightEffect,
                        width: "+=" + witdhEffect,
                        left: "-=" + (witdhEffect / 2)
                    }, 1000);
                }, 1000);
                break;
            case 8: // circle
                createCurtain(1);
                //var rect = $("#screen");
                $("#screen>div").each(function () {
                    if (($(this).attr("id") != "main") && ($(this).attr("id") != "loading")) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("border-radius", '50%');
                        $(this).css("top", heightEffect / 2);
                        $(this).css("left", witdhEffect / 2);
                        $(this).css("background-color", "none");
                        $(this).attr("class", "Animation8");
                        $(this).css("border", '0 solid ' + strColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                    }
                })
                $("#screen>div:nth-child(3)").animate({
                    top: "-=" + (witdhEffect),
                    left: "-=" + (witdhEffect),
                    borderWidth: (witdhEffect) + "px " + (witdhEffect) + "px"
                }, 1000);
                setTimeout(function () {
                    $("#screen>div:nth-child(3)").animate({
                        top: "-=" + (witdhEffect * 1.2 / 2),
                        height: "+=" + (witdhEffect * 1.2),
                        width: "+=" + (witdhEffect * 1.2),
                        left: "-=" + (witdhEffect * 1.2 / 2)
                    }, 1000);
                }, 1000);
                break;
            case 9:
                //square
                createCurtain(1);
                //var rect = $("#screen");
                $("#screen>div").each(function () {
                    if (($(this).attr("id") != "main") && ($(this).attr("id") != "loading")) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("border-radius", "50%");
                        $(this).css("top", heightEffect / 2);
                        $(this).css("left", witdhEffect / 2);
                        $(this).attr("class", "Animation9");
                        $(this).css("background-color", ligColor);
                        $(this).css("box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-webkit-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).css("-moz-box-box-shadow", "0px 0px 50px 0px" + strColor);
                        $(this).animate({ backgroundColor: strColor }, "slow");
                    }
                })
                $("#screen>div:nth-child(3)").animate({
                    top: "-=" + (witdhEffect * 1.1 / 2),
                    height: "+=" + (witdhEffect * 1.1),
                    width: "+=" + (witdhEffect * 1.1),
                    left: "-=" + (witdhEffect * 1.1 / 2)
                }, 500);
                setTimeout(function () {
                    $("#screen>div:nth-child(3)").animate({
                        top: "+=" + (witdhEffect * 1.1 / 2),
                        height: "-=" + (witdhEffect * 1.1),
                        width: "-=" + (witdhEffect * 1.1),
                        left: "+=" + (witdhEffect * 1.1 / 2)
                    }, 1000);
                }, 500);
                break;
            case 10:
                createCurtain(2);
                //var rect = $("#screen");
                var straight = Math.sqrt(Math.pow(heightEffect, 2) + Math.pow(witdhEffect, 2));

                // css 
                $("#screen>div").each(function () {
                    if (($(this).attr("id") != "main") && ($(this).attr("id") != "loading")) {
                        $(this).css("z-index", 1000);
                        $(this).css("position", "absolute");
                        $(this).css("height", heightEffect * 1.01)
                        $(this).css("width", straight)
                        $(this).attr("class", "Animation10");
                        $(this).css("background-color", strColor);
                        $(this).animate({ backgroundColor: strColor }, "slow");
                        $(this).css("transform", "rotate(90deg)");
                    }
                })
                $("#screen>div:nth-child(3)").css("transform-origin", "0% 0%");
                $("#screen>div:nth-child(4)").css("transform-origin", "100% 100%");
                $("#screen>div:nth-child(4)").css("right", -1);
                $("#screen>div:nth-child(4)").css("top", 0);
                $("#screen>div:nth-child(3)").css("left", 0);
                $("#screen>div:nth-child(3)").css("top", 0);
                //animation
                // default position
                $("#screen>div:nth-child(3)").animate({
                    deg: 90
                }, {
                        duration: 0,
                        step: function (now) {
                            $(this).css({
                                transform: 'rotate(' + now + 'deg)'
                            });
                        }
                    });
                $("#screen>div:nth-child(4)").animate({
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
                var deg = Math.atan2(heightEffect, witdhEffect) * 180 / Math.PI;
                $("#screen>div:nth-child(3)").animate({
                    deg: deg
                }, {
                        duration: 400,
                        step: function (now) {
                            $(this).css({
                                transform: 'rotate(' + now + 'deg)'
                            });
                        }
                    });
                $("#screen>div:nth-child(4)").animate({
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
                    $("#screen>div:nth-child(3)").animate({
                        deg: 90
                    }, {
                            duration: 400,
                            step: function (now) {
                                $(this).css({
                                    transform: 'rotate(' + now + 'deg)'
                                });
                            }
                        });
                    $("#screen>div:nth-child(4)").animate({
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
    var randCur = 1;
    var randLoad = 1;
    function randomIntFromInterval(min, max) // min and max included
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function createLoading(loadingClass, n) {
        $("#screen").append("<div id='loading' style='opacity:0'></div>");
        $("#loading").append("<div></div>");

        $("#screen>div#loading").animate({ opacity: 1 }, 1000);
        setTimeout(function () {
            $("#screen>div#loading").remove();
        }, 2000);
        var rect = $("#screen");
        $("#loading").children().attr("class", loadingClass);
        console.log($("#loading").text());
        for (var i = 0; i < n; i++) {
            $("." + loadingClass).append("<div></div>");
        }
        $("#loading").css("top", heightEffect / 2 - $("." + loadingClass).css("height").split("px")[0] / 2);
        $("#loading").css("left", witdhEffect / 2 - $("." + loadingClass).css("width").split("px")[0] / 2);
    }
    function addLoading(randCur) {
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


    function PushString(str, selector = this, indexStr = 0, jubTime = 20) {
        if (indexStr <= str.length) {
            $(selector).text(str.slice(0, indexStr));
        } else { }
        setTimeout(function () { PushString(str, selector, indexStr, jubTime); }, jubTime);
        indexStr++;
    }
    function addTranlate() {
        $("button#translate").off("click");

        function getHotelMapView(HotelId) {
            return new Promise((resolve, reject) => {
                // Request data
                requestHotelMapView = $.ajax({
                    url: 'hotel/hotel_search_list/getHotelMapView',
                    type: 'POST',
                    data: {
                        HotelId: HotelId
                    },
                    beforeSend: function () {

                    },
                    complete: function () {

                    },
                    success: function (data) {
                        if (data != null) {
                            resolve(data);
                        } else {
                            reject('FAIL');
                        }
                    },
                    timeout: 120000,
                    error: function (jqXHR, textStatus, errorThrown) {
                        reject(textStatus);
                        $('#near_by_hotel_location .loading_background').removeClass('active');
                    }
                });
            });
        }
        $.ajax().then($("button#translate").animate({ opacity: "0" }, 1500))
            .then(pushData('[data-birthday]', 'birthday'))
            .then(pushData('[data-name]', 'name'))
            .then(pushData('[data-personality]', 'personality'))
            .then(pushData('[data-translate]', 'translate'))
            .then(pushData('[data-h-about]', 'h-about', 1))
            .then(pushData('[data-about]', 'about', 1))
            .then(pushData('[data-coop]', 'coop'))
            .then(pushData('[data-ex-spec]', 'ex-spec'))
            .then(pushData('[data-edu]', 'edu'))
            .then(pushData('[data-edu-time]', 'edu-time'))
            .then(pushData('[data-specaility]', 'specaility'))
            .then(pushData('[data-school]', 'school'))
            .then(pushData('[data-experience]', 'experience'))
            .then(pushData('[data-ex-time]', 'ex-time'))
            .then(pushData('[data-ex-co-time]', 'ex-co-time'))
            .then(pushData('[data-j-detail]', 'j-detail', 1))
            .then(pushData('[data-h-attr]', 'h-attr'))
            .then(pushData('[data-ele-attr]', 'ele-attr'))
            .then(pushData('[data-h-skill]', 'h-skill'))
            .then(pushData('[data-skill]', 'skill'))
            .then(pushData('[data-acc]', 'acc'))
            .then(pushData('[data-achie]', 'achie'))
            .then(pushData('[data-t-achie]', 't-achie'))
            .then(pushData('[data-achie-des]', 'achie-des'))
            .then(() => {
                setTimeout(function () {
                    pushData('[data-contract]', 'contract');
                    pushData('[data-social]', 'social');
                    if ($("[data-lang]").data("lang") == 1) {
                        $("[data-lang]").data("lang", "2");
                        $("[data-contract]").text("LIÊN HỆ");
                        $("[data-contract]").data("contract", "CONTRACT");
                        $("[data-social]").text("Vui lòng đợi...");
                        $("[data-social]").data("social", "Please wait...");

                    } else {
                        $("[data-lang]").data("lang", "1");
                        $("[data-contract]").text("CONTRACT");
                        $("[data-contract]").data("contract", "LIÊN HỆ");
                        $("[data-social]").text("Please wait...");
                        $("[data-social]").data("social", "Vui lòng đợi...");
                    }
                    $("button#translate").on("click", addTranlate);
                    $("button#translate").animate({ opacity: "1" }, 200);
                }, 2000);
            })
        //.catch(err => { console.error('update', err); })

        // $(".card-header").hover(function () {
        //     $(".card-header>span").stop().animate({ "background-color": "red" }, 500)
        // }, function () 
        //     $(".card-header>span").stop().animate({ "background-color": "blue" }, 500)
        // }
        // );

        var randColor = randomIntFromInterval(1, 9);
        while (randColor == $("[data-color]").data("color")) {
            randColor = randomIntFromInterval(1, 9);
        }
        $("[data-color]").data("color", randColor);
        switch (randColor) {
            case 1: changeColorPage("#7AE1F0", "#A6251B", "#FFC954");

                break;
            case 2: changeColorPage("#FFA726", "#4d2982", "#e66565");

                break;
            case 3: changeColorPage("#4ba697", "#00322a", "#49b32d");

                break;
            case 4: changeColorPage("#C7C7C7", "#212121", "#6B6B6B");

                break;
            case 5: changeColorPage("#FFEB3B", "#67196C", "#6064B1");

                break;
            case 6: changeColorPage("#A1E232", "#0b5761", "#FA968F");

                break;
            case 7: changeColorPage("#ffc413", "#0b5e9e", "#ffa27d");

                break;
            case 8: changeColorPage("#b7c7a8", "#1b3243", "#d0b8af");

                break;
            case 9: changeColorPage("#1ac673", "#e91e62", "#a9bb41");

                break;
            default:
                break;
        }
    }

    function addClickScreen() {
        // loadScreen(null, 1);
        loadScreen();
        //add click load screen
        //github
        $("button#translate").on("click", function () { addTranlate(); })
        $("#social>div:nth-child(1)").bind("click", function (e) {
            e.preventDefault();
            var data = { mode: "github" };
            selectedSocial("#social>div:nth-child(1)>div");
            loadScreen(data);
        })
        //fb
        $("#social>div:nth-child(2)").bind("click", function (e) {
            e.preventDefault();
            var data = { mode: "facebook" };
            selectedSocial("#social>div:nth-child(2)>div");
            loadScreen(data);
        })
        //gmail
        $("#social>div:nth-child(3)").bind("click", function (e) {
            e.preventDefault();
            var data = { mode: "gmail" };
            selectedSocial("#social>div:nth-child(3)>div");
            loadScreen(data);
        })
        //skype
        $("#social>div:nth-child(4)").bind("click", function (e) {
            e.preventDefault();
            var data = { mode: "skype" };
            selectedSocial("#social>div:nth-child(4)>div");
            loadScreen(data);
        })
        //phone
        $("#social>div:nth-child(5)").bind("click", function (e) {
            e.preventDefault();
            var data = { mode: "phone" };
            selectedSocial("#social>div:nth-child(5)>div");
            loadScreen(data);
        })
        //website
        $("#social>div:nth-child(6)").bind("click", function (e) {
            e.preventDefault();
            var data = { mode: "website" };
            selectedSocial("#social>div:nth-child(6)>div");
            loadScreen(data);
        })
    }
    addClickScreen();
    // get database
    function pushData(selector, data, jubTime = 20, delay = 0) {
        // save data
        setTimeout(function () {
            $(selector).each(function () {
                var temp = $(this).data(data);
                $(this).data(data, $(this).text());
                PushString(temp, this, 0, jubTime);
            })
        }, delay)
    }
    // hover attribute
    {
        $("#attributes>div:nth-child(2)").hover(
            function () {
                var newTop = $("div.skill-circle:nth-child(3)").css("height").split("px")[0] * 0.05;
                $("div.skill-circle:nth-child(2)").finish().animate({
                    left: "+=" + newTop
                    , opacity: 0.7
                });
                $("div.skill-circle:nth-child(1)").finish().animate({
                    top: "+=" + newTop,
                    left: "-=" + newTop
                    , opacity: 0.7
                });
                $("div.skill-circle:nth-child(3)").finish().animate({
                    top: "-=" + newTop,
                    left: "-=" + newTop
                    , opacity: 0.7
                });
            }, function () {
                var newTop = $("div.skill-circle:nth-child(3)").css("height").split("px")[0] * 0.05;
                $("div.skill-circle:nth-child(2)").finish().animate({
                    left: "-=" + newTop
                    , opacity: 0.5
                });
                $("div.skill-circle:nth-child(1)").finish().animate({
                    top: "-=" + newTop,
                    left: "+=" + newTop
                    , opacity: 0.5
                });
                $("div.skill-circle:nth-child(3)").finish().animate({
                    top: "+=" + newTop,
                    left: "+=" + newTop
                    , opacity: 0.5
                });
            }
        );
    }
    function selectedSocial(selector) {
        if ($("[data-lang]").data("lang") == 1) {
            $("[data-contract]").text("LIÊN HỆ");
            $("[data-contract]").data("contract", "CONTRACT");
            $("[data-social]").text("Vui lòng đợi...");
            $("[data-social]").data("social", "Please wait...");

        } else {
            $("[data-contract]").text("CONTRACT");
            $("[data-contract]").data("contract", "LIÊN HỆ");
            $("[data-social]").text("Please wait...");
            $("[data-social]").data("social", "Vui lòng đợi...");
        }
        $("#social>div>div").each(function () {
            $(this).css("background", "white");
        })
        var color = $("header>div:nth-child(1)").css("background-color");
        $(selector).css("background", color);
        setTimeout(function () { $(selector).stop().animate({ "background-color": "white" }, 500) }, 100)

    }
    function changeColorPage(ligColor, strColor, midColor) {
        transformPoint(strColor, ligColor);
        setTimeout(function () {
            $.ajax()
                .then($("header>div:nth-child(1)").animate({ "background-color": ligColor }, 500))
                .then($("header>div:nth-child(2)").animate({ "background-color": strColor }, 500))
                .then($("header>div:nth-child(2)>span").animate({ "background-color": strColor }, 500))
                .then($(".card-header").animate({ "background-color": ligColor }, 500))
                .then($(".card-header>span").animate({ "background-color": strColor }, 500))
                .then($("footer>div:nth-child(1)").animate({ "background-color": strColor }, 500))
                .then($("footer>div:nth-child(2)").animate({ "background-color": ligColor }, 500))
                .then($(".list-style").animate({ "background-color": ligColor }, 500))
                .then($(".list-style>span").animate({ "background-color": strColor }, 500))
                .then($("#translate").animate({ "background-color": strColor }, 500))
                .then($(".check").animate({ "background-color": strColor }, 500))
                .then($(".uncheck").animate({ "background-color": ligColor }, 500))
                .then($("div.skill-circle:nth-child(1)").animate({ "background-color": midColor }, 500))
                .then($("div.skill-circle:nth-child(2)").animate({ "background-color": strColor }, 500))
                .then($("div.skill-circle:nth-child(3)").animate({ "background-color": ligColor }, 500))
                .then($(".custom-box h6").animate({ "color": ligColor }, 500))
                .then($(".custom-box>div:nth-child(1)>b").animate({ "color": ligColor }, 500))
                .then($(".custom-box li").animate({ "color": strColor }, 500))
                .then($(".custom-box a").animate({ "color": strColor }, 500))
                .then($("#main").animate({ "background-color": ligColor }, 500))
                .then($("#skill td").animate({ "color": strColor }, 500))

            var subStr = "2px solid " + strColor;
            $("#social .col-2>div").css("border", subStr)
            subStr = '0px - 1px ' + strColor;
            $(".custom-box h6").css('text-shadow', subStr)

            // for (i = 1; i < 9; i++) {
            //     $(".Animation" + i).css("background-color", strColor)
            // }
        }, 1500)
    }
    //effect header
    function effectHeaderCard() {
        $(".card").hover(function () {
            $(this).find("H5").attr("class", "rubberBand");
            //$(this).attr("class", "rubberBand");
        }, function () {
            $(this).find("H5").attr("class", "");
        })
    }
    // effect on skill-card hover skill-point
    function transformPoint(strColor, ligColor) {
        $(".tb-circle").hover(function () {
            var child = $(this).parent().index() + 1;
            var par = $(this).parent().parent().index() + 1;
            for (i = 2; i < child + 1; i++) {
                $("tr:nth-child(" + par + ")>td:nth-child(" + i + ")>div").css("transform", "scale(1.2)");
                $("tr:nth-child(" + par + ")>td:nth-child(" + i + ")>div").css("box-shadow", "inset 0 0 5px rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.1) 0 1px 0");
                $("tr:nth-child(" + par + ")>td:nth-child(" + i + ")>div").css("border", "1px solid rgba(0, 0, 0, 0.25)")
                $("tr:nth-child(" + par + ")>td:nth-child(" + i + ")>div").css("text-shadow", "rgba(0, 0, 0, 0.796875) 0 - 1px 0, rgba(255, 255, 255, 0.296875) 0 0 10px");
                $("tr:nth-child(" + par + ")>td:nth-child(" + i + ")>div").css("background-color", strColor);
            }
            for (j = child + 1; j < 13; j++) {
                $("tr:nth-child(" + par + ")>td:nth-child(" + j + ")>div").css("background-color", ligColor);
            }
        }, function () {
            var par = $(this).parent().parent().index() + 1;
            for (i = 2; i < 13; i++) {
                $("tr:nth-child(" + par + ")>td:nth-child(" + i + ")>div").css("transform", "scale(1)");
                $("tr:nth-child(" + par + ")>td:nth-child(" + i + ")>div").css("box-shadow", "inset 0 0 0px rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.1) 0 0px 0");
                $("tr:nth-child(" + par + ")>td:nth-child(" + i + ")>div").css("border", "0px solid rgba(0, 0, 0, 0.25)")
                $("tr:nth-child(" + par + ")>td:nth-child(" + i + ")>div").css("text-shadow", "rgba(0, 0, 0, 0.796875) 0 0px 0, rgba(255, 255, 255, 0.296875) 0 0 0px");
            }
            $(".check").css("background-color", strColor);
            $(".uncheck").css("background-color", ligColor);

        })
    }
    // effect on achievement
    function rotateSquare() {
        $("#achievement p").hover(function () {
            var par = $(this).parent().parent().index() + 1;// 0 1
            var chirl = $(this).parent().index() + 1;// 2 3 4
            $("#achievement ul:nth-child(" + par + ")>li:nth-child(" + chirl + ") span").attr("class", "rotateSquare");
        }, function () {
            var par = $(this).parent().parent().index() + 1;// 0 1
            var chirl = $(this).parent().index() + 1;// 2 3 4

            $("#achievement ul:nth-child(" + par + ")>li:nth-child(" + chirl + ") span").attr("class", "");

        })
    }
    // cursor effect
    $(function () {
        var timer;
        var fadeInBuffer = false;
        $(document).mousemove(function () {
            if (!fadeInBuffer) {
                if (timer) {
                    console.log("clearTimer");
                    clearTimeout(timer);
                    timer = 0;
                }

                console.log("fadeIn");
                $('html').css({
                    cursor: ''
                });
            } else {
                fadeInBuffer = false;
            }


            timer = setTimeout(function () {
                console.log("fadeout");
                $('html').css({
                    cursor: 'none'
                });
                fadeInBuffer = true;
            }, 1000)
        });
    });
    // --- main load page --- H01P10
    function loadScreen(data = null) {
        var page = "modules/cv/loadScreen.php", id = "#main";
        randCur = randomIntFromInterval(1, 12);
        randLoad = randomIntFromInterval(1, 12);
        //console.log(" random " + randCur);
        // $("#screen div").finish();

        addLoading(randLoad);
        animation(randCur);
        $("#disable").css("display", "none");
        // disable button social -- multi click
        $("#disable").css("display", "block");
        setTimeout(function () {
            $("#disable").css("display", "none");
        }, 2000);
        setTimeout(function () {
            $.ajax({
                url: page,
                type: 'POST'
                , data: data
            }).done(function (html) {
                $(id).html(html);
                transformPoint("#4d2982", "#FFA726");
                rotateSquare();
                effectHeaderCard();
            });
        }, 1000);
    }
});