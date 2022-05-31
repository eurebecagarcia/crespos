let menu = document.querySelector('.menu');

function openMenu(){
    if(menu.style.display == 'flex'){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        menu.style.transform = 'translateY(-20px)';
    }
}
