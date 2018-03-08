var picture = function (iX, iY, w, text){
	stroke(125,125,255,180);
	fill(125,125,255,80);
	rect (iX, iY, w, (w/3)*2);
	line (iX, iY, iX + w, iY + (w/3)*2)
	line (iX, iY + (w/3)*2, iX + w, iY)
	label (text, iX+72, iY + 200, 37);
}