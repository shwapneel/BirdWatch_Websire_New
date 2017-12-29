//all functions are merge sort functions that sort different object fields
//sorts by: name, day, month, year, city, and country


// General MergeSort Algoritm, sort up

function mergeUP ( array, start, mid, end ){   
    var Larray = [];
    var Rarray = [];



    // copy to new arrays
    var j = 0;
    for( var i = start; i <= mid; i++ ) {
        Larray[j] = array[i];
        j++;
    }
    var k = 0;
    for(var i= mid+1; i <= end; i++ ) {
        Rarray[k] = array[i];
        k++;
    }

     //copy the elemets back to list
     j = 0;
     k = 0;
     var place;
     for( var i = start; i <= end; i++ ) {
         if ( j <= (Larray.length-1) && k <= (Rarray.length-1) ) {
             if (Larray[j]<=Rarray[k]){
                 array[i]=Larray[j];
                 j++;
             } else {
                 array[i]=Rarray[k];
                 k++;
             }  
         } else {
             place = i;
             //ends for loop immediately to preserve value of place
             i = end;   
         }
     }

     if( k <= (Rarray.length-1) ) {
         for( var i = place; i <= end; i++ ) {
             array[i]=Rarray[k];
             k++;
         }
     }else if( j <= (Larray.length-1) ){
         for( var i = place; i <= end; i++ ) {
                 array[i]=Larray[j];
                 j++;
         }
     }
}

function mergeSortUP( array, start, end ) {

    var mid;
    if( start < end ) {

        mid = (start+end)/2;

       //break the array in half and recusively break it into 2 until its split into its individual elements
       mergeSortUP( array , start, mid );
       mergeSortUP( array , mid+1, end );

       //sort the individual elements/arrays until it is all sorted
       mergeUP ( array , start, mid, end );
     }    


}



// General MergeSort Algoritm, sort down


function mergeDOWN ( array, start, mid, end ){   
    var Larray = [];
    var Rarray = [];



    // copy to new arrays
    var j = 0;
    for( var i = start; i <= mid; i++ ) {
        Larray[j] = array[i];
        j++;
    }
    var k = 0;
    for(var i= mid+1; i <= end; i++ ) {
        Rarray[k] = array[i];
        k++;
    }

     //copy the elemets back to list 
     j = 0;
     k = 0;
     var place;
     for( var i = start; i <= end; i++ ) {
         if ( j <= (Larray.length-1) && k <= (Rarray.length-1)) {
             if (Larray[j] > Rarray[k]){
                 array[i]=Larray[j];
                 j++;
             } else {
                 array[i]=Rarray[k];
                 k++;
             }  
         } else {
             place = i;
             //ends for loop immediately to preserve value of place
             i = end;   
         }
     }

     if( k <= (Rarray.length-1) ) {
         for( var i = place; i <= end; i++ ) {
             array[i]=Rarray[k];
             k++;
         }
     }else if( j <= (Larray.length-1) ){
         for( var i = place; i <= end; i++ ) {
                 array[i]=Larray[j];
                 j++;
         }
     }
}

function mergeSortDOWN( array, start, end ) {

    var mid;
    if( start < end ) {

        mid = (start+end)/2;

       //break the array in half and recusively break it into 2 until its split into its individual elements
       mergeSortDOWN( array , start, mid );
       mergeSortDOWN( array , mid+1, end );

       //sort the individual elements/arrays until it is all sorted
       mergeDOWN ( array , start, mid, end );
     }    

}




//mergesort: sort up by country






function mergeCountryUP ( array, start, mid, end ) {   

     var Larray = [];
     var Rarray = [];


     // copy to new arrays
     var j = 0;
     for( var i = start; i <= mid; i++ ) {
         Larray[j] = array[i];
         j++;
     }
     var k = 0;
     for(var i= mid+1; i <= end; i++ ) {
         Rarray[k] = array[i];
         k++;
     }

     j = 0;
     k = 0;

     //copy the elemets back to list
     for( var i = start; i <= end; i++ ) {
         if ( j < Larray.length && k < Rarray.length ) {
             if ((Larray[j].country) < (Rarray[k].country)){
                 array[i] = Larray[j];
                 j++;
             } else {
                 array[i] = Rarray[k];
                 k++;
             }  
         } else if( k < Rarray.length ) {
             array[i] = Rarray[k];
             k++;
         } else if( j < Larray.length ){
             array[i] = Larray[j];
             j++;
         }
     }  
}

