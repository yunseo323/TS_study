// 타입 추론 기본 1

let a = "abc";

function getB(b = 10){
    let c ="hi";
    return b+c;
}

10 + "10" //"1010"

//타입 추론 기본 2
interface Dropdown<T> {
    value: T;
    title: string;
}

let shoppingItem: Dropdown<string> = {
    value: "abc", // generic으로 정의한 value의 type이 추론됨
    title: "hello"
}

// 타입 추론 기본 3

interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K>{ // Dropdown의 value의 타입에도 관여함
    description: string;
    tag: K;
}

let detailedItem: DetailedDropdown<string> = { 
    description: "as",
    tag: "sd",
    value: "hi",
    title: "we"
}


//Best common type : 가장 근접한 타입을 추론한다 -> 타입들을 union으로 묶어나간다

let arr1 = [1,2,3]; //arr1: number[]
let arr2 = [1,2,"hi"]; //arr2: (string|number)[]

