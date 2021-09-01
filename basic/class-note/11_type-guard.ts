interface Developer {
    name: string;
    skill: string;
}

interface Person_ {
    name: string;
    age: number;
}

function introduce(): Developer | Person_ {
    return {name: "tony",age: 33, skill: "ts"}; //
}

let tony = introduce();
//console.log(tony.skill); 
// -> ERROR: union 타입에 skill 속성이 존재하지 않음, Developer과 Person_ 타입중 어떤게 올지 ts는 알지 못하므로, 공통 속성 name만 접근할 수 있음


/************/

if((tony as Developer).skill){
    let skill = (tony as Developer).skill;
    console.log(skill);
}else if((tony as Person_).age){
    let age = (tony as Person_).age;
    console.log(age);  
}

//다음과 같이 작성하면 중복되는 코드가 많아 타입 가드라는 것을 사용한다 : type guard
function isDeveloper(target: Developer | Person_): target is Developer {
    return (target as Developer).skill !== undefined; //true,false 반환
}
//위의 코드를 줄일 수 있음
if (isDeveloper(tony)){
    console.log(tony.skill);
}else{
    console.log(tony.age);
}


