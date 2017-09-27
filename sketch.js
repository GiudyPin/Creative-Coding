function setup() {
  createCanvas(800,600);
  
}

function draw() {
background(200,200,255);  
strokeWeight(5); //spessore delle linee di contorno
stroke(100,100,200); //metter i tre valori di rgb per mettere il colore, basta mettere queso comendo prima di ogni figura per far si che assuma il colore

  rect(150,100,500,400)

fill (50,50,100); //si può specificare anche un quarto valore che corrisponte all'opacità, va sempre da 0 a 255
  ellipse(400,300,450,350);

fill (70,70,120);
  rect(250,200,300,200); //prima scrivere il punto da dove parte (in alto a destra), poi larghezza e altezza
  
fill (90,90,140);
  ellipse(400,300,200,150); //prima scrivere il centro dell'ellisse, poi larghezza e altezza
  line(400,50,400,550); //prima scrivere coordinate punto di partenza, dopo coordinate punto di arrivo
  line(50,300,750,300); 
  line(50,50,750,550); 
  line(750,50,50,550); 
  
  //ellipse(mouseX,mouseY, 20,20);
  line(pmouseX,pmouseY,mouseX, mouseY);
  
  colorMode(HSB)
  colorMode(RGB)
}