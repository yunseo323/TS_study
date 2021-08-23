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

function logText(text: string|number) { 
    console.log(text);
    //text.  -> string과 number의 공통 api만 접근 가능
    return text;
}  

const word = logText('a'); //word의 type은 여전히 string|number