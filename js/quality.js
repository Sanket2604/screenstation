function slide1(){
    document.querySelector('.content').classList.add('slide1');
    document.querySelector('.pictures').classList.add('slide1');
    document.querySelector('.content').classList.remove('slide2');
    document.querySelector('.pictures').classList.remove('slide2');
}

function slide2(){
    document.querySelector('.content').classList.add('slide2');
    document.querySelector('.pictures').classList.add('slide2');
    document.querySelector('.content').classList.remove('slide1');
    document.querySelector('.pictures').classList.remove('slide1');
}

function restore(){
    document.querySelector('.content').classList.add('slide1');
    document.querySelector('.pictures').classList.add('slide1');
    document.querySelector('.content').classList.remove('slide2');
    document.querySelector('.pictures').classList.remove('slide2');
}

