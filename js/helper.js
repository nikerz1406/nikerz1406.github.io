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

    var data = option.data ? option.data : null;
    var method = option.method ? option.method.toUpperCase() : "GET";
    var fetchOptions = { method };

    if(method !== "GET" && data){
        fetchOptions.body = (data instanceof FormData) ? data : JSON.stringify(data);
        if(!(data instanceof FormData)) {
            fetchOptions.headers = Object.assign({}, fetchOptions.headers, { 'Content-Type': 'application/json' });
        }
    }

    return new Promise((resolve, reject) => {
        fetch(url, fetchOptions)
        .then(async (res) => {
            if(!res.ok) throw new Error('Network response was not ok');
            if(option.html) {
                return res.text();
            }
            let text = await res.text();
            try {
                const parsed = JSON.parse(text);
                resolve(parsed.data !== undefined ? parsed.data : parsed);
            } catch (e) {
                resolve(text);
            }
        })
        .then((val) => {
            if(option.html) resolve(val);
        })
        .catch((err) => {
            console.error('Fetch error:', err);
            reject({});
        });
    })
}