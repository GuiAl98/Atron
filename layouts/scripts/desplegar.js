function desplegar (evt, qtn, btn){
    
    var answer = document.getElementById(qtn);
    var btn = document.getElementById(btn);

    if(answer.style.display === "block"){
        answer.style.display = 'none';
        btn.removeAttribute('src');
        btn.setAttribute('src', 'img/desplega.png');
    }else{
        answer.style.display = 'block';
        btn.removeAttribute('src');
        btn.setAttribute('src', 'img/replega.png');
    }

    evt.currentTarget.classList.toggle('replegar');
}