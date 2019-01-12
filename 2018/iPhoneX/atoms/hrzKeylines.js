var hrzKeylines = function(guideX, guideY){
  stroke(0,55, 275, 100);
  // Status
  var gap = dp * 4;
  line (guideX, guideY + gap , guideX + 375, guideY + gap);
  // Toolbar
  gap = gap + dp * 7;
  line (guideX, guideY + gap , guideX + 375, guideY + gap);
  // content spacer
  gap = gap + dp;
  line (guideX, guideY + gap , guideX + 375, guideY + gap);
  // Item List
  for (var i=0; i < 4; i++){
    gap = gap + dp * 9;
    line (guideX, guideY + gap , guideX + 375, guideY + gap);
  }
  // Content spacer
  gap = gap + dp;
  line (guideX, guideY + gap , guideX + 375, guideY + gap);
  // Item List
  for (var i=0; i < 6; i++){
    gap = gap + dp * 9;
    line (guideX, guideY + gap , guideX + 375, guideY + gap);
  }
}

