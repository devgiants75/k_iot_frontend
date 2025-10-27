// main.ts
//! TaskManager 클래스
// : T 제네릭 타입의 할 일 목록을 관리
var TaskManager = /** @class */ (function () {
    // 2) 생성자
    function TaskManager() {
        this.tasks = [];
        this.nextId = 1;
    }
    // 3) 메서드
    //@ 1. 할 일 추가 (addTask)
    TaskManager.prototype.addTask = function (content) {
        this.tasks.push({
            id: this.nextId,
            task: content,
            completed: false
        });
        this.nextId++;
        this.updateTaskCount(); // 할 일 개수 업데이트
    };
    //@ 2. 할 일 삭제 (removeTask)
    TaskManager.prototype.removeTask = function (id) {
        this.tasks = this.tasks.filter(function (task) { return task.id !== id; });
        this.renderTasks('task-list'); // 삭제된 요소가 반영된 랜더링
        this.updateTaskCount();
    };
    //@ 3. 할 일 목록 랜더링 (renderTasks)
    // 매개변수) 랜더링 할 DOM 요소의 id 속성값
    TaskManager.prototype.renderTasks = function (taskListId) {
        var _this = this;
        var taskList = document.getElementById(taskListId);
        taskList.innerHTML = '';
        this.tasks.forEach(function (task) {
            var li = document.createElement('li');
            li.textContent = "".concat(task.task);
            // 삭제 버튼 생성
            var deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제';
            deleteButton.onclick = function () {
                _this.removeTask(task.id);
            };
            // 완료 체크박스 추가
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            // 체크 박스 상태 변경 시: checked 속성 변경 시
            checkbox.onchange = function () {
                task.completed = !task.completed;
                _this.renderTasks(taskListId);
            };
            if (task.completed) {
                li.style.textDecoration = 'line-through';
            }
            // 생성된 요소를 부모 요소의 제일 마지막에 추가
            li.appendChild(deleteButton);
            // A요소.insertBefore(B요소, A요소.firstChild);
            // : A요소 안에 B요소를 삽입
            // - 내부의 첫 번재 요소보다 '전에' 앞선 배치 (textContent 내용보다 앞선 배치)
            li.insertBefore(checkbox, li.firstChild);
            taskList.appendChild(li);
        });
        this.updateTaskCount();
    };
    //@ 4. 할 일 개수 업데이트 함수 (updateTaskCount)
    TaskManager.prototype.updateTaskCount = function () {
        var countElement = document.getElementById('task-count');
        if (countElement) {
            countElement.textContent = "\uD560 \uC77C \uAC1C\uC218: ".concat(this.tasks.length);
        }
    };
    return TaskManager;
}());
//! TaskManager 객체 생성 (프로젝트 실행)
document.addEventListener('DOMContentLoaded', function () {
    var taskManager = new TaskManager();
    //? DOM 요소 가져오기
    var addButton = document.getElementById('add-button');
    var newTaskInput = document.getElementById('task-input');
    addButton.addEventListener('click', function () {
        if (newTaskInput.value.trim() !== '') {
            // 새로운 할 일 생성
            taskManager.addTask(newTaskInput.value);
            taskManager.renderTasks('task-list');
            newTaskInput.value = '';
        }
    });
});
