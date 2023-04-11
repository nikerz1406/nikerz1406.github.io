$(document).ready(function(){
    
    (new CurtainFactory({
        url:'fragments/temp1.html',
        content:"#content",
        id:"#loading",
        time:4000
    })).render()

})