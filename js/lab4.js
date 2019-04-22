// lab4.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function intro() {
    let output = '';
    output = "<p>Yeah, yeah, yeah BLACKPINK IN YOUR AREA! Yeah, yeah, yeah</p>";
    return output;
}

function verse1(){
    let output = '';
    output = "<p>천사 같은 'hi' 끝엔 악마 같은 'bye' 매번 미칠듯한 high 뒤엔 뱉어야 하는 price 이건 답이 없는 test 매번 속더라도 yes 딱한 감정의 노예 얼어 죽을 사랑해, eh</p>";
    return output;
}

function verse2(){
    let output = '';
    output = "<p>Here I come kickin the door, uh 가장 독한 걸로 줘, uh 뻔하디 뻔한 그 love, love 더 내놔봐 give me some more 알아서 매달려 벼랑 끝에 한마디면 또 like 헤벌레 해 그 따뜻한 떨림이 새빨간 설렘이 마치 heaven 같겠지만 You might not get in it</p>";
    return output;
}

function prechorus(){
    let output = '';
    output = "<p>Lets kill this love! Yeah yeah, yeah yeah, yeah; Rum, pum, pum, pum, pum, pum, pum; Lets kill this love! Rum, pum, pum, pum, pum, pum, pum</p>";
    return output;
}

function chorus(){
    let output = '';
    output = "<p>Look at me, look at you 누가 더 아플까 You smart 누가 you are 두 눈에 피눈물 흐르게 된다면 So sorry 누가 you are 나 어떡해 나약한 날 견딜 수 없어 애써 두 눈을 가린 채 사랑의 숨통을 끊어야겠어 </p>";
    return output;
}

function verse3(){
    let output = '';
    output = "<p>Feelin like a sinner Its so fire with him I go boo, hoo He said you look crazy Thank you, baby I owe it all to you Got me all messed up His love is my favorite But you plus me Sadly can be dangerous</p>";
    return output;
}



function main(){
    let finalOutput = ''; // used to build lyrics string
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags

    finalOutput = intro() + verse1() + verse2() + prechorus() + chorus() + verse3();





    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
}

window.onload = function(){
    main();
}