function mergeSortCountryUP( array, start, end ) {

    var mid;
    if( start < end ) {

        mid = Math.floor( (start+end)/2 );
        console.log("mid=" + mid);

       //break the array in half and recusively break it into 2 until its split into its individual elements
       mergeSortCountryUP( array , start, mid );
       mergeSortCountryUP( array , mid+1, end );

       //sort the individual elements/arrays until it is all sorted
       mergeCountryUP ( array, start, mid, end );
     }    
}





//mergesort: sort down by country





function mergeCountryDown ( array, start, mid, end ){   

     var Larray = [];
     var Rarray = [];


     // copy to new arrays
     var j = 0;
     for( var i = start; i <= mid; i++ ) {
         Larray[j] = array[i];
         j++;
     }
     var k = 0;
     for(var i= mid+1; i <= end; i++ ) {
         Rarray[k] = array[i];
         k++;
     }

     j = 0;
     k = 0;

     //copy the elemets back to list
     for( var i = start; i <= end; i++ ) {
         if ( j < Larray.length && k < Rarray.length ) {
             if ((Larray[j].country) > (Rarray[k].country)){
                 array[i] = Larray[j];
                 j++;
             } else {
                 array[i] = Rarray[k];
                 k++;
             }  
         } else if( k < Rarray.length ) {
             array[i] = Rarray[k];
             k++;
         } else if( j < Larray.length ){
             array[i] = Larray[j];
             j++;
         }
     }     
}

function mergeSortCountryDown( array, start, end ) {

    var mid;
    if( start < end ) {

        mid = Math.floor( (start+end)/2 );
        console.log("mid=" + mid);

       //break the array in half and recusively break it into 2 until its split into its individual elements
       mergeSortCountryDown( array , start, mid );
       mergeSortCountryDown( array , mid+1, end );

       //sort the individual elements/arrays until it is all sorted
       mergeCountryDown ( array, start, mid, end );
     }    
}



//mergesort: sort up by city




function mergeCityUP ( array, start, mid, end ) {   

     var Larray = [];
     var Rarray = [];


     // copy to new arrays
     var j = 0;
     for( var i = start; i <= mid; i++ ) {
         Larray[j] = array[i];
         j++;
     }
     var k = 0;
     for(var i= mid+1; i <= end; i++ ) {
         Rarray[k] = array[i];
         k++;
     }

     j = 0;
     k = 0;

     //copy the elemets back to list
     for( var i = start; i <= end; i++ ) {
         if ( j < Larray.length && k < Rarray.length ) {
             if ((Larray[j].city) < (Rarray[k].city)){
                 array[i] = Larray[j];
                 j++;
             } else {
                 array[i] = Rarray[k];
                 k++;
             }  
         } else if( k < Rarray.length ) {
             array[i] = Rarray[k];
             k++;
         } else if( j < Larray.length ){
             array[i] = Larray[j];
             j++;
         }
     }  
}

function mergeSortCityUP( array, start, end ) {

    var mid;
    if( start < end ) {

        mid = Math.floor( (start+end)/2 );
        console.log("mid=" + mid);

       //break the array in half and recusively break it into 2 until its split into its individual elements
       mergeSortCityUP( array , start, mid );
       mergeSortCityUP( array , mid+1, end );

       //sort the individual elements/arrays until it is all sorted
       mergeCityUP ( array, start, mid, end );
     }    
}





//mergesort: sort down by city





function mergeCityDown ( array, start, mid, end ){   

     var Larray = [];
     var Rarray = [];


     // copy to new arrays
     var j = 0;
     for( var i = start; i <= mid; i++ ) {
         Larray[j] = array[i];
         j++;
     }
     var k = 0;
     for(var i= mid+1; i <= end; i++ ) {
         Rarray[k] = array[i];
         k++;
     }

     j = 0;
     k = 0;

     //copy the elemets back to list
     for( var i = start; i <= end; i++ ) {
         if ( j < Larray.length && k < Rarray.length ) {
             if ((Larray[j].city) > (Rarray[k].city)){
                 array[i] = Larray[j];
                 j++;
             } else {
                 array[i] = Rarray[k];
                 k++;
             }  
         } else if( k < Rarray.length ) {
             array[i] = Rarray[k];
             k++;
         } else if( j < Larray.length ){
             array[i] = Larray[j];
             j++;
         }
     }     
}

