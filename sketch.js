let introButton;
let projectButton;
let circleColor;
let intervalId;

function setup() {
  createCanvas(windowWidth, windowHeight);
  introButton = createButton('自我介紹');
  introButton.position(150, 50);
  introButton.style('font-size', '20px');
  introButton.mousePressed(showIntro);
  introButton.mouseOver(startBlinking);
  introButton.mouseOut(stopBlinking);

  projectButton = createButton('作品簡介');
  projectButton.position(300, 50);
  projectButton.style('font-size', '20px');
  projectButton.mousePressed(showProject);
  projectButton.mouseOver(startBlinking);
  projectButton.mouseOut(stopBlinking);

  circleColor = color(255);
}

function draw() {
  background(220);
  let introButtonWidth = introButton.width;
  fill(circleColor);
  drawStar(150 - introButtonWidth / 2 - 20, 50 + 10, introButtonWidth / 4, introButtonWidth / 2);
}

function drawStar(x, y, radius1, radius2) {
  let angle = TWO_PI / 5;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function showIntro() {
  alert('這是自我介紹');
  let iframe = createElement('iframe');
  iframe.attribute('src', 'https://www.facebook.com/MathKyaru/?locale=zh_TW');
  iframe.attribute('width', windowWidth * 0.8);
  iframe.attribute('height', windowHeight * 0.8);
  iframe.position(windowWidth * 0.1, windowHeight * 0.1);
}

function showProject() {
  alert('這是作品簡介');
  let iframe = createElement('iframe');
  iframe.attribute('src', 'https://www.instagram.com/math_kyaru/');
  iframe.attribute('width', windowWidth * 0.8);
  iframe.attribute('height', windowHeight * 0.8);
  iframe.position(windowWidth * 0.1, windowHeight * 0.1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function startBlinking() {
  intervalId = setInterval(() => {
    circleColor = color(random(255), random(255), random(255));
  }, 500);
}

function stopBlinking() {
  clearInterval(intervalId);
  circleColor = color(255);
}
