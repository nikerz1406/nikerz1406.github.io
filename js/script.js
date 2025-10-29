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
        completed: ()=> setDisplayNav("visible") // pass function instead of calling it now
    }));

})