//Tapsiriq-1
/*


let a = prompt("Birinci reqemi daxil edin");
let b = a * a;
alert(`${a} reqeminin kvadrat koku ${b}`);


*/

/*-------------------------------------------------------------------------*/

//Tapsiriq-2
/*


let celsius;
let fahrenheit;

fahrenheit = celsius * 1.8 + 32;
celsius = fahrenheit - 32 / 1.8;


*/


/*-------------------------------------------------------------------------*/


//Tapsiriq-3
/*


var reqem;
reqem = prompt(`Reqem daxil edin: `)

if(reqem == 0){
    console.log(`Reqem sifira beraberdir`)
}else if(reqem > 0){
    console.log(`Reqem musbetdir`)
}else if(reqem < 0){
    console.log(`Reqem menfidir`)
}


*/


/*-------------------------------------------------------------------------*/

//Tapsiriq-4

/*


let num;
num = prompt(`Reqem daxil edin`)

if(num%2 == 0){
    console.log(`Secdiyiniz ${num} reqemi cut reqemdir`)
}else if(num%2 !==0){
    console.log(`Secdiyiniz ${num} reqemi tek reqemdir`)
}

*/

/*-------------------------------------------------------------------------*/

//Tapsiriq-5

/*

let numbers = (10,20,30);

if(Math.max(numbers) == 10) {
    console.log(`10 reqemi  3 reqem arasinda en boyuyudur`)
}else if(Math.max(numbers) == 20){
    console.log(`20 reqemi 3 reqem arasinda en boyuyudur`)
}else if(Math.max(numbers) == 30){
    console.log(`30 reqemi 3 reqem arasinda en boyuyudur`)
}

*/

/*-------------------------------------------------------------------------*/

//Tapsiriq-6

/*

let eded;
eded = prompt(`Eded daxil edin:`);


if( eded%2 !== 0 ){
    alert(`${eded} ededi sade ededdir`)
}else if( eded%2 == 0 ){
    alert(`${eded} ededi murekkeb ededdir`)
}

*/

/*-------------------------------------------------------------------------*/

//Tapsiriq-7

/*-------------------------------------------------------------------------*/

//Tapsiriq-8

/*

let eded1 = parseFloat(prompt(`Birinci reqemi daxil edin: `));
let eded2 = parseFloat(prompt(`Ikinci reqemi daxil edin: `));

let operatorlar = prompt(`Operatoru secin: +, -, *, / `);


let netice;

if(operatorlar == "+"){
    netice = eded1 + eded2
}else if(operatorlar == "-"){
    netice = eded1 - eded2
}else if(operatorlar == "*"){
    netice = eded1 * eded2
}else if(operatorlar == "/"){
    netice = eded1 + eded2
}

netice = alert(`${eded1} ${operatorlar} ${eded2} = ${netice}`);

*/

/*-------------------------------------------------------------------------*/

//Tapsiriq-9

/*

let naturalEded = parseInt(prompt(`Istenilen bir musbet tam eded daxil edin: `));

let cemi = 0;

for (let i = 1; i <= naturalEded; i++) {
    cemi += i;
}

alert(`Ilk ${naturalEded} natural ededin cemi: ${cemi}` );

*/