function mergeSortCityDown( array, start, end ) {

    var mid;
    if( start < end ) {

        mid = Math.floor( (start+end)/2 );
        console.log("mid=" + mid);

       //break the array in half and recusively break it into 2 until its split into its individual elements
       mergeSortCityDown( array , start, mid );
       mergeSortCityDown( array , mid+1, end );

       //sort the individual elements/arrays until it is all sorted
       mergeCityDown ( array, start, mid, end );
     }    
}




//mergesort: sort up by year





function mergeYearUP ( array, start, mid, end ) {   

     var Larray = [];
     var Rarray = [];


     // copy to new arrays
     var j = 0;
     for( var i = start; i <= mid; i++ ) {
         Larray[j] = array[i];
         j++;
     }
     var k = 0;
     for(var i= mid+1; i <= end; i++ ) {
         Rarray[k] = array[i];
         k++;
     }

     j = 0;
     k = 0;

     //copy the elemets back to list
     for( var i = start; i <= end; i++ ) {
         if ( j < Larray.length && k < Rarray.length ) {
             if ((Larray[j].year) < (Rarray[k].year)){
                 array[i] = Larray[j];
                 j++;
             } else {
                 array[i] = Rarray[k];
                 k++;
             }  
         } else if( k < Rarray.length ) {
             array[i] = Rarray[k];
             k++;
         } else if( j < Larray.length ){
             array[i] = Larray[j];
             j++;
         }
     }  
}

function mergeSortYearUP( array, start, end ) {

    var mid;
    if( start < end ) {

        mid = Math.floor( (start+end)/2 );
        console.log("mid=" + mid);

       //break the array in half and recusively break it into 2 until its split into its individual elements
       mergeSortYearUP( array , start, mid );
       mergeSortYearUP( array , mid+1, end );

       //sort the individual elements/arrays until it is all sorted
       mergeYearUP ( array, start, mid, end );
     }    
}





//mergesort: sort down by year





function mergeYearDown ( array, start, mid, end ){   

     var Larray = [];
     var Rarray = [];


     // copy to new arrays
     var j = 0;
     for( var i = start; i <= mid; i++ ) {
         Larray[j] = array[i];
         j++;
     }
     var k = 0;
     for(var i= mid+1; i <= end; i++ ) {
         Rarray[k] = array[i];
         k++;
     }

     j = 0;
     k = 0;

     //copy the elemets back to list
     for( var i = start; i <= end; i++ ) {
         if ( j < Larray.length && k < Rarray.length ) {
             if ((Larray[j].year) > (Rarray[k].year)){
                 array[i] = Larray[j];
                 j++;
             } else {
                 array[i] = Rarray[k];
                 k++;
             }  
         } else if( k < Rarray.length ) {
             array[i] = Rarray[k];
             k++;
         } else if( j < Larray.length ){
             array[i] = Larray[j];
             j++;
         }
     }     
}

function mergeSortYearDown( array, start, end ) {

    var mid;
    if( start < end ) {

        mid = Math.floor( (start+end)/2 );
        console.log("mid=" + mid);

       //break the array in half and recusively break it into 2 until its split into its individual elements
       mergeSortYearDown( array , start, mid );
       mergeSortYearDown( array , mid+1, end );

       //sort the individual elements/arrays until it is all sorted
       mergeYearDown ( array, start, mid, end );
     }    
}





//mergesort: sort up by month






