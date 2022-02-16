function switchVisible(){
    if (document.getElementById('nav')) {

        if (document.getElementById('nav').style.display == 'none') {
            document.getElementById('nav').style.display = 'flex';
            window.setTimeout(function(){
                document.getElementById('nav').style.transform = 'scale(1)';
                document.getElementById('nav').style.opacity = 1
            }, 100)
           
        }
        else{
            document.getElementById('nav').style.transform = 'scale(0)';
            document.getElementById('nav').style.opacity = 0
            window.setTimeout(function(){
                document.getElementById('nav').style.display = 'none';
            }, 100)
        }
    }
}