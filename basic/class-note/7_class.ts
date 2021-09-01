class Person_ {
    public name: string; //class 상단에 타입 정의
    private age: number;
    readonly log: string;
    //기본적으로는 public, 접근 범위 지정 가능

    constructor(name: string,age: number){ //parameter 에도 타입 정의
        this.name = name;
        this.age = age;
    }
}