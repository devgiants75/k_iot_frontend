// main.ts

// https://jsonplaceholder.typicode.com/users

//! == 비동기를 사용한 사용자 정보 조회 & 검색, 필터링 기능 ==

//@ 1. User 인터페이스 정의(사용자 정보 지정)
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

//@ 2. Users 타입 별칭 정의(사용자 정보를 저장하는 배열 타입)
type UsersType = User[];

//@ 3. 사용자 정보를 외부 API에서 가져오는 비동기 함수
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

//@ 4. 사용자 정보를 받아 HTML 요소를 생성하는 함수
const createUserCard = (user: User): HTMLElement => {
  const userCard = document.createElement('div');

  userCard.innerHTML = `
    <h2>${user.name}</h2>
    <p>Username: ${user.username}</p>
    <p>Email: ${user.email}</p>
  `;

  return userCard;
}

//@ 5. 사용자 정보 배열을 받아 화면에 표시하는 함수
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

//@ 6. 사용자 정보 필터링하는 함수
// : 사용자로부터 입력받은 검색어 사용
// - 사용자의 name, username, email 중 하나라도 포함된 경우 출력
const filterUsers = (users: UsersType, query: string): UsersType => {
  return users.filter(user => 
    user.name.toLowerCase().includes(query.toLowerCase())
    || user.username.toLowerCase().includes(query.toLowerCase())
    || user.email.toLowerCase().includes(query.toLowerCase())
  );
}

//@ 7. 사용자 정보 정려하는 함수
// : Name 또는 Email 기준으로 정렬 (오름차순)
const sortUsers = (users: UsersType, key: 'name' | 'email'): UsersType => {
  // map, filter: 배열 메서드, 새로운 배열 반환
  // cf) sort: 배열 요소 정렬 (+ 콜백 함수, 새로운 배열 반환 X)

  //? 배열.sort()
  // : 콜백함수를 받는 배열 요소 정렬 메서드
  // - 콜백함수의 인자는 비교할 데이터 2가지를 입력

  // cf) a와 b는 데이터 객체 (User 인터페이스 타입)
  // a[name].localeCompare(b[name])

  //? 문자열.localeCompare(문자열)
  // : 비교 함수
  // - 문자열을 비교하는 메서드 (알파벳 순 정렬에 유용)
  // - 반환값
  //    -1) 기준 문자열(a)이 비교 문자열(b)보다 앞에 있음
  //     0) 두 문자열이 같음
  //     1) 기존 문자열이 비교 문자열보다 뒤에 있음
  return [...users].sort((a, b) => a[key].localeCompare(b[key]));
}

//! 이벤트 리스너 추가 함수
const addEventListener = (users: UsersType) => {
  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  const sortSelect = document.getElementById('sort-select') as HTMLSelectElement;

  const dataFilterAndSort = () => {
    // 데이터 필터링
    const query = searchInput.value;
    const filteredUsers = filterUsers(users, query);

    // 필터링 된 데이터 정렬
    const sortKey = sortSelect.value as 'name' | 'email';
    const sortedUsers = sortUsers(filteredUsers, sortKey);

    displayUsers(sortedUsers);
  }

  searchInput.addEventListener('input', dataFilterAndSort);
  sortSelect.addEventListener('change', dataFilterAndSort);
}

//! 초기화 함수
const init = async(): Promise<void> => {
  const users = await fetchUsers();

  displayUsers(users);
  addEventListener(users);
}

document.addEventListener('DOMContentLoaded', init);