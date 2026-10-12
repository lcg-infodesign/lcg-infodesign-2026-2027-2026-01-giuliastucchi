let xMax = 600;
let yMax = 600;

let xMin = 0;

let centerX = xMax / 2;
let centerY = yMax / 2;

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(252, 196, 237);

  /*testa gatto */ 
  noStroke();
  fill(255);
  ellipse(centerX, centerY, 400, 400);

  /* naso gatto */ 
  noStroke();
  fill(0);
  triangle(centerX - 30, centerY + 20, centerX + 30, centerY + 20, centerX, centerY + 55);

  /* orecchie sx e dx */ 
  noStroke();
  fill(255);
  triangle(centerX - 125, centerY - 155, centerX - 125, centerY - 250, centerX - 60, centerY - 175);
  triangle(centerX + 125, centerY - 155, centerX + 125, centerY - 250, centerX + 60, centerY - 175);

  /* occhi sx e dx */ 
  noStroke();
  fill(188, 216, 150);
  ellipse(centerX - 73, centerY - 60, 70, 70);
  ellipse(centerX + 73, centerY - 60, 70, 70);

  /*movimento pupille sx e dx*/
  let sguardo;
  if (mouseX < centerX)   /* se la posizione della x del mouse è minore della x del centro guarda a sinistra e il topo è a destra */ {
    sguardo = -15; 

    /* topolino a destra */ 
    /* orecchio dietro */ 
    noStroke();
    fill(240)
    ellipse(xMax-20, centerY - 200, 35, 35);

    /* orecchio davanti */ 
    noStroke();
    fill(200)
    ellipse(xMax-25, centerY - 200, 35, 35);

    /* corpo topo */ 
    noStroke();
    fill(230);
    ellipse(xMax-15, centerY - 160, 150, 80);

    /* naso topo */ 
    noStroke();
    fill(252, 196, 200);
    triangle(xMax-75, centerY - 160, xMax-70, centerY - 152, xMax-65, centerY - 160);

    /* occhio topo*/ 
    noStroke();
    fill(0);
    ellipse(xMax-50, centerY - 175, 7, 7);

  } else {  /* se invece la posizione della x del mouse è maggiore della x del centro il gattoguarda a destra e il topo è a sinistra */
    sguardo = 15;  

    /* topolino a sinistrs */
    /* orecchio dietro */
    noStroke();
    fill(240)
    ellipse(xMin+20, centerY - 200, 35, 35);
  
    /* orecchio davanti */ 
    noStroke();
    fill(200)
    ellipse(xMin+25, centerY - 200, 35, 35);

    /* corpo topo */ 
    noStroke();
    fill(230);
    ellipse(xMin+15, centerY - 160, 150, 80);

    /* naso topo */ 
    noStroke();
    fill(252, 196, 200);
    triangle(xMin+75, centerY - 160, xMin+70, centerY - 152, xMin+65, centerY - 160);

 
    /* occhio topo */ 
    noStroke();
    fill(0);
    ellipse(xMin+50, centerY - 175, 7, 7);
  }


  /* pupille sx e dx */
  noStroke();
  fill(0);
  ellipse(centerX - 73 + sguardo   /* la posizione è in x-73 ma segue il blocco if */, centerY - 60, 20, 40);
  ellipse(centerX + 73 + sguardo, centerY - 60, 20, 40);

  /*baffi*/
  stroke(0);           
  strokeWeight(6); 
  for (let i=0; i<3; i++){ /* ciclo per i tre baffi */ 
  let rotazione = centerY + (i * 20);
  let finebaffi = centerY + 15 + (i * 10);
  line(centerX - 50, finebaffi, centerX - 170,  rotazione);
  line(centerX + 50, finebaffi, centerX + 170,  rotazione);
  }
}
