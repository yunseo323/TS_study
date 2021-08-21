interface User {
    age: number;
    name: string;
}


// 변수에 인터페이스 활용
let seho: User = {
    age: 333,
    name: '세호'
}

//함수에 인터페이스 활용

function getUser(user: User){
    console.log(user);
}
const stu: User = {
    age: 22,
    name: "yun"
}
getUser(stu);

// 함수의 구조에 인터페이스 활용

interface SumFunction{
    (a: number, b: number): number;
}

let sum: SumFunction;

sum = function(num1, num2){
    return num1+num2;
}

//인덱싱 방식 정의

interface StringArray {
    [index:number]: string; //index는 숫자로 접근하고, 자료는 string이다
}

var arr: StringArray = ['a','b','c'];
arr[0] = "hi"; // 숫자라면 ERROR 발생

// 딕셔너리 패턴

interface StringRegexDictionary {
    [key: string]: RegExp //정규표현식
}

let obj: StringRegexDictionary = {
    cssFile: /\.css$/, //확장자가 css로 끝나는 파일들
    jsFile: /\.js$/
}

Object.keys(obj).forEach(function(value){ //value가 자동으로 string으로 타입 추론 
      
})

// 인터페이스 확장

interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    /* Developer가 Person 을 extends 하면서 필요 없어짐
    name: string;
    age: number;
    */
    language: string;
}

let yun: Developer = {
    name: "yunseo",
    age: 22,
    language: "typescript"
}