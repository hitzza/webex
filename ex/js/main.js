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
function transformNext(event){//event에 어느 객체에서 어떤 이벤트를 받았는지 저장
    const slideNext = event.target;
    const slidePrev = slideNext.previousElementSibling;

    const classList = slideNext.parentElement.parentElement.nextElementSibling;
    let activeLi = classList.getAttribute('data-position');

    if(Number(activeLi) < 0){//카드가 하나라도 움직였다면
        activeLi = Number(activeLi) + 260 ;
        
        slidePrev.style.color = '#2f3059';//왼쪽 버튼 활성화
        slidePrev.classList.add('slide-prev-hover');
        slidePrev.addEventListener('click',transformPrev);
        

        if(Number(activeLi) === 0){
            slideNext.style.color = '#cfd8dc';//오른쪽 버튼 비활성화
            slideNext.classList.remove('slide-next-hover');
            slideNext.removeEventListener('click',transformNext);//버튼 이벤트 비활성화
            
        }
    }

    classList.style.transition = 'transform 1s';
    classList.style.transform = 'translateX(' + String(activeLi) + 'px)';
    classList.setAttribute('data-position', activeLi);
}
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
        slideNext.addEventListener('click',transformNext);//버튼 이벤트 활성화
    }
    if(classList.clientWidth > (liList.length *260 + Number(activeLi))){//ul 전체 길이가 카드 값 보다 크면(슬라이드가 끝까지 넘어 갔다면)
        slidePrev.style.color = '#cfd8dc';//왼쪽 버튼 비활성화
        slidePrev.classList.remove('slide-prev-hover');
        slidePrev.removeEventListener('click',transformPrev);//버튼 이벤트 비활성화
    }
    classList.style.transition = 'transform 1s';
    classList.style.transform = 'translateX(' + String(activeLi) + 'px)';
    classList.setAttribute('data-position', activeLi);
}

const slidePrevList = document.getElementsByClassName('slide-prev');//모든 prev버튼 선택해서 배열 형태로 저장

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

/*--------------------------------------------------------------------------------*/

let touchStartX;//드래그가 시작된 마우스 위치 저장
let currentClassList;//드래그가 시작된 마우스 위치와 관련된 클래스 리스트 저장
let currentImg;//드래그가 시작된 마우스 위치와 관련된 이미지
let currentActiveLi;//드래그를 시작할 때에 카드의 위치
let nowActiveLi;//드래그 하면서 변경될 카드의 위치
let mouseStart;//드래그가 시작된 상황인지 구분하는 boolean값 변수

function processTouchStart(event){//터치가 시작될 경우 호출할 함수
    mouseStart = true;
    event.preventDefault();//해당 요소 고유의 동작을 중단시키는 함수(이미지만 드래그로 이동하는 고유 동작 중단)
    touchStartX = event.clientX || event.touches[0].screenX;//이벤트가 시작되었을 때 좌표
    currentImg = event.target;

    //드래그 처리를 위해, 드래그 중(mouseup), 드래그가 끝났을 때(mouseup)이벤트를 걸어줌
    currentImg.addEventListener('mousemove', processTouchMove);
    currentImg.addEventListener('mouseup', processTouchEnd);//드래그가 끝날을 때를 제대로 찾기 위해 한번 더 이벤트를 걸어줌

    currentImg.addEventListener('touchmove', processTouchMove);
    currentImg.addEventListener('touchend', processTouchEnd);

    currentClassList = currentImg.parentElement.parentElement;
    currentActiveLi = currentClassList.getAttribute('data-position');
}   

function processTouchEnd(event){
    event.preventDefault();

    if(mouseStart === true){//원래 동작시키려던 카드 내에서 일어난 이벤트인지 확인
        currentImg.removeEventListener('mousemove', processTouchMove);
        currentImg.removeEventListener('mouseup', processTouchEnd);

        currentImg.removeEventListener('touchmove', processTouchMove);
        currentImg.removeEventListener('touchend', processTouchEnd);
        
        //맨 처음 카드가 맨 앞에 배치되도록 초기 상태로 이동
        currentClassList.style.transition = 'transform 1s ease';
        currentClassList.style.transform = 'translateX(0px)';
        currentClassList.setAttribute('data-position', 0);

        //버튼도 초기상태로 변경
        let eachSlidePrev = currentClassList.previousElementSibling.children[1].children[0];
        let eachSlideNext = currentClassList.previousElementSibling.children[1].children[1];

        eachSlidePrev.style.color = '#2f3059';
        eachSlidePrev.classList.add('slide-prev-hover');
        eachSlidePrev.addEventListener('click', transformNext);

        eachSlideNext.style.color = '#cfd8dc';
        eachSlideNext.classList.remove('slide-next-hover');
        eachSlideNext.removeEventListener('click', transformNext);
        mouseStart = false;
    }
}

function processTouchMove(event){
    event.preventDefault();

    let currentX = event.clientX || event.touches[0].screenX;//카드가 이동한 시점의 현재 위치

    //이동할 위치 : 원래 위치 + 이동한 거리 - 처음 좌표값
    nowActiveLi = Number(currentActiveLi) + Number(currentX) - Number(touchStartX);
    //바로 마우스 위치에 따라, 카드를 이동함
    currentClassList.style.transition = 'transform 0s linear';
    currentClassList.style.transform = 'translateX(' + String(nowActiveLi) + 'px)';

}
 
//특정 요소를 드래그하다가, 요소 밖에서 드래그를 끝낼 수 있으므로, window에 이벤트를 걸어줌
window.addEventListener('dragend', processTouchEnd);
window.addEventListener('mouseup', processTouchEnd);

//인터페이스간의 오작동을 막기 위해, 카드 내의 이미지에만 드래그 인터페이스를 제공하기로 함.
const classImgLists = document.querySelectorAll('ul li img');

for(let i = 0; i < classImgLists.length; i++){
    //해당 요소에 마우스를 누르면, 드래그를 시작할 수 있으므로, 이벤트를 걸어줌
    classImgLists[i].addEventListener('mousedown', processTouchStart);
    
}