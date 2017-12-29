//starting and ending indexes for the webpages
//shows 5 objects at a time
var startInstance = 0;
var endInstance = 4;
   
//JS array made from all the objects that we imported into from C++
var birdArray = getBirdData();

// 2 navigation functions that move to the next or previous 5 objects
function nextList(){
   startInstance += 5;
   endInstance += 5;
}
function prevList(){
   startInstance -= 5;
   endInstance -= 5;
   if( startInstance < 0) {
     startInstance = 0;
     endInstance = 4;
   }
}

//the 1st function called when the html file runs
//outputs the table and doesn't show the prev button on the 1st page,
//as well as not show the next button on the last age
//essentially the UI of the webpage
function displayBirdData(  ) {

   //string that holds the HTML code we will print to
   //display the data
   var initialDisplayHTML = "";

   //prevents buttons that shouldn't be displayed from being outputted
   if ( endInstance >= birdArray.length ) {
      document.getElementById("nextButton").style.display = "none";
   }  else {
      document.getElementById("nextButton").style.display = "inline";
   }
   if ( startInstance <= 0 ) {
      document.getElementById("prevButton").style.display = "none";
   } else {
      document.getElementById("prevButton").style.display = "inline";
   }

   //show all of the array if there are less than 5 elements, otherwise limit to 5 at a time
   //call the function that generates the HTML code that will produce the table with all the object Data in it
   if (birdArray.length < 5) {
      initialDisplayHTML = printBirdData ( birdArray, startInstance, birdArray.length -1 );
   } else {
      initialDisplayHTML = printBirdData ( birdArray, startInstance, endInstance );
   }

   //send the table to the HTML document
   document.getElementById("birdDisplay").innerHTML = initialDisplayHTML; 
}

////////////////////////////////////////LOCAL CLICK FUNCTIONS/////////////////////////////////////////////////////

//all these functions call a quicksort to sort the 5 elements being displayed by a speciic category
//sorts by name, day, month, year, city and country
//gives revised table with the elements in right sorted order to the HTML document
//all functions are similar. I will cover how 1 works as a template on how they work in general

