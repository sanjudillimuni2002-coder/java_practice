/*code javascript*/
console.log("Hello, World!");

let a=10;
console.log("The value of a is: " + a);
let b=20;
console.log("The sum of a and b is: " + (a + b));


const c=30;
const d=40;
console.log("The sum of c and d is: " + (c + d));


const e="私は";
const f="サンジュ";
console.log(e + f);

/*template*/
let name="鈴木";
let str=`こんにちは${name}さん。
今日は天気がいいですね。`;
console.log(str);

/*list*/
let data=['javascript','python','php','ruby','perl'];
console.log(data[0]);
console.log(data[3]);

/*list 02*/
let data2=[
    ['javascript','python'],
    ['php','ruby'],
    ['perl','java']
];
console.log(data2[0][1]);
console.log(data2[2][0]);

/*object*/
let book={
    title:'javascript',
    price:20980,
    publisher:'技術評論社'
};
console.log(book.title);
console.log(book['title']);


/*if*/
let x=15;
if(x >= 10){
    console.log("x is greater than 10");
}else{
    console.log("x is less than 10");
}

/*switch*/
let rank = 'b';

switch(rank){
    case 'a':
        console.log('a rank');
        break;
    case 'b':
        console.log('b rank');
        break;
    case 'c':
        console.log('c rank');
        break;
    default:
        console.log('unknown rank');
        break;
}

/*while and do*/
let i = 5;
while(i > 10){
    console.log(`iの値は${i}`);
    i++;
}

let j = 5;
do{
    console.log(`jの値は${j}`);
    j++;
} while(j < 10);


/*for*/
for (let i = 5; i <10; i++){
    console.log(`iの値は${i}`);
}




/*question 01*/

let g = 1;
while(g < 15){
    console.log(`おはよう`);
    g++;
}


/*question 02*/

let details = {
    name: '田中',
    age: 41,
};
console.log(`${details.name}さんは${details.age}歳です。`);
