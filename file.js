
//Shortcurt
// document.gbi-getElementById, document.gebn .,..getElement considered as single entity.

// 1]Variables - syntax= var varname=value - no requirement to specify datatype.;
// Datatypes=Primitive-Number,string,boolean,undefined,null,Symbol
// Reference Datatypes= Object,Array(Array is special type of object.)
var a1 = 20; var a2 = 30;
var b1 = "this is string1"; var b2 = "this is string2";
var c = null;
var d1 = true; var d2 = false; //type boolean
var e; //undefined variable: var e / var e=undefined. both way you can define.
var f = { ravi: 32, manish: 56, ayush: 89, type: "this is a object" };
var g1 = [1, 2, { man: 22, van: 56 }, "Maths", 5]; g2 = ["a", "b", "c"]; //passing object,string inside array.
//arrays are special type of object in js.
var f = null;
const abc = 10; //const var once declared then never altered.

console.log('1 = ',a1 + a2);  //console.log-prints output at console. 
console.log('2 :',b1 + " " + b2); //at console number is shown in green & string in pink color. & + in string means concatenation & doesn't provides space b/w them whereas , means 2 different variables/strings with a space b/w them
console.log('3',c);
console.log('4-',d1,d2);//d1+d2 gives 1
console.log('5=',e);//prints undefined bcz var e is not intialised.
console.log('6-',f);
console.log('7 = ',g1);    //prints array length & values.
console.log('8',g1[3]); //Give array value at index 3


//newline,tab,.. characters as c- "\n"
//Operators-Exactly same as c operators.(arithmetic,logical,increment,decrement operators.)
//Functions similar to c but not exactly same. 
function ave(x, y) { return (x + y) / 2; }
console.log("Value of k =", ave(3, 5));
//alternate way to represent function :- ave = (x,y)=>{ return (x+y)/2;} 


//If-else as in c. 
//for loop
for (var i = 0; i < g1.length; i++) { console.log('for loop:',g1[i]); }
//for each loop
console.log('forEachLoop')
g2.forEach(function (element) { console.log(element) });
//while loop
let j = 0;
while (j < g1.length) { j++; }
console.log("length of array g1 =", j);
//do while loop
let k = 0;
do { k++; } while (k < g2.length);
console.log("length of array g2 =", k);
//break,continue statement as in c.

//Array -      find more about array methods.
let arr = [1, 2, 3, 4];
console.log(arr.length);  //prints array size
arr.pop(); console.log("\n"); //pops top value of array.
console.log(arr); //prints array size & values. 
arr.push(32); arr.push("why"); arr.push(23);//pushes value at top of array.
console.log(arr);

//String-methods similar to java
let str = "JS is case sensitive is language";
console.log(str.length);
console.log('index of is',str.indexOf("is")); //gives index of first i when searching from 0th index.==>3
console.log(str.lastIndexOf("is")); //gives index of first i when searching from last(length-1) index.-->21 - note that index od characters remains same in both searching
console.log(str.slice(4, 8)); //gives str values b/w index=4including & index=8excluding.-->s ca
console.log(str.replace("is", "are")) // replace-applies only to 1st occurence. 
console.log(str);   //replace method doesn't changes actual str. to print replaced string store that to new variable & print new variable.

//Date
let dt = new Date();
console.log('1:',dt);
console.log('2:',dt.getFullYear());
console.log('3:',dt.getMonth()); //jan=0,feb=1,mar=2,apr=3,may=4,jun=5,jul=6,aug=7,sep=8,oct=9,nov=10,dec=11
console.log('4:',dt.getDay()); //s=0,m=1,t=2,w=3,t=4,f=5,sat=6.
console.log('5:',dt.getTime()); //time in seconds
console.log('6:',dt.getHours()); //current hours.
console.log('7:',dt.getMinutes()); //current minutes in hour.
 console.log('8:',dt.getSeconds()); //current seconds elapsed in minute.

/*
Events in JS-2 ways to fire event : 1)using JS 2)using html,js both.
when using html,js both-add att on(methodNameInJS) in html & pass a function,define that function in js.
click=when user clicks in the region then event is fired.
mouseover=when mouse is in that region event is fired..
mouseout=when mouse is taken away from that region event is fired.
mousedown-down means pressed=when you long press mouse button(click & hold)at a region.
mouseup=up-means leave-when you leave long press mouse button.

1)Adding event using html & js = adding event when button is clicked.
In this type at html button tag add attribute onclick & pass a function through this & define that function in JS to trigger a event when user clickes on button key.The event can be seen in console.
in html : <input name="b" id="bid1" onclick="clickFunction()">Click here</button>
in JS:  */
function clickFunction() { console.log("The Button was clicked."); }

// 2)Adding event using js only = adding event whenever page loads. 
window.onload = function () { console.log("The page was reloaded."); }
//3)adding event at div tag-container/class c2-
let con1 = document.getElementById('cid2');  //note that it should be element & not elements in id
con1.addEventListener('click', function () { console.log("The container cid2 was clicked.") })
con1.addEventListener('mouseover', function () { console.log("The mouse is over container."); });
con1.addEventListener('mouseout', function () { console.log("The mouse is out of container."); });

//4)changing content when user long presses on mouse & when leaved show previous content in pid1 paragr.
par = document.getElementById('pid1'); //storing element pid
prevHTML = par.innerHTML;
par.addEventListener('mousedown', function () {
    console.log("down=mouse button long press")
    par.innerHTML = "<b><i>When you long press this paragraph will be shown</i></b>" //you can select this element by query selector also.
});
par.addEventListener('mouseup', function () {
    console.log("up=leaved mouse button long press")
    par.innerHTML = prevHTML;
});

// setInterval & setTimeout
// The setInterval() method repeats a block of code at every given timing event.
//setTimeout() method performs a block of code after specific time provided.(runs only once).
function greet() {
    console.log('Hello world');
}
let ab=setTimeout(greet, 5000);
// use clearInterval(ab)/clearTimeout(ab) to cancel setInterval/SetTimeout
//printing Date & time dynamically.
let date,time ;
function printTime(){ 
    pt=new Date();
    date=pt.toLocaleDateString();
    time=pt.getHours() +":"+ pt.getMinutes() +":"+ pt.getSeconds() ;
    document.getElementById('pid3').innerHTML=date+' '+time ;
}
setInterval(printTime,1000); //note that dont use () here in printtime fun else you will get error.


// JSON(JavaScript Object Notation)
//note that json requires double quotes("") not single quotes.

//Template literals
//ECMAAscript
 