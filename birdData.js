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
     BirdArray[ 0 ] = new Bird( "Great Horned Owl" ,23,12,2017,"Waterloo","Canada");
     BirdArray[ 1 ] = new Bird( "Great Horned Owl" ,3,2,2017,"Waterloo","Canada");
     BirdArray[ 2 ] = new Bird( "owl" ,23,12,2017,"Waterloo","Canada");
     BirdArray[ 3 ] = new Bird( "Great Horned Owl" ,2,12,2017,"waterloo","canada");
     BirdArray[ 4 ] = new Bird( "blue bird" ,28,12,2017,"Waterloo","Canada");
     BirdArray[ 5 ] = new Bird( "An Owl" ,1,2,2017,"mississauga","canada");
     BirdArray[ 6 ] = new Bird( "canary" ,3,2,2016,"waterloo","canada");
     BirdArray[ 7 ] = new Bird( "robin" ,2,4,1990,"toronto","canada");
 return BirdArray; 
};
