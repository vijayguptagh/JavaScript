/* run this codes into console */

/* 1.input age from user and print remaining age to complete century.
Consider 1 year = 365 days= 52 weeks = 12 months
 */
function lifeInWeeks(age) {
    var remainAge = 100 - age;
    var months = remainAge * 12;
    var weeks = remainAge * 52;
    var days = remainAge * 365;
    
    alert('You have '+days+'days '+weeks+' weeks and'+months+' months left.');
}
lifeInWeeks(20);

/* 2. bmi calculator */
function bmi(weight,height){
    var bmi = weight/height;
    alert(`Your BMI is ${bmi}`);
}
var w = prompt('enter your weight');
var h = prompt('enter your height');		
bmi(w,h);

/* 3.random no generator - problem geenrate a random no for a dice-no lies from 0-6 */
var n = Math.random();  /* it generates random no b/w 0 to 1 -inclusive 0 & excluding 1 */
/* since dice no lies from 0-6 ==> multiply this no to 6 - but max no can get is 5.something-can't get 6-bcz random value is less than 1 ==> so add +1 to this no */
n = n * 6;
n = Math.floor(n) + 1;  /* to make n integer use floor function */
/* note that M must be capital */

/* 4.leap year determinator - after each 4 years of 365 days  a leap year occurs have 366 days.*/
/* a year is leap year if year is divisible by 4 and not divisible by 100 or divisible by 4, divisible by 100 and divisible by 400. */
let year = prompt('enter year');
if( year%4==0 && (year%100!=0 || (year%400==0 && year%400==0))){
    alert(`Given year ${year} is a leap year`);
}
else{
    alert(`Given year ${year} is not a leap year`);
}

