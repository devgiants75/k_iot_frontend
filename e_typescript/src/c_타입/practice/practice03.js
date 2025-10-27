// practice03.ts
document.addEventListener('DOMContentLoaded', function () {
    // 1) DOM 요소 타입 단언
    var input = document.getElementById('username');
    var button = document.getElementById('saveButton');
    var resultDiv = document.getElementById('result');
    // 2) 버튼 클릭 시 동작
    button.addEventListener('click', function () {
        var username = input.value.trim();
        if (!username) {
            resultDiv.innerText = '이름을 입력해주세요.';
            return;
        }
        // 3) JSON 문자열 생성
        var jsonData = JSON.stringify({ name: username, age: 30 });
        var user = JSON.parse(jsonData);
        // 5) DOM 반영
        resultDiv.innerText = "".concat(user.name, " (").concat(user.age, ")");
    });
});
//! == innerHTML VS innerText VS textContent ==
document.addEventListener('DOMContentLoaded', function () {
    var a = document.getElementById('a');
    var b = document.getElementById('b');
    var c = document.getElementById('c');
    var element = document.getElementById('myDiv');
    if (element) {
        a === null || a === void 0 ? void 0 : a.addEventListener('click', function () {
            alert(element.innerHTML); // innerHTML 버튼
        });
        b === null || b === void 0 ? void 0 : b.addEventListener('click', function () {
            alert(element.innerText); // innerText 버튼
        });
        c === null || c === void 0 ? void 0 : c.addEventListener('click', function () {
            alert(element.textContent);
        });
    }
});
