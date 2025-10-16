// review04.js

/*
# 학생 성적 관리 시스템 #

! 학생 객체 데이터
- id      : 학생 고유 번호
- name    : 학생 이름
- scores  : 각 과목별 성적을 저장하는 객체 { Math: 85, English: 90, Science: 78 }
                        >> Object.values(scores) === [85, 90, 78]

! 1) Student 클래스
  - 생성자에 의해 id, name, scores 초기화

  ? cf) JS 생성자: constructor
        - 생성자 내부의 this로 호출되는 변수는 필드로 자동 선언
        Java 생성자: 클래스명과 동일

  - getAverageScore() 메서드 구현
    : 학생 평균 성적 계산
    ? Object.values(), reduce() 사용

! 2) GradeManagement 클래스
  : 학생 관리 배열, 자동 증가 id 저장
  - 학생 추가: addStudent(name, scores)
  - 학생별 평균 성적 계산: getAverageScore()
    > 모든 학생의 id, 이름, 평균 성적을 포함하는 새 배열 반환
    > map(), reduce()
  - 조건에 따른 학생 필터링 & 정렬
    > getTopStudents(threshold)
      : 평균 성적이 주어진 값(한계점) 이상인 학생을 필터링 + 내림차순 정렬 반환
    > filter(), sort() 

    cf) threshold: 한계점
*/

//! 프로그램 구현
class Student {
  constructor(id, name, scores = {}) {
    // this.변수명 = 변수명;
    // [좌항]: 현재의 객체 내부의 필드에 접근
    // [우항]: 필드에 할당할 실제 데이터

    //? 기본 매개변수
    // : 해당 메서드 호출 시 데이터 전달이 생략될 경우
    //    , 기본 매개변수값이 할당
    // > 필수 전달 데이터보다 뒤에 작성!!

    this.id = id;
    this.name = name;
    this.scores = scores;
  }

  // 학생 평균 성적 계산
  getAverageScore() {
    // Object.values(객체);
    // >> 전달된 객체가 가지는 속성의 값들로만 이루어진 배열을 반환
    //? cf) 객체 - 키(key): 값(value)의 쌍으로 이루어짐
    const values = Object.values(this.scores);
    if (values.length === 0) return 0;

    const sum = values.reduce((acc, cur) => acc + cur, 0);
    const avg = sum / values.length;

    //? 숫자.toFixed(소수점자리수)
    // : 해당 소수점 자리수 이하의 자리수를 갖는 "문자열"로 반환  
    // > Number()로 형 변환하여 반환!
    return Number(avg.toFixed(2));
  }
}

class GradeManagement {
  constructor() {
    this.students = [];
    this.nextId = 1;
  }

  // 학생 추가
  addStudent(name, scores) {
    const newStudent = new Student(this.nextId, name, scores);
    this.students.push(newStudent);
    console.log(`학생 추가: [${newStudent.id}] ${newStudent.name}`);
    this.nextId++;
  }

  // 모든 학생의 평균 성적 배열 반환
  // 반환 형태: [{ id, name, average }, { id, name, average }, ...]
  getAverageScore() {
    //? 자바스크립트에서 {}는 함수 본문으로 인식
    // : 객체 리터럴 반환 시 JS에게 해당 문법 구조가 코드 블록이 아닌 객체임을 전달하기 위해
    //    () 소괄호 사용 
    //    >> {}: 코드 블록
    //    >> ({}): 객체 리터럴
    //    화살표함수에서 객체를 즉시 반환할 때는 ()로 감싸야 함!
    return this.students.map(student => ({
      id: student.id,
      name: student.name,
      average: student.getAverageScore(), // 내부적으로 reduce 사용
    }));
    // student: { id, name, scores } - scores 객체
    // >        { id, name, average } - average 숫자
  }

  // 조건(평균 >= threshold)에 맞는 학생 필터링 후 평균 내림차순 정렬
  getTopStudents(threshold) {
    return this.getAverageScore()
      .filter(info => info.average >= threshold)
      //.sort(); // 오름차순 정렬 - sort((a, b) => a.average - b.average)
      .sort((a, b) => b.average - a.average); // 내림차순 정렬
  }

  // 편의 출력 함수
  displayAll() {
    console.log('=== 학생 목록 (평균 포함) ===');
    this.getAverageScore().forEach(info => {
      console.log(`[${info.id}] ${info.name} - 평균: ${info.average}`);
    });
  }
}

//! == 프로그램 실행 == //
const gradeSystem = new GradeManagement();

// 학생 추가 예제
gradeSystem.addStudent("이승아", { Math: 90, English: 85, Science: 78 });
gradeSystem.addStudent("이도경", { Math: 80, English: 95, Science: 88 });
gradeSystem.addStudent("조승범", { Math: 85, English: 100, Science: 65 });
gradeSystem.addStudent("김명진", { Math: 70, English: 80, Science: 87 });

// 전체 학생 평균 출력
gradeSystem.displayAll();

// 전체 평균 정보 배열 조회
const averages = gradeSystem.getAverageScore();
console.log('=== 전체 평균 정보 ===');
console.log(averages);

// 상위 학생 조회 (예: 평균 84점 이상)
const top = gradeSystem.getTopStudents(84);
console.log('=== 평균 84점 이상 상위 학생 (내림차순) ===');
console.log(top);