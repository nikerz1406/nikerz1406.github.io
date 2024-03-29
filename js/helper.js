class Helper{
    createChild(selector,n){
        for (var i = 0; i < n; i++) {
            selector.append($("<div>"));
        }
        return selector.find("div");
    }
    randomInt(min, max) // min and max included
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    randomID(){
        return Math.floor(Math.random() * 256);
    }

    
}
Helper.prototype.is_support = function(){

    const isMobile = window.navigator.userAgentData.mobile;

    // not support mobile
    return isMobile == true ? false : true;
}
Helper.prototype.send = function (url,option = {}) {

    var data = option.data ? option.data : [];
    var method = option.method ? option.method : "GET";

    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: method,
            data: data,
            beforeSend: function () {
     
            },
            complete: function () {
  
            },
            success: function (res) {

                if(res == null){
                    reject({});
                }

                if(option.html){
                    resolve(res);
                }

                try {
                    res = JSON.parse(res);
                    resolve(res.data);
                } catch (error) {
                    resolve("");
                }

            },
            timeout: 20000,
            error: function (jqXHR, textStatus, errorThrown) {  
                console.log(textStatus);
                reject({});
            },
        });
    })
}