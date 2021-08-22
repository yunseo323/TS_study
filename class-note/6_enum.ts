enum Shoes {
    Nike, //(enum member)Shoes.Nike = 0
    Adidas
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0

enum Shoes_ {
    Nike="나이키", //(enum member)Shoes.Nike = 0
    Adidas="아디다스"
}

let myShoes_ = Shoes_.Nike;
console.log(myShoes_); // "나이키"

////////////

enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer){
    if(answer===Answer.Yes) console.log("정답입니다");
    if(answer===Answer.No) console.log("오답입니다");
}
askQuestion(Answer.Yes); //correct
askQuestion("yes") //error : enum 에 지정되어 있는 Answer 타입을 넘겨야 함