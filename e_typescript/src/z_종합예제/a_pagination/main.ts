// main.ts

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// 전체 사용자 데이터 관리 (배열)
type Users = User[];

//! 비동기적으로 사용자 데이터를 가져오는 함수
//@ Params
// - page: 현재 출력되는 페이지
// - limit: 한 페이지 당 출력되는 사용자 데이터의 개수 (기본값 3)

// https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}

const fetchUsers = async (page:number, limit: number = 3) => {
  try {
    //? JSONPlaceholder 옵션값
    // _page: 대량의 데이터 호출 시 특정 페이지의 정보만 가져옴
    // _limit: 데이터 조회 시 한 번에 가져올 항목의 최대 수 지정
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`);

    // _page 값부터 _page * _limit 값까지의 데이터 반환
    // page1: 1, 2, 3
    // page2: 4, 5, 6 ...

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const users: User[] = await response.json();

    return users;
  } catch (e) {
    console.error('Fetch error: ', e);
    return [];
  }
}

//! 각 데이터가 나열될 카드를 동적으로 생성하는 함수
const createUserCard = (user: User): HTMLElement => {
  const userCard = document.createElement('div');
  userCard.className = 'user-card';

  userCard.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Username: </strong>${user.username}</p>
    <p><strong>Email: </strong>${user.email}</p>
  `;

  return userCard;
}

//! 생성된 카드를 화면에 출력하는 함수
const displayUsers = (users: Users) => {
  const userList = document.getElementById('user-list');

  if (userList) {
    userList.innerHTML = '';

    users.forEach(user => {
      const userCard = createUserCard(user);
      userList.appendChild(userCard);
    });
  }
}

//! 현재 페이지 수를 기본값 1로 설정
let currentPage = 1;
const limit = 3;
let isLastPage = false;

//! 현재 페이지 정보를 수정하는 함수
const updatePageInfo = () => {
  const pageInfo = document.getElementById('page-info');

  if (pageInfo) {
    pageInfo.textContent = `Page ${currentPage}`;
  }
}

//! 비동기적으로 데이터를 가져와 각 페이지별 카드 생성 + 출력하는 함수
const loadPage = async (page: number) => {
  const users = await fetchUsers(page);

  if (users.length === 0 && page > 1) {
    // 빈 페이지 일 경우 이전 페이지로 복귀
    currentPage--;
    return loadPage(currentPage);
  }

  displayUsers(users);

  updatePageInfo();

  // 다음 페이지 존재 여부는 현재 응답 개수로 판ㄴ단 
  isLastPage = users.length < limit;
  updateButtons();
}

const updateButtons = () => {
  const prevPageButton = document.getElementById('prev-page') as HTMLButtonElement;
  const nextPageButton = document.getElementById('next-page') as HTMLButtonElement;

  if (!prevPageButton || !nextPageButton) return;

  prevPageButton.disabled = currentPage === 1;
  nextPageButton.disabled = isLastPage;
}

//! addEventListeners 함수: 버튼 이벤트 리스너 추가
const addEventListeners = () => {
  const prevPageButton = document.getElementById('prev-page');
  const nextPageButton = document.getElementById('next-page');

  if (prevPageButton && nextPageButton) {
    prevPageButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        loadPage(currentPage);
      }
    });

    nextPageButton.addEventListener('click', () => {
      if (!isLastPage) {
        currentPage++;
        loadPage(currentPage);
      }
    });
  }
}

const init = () => {
  addEventListeners();
  loadPage(currentPage);
}

document.addEventListener('DOMContentLoaded', init);