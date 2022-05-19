  /**
     * effectLoad load page
     * @param {string} page 
     * @param {string} id 
     * @param {json} data 
     */

function loadDoc(page = "modules/cv/temp1.php", id = "center", data = null) {
    setTimeout(async function () {
        // let html = await $.ajax({
        //     url: page,
        //     type: 'POST'
        // })

        // await $("#" + id).html(html);

        $("#" + id).load("modules/cv/temp1.html", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
              $("#"+id).html(responseTxt);
            if(statusTxt == "error"){
                console.log("error")
            }
          });


    }, 1000);
}
// load ajax home page
$(document).ready(async function () {
    $("inCenter").html("")
    $("body").scrollTop();
    // wellcome
    setTimeout(function () { $("#wellcome").remove(); }, 1000);

    // load ID header
    //loadDoc("modules/header.php", "inHeader");

    //load  ID footer
    //loadDoc("modules/footer.php", "inFooter");

    //load  ID center
    loadDoc("modules/cv/temp1.php", "inCenter");

    new loadPage("#loading");

});