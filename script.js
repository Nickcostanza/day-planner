//current date+time for header

var current = moment().format('dddd, MMMM Do YYYY');
$('#currentDay').text(current);

console.log(current); 


//add time slot to planner
var hour = moment().format('h');
console.log(hour)


//create a function that changes colors of time slots as the day
//goes on past/present/future


//locally store the information put in to the time slots
//refresh every morning