function mergeMonthUP ( array, start, mid, end ) {   

     var Larray = [];
     var Rarray = [];


     // copy to new arrays
     var j = 0;
     for( var i = start; i <= mid; i++ ) {
         Larray[j] = array[i];
         j++;
     }
     var k = 0;
     for(var i= mid+1; i <= end; i++ ) {
         Rarray[k] = array[i];
         k++;
     }

     j = 0;
     k = 0;

     //copy the elemets back to list
     for( var i = start; i <= end; i++ ) {
         if ( j < Larray.length && k < Rarray.length ) {
             if ((Larray[j].month) < (Rarray[k].month)){
                 array[i] = Larray[j];
                 j++;
             } else {
                 array[i] = Rarray[k];
                 k++;
             }  
         } else if( k < Rarray.length ) {
             array[i] = Rarray[k];
             k++;
         } else if( j < Larray.length ){
             array[i] = Larray[j];
             j++;
         }
     }  
}

function mergeSortMonthUP( array, start, end ) {

    var mid;
    if( start < end ) {

        mid = Math.floor( (start+end)/2 );
        console.log("mid=" + mid);

       //break the array in half and recusively break it into 2 until its split into its individual elements
       mergeSortMonthUP( array , start, mid );
       mergeSortMonthUP( array , mid+1, end );

       //sort the individual elements/arrays until it is all sorted
       mergeMonthUP ( array, start, mid, end );
     }    
}





//mergesort: sort down by month





function mergeMonthDown ( array, start, mid, end ){   

     var Larray = [];
     var Rarray = [];


     // copy to new arrays
     var j = 0;
     for( var i = start; i <= mid; i++ ) {
         Larray[j] = array[i];
         j++;
     }
     var k = 0;
     for(var i= mid+1; i <= end; i++ ) {
         Rarray[k] = array[i];
         k++;
     }

     j = 0;
     k = 0;

     //copy the elemets back to list
     for( var i = start; i <= end; i++ ) {
         if ( j < Larray.length && k < Rarray.length ) {
             if ((Larray[j].month) > (Rarray[k].month)){
                 array[i] = Larray[j];
                 j++;
             } else {
                 array[i] = Rarray[k];
                 k++;
             }  
         } else if( k < Rarray.length ) {
             array[i] = Rarray[k];
             k++;
         } else if( j < Larray.length ){
             array[i] = Larray[j];
             j++;
         }
     }     
}

function mergeSortMonthDown( array, start, end ) {

    var mid;
    if( start < end ) {

        mid = Math.floor( (start+end)/2 );
        console.log("mid=" + mid);

       //break the array in half and recusively break it into 2 until its split into its individual elements
       mergeSortMonthDown( array , start, mid );
       mergeSortMonthDown( array , mid+1, end );

       //sort the individual elements/arrays until it is all sorted
       mergeMonthDown ( array, start, mid, end );
     }    
}





//mergesort: sort up by day





function mergeDayUP ( array, start, mid, end ) {   

     var Larray = [];
     var Rarray = [];


     // copy to new arrays
     var j = 0;
     for( var i = start; i <= mid; i++ ) {
         Larray[j] = array[i];
         j++;
     }
     var k = 0;
     for(var i= mid+1; i <= end; i++ ) {
         Rarray[k] = array[i];
         k++;
     }

     j = 0;
     k = 0;

     //copy the elemets back to list
     for( var i = start; i <= end; i++ ) {
         if ( j < Larray.length && k < Rarray.length ) {
             if ((Larray[j].day) < (Rarray[k].day)){
                 array[i] = Larray[j];
                 j++;
             } else {
                 array[i] = Rarray[k];
                 k++;
             }  
         } else if( k < Rarray.length ) {
             array[i] = Rarray[k];
             k++;
         } else if( j < Larray.length ){
             array[i] = Larray[j];
             j++;
         }
     }  
}

function mergeSortDayUP( array, start, end ) {

    var mid;
    if( start < end ) {

        mid = Math.floor( (start+end)/2 );
        console.log("mid=" + mid);

       //break the array in half and recusively break it into 2 until its split into its individual elements
       mergeSortDayUP( array , start, mid );
       mergeSortDayUP( array , mid+1, end );

       //sort the individual elements/arrays until it is all sorted
       mergeDayUP ( array, start, mid, end );
     }    
}




//mergesort: sort down by day



