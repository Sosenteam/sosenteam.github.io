let r = 0; //random number
let x = 10; // X POS
let y = 0; // Y POX
let col = 0; // LERP PERCENT 0-1
let color1; // TOP COLOR
let color2;// BOTTOM
let bacCol = 0; // BACKGROUND 0-255:GREYSCALE 300:CLEAR
let mr = 1;
let rr = 2; //RANDOM # MAX
let xx = 10; //X SPACING
let yy = 10; //Y SPACING
let sxx = 0.01// X SPACING CHANGE
let c;
let rrr = Math.random(99);



function setup() {
  c = createCanvas(windowWidth , windowHeight);
  
  colorMode(RGB); // RGB HSL HSB
  frameRate(200);
  color1 = color("rgb(206,40,206)");
  color2 = color("#03A9F4");
  //SAVE
  button = createButton('SAVE');
  button.position(width-80, 10);
  button.mousePressed(saveC);
  //SLIDER RANDOM
  slider = createSlider(0, 4, mr, 1);
  slider.position(0, 40);
  slider.style('width', '80px');
    //SLIDER RANDOM
  slidera = createSlider(0, 4, rr, 1);
  slidera.position(0, 10);
  slidera.style('width', '80px');
  // CURVY
  slider2 = createSlider(0, 0.1, 0, 0.001);
  slider2.position(100, 10);
  slider2.style('width', '80px');
  //random stroke
  slider3 = createSlider(0, 100, 10);
  slider3.position(300, 10);
  slider3.style('width', '80px');
  
  
  sliderBac = createSlider(0,300,0);
  sliderBac.position(200,10);
  sliderBac.style('width','80px');
  bacCol = sliderBac.value();
  
  //CHECK BOXES
  ch1 = createCheckbox('', true);
  ch1.position(10,80);
  
  ch1a = createCheckbox('', false);
  ch1a.position(30,80);
  //.                             //
  ch2 = createCheckbox('', true);
  ch2.position(10,100);
  //.                             //
  ch3 = createCheckbox('', true);
  ch3.position(10,120);
  
  ch3a = createCheckbox('', false);
  ch3a.position(30,120);
  
  ch3b = createCheckbox('', false);
  ch3b.position(50,120);
  //.                             //
  ch4 = createCheckbox('', true);
  ch4.position(10,140);
  ch4a = createCheckbox('', false);
  ch4a.position(30,140);
  ch4b = createCheckbox('', false);
  ch4b.position(50,140);
  //.                             //

  ch5 = createCheckbox('', false);
  ch5.position(10,160);
  
  
  if(bacCol == 300){
    clear();
  }else{
    background(bacCol);
  }
      randomSeed(rrr);

}

function draw() {
  for(var i = 0; i <height*2; i+=yy){

  //random funky fresh
  // yy += random(-1,+1);
  
  //set vars
    rr = slider.value();
    mr = slidera.value();
    sxx = slider2.value();
  r = round(random(mr,rr),0);

  //color
  stroke(lerpColor(color1,color2,col));
  strokeWeight(0.5);
  textSize(10);
  noFill();
  if(ch5.checked()){
    strokeWeight(random(1,slider3.value()))
  }
  //lines
  if(y<height+10){
      if(r == 1){
          
          if(ch1.checked()){line(x,y,x+10,y+10);}
          if(ch1a.checked()){text(String.fromCharCode(random(20,5872)),x,y);}

      }else if(r == 2){
        
         if(ch2.checked()){ line(x,y+10,x+10,y);}
      }else if(r == 3){
        
          if(ch3.checked()){ellipse(x+5,y+5,1,1);}

          if(ch3a.checked()){rect(x,y,10,10);} // rectangle
        if(ch3b.checked()){line(x,y,x+10,y+10);line(x,y+10,x+10,y);}
        
      }else if(r == 4){
          if(ch4.checked()){text(String.fromCharCode(random(1,5880)),x,y);} // random Char
        if(ch4a.checked()){ellipse(x+5,y+5,10,10)}
        if(ch4b.checked()){line(x,y,x+10,y+10);line(x,y+10,x+10,y);}

      }else if(r == 5){
        
        
      }
      //
      x+=xx;
      //
      if(x>width){
        x=0;
        y += yy;

        col += (1/(height/10))
      }
    }
    
    xx+=sxx;
  }//END OF FOR LOOP
  
}//END OF DRAW

function keyPressed(){
  if(keyCode === 32 ){
  color1 = color(random(1,255),random(1,255),random(1,255));
  color2 = color(random(255,1),random(255,1),random(255,1));
  reset();

  }else if(keyCode === 38 || keyCode === 40){
    rrr = rrr+1;
    reset();
  }else if(keyCode === 67 || keyCode === 97){
  color1 = color(random(1,255),random(1,255),random(1,255));
  color2 = color(random(255,1),random(255,1),random(255,1));
  }
  

}

function saveC (){
  saveCanvas(c, "IMG"+ round(random(1,10000000),0), 'jpg')
  
}

function reset(){
  bacCol = sliderBac.value();
  if(bacCol == 300){
    clear();
  }else{
    background(bacCol);
  }
  y = 0;
   xx = 10;
  yy = 10;
  col = 0;
  randomSeed(rrr);

}
