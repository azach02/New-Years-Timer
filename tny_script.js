"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Aaron Zach
   Date:   10/12/23

   */

// Execute the function to run and display the countdown clock
runClock();
setInterval("runClock()", 1000)

// Function to create and run the countdown clock 
function runClock () {
   // Store the current date and time
   let currentDay = new Date();
   let dateStr = currentDay.toLocaleDateString();
   let timeStr = currentDay.toLocaleTimeString();
   // Display the Current Date and Time
   document.getElementById("dateNow").innerHTML = dateStr + "<br>" + timeStr;

   // Calculate the days until Jan 1st
   let newYear = new Date("January 1, 2018");
   let nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   let daysLeft = (newYear - currentDay)/(1000*60*60*24)

   // Calc the hours left in the current day
   let hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

   // Calc the minutes left in the current day
   let minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;

   // Calc the seconds left in the current day
   let secsLeft = (minsLeft - Math.floor(minsLeft))*60;



   // Display the time left until New Year's Eve
   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}

