/*
dp is the hieght in dp units
p5js is an instance of p5js
*/
function hrzKeylines (guideX, guideY, dp, p5js){
  p5js.stroke(0,55, 275, 100);
  // Status
  var gap = dp * 4;
  p5js.line (guideX, guideY + gap , guideX + 375, guideY + gap);
  // Toolbar
  gap = gap + dp * 7;
  p5js.line (guideX, guideY + gap , guideX + 375, guideY + gap);
  // content spacer
  gap = gap + dp;
  p5js.line (guideX, guideY + gap , guideX + 375, guideY + gap);
  // Item List
  for (var i=0; i < 4; i++){
    gap = gap + dp * 9;
    p5js.line (guideX, guideY + gap , guideX + 375, guideY + gap);
  }
  // Content spacer
  gap = gap + dp;
  p5js.line (guideX, guideY + gap , guideX + 375, guideY + gap);
  // Item List
  for (var i=0; i < 6; i++){
    gap = gap + dp * 9;
    p5js.line (guideX, guideY + gap , guideX + 375, guideY + gap);
  }
}

