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

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone:Developer|Person) {
    someone.name; //공통된 property 에 대해서만 제공함
    /*
    접근 x
    someone.skill
    someone.age
    */
})
