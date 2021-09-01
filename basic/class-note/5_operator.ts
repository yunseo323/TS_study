function logMessage(value: string | number){
    if (typeof value === 'number'){
        value.toLocaleString();    //이 시점에서 value는 number로 읽힘. number 관련 api 사용 가능
    }
    if(typeof value === 'string'){
        value.toString(); //이 시점에서 value는 string으로 읽힘. string 관련 api 사용 가능
    }
    throw new TypeError("value must be string or number");
}

logMessage("hello");
logMessage(10); 

interface Developer_ {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone:Developer_|Person) {
    someone.name; //공통된 property 에 대해서만 제공함
    /*
    접근 x
    someone.skill
    someone.age
    */
}

function ask_Someone(someone:Developer_&Person) {
    // & 인터섹션 타입을 사용하면 공통이지 않은 property에도 접근 가능하다
    someone.name; 
    someone.skill;
    someone.age; 
}

// union 활용
askSomeone({name:"yun", skill:"ts"}); //Developer_ 타입 선택
askSomeone({name: "yun", age: 22}) //Persion 타입 선택
//intersection 활용
ask_Someone({name:"yun", skill:"ts", age: 22}) // 두 타입을 합친, 양쪽의 property를 다 넘겨야 함
