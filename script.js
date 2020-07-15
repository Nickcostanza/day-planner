//current date+time for header

var current = moment().format('dddd, MMMM Do YYYY');
$('#currentDay').text(current);

console.log(current); 


//add time slot to planner(not dry code)
var hourNine = moment().hour('9').format('h');
var hourTen = moment().hour('10').format('h');
var hourEleven = moment().hour('11').format('h');
var hourTwelve = moment().hour('12').format('h');
var hourOne = moment().hour('1').format('h');
var hourTwo = moment().hour('2').format('h');
var hourThree = moment().hour('3').format('h');
var hourFour = moment().hour('4').format('h');
var hourFive = moment().hour('5').format('h');

var hours = [hourNine, hourTen, hourEleven, hourTwelve, hourOne, hourTwo, hourThree, hourFour, hourFive];


$("#hourNine").text(hourNine + "AM");
$("#hourTen").text(hourTen + "AM");
$("#hourEleven").text(hourEleven + "AM");
$("#hourTwelve").text(hourTwelve + "PM");
$("#hourOne").text(hourOne + "PM");
$("#hourTwo").text(hourTwo + "PM");
$("#hourThree").text(hourThree + "PM");
$("#hourFour").text(hourFour + "PM");
$("#hourFive").text(hourFive + "PM");

//create a function that changes colors of time slots as the day
//goes on past/present/future(NOT WORKING YET)
function changeColor(){

if (moment() > hours)
    ('#row').addClass('past')

else if(moment() < hours)
    ('#row').addClass('future')



};

changeColor();
//locally store the information put in to the time slots



