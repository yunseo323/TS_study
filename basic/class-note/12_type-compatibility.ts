// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

interface Per{
    name: string;
}

let developer: Developer;
let per: Per;
//developer = per;
per = developer; //더 큰 구조를 가지는 것을 더 작은 구조를 가지는 것에 대입할 수 있음 (공통이 있다면)

class P {
    name: string;
}
let pp = new P;
pp = developer; //가능


//함수
let add = function(a: number){
    //...
}
let _sum = function(a: number, b: number){
    //...
}

_sum = add; // 파라미터의 수가 적은것을 더 큰 것에 대입할 수 있음

//제네릭
interface Empty<T>{

}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
//notempty1 = notempty2 //호환 x
//notempty2 = notempty1 //호환 x
