

//  Developer Console 

console.log("Developer Console") ;

//  Variable Data Type and Operator

String  = "Hamza";
Number   = 5;
console.log(String , Number);
// +

var a = 10 ;
var b = 5;
var c = a+b;
console.log(c);

// -

var d = 10 ;
var e = 5;
var f = d-e;
console.log(f);

// * 
var a = 10;
var b = 2;
var h = a*b;
console.log(h);

// / 
var a = 30;
var b = 2;
var c = a/b;
console.log(c);

// %

var a = 10;
var b = 3;
var c = a % b ;
console.log(c);


// concatenate 

var a = "Concatenate ";
var b = 5;
var c = a + b ;
console.log( "THe concatenate value of is " + c);


// ======================= OPerator ===========================
// ============== There are two types of operrator ========
//  1 ) Unary Operator =========== It has Single Operand  ( x = -x )================

// =========== Example ============
var a = 50;
var a = -a;
console.log(a);
//  2 ) Binary Operator =========== It has Multiple  Operand  ( x = x+6 )================
var a = 50+15;
console.log(a);




// =============== Pre And Post Incrememt =========================

var a = 10 ; 
console.log("THe post Increment is this: "+ a++);
console.log("THe post Increment is this: "+ a);
console.log("THe pre  Increment is this: "+ ++a);
console.log("THe post Decrement is this: "+ a--);
console.log("THe post Deccrement is this: "+ a);
console.log("THe pre Decrement is this: "+ --a);



// ================= String ==========================

var string = "Hamzaaaa";
console.log( "This is a String: " + string );

var Number = 5;
console.log( "This is a Number: " + Number );

 var len = string.length ;
 console.log( "This is a Length of String : " + len );


// var m = new String("this");
//  console.log(m);


// ============== New Line ================
console.log("New Line\nNew line with Space \t  number 2 ");


// ============ Inner Html =================
// document.getElementById('contenttt').innerHTML = '<h3> THis is Inner Html </h3>';
// document.getElementById('contenttt').innerHTML = '<h1>This is Inner Html</h1>';



// ================= Index of Function ========================================
var str = "This is an Hamzaaa";
console.log(str);
var position = str.indexOf('an');
console.log(position);

position = str.lastIndexOf('an')
console.log(position);


// ========== Slice Function ==============
var substr = str.slice(1,7);
console.log(substr);



// ==================== Loops ======================
console.log("Loops");
let i = 0 ;
for(i = 0 ; i<3 ; i++){
    console.log(i);
}


// ==================== For Loops With Array  ======================


let friends = [ "Hamza","Ahmed", "Siddiqui", "Usama", "Faraz"];
for(let index = 0 ; index<friends.length ; index++){
    console.log("Hello friends , "+ friends[index]);
}



// =============== Modern JavaScript =========================
friends.forEach(function f(element) {
    console.log("Hello Friends , "+ element)
})

console.log("\n");
// =============== Modern JavaScript =========================
let employee = {
    nanme: "Hamza",
    Professtion: "Student",
    kaamDhandha: "kuch nah "
}



// =============== Modern JavaScript With Object =========================

for (key in employee){
    console.log(`The ${key} of a employee is:  ${employee[key]} `);
}


// =============== While Loop =========================
let j = 0;
while(j<4){
    console.log(`THis is Whle Loop: ${j}`);
    j++;
}



// =============== Do While =========================
let k = 0;
do{
    console.log(`This is do while loop: ${k}`);
    k++;
}while(k<6);



// =============== Arrays =========================

let array1 = ["Hamza","Ahmed","Siddiqui","Faraz","Usman"];
let num1 = [50,45,100,92,65];
let mixArray = ["Hamzaaaa",65,"wajid","Daniyal",56,25];
console.log(array1,num1,mixArray);

mixArray.push("HAmza");
console.log(mixArray); // Insert element in last 


mixArray.unshift("HAMza"); // Insert element in First
console.log(mixArray); 


mixArray.shift(); // Delete  element in First
console.log(mixArray); 


mixArray.pop("HAMza"); // Delete  element in Last
console.log(mixArray); 


mixArray.splice(1,3); // Dlete  element in Mid
console.log(mixArray); 


mixArray.slice; // Insert element in First
console.log(mixArray); 


// ============== object ==================

let obj1 = {
    namee: "Hamzaaa",
    kaamDhandha: "Ghar say farigh",
    arrayyy: [50,75,85]
}
console.log(obj1);
console.log(obj1.arrayyy);




// ============== If Else ==================

const age = 10;
if(age >= 90 && age<=100){
    console.log("age is greater than 90")
}else if(age > 30 && age < 90) {
    console.log("Age is less than 90")
} else if(age<20 && age>10){
    console.log("age is teen agers")
} else {
    console.log("You are not eligible");
}



// ============ Turnary Operator ===================
var agee= 45;
console.log(agee == 45 ? "age is 45" : "age is not 45");




// =========== =Switch ====================
console.log("Your are use Switch CAses");

switch (key) {
    case 26:
        console.log("Your are 26");
        break;

        case 18:
        console.log("Your are 18");
        break;


        default:
        console.log("You are 12");
        break;
}




// ===========Alert , Prompt And Confirm ====================
// alert("This is a message");

// let abc = prompt("What is Your name ?", "Hamza");
// console.log(abc);

// let deletePost = confirm("Do you wanr to really delete this post ? ");
// console.log(deletePost);



// ========== Navigation the Dom  in JS ====================





// =========== DAte Time ====================

let now = new Date();
console.log(now);

let newDate = now.getFullYear();
console.log("The Year is: "+ newDate);

let newMonth = now.getMonth();
console.log("The Month is: "+ newMonth);


let newDay = now.getDay();
console.log("The Day is: "+ newDay);

let newDatee = now.getDate();
console.log("The Date is: "+ newDatee);

now.setDate(16);
console.log(now)


setInterval(updateTime, 1000) ;
function updateTime(){
    time.innerHTML = new Date();
}




// =========== Arrow Function ====================

// function greet(){
//     console.log("hello world");
// }
// greet();


greet = () => {
    console.log("Here is it Arrow Function !!!");

}
greet();

setTimeout(() => {
    console.log("We are inside the Arrow Function")
}, 3000);



// =========== Math Objects ====================
let m = Math;
console.log(m);
console.log(Math.E);
console.log(Math.PI);
console.log(Math.random(10));


// ============= Function ===================
let round1 = 25.25525;
let round2 = 455.55525;
console.log("The round value is : "+ Math.round(round1), Math.round(round2));

console.log("The square of 3 and 2 is : "+ Math.pow(3,2));
console.log("The square of 2 and 4 is : "+ Math.pow(2,4));

// Math.random() , ceil , floor, square root, abs, trignometric function, min , max , 
let r1 = 1;
let r2 = 100;
let r1_100 =r1 + (r2-r1)*Math.random();
console.log(r1_100);
let rounn = Math.round(r1_100);
console.log(rounn);


// ============= Event Listening  ===================
// click , context Menu, mouse over , mouse out, mouse down, mouse up , submit , focus, DOM Content Loaded


