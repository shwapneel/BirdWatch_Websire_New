function Bird ( Birdname , daySpot, monthSpot, yearSpot, citySpot, countrySpot ) { 
  this.Bname= Birdname; 
  this.day= daySpot; 
  this.month= monthSpot; 
  this.year= yearSpot; 
  this.city= citySpot; 
  this.country= countrySpot; 
} 

function getBirdData() { 

   var BirdArray = [ ]; 

   BirdArray[ 0 ] = new Bird( "Bald Eagle" , 4 , 2 , 2017 , "Washington.D.C" , "America" ); 
   BirdArray[ 1 ] = new Bird( "Blue Jay" , 12 , 2 , 2017 , "Waterloo" , "Canada" ); 
   BirdArray[ 2 ] = new Bird( "Burrowing Owl" , 2 , 4 , 2017 , "Rio De Janerio" , "Brazil" ); 
   BirdArray[ 3 ] = new Bird( "Cardinal" , 4 , 4 , 2017 , "Mexico City" , "Mexico" ); 
   BirdArray[ 4 ] = new Bird( "Great horned owl" , 2 , 1 , 2017 , "Toronto" , "Canada" ); 
   BirdArray[ 5 ] = new Bird( "Hummingbird" , 4 , 1 , 2017 , "Boston" , "America" ); 
   BirdArray[ 6 ] = new Bird( "Hummingbird" , 4 , 1 , 2017 , "Boston" , "America" ); 
   BirdArray[ 7 ] = new Bird( "Peregrine Falcon" , 5 , 4 , 2017 , "Sydney" , "Australia" ); 
   BirdArray[ 8 ] = new Bird( "Red Tailed Hawk" , 3 , 2 , 2017 , "Montreal" , "Canada" ); 
   BirdArray[ 9 ] = new Bird( "Robin" , 25 , 3 , 2017 , "Sydney" , "Australia" ); 
   BirdArray[ 10 ] = new Bird( "Robin" , 25 , 3 , 2017 , "Sydney" , "Australia" ); 

   return BirdArray; 

};