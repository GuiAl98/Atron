function up(){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var upButton = document.getElementById('upButton');

        if(scroll > 800){
            upButton.style.right = 53 + 'px';
        }else{
            upButton.style.right =  -100 + 'px';
        }
    });
}

up();