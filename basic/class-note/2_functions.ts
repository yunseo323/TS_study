// 함수의 파라미터와 반환값에 타입을 정의할 수 있음
function addNumber(a: number,b:number): number{
    return a+b;
}

addNumber(10,20) //파라미터를 추가로 넣으면 Error 띄워줌 : 2개의 인수가 필요한데 n개를 가져왔습니다

function log(a: string, b?: string){

}