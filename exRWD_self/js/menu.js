// 문서 객체
const nav = document.querySelector('.appNavigation');
const btn = nav.querySelector('.buttonBurger');
const list = nav.querySelector('.menu__list');
const items = list.querySelectorAll('.menu__item');
const links = list.querySelectorAll('.menu__link');
// 상태 변수
let mode = null;
let isPristine = true;

function handleOnlyBindMobileLinks(e){
	e.preventDefault();

	let _this = e.target;
	let _parent = _this.parentNode;

	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		item.classList.remove('menuAct');
		item.classList.remove('icon-minus');
		item.classList.add('icon-plus');
	}

	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		link.setAttribute('aria-pressed', 'false');
		link.setAttribute('aria-expanded', 'false');
	}

	_this.parentNode.classList.add('menuAct');
	_this.setAttribute('aria-pressed', 'true');
	_this.setAttribute('aria-expanded', 'true');

	if (_parent.classList.contains('menuAct')) {
		_parent.classList.remove('icon-plus');
		_parent.classList.add('icon-minus');
	}
}

// 렌더 함수
function render(){
	// 모바일 디바이스 감지 (조건)
	let isMobile = window.innerWidth <= 999;
	// 리사이즈 이벤트가 여러 번 발생해도 모드가 변경되지 않으면 함수 실행 중지
	if (mode === isMobile) {
		return;
	}
	// 모드가 변경되면, 모드의 상태 업데이트
	mode = isMobile;

	if (isMobile) {
		// 모바일 환경의 경우....
		btn.setAttribute('aria-haspopup', 'true');
		list.style.transition = 'all 0.2s';
		for (let i = 0; i < items.length; i++) {
			let item = items[i];
			item.classList.remove('icon-star');
			item.classList.add('icon-plus');
		}
		for (let i = 0; i < links.length; i++) {
			let link = links[i];
			link.setAttribute('role', 'button');
			link.setAttribute('aria-haspopup', 'true');
			link.setAttribute('aria-pressed', 'false');
			link.setAttribute('aria-expanded', 'false');
		}
		if (isPristine) {
			// 버튼(btn)을 클릭하면 내비게이션(nav) 요소를 찾아서
			// isAct라는 클래스를 추가하거나 제거 할 것(toggle)
			btn.addEventListener('click', function(e){
				if (nav.classList.contains('isAct')) {
					btn.setAttribute('aria-label', '메뉴 열기');
					btn.setAttribute('aria-pressed', 'false');
				}
				else {
					btn.setAttribute('aria-label', '메뉴 닫기');
					btn.setAttribute('aria-pressed', 'true');
				}
				nav.classList.toggle('isAct');
			});
			// 메뉴 버튼(.menu-item)을 클릭하면
			// 클릭한 버튼의 부모 요소의 형제 요소들을 찾아 menu-act라는 클래스를 삭제한다.
			// 클릭한 버튼의 부모 요소인 .menu-list에 menu-act라는 클래스를 추가한다.
			for (let i = 0; i < links.length; i++) {
				let link = links[i];
				link.addEventListener('click', handleOnlyBindMobileLinks);
			}
			// 초기 실행 후, 오염 상태로 변경
			isPristine = !isPristine;
		}
	}
	else {
		//데스크탑 환경의 경우
		list.style.transition = null;
		for (let i = 0; i < items.length; i++) {
			let item = items[i];
			item.classList.remove('icon-plus');
			item.classList.remove('icon-minus');
			item.classList.add('icon-star');
		}
		for (let i = 0; i < links.length; i++) {
			let link = links[i];
			link.removeEventListener('click', handleOnlyBindMobileLinks);
			link.setAttribute('role', 'presentation');
		}
	}
}

// 이벤트 연결 [로드, 리사이즈]
window.addEventListener('load', render);
window.addEventListener('resize', render);
