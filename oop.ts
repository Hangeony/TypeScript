// 타입스크립트 기반의 OOP
// 구조체, 공용체, 열거형, 인터페이스, 클래스
// 연관된 변수와 함수들을 한 덩어리로 묶는 방식

// 클래스와 객체
// 클래스(설계도, 생성틀)는 객체의 뼈대, 객체는 클래스의 실체

// 일반적인 직원
let empName: string;
let age2: number;
let empJob: string;

function printEmp(empName: string, age2: number, empJob: string): void {
  console.log(`일반 : ${empName}의 나이는 ${age2}이고, 직업은 ${empJob}이다`);
}

printEmp("kim", 20, "developer");

// 데이터가 방대해질수록 하나의 타입(클래스)으로 묶어서 관리하는 것이 좋다
// 클래스 내부에서는 변수 선언 시 let, const, var가 필요 없다
// 클래스 메서드는 function 키워드 없이 정의함

// 👩‍💼 직원(Employee) 클래스 정의
// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메서드

// 접근 지정자 (Access Modifiers)
// public    : 누구나 접근 가능 (기본값)
// private   : 클래스 내부에서만 접근 가능 (외부에서 접근 불가)
// protected : 클래스 내부 + 자식 클래스에서만 접근 가능

class Employee {
  private _empName: string;
  private _age: number;
  private _empJob: string;

  // 생성자 함수 (constructor): 객체가 생성될 때 자동으로 호출됨
  // 선택적 매개변수(?)는 뒤에 오는 매개변수들도 선택적이거나 생략 가능해야 함
  // 선택적 매개변수는 항상 뒤에 와야 한다
  constructor(_empName: string, _age: number, _empJob: string) {
    this._empName = _empName;
    this._age = _age;
    this._empJob = _empJob;
  }
  // 위에 문장을 간결하게 만들 수있음
  /*
 constructor(
  private _empName: string,
  private _age: number,
  private _empJob: string) {
    this._empName = _empName;
    this._age = _age;
    this._empJob = _empJob;
  }
*/

  // get, set(클래스 속성에 직접 접근하지 않고, 간접적으로 접근하거나 수정할 수 있게 해주는 함수)
  // 캡슐화(Encapsulation) 원칙을 지킬 수 있음
  // 속성 변경 전 검증/처리 로직도 넣을 수 있음
  get empName() {
    return this._empName;
  }

  set empName(val: string) {
    this._empName = val;
  }

  // 클래스 내 메서드는 일반 함수처럼 정의 (function 키워드 X)
  printEmp(): void {
    console.log(
      `${this._empName}의 나이는 ${this._age}이고, 직업은 ${this._empJob}이다`
    );
  }
}

// Employee 클래스를 기반으로 객체 생성
let emp = new Employee("kim", 20, "소프트웨어 개발자");

// 생성자를 통해 초기화된 값이 있어도 직접 변경 가능
// private 이기때문에 접근 할 수 없게됨
// 하지만 set함수 로 접근이 가능해짐
emp.empName = "lee";

// 정보 출력
emp.printEmp();
