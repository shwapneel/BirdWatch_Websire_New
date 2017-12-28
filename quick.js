//all functions are quick sort functions that sort different object fields
//sorts by: name, day, month, year, city, and country

// General QuickSort Algoritm
function quickSort ( start , end ) {
   
   if ( start < end ) {
      var pivot = start;
      var low = start+1;
      var high = end;

      while(low < high) {

         while( low < end && BirdArray[low] < BirdArray[pivot] ) {
            low++;
         }
         while( high > start && BirdArray[high] >= BirdArray[pivot] ) {
            high--;
         }     
         if ( low < high ) {
            var temp1 = BirdArray[low];
            BirdArray[low] = BirdArray[high];
            BirdArray[high] = temp1;
         } else {
            var temp2 = holdArray[high];
            BirdArray[high] = BirdArray[pivot];
            BirdArray[pivot] = temp2;
            pivot = high;
         }
      }
    

      quickSort(start,pivot-1);

      quickSort(pivot+1,end);
   }
}

//quicksort: sort up by name

function quickSortNameUP ( start , end, a ) {

   if ( start < end ) {
      var pivot = start;
      var low = start+1;
      var high = end;

      while(low < high) {

         while( low < end && a[low].Bname < a[pivot].Bname ) {
            low++;
         }
         while( high > start && a[high].Bname >= a[pivot].Bname ) {
            high--;
         }     
         if ( low < high ) {
            var temp1 = a[low];
            a[low] = a[high];
            a[high] = temp1;
         } else {
            var temp2 = a[high];
            a[high] = a[pivot];
            a[pivot] = temp2;
            pivot = high;
         }
      }
    

      quickSortNameUP(start,pivot-1 ,a);

      quickSortNameUP(pivot+1,end ,a);
  
   }

}


function quickSortNameDOWN ( start , end ,a) {

      if ( start < end ) {
      var pivot = start;
      var high = start+1;
      var low = end;

      while(high < low) {

         while( high < end && a[high].Bname >= a[pivot].Bname ) {
            high++;
         }
         while( low > start && a[low].Bname < a[pivot].Bname ) {
            low--;
         }     
         if ( high < low ) {
            var temp1 = a[high];
            a[high] = a[low];
            a[low] = temp1;
         } else {
            var temp2 = a[low];
            a[low] = a[pivot];
            a[pivot] = temp2;
            pivot = low;
         }
      }
    

      quickSortNameDOWN(start,pivot-1 ,a);

      quickSortNameDOWN(pivot+1,end ,a);
  
   }

}

//quicksort: sort up by day

function quickSortdayUP ( start , end, a ) {

   if ( start < end ) {
      var pivot = start;
      var low = start+1;
      var high = end;

      while(low < high) {

         while( low < end && a[low].day < a[pivot].day ) {
            low++;
         }
         while( high > start && a[high].day >= a[pivot].day ) {
            high--;
         }     
         if ( low < high ) {
            var temp1 = a[low];
            a[low] = a[high];
            a[high] = temp1;
         } else {
            var temp2 = a[high];
            a[high] = a[pivot];
            a[pivot] = temp2;
            pivot = high;
         }
      }
    

      quickSortdayUP(start,pivot-1 ,a);

      quickSortdayUP(pivot+1,end ,a);
  
   }

}


function quickSortdayDOWN ( start , end ,a) {

      if ( start < end ) {
      var pivot = start;
      var high = start+1;
      var low = end;

      while(high < low) {

         while( high < end && a[high].day >= a[pivot].day ) {
            high++;
         }
         while( low > start && a[low].day < a[pivot].day ) {
            low--;
         }     
         if ( high < low ) {
            var temp1 = a[high];
            a[high] = a[low];
            a[low] = temp1;
         } else {
            var temp2 = a[low];
            a[low] = a[pivot];
            a[pivot] = temp2;
            pivot = low;
         }
      }
    

      quickSortdayDOWN(start,pivot-1 ,a);

      quickSortdayDOWN(pivot+1,end ,a);
  
   }

}

////quicksort: sort up by month

function quickSortmonthUP ( start , end, a ) {

   if ( start < end ) {
      var pivot = start;
      var low = start+1;
      var high = end;

      while(low < high) {

         while( low < end && a[low].month < a[pivot].month ) {
            low++;
         }
         while( high > start && a[high].month >= a[pivot].month ) {
            high--;
         }     
         if ( low < high ) {
            var temp1 = a[low];
            a[low] = a[high];
            a[high] = temp1;
         } else {
            var temp2 = a[high];
            a[high] = a[pivot];
            a[pivot] = temp2;
            pivot = high;
         }
      }
    

      quickSortmonthUP(start,pivot-1 ,a);

      quickSortmonthUP(pivot+1,end ,a);
  
   }

}



