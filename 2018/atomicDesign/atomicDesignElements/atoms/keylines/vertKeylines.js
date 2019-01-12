
function vertKeylines(guideX, guideY, p5js){
  p5js.stroke(255,0, 175, 100);
  // Left 12
  p5js.line (guideX + 12, guideY, guideX + 12, guideY + 812);
  // Left 72
  p5js.line (guideX + 72, guideY, guideX + 72, guideY + 812);
  // Right 12
  p5js.line (guideX + 375-12, guideY, guideX + 375-12, guideY + 812);
  // Right 32
  p5js.line (guideX + 375-32, guideY, guideX + 375-32, guideY + 812);
  // Right 56
  p5js.line (guideX + 375-56, guideY, guideX + 375-56, guideY + 812);
}

