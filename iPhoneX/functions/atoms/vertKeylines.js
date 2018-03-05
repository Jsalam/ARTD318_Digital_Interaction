
var vertKeylines = function (guideX, guideY){
  stroke(255,0, 175, 100);
  // Left 12
  line (guideX + 12, guideY, guideX + 12, guideY + 812);
  // Left 72
  line (guideX + 72, guideY, guideX + 72, guideY + 812);
  // Right 12
  line (guideX + 375-12, guideY, guideX + 375-12, guideY + 812);
  // Right 32
  line (guideX + 375-32, guideY, guideX + 375-32, guideY + 812);
  // Right 56
  line (guideX + 375-56, guideY, guideX + 375-56, guideY + 812);
};

