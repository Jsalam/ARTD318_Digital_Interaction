var spacers = function(guideX, guideY){
  var gap = 0;
  statusBar(guideX, guideY, 375);
  gap = gap + dp * 4;
  toolBar(guideX, guideY + gap, 375);
  gap = gap + dp * 7;
  contentSpacer(guideX,guideY+gap, 375, 1);
  gap = gap + dp;
  itemList(4, guideX, guideY + gap, 375, 9);
  gap = gap + dp*4*9;
  contentSpacer(guideX,guideY+gap, 375, 1);
  gap = gap + dp;
  itemList(6, guideX, guideY + gap, 375, 9);
}

