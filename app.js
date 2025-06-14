// tsc --init 기본 설정 파일인 tsconfig.json을 생성하는 옵션
// tsc -w app.ts 자동 컴파일
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var student = {
    name: "john",
    course: "typescript",
    scrore: 100,
    grade: function () {
        console.log("A");
    },
};
student.name = "kim";
// 변수에 데이터 타입 명시
var stdId = 1111;
var stdName = "lee";
var age = 20;
var gender = "male";
var course = "Typescript";
var completed = false;
// 함수의 데이터 타입 명시 (매개변수, 리턴타입)
// type: void → 리턴값이 없다.
function plus(a, b) {
    return a + b;
}
// 학생 정보 가져오기
// object는 타입으로서 너무 추상적이므로 별도 객체 타입 정의가 바람직
function getInfo(id) {
    return {
        stdId: id,
        stdName: "lee",
        age: 20,
        gender: "female",
        course: "javascript",
        completed: false,
    };
}
// 열거형: 사용자 정의 타입
// 숫자형뿐만 아니라 문자열로도 지정 가능
var genderType;
(function (genderType) {
    genderType["male"] = "male";
    genderType["female"] = "female";
    genderType["genderNeutral"] = "neutral";
})(genderType || (genderType = {}));
// implements: student 인터페이스를 구현하겠다
var myStudent = /** @class */ (function () {
    function myStudent() {
        this.stdId = 123123123;
        this.stdName = "fff";
        // gender = "female"처럼 문자열을 바로 쓰면 타입스크립트는 그걸 "female"이라는 string 리터럴로 해석해서 타입 불일치가 남.
        // 하지만 enum을 쓴다면 반드시 enum 타입 = enum 값 구조여야 함
        this.gender = genderType.female;
        this.course = "typescript";
        this.completed = true;
    }
    myStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log("\uC774\uB984\uC124\uC815 : ".concat(this.stdName));
    };
    return myStudent;
}());
var myInstance = new myStudent();
myInstance.setName("엘리스");
// student 타입에서 age를 제거하면 타입 오류 발생
// 선택적 프로퍼티('?'): 인터페이스 속성 뒤에 '?'를 붙이면 있어도 되고 없어도 된다는 의미
function getStudent(id) {
    return {
        stdId: id,
        stdName: "kim",
        // age: 30, // 생략 가능
        gender: genderType.male,
        course: "typescript",
        completed: true,
    };
}
console.log(getInfo(4144));
console.log(getStudent(11233));
var std = {
    stdId: 123123123,
    stdName: "fff",
    gender: genderType.female,
    course: "typescript",
    completed: true,
};
// 재사용할 수 있음
function setInfo(student) {
    console.log(student);
}
setInfo(std);
// 객체 리터럴을 타입 명시와 함께 선언
// 타입을 { name: string; age: number }로 명시하면,
// name은 반드시 문자열이어야 하고,
// age는 반드시 숫자여야 함.
var user = {
    name: "john", // name 프로퍼티: 문자열 타입
    age: 25, // age 프로퍼티: 숫자 타입
    //   age: '25' 타입 에러
};
// any: 어떤 타입이든 허용됨 (type checking이 무력화됨)
// 되도록 사용을 피하는 게 좋음
// 타입을 명확하게 지정하는 게 유지보수나 디버깅에 유리함
var anyVal1 = 100;
anyVal1 = true; // 숫자 -> 불리언 으로 변경해도 에러 없음
anyVal1 = "hello"; // 문자열도 가능
// 유니온 type : 제한된 타입을 동시에 지정하고 싶을때
var anyVal2 = 100;
anyVal2 = "kim";
anyVal2 = 200;
// anyVal2 = false; 불리언 타입으로 변경 하면 에러 생김
// number 또는 string 타입을 가질 수 있는 변수
var numStr = 100;
var item;
// 문자열로 변환하는 함수
function convertToString(val) {
    // item = numStr;  숫자형이 문자열도 들어 올 수 있어서 타입에러 생김
    //   type of 타입을 가드 할 수있음
    if (typeof val === "string") {
        item = 0;
    }
    else {
        item = val;
    }
    return String(val); //string으로 변환
}
// 숫자형으로 변환하는 함수
function convertToNumber(val) {
    return Number(val); //number로 치환
}
// 타입 별칭을 사용한 함수
function typeAlias(val) {
    return Number(val); //number로 치환
}
console.log("문자열 :" + convertToString(numStr));
console.log("숫자형 :" + convertToNumber(numStr));
console.log("타입별칭 :" + typeAlias(numStr));
// 숫자열 배열
var numbers = [1, 2, 3, 4, 5];
// 문자열 배열
var fruits = ["apple", "banana", "orange"];
for (var i = 0; i < numbers.length; i++) {
    console.log("숫자 " + numbers[i]);
}
for (var i = 0; i < fruits.length; i++) {
    console.log("문자열 " + fruits[i]);
}
// 배열의 유니온 타입
var maxedArray = [1, "two", 3, "four"];
for (var i = 0; i < maxedArray.length; i++) {
    console.log("유니온배열" + maxedArray[i]);
}
// 타입추론
var info = [1, 2, 3];
for (var i = 0; i < info.length; i++) {
    console.log("타입추론 :" + info[i]);
}
// 읽기 전용
// 요소를 수정하거나 추가할 수 없는 읽기 전용 배열
var readOnlyArray = [1, 2, 3];
// 튜플 : 타입의 순서가 정해져있다.
var greeting = [1, "hello", true];
for (var i = 0; i < greeting.length; i++) {
    console.log("튜플" + greeting[i]);
}
// 스프레드 연산자
// 메모리 복사
var firstArr = [1, 2, 3];
var secondArr = [4, 5, 6];
var comineArr = __spreadArray(__spreadArray([], firstArr, true), secondArr, true);
for (var i = 0; i < comineArr.length; i++) {
    console.log("스프레드 배열" + comineArr[i]);
}
