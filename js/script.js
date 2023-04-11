$(document).ready(function(){
    
    (new CurtainFactory({
        url:'fragments/temp1.html',
        content:"#content",
        id:"#loading",
        time:2000
    })).render()

    // var sniper = new Spinner();

    // $("#loading").html(sniper);

})