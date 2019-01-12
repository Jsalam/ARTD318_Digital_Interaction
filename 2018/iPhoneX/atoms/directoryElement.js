var directoryElement = function (dX, dY){
	var gap = dp;
	statusBar(dX, dY, 375);
	gap = dp * 4;
	toolBar(dX, dY + gap, 375);
	gap = dp * 11;
	picture(dX, dY + gap, 375, "Ali Connors");
	gap = dp * 42;
	contentSpacer(dX, dY + gap, 375);
	gap = dp * 43;
	itemList(2,dX, dY + gap, 375, 9)
	gap = gap + dp * 18;
	contentSpacer(dX, dY + gap, 375);
	gap = gap + dp;
	contentSpacer(dX, dY + gap, 375);
	gap = gap + dp;
	itemList(5,dX, dY + gap, 375, 9)
} 