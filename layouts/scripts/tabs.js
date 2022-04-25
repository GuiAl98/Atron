function tab(evt, apartado){
    var i;
    var tabContent = document.getElementsByClassName('tabs-qtn');
    var tabLink = document.getElementsByClassName('apt');


    for(i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = 'none';
    }

    for(i = 0; i< tabLink.length; i++){
        tabLink[i].className = tabLink[1].className.replace('active', '');
    }

    document.getElementById(apartado).style.display = 'block';
    evt.currentTarget.className += ' active';

}