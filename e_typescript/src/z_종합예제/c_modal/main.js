// main.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
//@ 1. 사용자 정보를 외부 API에서 가져오는 비동기 함수
var fetchUsers = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, users, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch('https://jsonplaceholder.typicode.com/users')];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return [4 /*yield*/, response.json()];
            case 2:
                users = _a.sent();
                return [2 /*return*/, users];
            case 3:
                e_1 = _a.sent();
                console.error('Fetch error: ', e_1);
                return [2 /*return*/, []];
            case 4: return [2 /*return*/];
        }
    });
}); };
//@ 2. 사용자 정보를 받아 HTML 요소를 생성하는 함수
var createUserCard = function (user) {
    var userCard = document.createElement('div');
    userCard.className = 'user-card';
    // data-userId="user.id값"; 속성 전달
    userCard.dataset.userId = user.id.toString();
    userCard.innerHTML = "\n    <h2>".concat(user.name, "</h2>\n    <p><strong>Username: </strong>").concat(user.username, "</p>\n    <p><strong>Email: </strong>").concat(user.email, "</p>\n  ");
    return userCard;
};
//@ 3. 사용자 정보 배열을 받아 화면에 표시하는 함수
// : createUserCard에 각 객체 전달
var displayUsers = function (users) {
    var userList = document.getElementById('user-list');
    if (userList) {
        userList.innerHTML = '';
        users.forEach(function (user) {
            var userCard = createUserCard(user);
            userList.appendChild(userCard);
        });
    }
};
//@ 4. 사용자 정보를 받아 모달 창에 표시하는 함수
var showModal = function (user) {
    var modal = document.getElementById('user-modal');
    var modalContent = document.getElementById('modal-user-details');
    if (modal && modalContent) {
        modalContent.innerHTML = "\n      <h2>".concat(user.name, "</h2>\n      <p><strong>Username: </strong>").concat(user.username, "</p>\n      <p><strong>Email: </strong>").concat(user.email, "</p>\n      <p><strong>Phone: </strong>").concat(user.phone, "</p>\n      <p><strong>Website: </strong>").concat(user.website, "</p>\n    ");
        modal.style.display = 'block'; // 모달 창 표시
    }
};
//@ 5. 사용자 리스트에 이벤트 리스너 추가
var addEventListeners = function (users) {
    var userList = document.getElementById('user-list');
    if (userList) {
        userList.addEventListener('click', function (e) {
            //? cf) target VS currentTarget
            // - target: 이벤트가 처음 발생한 DOM 요소 (클릭이 일어난)
            // - currentTarget: 발생한 이벤트가 등록된 DOM 요소 (이벤트가 바인딩 된)
            var target = e.target;
            // >> 클릭이 발생한 요소는 card 내부의 h2, p가 될 가능성이 존재
            var userCard = target.closest('.user-card');
            // : 이벤트가 발생한 요소와 가장 가까운 .user-card 요소를 반환
            if (userCard) {
                // dataset: userCard가 가진 data-* 속성들에 접근할 수 있는 DOM 속성
                // EX) <div data-role="admin" data-userId="1"></div>
                // parseInt(숫자로 변환 할 데이터, 변환진수)
                var userId_1 = parseInt(userCard.dataset.userId || '0', 10);
                var user = users.find(function (user) { return user.id === userId_1; });
                if (user) {
                    showModal(user);
                }
            }
        });
    }
    var modal = document.getElementById('user-modal');
    var closeModal = document.querySelector('.close');
    if (modal && closeModal) {
        closeModal.addEventListener('click', function () {
            modal.style.display = 'none';
        });
        // 브라우저 전체를 DOM 요소로 반환 (브라우저 탭의 전체 영역)
        // : window
        // cf) document: window에 로드되는 HTML 문서 그 자체
        window.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
};
var init = function () { return __awaiter(_this, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchUsers()];
            case 1:
                users = _a.sent();
                displayUsers(users);
                addEventListeners(users);
                return [2 /*return*/];
        }
    });
}); };
document.addEventListener('DOMContentLoaded', init);
