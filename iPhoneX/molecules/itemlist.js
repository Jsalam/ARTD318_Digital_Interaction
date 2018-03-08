var itemList = function(quantity, posX, posY, w, factor){
  fill(62,79,177,100)
  noStroke()
  var inc = 0;
  for(var i = 0; i < quantity; i++){
  	stroke(125,125,250,180);
    rect(posX, posY + inc, w, dp*factor)
    text(" Item " + i, posX + 72, inc + posY + (dp*factor)/2);
    inc = inc + (dp*factor);
    noStroke();
  }
}