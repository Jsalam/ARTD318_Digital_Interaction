var phone1;

var dp;

setup = function() {
  createCanvas(1200, 1200);
  dp = 8;
  // Inialize phone 1
  phone1 = new iPhoneX();
  phone1.setup();
};

draw = function() {
 background(255);

 // 1st phone
 phone1.show(50 , 10);
 vertKeylines(phone1.screenX, phone1.screenY );
 hrzKeylines(phone1.screenX , phone1.screenY );
 spacers(phone1.screenX, phone1.screenY);

// Mouse
 text(mouseX + " , " + mouseY, mouseX, mouseY);

};
