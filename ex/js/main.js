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

/* ---------------------------------------------------- */

const slidePrevList = document.getElementsByClassName('slide-prev');//모든 prev버튼 선택해서 배열 형태로 저장
function transformPrev(event){//even에 어느 객체에서 어떤 이벤트를 받았는지 저장
    const slidePrev = event.target;//왼쪽 화살표 아이콘
    const slideNext = slidePrev.nextElementSibling;//오른쪽 화살표 아이콘

    const classList = slidePrev.parentElement.parentElement.nextElementSibling;//ul태그 선택
    let activeLi = classList.getAttribute('data-position');
    const liList = classList.getElementsByTagName('li');

    if(classList.clientWidth < (liList.length *260 + Number(activeLi))){//ul 전체 길이가 카드 값 보다 작으면(슬라이드가 넘쳐 있다면)
        activeLi = Number(activeLi)- 260;//li요소를 왼쪽으로 260만큼 이동
        slideNext.style.color = '#2f3059';//오른쪽 버튼 활성화
        slideNext.classList.add('slide-next-hover');
    }
    if(classList.clientWidth > (liList.length *260 + Number(activeLi))){//ul 전체 길이가 카드 값 보다 크면(슬라이드가 끝까지 넘어 갔다면)
        slidePrev.style.color = '#cfd8dc';//왼쪽 버튼 비활성화
        slidePrev.classList.remove('slide-prev-hover');
    }
    classList.style.transition = 'transform 1s';
    classList.style.transform = 'translateX(' + String(activeLi) + 'px)';
    classList.setAttribute('data-position', activeLi)
}

for (let i =0; i< slidePrevList.length;i++){//슬라이드 왼쪽 화살표 버튼 아이콘 모두 선택
    //ul 태그 선택
    let classList = slidePrevList[i].parentElement.parentElement.nextElementSibling;//해당 요소가 가르킬 ul태그 찾기
    let lilist = classList.getElementsByTagName('li');//가르킨 ul태그의 li 요소들 저장
    //카드가 ul 태그 너비보다 넘치면, 왼쪽(prev) 버튼은 활성화하고, 오른쪽(next)응 현재 맨 첫카드 위치이므로 비활성화
    if(classList.clientWidth < (lilist.length *260)){//실제 ul태그의 너비 받아오기
        slidePrevList[i].classList.add('slide-prev-hover');
        slidePrevList[i].addEventListener('click',transformPrev);
    }else{//카드가 넘치지 않으면 버튼 비활성화
        const arrowContainer = slidePrevList[i].parentElement;
        arrowContainer.removeChild(slidePrevList[i].nextElementSibling);
        arrowContainer.removeChild(slidePrevList[i]);
    }
}