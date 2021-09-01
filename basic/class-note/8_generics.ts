/*
function logText<T>(text: T):T {
    console.log(text);
    return text;
}

logText("hi"); //function logText<"hi">(text: "hi"):"hi"
logText<string>("hi"); //function logText<string>(text: string):string
*/

/*
function logText(text: string) { 
    console.log(text);
    return text;
}  

function logNumber(num: number) { 
    console.log(num);
    return num;
}  
*/

/*
유니온 사용
function logText(text: string|number) { 
    console.log(text);
    //text.  -> string과 number의 공통 api만 접근 가능
    return text;
}  

const word = logText('a'); //word의 type은 여전히 string|number

*/

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('abc');
str.split(''); //string api 사용 가능
const login = logText<boolean>(true); //boolean 변경 가능

////////////////////

//인터페이스에 제네릭을 선언하는 방법

interface Dropdown<T>{
    value: T;
    selected: boolean;
}

const obj: Dropdown<number> = {value: 10, selected: true};
const obj_: Dropdown<string> = {value:"hello",selected: false};

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[]{
    console.log(text.length);
    
    return text;
} 
//logTextLength<string>("hi")

// 제네릭 타입 제한 2 - 정의된 타입 이용하기

interface LengthType {
    length: number;
}

function logTextLength_<T extends LengthType>(text: T): T{
    text.length;
    return text;
}

logTextLength_("hello");

//제네릭 타입 제한 3 - keyof

interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

//interface ShoppingItem 안의 key값들만 받을 수 있도록 제약 가능

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T):T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');

getShoppingItemOption("name");
