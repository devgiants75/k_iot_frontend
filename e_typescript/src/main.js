// main.ts
var count = 0; // 초기 카운터 값 초기화
function updateDisplay() {
    var countElement = document.getElementById('countValue');
    if (countElement) {
        // .textContent 속성은 문자열 타입
        countElement.textContent = count.toString();
    }
}
function increment() {
    count++;
    updateDisplay();
}
function decrement() {
    count--;
    updateDisplay();
}
document.addEventListener('DOMContentLoaded', function () {
    var incrementBtn = document.getElementById('incrementBtn');
    var decrementBtn = document.getElementById('decrementBtn');
    if (incrementBtn)
        incrementBtn.addEventListener('click', increment);
    if (decrementBtn)
        decrementBtn.addEventListener('click', decrement);
});
