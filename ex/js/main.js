const backToTop = document.getElementById('backtotop');

const checkScroll = () => {

    let pageYOffset = window.pageYOffset;//페이지 스크롤양을 확인하는 함수

    if(pageYOffset !== 0){//페이지가 최상단이 아닐 때
        backToTop.classList.add('show');
    }else{
        backToTop.classList.remove('show');
    }
}

const moveBackToTop = () => {
    window.scrollTo({//해당 위치로 스크롤 해주는 함수
        top :0,
        behavior : 'smooth'//천천히 스크롤 해주는 프로퍼티
    });
}

window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click', moveBackToTop);