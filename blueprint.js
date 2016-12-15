function Speed (wheel,topspeed, color){
  this.wheels = wheel,
  this.topspeed = topspeed,
  this.color = color,
  this.traveltime = function(){
    return  0.25 / (this.topspeed/3600);
  }

}

var newcar1 = new Speed(4, 120,'blue');
var newcar2 = new Speed(6, 100, 'red');


 var newobj = {
   wheels : 4,
   topspeed :[120,100]
   color: ['blue','red']
   traveltime: [15, 25]
 }
 function test (testobj, newobj){
   var correct = true;
    if(testobj.wheels !== newobj){
      correct = false;
      console.log(correct);
    }
 }
 if (testobjObj.topSpeed.indexOf(testobjObj.topSpeed) === -1){

    console.log('topSpeed is', true);
  }
  if (testobjObj.color.indexOf(testobjObj.color) === -1){

     console.log('color is', true);
   }
   if (testobjObj.traveltime.indexOf(testobjObj.traveltime) === -1){

      console.log('traveltime is', true);
    }
    return correct;
  }
