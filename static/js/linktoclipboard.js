
function copyToClipboard(str) {
    var el = document.createElement('textarea');
    el.value = "klimes.oliver@gmail.com";

    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };

    document.body.appendChild(el);

    el.select();

    document.execCommand('copy');
    document.body.removeChild(el);
}


function init(){
    var x = document.getElementById("alertpop");
       if (x.style.display === "none") {
            x.style.display = "block"; 
            setTimeout(() => {
                x.style.display = "none";     
            }, 2000);  
       } 
       else {
        x.style.display = "none";     

           
       }
   }

document.addEventListener("DOMContentLoaded", copyToClipboard());




