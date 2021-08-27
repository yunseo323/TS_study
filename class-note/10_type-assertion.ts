// 타입 단언 : TS보다 개발자가 해당 type을 더 잘 안다!

let word; // 암시적으로 a는 any
//var b = word; //b도 any
word = 20;
word = "abc";

let b =  word as string; // as 키워드를 이용해서 word가 any라도 b는 string


//타입 단언은 DOM API를 조작할 때 가장 많이 쓰임

/*
<div id = "app">hi</div>
*/

//let div = document.querySelector("app"); //div: Element

let div = document.querySelector("div");
//div: HTMLDivElement|null -> div가 null일수도 있기 때문에 if로 아니란걸 한번더 보장해야함

let div_ = document.querySelector(".container") as HTMLDivElement;
//as로 HTML api라는 것을 명시, className/id로 접근해도 모두 DOM 요소에 접근한다는 것을 알게 해줌