function quickSortmonthDOWN ( start , end ,a) {

      if ( start < end ) {
      var pivot = start;
      var high = start+1;
      var low = end;

      while(high < low) {

         while( high < end && a[high].month >= a[pivot].month ) {
            high++;
         }
         while( low > start && a[low].month < a[pivot].month ) {
            low--;
         }     
         if ( high < low ) {
            var temp1 = a[high];
            a[high] = a[low];
            a[low] = temp1;
         } else {
            var temp2 = a[low];
            a[low] = a[pivot];
            a[pivot] = temp2;
            pivot = low;
         }
      }
    

      quickSortmonthDOWN(start,pivot-1 ,a);

      quickSortmonthDOWN(pivot+1,end ,a);
  
   }
 
}

////quicksort: sort up by year
function quickSortyearUP ( start , end, a ) {

   if ( start < end ) {
      var pivot = start;
      var low = start+1;
      var high = end;

      while(low < high) {

         while( low < end && a[low].year < a[pivot].year ) {
            low++;
         }
         while( high > start && a[high].year >= a[pivot].year ) {
            high--;
         }     
         if ( low < high ) {
            var temp1 = a[low];
            a[low] = a[high];
            a[high] = temp1;
         } else {
            var temp2 = a[high];
            a[high] = a[pivot];
            a[pivot] = temp2;
            pivot = high;
         }
      }
    

      quickSortyearUP(start,pivot-1 ,a);

      quickSortyearUP(pivot+1,end ,a);
  
   }

}



function quickSortyearDOWN ( start , end ,a) {

      if ( start < end ) {
      var pivot = start;
      var high = start+1;
      var low = end;

      while(high < low) {

         while( high < end && a[high].year >= a[pivot].year ) {
            high++;
         }
         while( low > start && a[low].year < a[pivot].year ) {
            low--;
         }     
         if ( high < low ) {
            var temp1 = a[high];
            a[high] = a[low];
            a[low] = temp1;
         } else {
            var temp2 = a[low];
            a[low] = a[pivot];
            a[pivot] = temp2;
            pivot = low;
         }
      }
    

      quickSortyearDOWN(start,pivot-1 ,a);

      quickSortyearDOWN(pivot+1,end ,a);
  
   }

}


////quicksort: sort up by city

function quickSortcityUP ( start , end, a ) {

   if ( start < end ) {
      var pivot = start;
      var low = start+1;
      var high = end;

      while(low < high) {

         while( low < end && a[low].city < a[pivot].city ) {
            low++;
         }
         while( high > start && a[high].city >= a[pivot].city ) {
            high--;
         }     
         if ( low < high ) {
            var temp1 = a[low];
            a[low] = a[high];
            a[high] = temp1;
         } else {
            var temp2 = a[high];
            a[high] = a[pivot];
            a[pivot] = temp2;
            pivot = high;
         }
      }
    

      quickSortcityUP(start,pivot-1 ,a);

      quickSortcityUP(pivot+1,end ,a);
  
   }

}



function quickSortcityDOWN ( start , end ,a) {

      if ( start < end ) {
      var pivot = start;
      var high = start+1;
      var low = end;

      while(high < low) {

         while( high < end && a[high].city >= a[pivot].city ) {
            high++;
         }
         while( low > start && a[low].city < a[pivot].city ) {
            low--;
         }     
         if ( high < low ) {
            var temp1 = a[high];
            a[high] = a[low];
            a[low] = temp1;
         } else {
            var temp2 = a[low];
            a[low] = a[pivot];
            a[pivot] = temp2;
            pivot = low;
         }
      }
    

      quickSortcityDOWN(start,pivot-1 ,a);

      quickSortcityDOWN(pivot+1,end ,a);
  
   }

}


////quicksort: sort up by country

function quickSortcountryUP ( start , end, a ) {

   if ( start < end ) {
      var pivot = start;
      var low = start+1;
      var high = end;

      while(low < high) {

         while( low < end && a[low].country < a[pivot].country ) {
            low++;
         }
         while( high > start && a[high].country >= a[pivot].country ) {
            high--;
         }     
         if ( low < high ) {
            var temp1 = a[low];
            a[low] = a[high];
            a[high] = temp1;
         } else {
            var temp2 = a[high];
            a[high] = a[pivot];
            a[pivot] = temp2;
            pivot = high;
         }
      }
    

      quickSortcountryUP(start,pivot-1 ,a);

      quickSortcountryUP(pivot+1,end ,a);
  
   }

}



function quickSortcountryDOWN ( start , end ,a) {

      if ( start < end ) {
      var pivot = start;
      var high = start+1;
      var low = end;

      while(high < low) {

         while( high < end && a[high].country >= a[pivot].country ) {
            high++;
         }
         while( low > start && a[low].country < a[pivot].country ) {
            low--;
         }     
         if ( high < low ) {
            var temp1 = a[high];
            a[high] = a[low];
            a[low] = temp1;
         } else {
            var temp2 = a[low];
            a[low] = a[pivot];
            a[pivot] = temp2;
            pivot = low;
         }
      }
    

      quickSortcountryDOWN(start,pivot-1 ,a);

      quickSortcountryDOWN(pivot+1,end ,a);
  
   }

}