function mergeDayDown ( array, start, mid, end ){   

     var Larray = [];
     var Rarray = [];


     // copy to new arrays
     var j = 0;
     for( var i = start; i <= mid; i++ ) {
         Larray[j] = array[i];
         j++;
     }
     var k = 0;
     for(var i= mid+1; i <= end; i++ ) {
         Rarray[k] = array[i];
         k++;
     }

     j = 0;
     k = 0;

     //copy the elemets back to list
     for( var i = start; i <= end; i++ ) {
         if ( j < Larray.length && k < Rarray.length ) {
             if ((Larray[j].day) > (Rarray[k].day)){
                 array[i] = Larray[j];
                 j++;
             } else {
                 array[i] = Rarray[k];
                 k++;
             }  
         } else if( k < Rarray.length ) {
             array[i] = Rarray[k];
             k++;
         } else if( j < Larray.length ){
             array[i] = Larray[j];
             j++;
         }
     }     
}

function mergeSortDayDown( array, start, end ) {

    var mid;
    if( start < end ) {

        mid = Math.floor( (start+end)/2 );
        console.log("mid=" + mid);

       //break the array in half and recusively break it into 2 until its split into its individual elements
       mergeSortDayDown( array , start, mid );
       mergeSortDayDown( array , mid+1, end );

       //sort the individual elements/arrays until it is all sorted
       mergeDayDown ( array, start, mid, end );
     }    
}





//mergesort: sort up by name



function mergeNameUP ( array, start, mid, end ) {   

     var Larray = [];
     var Rarray = [];


     // copy to new arrays
     var j = 0;
     for( var i = start; i <= mid; i++ ) {
         Larray[j] = array[i];
         j++;
     }
     var k = 0;
     for(var i= mid+1; i <= end; i++ ) {
         Rarray[k] = array[i];
         k++;
     }

     j = 0;
     k = 0;

     //copy the elemets back to list
     for( var i = start; i <= end; i++ ) {
         if ( j < Larray.length && k < Rarray.length ) {
             if ((Larray[j].Bname) < (Rarray[k].Bname)){
                 array[i] = Larray[j];
                 j++;
             } else {
                 array[i] = Rarray[k];
                 k++;
             }  
         } else if( k < Rarray.length ) {
             array[i] = Rarray[k];
             k++;
         } else if( j < Larray.length ){
             array[i] = Larray[j];
             j++;
         }
     }  
}

function mergeSortNameUP( array, start, end ) {

    var mid;
    if( start < end ) {

        mid = Math.floor( (start+end)/2 );
        console.log("mid=" + mid);

       //break the array in half and recusively break it into 2 until its split into its individual elements
       mergeSortNameUP( array , start, mid );
       mergeSortNameUP( array , mid+1, end );

       //sort the individual elements/arrays until it is all sorted
       mergeNameUP ( array, start, mid, end );
     }    
}





//mergesort: sort down by name



function mergeNameDown ( array, start, mid, end ){   

     var Larray = [];
     var Rarray = [];


     // copy to new arrays
     var j = 0;
     for( var i = start; i <= mid; i++ ) {
         Larray[j] = array[i];
         j++;
     }
     var k = 0;
     for(var i= mid+1; i <= end; i++ ) {
         Rarray[k] = array[i];
         k++;
     }

     j = 0;
     k = 0;

     //copy the elemets back to list
     for( var i = start; i <= end; i++ ) {
         if ( j < Larray.length && k < Rarray.length ) {
             if ((Larray[j].Bname) > (Rarray[k].Bname)){
                 array[i] = Larray[j];
                 j++;
             } else {
                 array[i] = Rarray[k];
                 k++;
             }  
         } else if( k < Rarray.length ) {
             array[i] = Rarray[k];
             k++;
         } else if( j < Larray.length ){
             array[i] = Larray[j];
             j++;
         }
     }     
}

function mergeSortNameDown( array, start, end ) {

    var mid;
    if( start < end ) {

        mid = Math.floor( (start+end)/2 );
        console.log("mid=" + mid);

       //break the array in half and recusively break it into 2 until its split into its individual elements
       mergeSortNameDown( array , start, mid );
       mergeSortNameDown( array , mid+1, end );

       //sort the individual elements/arrays until it is all sorted
       mergeNameDown ( array, start, mid, end );
     }    
}




