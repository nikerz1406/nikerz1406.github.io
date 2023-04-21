$(document).ready(function(){
    
    function setDisplayNav(mode = 'hidden'){
        // $('nav').css({
        //     "visibility":mode
        // })
    }

    (new CurtainFactory({
        url:'fragments/temp2.html',
        content:"#content",
        id:"#loading",
        time:3000,
        completed:setDisplayNav("visible")
    }));

    // $("body").on("click","[data-nav]",function(){
    //     var page = $(this).data("nav");

    //     $("nav .tag").removeClass("active");
    //     $(this).addClass("active");

    //     (new CurtainFactory({
    //         url:`fragments/temp${page}.html`,
    //         content:"#content",
    //         id:"#loading",
    //         time:3000
    //     }));
    // })
})