function localNameUP () {
      
      //sorts the current 5 object elements      
      quickSortNameUP( startInstance , endInstance, birdArray );
      //gives the table with the object elements in the right sorted order to the HTML document
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

//same format for the rest of the functions

function localNameDown () {

      quickSortNameDOWN( startInstance , endInstance, birdArray );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function localDayUP () {

      quickSortdayUP( startInstance , endInstance, birdArray );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function localDayDown () {

      quickSortdayDOWN( startInstance , endInstance, birdArray );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function localMonthUP () {

      quickSortmonthUP( startInstance , endInstance, birdArray );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );
    
}

function localMonthDown () {

      quickSortmonthDOWN( startInstance , endInstance, birdArray );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function localYearUP () {

      quickSortyearUP( startInstance , endInstance, birdArray );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function localYearDown () {

      quickSortyearDOWN( startInstance , endInstance, birdArray );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function localCityUP () {

      quickSortcityUP( startInstance , endInstance, birdArray );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function localCityDown () {

      quickSortcityDOWN( startInstance , endInstance, birdArray );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function localCountryUP () {
  
      quickSortcountryUP( startInstance , endInstance, birdArray );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function localCountryDown () {

      quickSortcountryDOWN( startInstance , endInstance, birdArray );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

////////////////////////////////////////LOCAL CLICK FUNCTIONS/////////////////////////////////////////////////////



////////////////////////////////////////GLOBAL CLICK FUNCTIONS/////////////////////////////////////////////////////

//all these functions call a mergesort to sort the every element being displayed by a speciic category
//sorts by name, day, month, year, city and country
//gives revised table with the elements in right sorted order to the HTML document
//all functions are similar. I will cover how 1 works as a template on how they work in general

function globalNameUP () {

      //calls mergesort
      mergeSortNameUP( birdArray, 0, birdArray.length-1 );
      //gives revised table to the HTML document
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function globalNameDown () {

      mergeSortNameDown( birdArray, 0, birdArray.length-1 );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function globalDayUP () {

      mergeSortDayUP( birdArray, 0, birdArray.length-1 );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function globalDayDown () {


      mergeSortDayDown( birdArray, 0, birdArray.length-1 );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function globalMonthUP () {


      mergeSortMonthUP( birdArray, 0, birdArray.length-1 );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function globalMonthDown () {

      mergeSortMonthDown( birdArray, 0, birdArray.length-1 );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function globalYearUP () {

      mergeSortYearUP( birdArray, 0, birdArray.length-1 );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function globalYearDown () {

      mergeSortYearDown( birdArray, 0, birdArray.length-1 );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function globalCityUP () {

      mergeSortCityUP( birdArray, 0, birdArray.length-1 );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function globalCityDown () {

      mergeSortCityDown( birdArray, 0, birdArray.length-1 );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

function globalCountryUP () {

      mergeSortCountryUP( birdArray, 0, birdArray.length-1 );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );
    
}

function globalCountryDown () {

      mergeSortCountryDown( birdArray, 0, birdArray.length-1 );
      document.getElementById("birdDisplay").innerHTML = printBirdData( birdArray, startInstance, endInstance );

}

////////////////////////////////////////GLOBAL CLICK FUNCTIONS/////////////////////////////////////////////////////




//function that concatenates the HTML table using the JS object we did methods on and imported from c++
function printBirdData ( birdArray, startIndex, endIndex ) {

   //calls the starting table tag
   var beginHTML = "<table id=\"tablefont\" align=\"center\">";

   //adds in headings for each category
   beginHTML += "<tr> <th> Bird Name </th> <th> Day Spotted </th> <th> Month Spotted </th> <th> Year Spotted </th> <th> City Spotted </th> <th> Country Spotted </th> </tr>";

   //uses a for loop to extract data from each object's field
   //and concatenates a string from it and some HTML table tags
   var middleHTML = "";
   for ( var i = startIndex; i <= endIndex; i++ ) {
      middleHTML += "<tr>";
      for ( x in birdArray[i] ) {
         middleHTML += "<td>" + " " + birdArray[i][x] + " " + "</td>";
      }
      middleHTML += "</tr>";
   }

   //outputs buttons that lets user to sort between all categories
   var buttonHTML;
   buttonHTML = "<tr><th><button id= \"LUP1\" diplay = \"inline\" type=\"button\" onclick=\"localNameUP(); displayBirdData();\"> SORT: LOCAL-UP </button><br>\
                       <button id= \"LDP1\"  diplay = \"inline\" type=\"button\" onclick=\"localNameDown(); displayBirdData();\"> SORT: LOCAL-DOWN </button><br> \
                       <button id= \"GUP1\"  diplay = \"inline\" type=\"button\" onclick=\"globalNameUP(); displayBirdData();\"> SORT: GLOBAL-UP </button><br> \
                       <button id= \"GDP1\"  diplay = \"inline\" type=\"button\" onclick=\"globalNameDown(); displayBirdData();\"> SORT: GLOBAL-DOWN </button></th> <br> \
                     <th><button id= \"LUP2\"  diplay = \"inline\" type=\"button\" onclick=\"localDayUP(); displayBirdData();\"> SORT: LOCAL-UP </button><br>\
                       <button id= \"LDP2\"  diplay = \"inline\" type=\"button\" onclick=\"localDayDown(); displayBirdData();\"> SORT: LOCAL-DOWN </button><br> \
                       <button id= \"GUP2\"  diplay = \"inline\" type=\"button\" onclick=\"globalDayUP(); displayBirdData();\"> SORT: GLOBAL-UP </button><br> \
                       <button id= \"GDP2\"  diplay = \"inline\" type=\"button\" onclick=\"globalDayDown(); displayBirdData();\"> SORT: GLOBAL-DOWN </button></th> <br> \
                     <th><button id= \"LUP3\" diplay = \"inline\" type=\"button\" onclick=\"localMonthUP(); displayBirdData();\"> SORT: LOCAL-UP </button><br>\
                       <button id= \"LDP3\"  diplay = \"inline\" type=\"button\" onclick=\"localMonthDown(); displayBirdData();\"> SORT: LOCAL-DOWN </button><br>\
                       <button id= \"GUP3\"  diplay = \"inline\" type=\"button\" onclick=\"globalMonthUP(); displayBirdData();\"> SORT: GLOBAL-UP </button><br> \
                       <button id= \"GDP3\"  diplay = \"inline\" type=\"button\" onclick=\"globalMonthDown(); displayBirdData();\"> SORT: GLOBAL-DOWN </button></th> <br> \
                     <th><button id= \"LUP4\"  diplay = \"inline\" type=\"button\" onclick=\"localYearUP(); displayBirdData();\"> SORT: LOCAL-UP </button><br>\
                       <button id= \"LDP4\"  diplay = \"inline\" type=\"button\" onclick=\"localYearDown(); displayBirdData();\"> SORT: LOCAL-DOWN </button><br> \
                       <button id= \"GUP4\"  diplay = \"inline\" type=\"button\" onclick=\"globalYearUP(); displayBirdData();\"> SORT: GLOBAL-UP </button><br> \
                       <button id= \"GDP4\"  diplay = \"inline\" type=\"button\" onclick=\"globalYearDown(); displayBirdData();\"> SORT: GLOBAL-DOWN </button></th><br> \
                     <th><button id= \"LUP5\"  diplay = \"inline\" type=\"button\" onclick=\"localCityUP(); displayBirdData();\"> SORT: LOCAL-UP </button><br>\
                       <button id= \"LDP5\"  diplay = \"inline\" type=\"button\" onclick=\"localCityDown(); displayBirdData();\"> SORT: LOCAL-DOWN </button><br> \
                       <button id= \"GUP5\"  diplay = \"inline\" type=\"button\" onclick=\"globalCityUP(); displayBirdData();\"> SORT: GLOBAL-UP </button><br> \
                       <button id= \"GDP5\"  diplay = \"inline\" type=\"button\" onclick=\"globalCityDown(); displayBirdData();\"> SORT: GLOBAL-DOWN </button></th> <br> \
                     <th><button id= \"LUP6\"  diplay = \"inline\" type=\"button\" onclick=\"localCountryUP(); displayBirdData();\"> SORT: LOCAL-UP </button><br>\
                       <button id= \"LDP6\"  diplay = \"inline\" type=\"button\" onclick=\"localCountryDown(); displayBirdData();\"> SORT: LOCAL-DOWN </button><br> \
                       <button id= \"GUP6\"  diplay = \"inline\" type=\"button\" onclick=\"globalCountryUP(); displayBirdData();\"> SORT: GLOBAL-UP </button><br> \
                       <button id= \"GDP6\"  diplay = \"inline\" type=\"button\" onclick=\"globalCountryDown(); displayBirdData();\"> SORT: GLOBAL-DOWN </button></th> <br> \
                 </tr>"; 
   
   //calls the ending table tag
   var endHTML = "";
   endHTML += "</table>";

   //concatenates the string and sends it to the calling function to be sent to the HTML file
   var fullHTML = beginHTML + middleHTML + buttonHTML + endHTML;
   return fullHTML;
}

//function that gives range of what elements they are on.
function pageNum () { 

      document.getElementById("pageNumber").innerHTML = startInstance + " - " + endInstance; 
}








