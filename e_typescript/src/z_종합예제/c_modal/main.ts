// main.ts

// https://jsonplaceholder.typicode.com/users

//! 사용자 정보 정의 - 인터페이스
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

//! 전체 사용자 관리 배열
type UsersType = User[];

//@ 1. 사용자 정보를 외부 API에서 가져오는 비동기 함수
const fetchUsers = async(): Promise<UsersType> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const users: UsersType = await response.json();
    return users;
    //? Promise.resolve(value)
    // : async 함수는 내부에서 어떤 값을 반환(return)하든
    //    , 자동으로 Promise.resolve(데이터)로 감싸서 반환
    // > Promise 반환 성공(resolve), 실패(reject)

  } catch(e) {
    console.error('Fetch error: ', e);
    return [];
  }
}

//@ 2. 사용자 정보를 받아 HTML 요소를 생성하는 함수
const createUserCard = (user: User): HTMLElement => {
  const userCard = document.createElement('div');

  userCard.className = 'user-card';

  // data-userId="user.id값"; 속성 전달
  userCard.dataset.userId = user.id.toString();

  userCard.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Username: </strong>${user.username}</p>
    <p><strong>Email: </strong>${user.email}</p>
  `;

  return userCard;
}

//@ 3. 사용자 정보 배열을 받아 화면에 표시하는 함수
// : createUserCard에 각 객체 전달
const displayUsers = (users: UsersType) => {
  const userList = document.getElementById('user-list');

  if (userList) {
    userList.innerHTML = '';

    users.forEach(user => {
      const userCard = createUserCard(user);
      userList.appendChild(userCard);
    })
  }
}

//@ 4. 사용자 정보를 받아 모달 창에 표시하는 함수
const showModal = (user: User) => {
  const modal = document.getElementById('user-modal');
  const modalContent = document.getElementById('modal-user-details');

  if (modal && modalContent) {
    modalContent.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Username: </strong>${user.username}</p>
      <p><strong>Email: </strong>${user.email}</p>
      <p><strong>Phone: </strong>${user.phone}</p>
      <p><strong>Website: </strong>${user.website}</p>
    `;

    modal.style.display = 'block'; // 모달 창 표시
  }
}

//@ 5. 사용자 리스트에 이벤트 리스너 추가
const addEventListeners = (users: UsersType) => {
  const userList = document.getElementById('user-list');

  if (userList) {
    userList.addEventListener('click', (e) => {
      //? cf) target VS currentTarget
      // - target: 이벤트가 처음 발생한 DOM 요소 (클릭이 일어난)
      // - currentTarget: 발생한 이벤트가 등록된 DOM 요소 (이벤트가 바인딩 된)
      const target = e.target as HTMLElement;
      // >> 클릭이 발생한 요소는 card 내부의 h2, p가 될 가능성이 존재

      const userCard = target.closest('.user-card') as HTMLElement | null;
      // : 이벤트가 발생한 요소와 가장 가까운 .user-card 요소를 반환

      if (userCard) {
        // dataset: userCard가 가진 data-* 속성들에 접근할 수 있는 DOM 속성
        // EX) <div data-role="admin" data-userId="1"></div>

        // parseInt(숫자로 변환 할 데이터, 변환진수)
        const userId = parseInt(userCard.dataset.userId || '0', 10);

        const user = users.find(user => user.id === userId);

        if (user) {
          showModal(user);
        }
      }

    });
  }

  const modal = document.getElementById('user-modal') as HTMLElement;
  const closeModal = document.querySelector('.close') as HTMLElement;

  if (modal && closeModal) {
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // 브라우저 전체를 DOM 요소로 반환 (브라우저 탭의 전체 영역)
    // : window

    // cf) document: window에 로드되는 HTML 문서 그 자체
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
}

const init = async() => {
  const users = await fetchUsers();
  displayUsers(users);
  addEventListeners(users);
}

document.addEventListener('DOMContentLoaded', init);