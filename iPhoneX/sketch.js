var phone1;
var phone2;

var dp;
var phone1;

setup = function() {
  createCanvas(1200, 1200);
  dp = 8;
  // Inialize phone 1
  phone1 = new iPhoneX();
  phone1.setup();
  // Initialize phone 2
  phone2 = new iPhoneX();
  phone2.setup();
};

draw = function() {
 background(255);

 // 1st phone
 phone1.show(50 , 10);
 vertKeylines(phone1.screenX, phone1.screenY );
 hrzKeylines(phone1.screenX , phone1.screenY );
 spacers(phone1.screenX, phone1.screenY);

 // 2nd Phone
 phone2.show(mouseX , mouseY);
 vertKeylines(phone2.screenX, phone2.screenY);
 hrzKeylines(phone2.screenX, phone2.screenY);
 spacers(phone2.screenX, phone2.screenY);

// Mouse
 text(mouseX + " , " + mouseY, mouseX, mouseY);

};

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

var statusBar = function(posX, posY, w){
  fill(0,150,150,100);
  noStroke();
  rect(posX, posY, w, dp*4);
}

var toolBar = function(posX, posY, w){
  fill(170,10,150,100);
  noStroke();
  rect(posX, posY, w, dp*7);
}

var contentSpacer = function(posX, posY, w){
  fill(252,50,150);
  noStroke();
  rect(posX, posY, w, dp);
}

var itemList = function(quantity, posX, posY, w, factor){
  fill(62,79,177,100)
  noStroke()
  var inc = 0;
  for(var i = 0; i < quantity; i++){
    rect(posX, posY + inc, w, dp*factor)
    text(" Item " + i, posX + 72, inc + posY + (dp*factor)/2);
    inc = inc + (dp*factor);
  }
}
