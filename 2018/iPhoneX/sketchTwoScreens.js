var phone1, phone2, phone3;

var dp;

setup = function() {
  createCanvas(1200, 1200);
  dp = 8;
  // Inialize phone 1
  phone1 = new iPhoneX();
  phone1.setup();

    // Inialize phone 1
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


 // 2nd phone
 phone2.show(500 , 10);
 vertKeylines(phone2.screenX, phone2.screenY );
 directoryElement(phone2.screenX, phone2.screenY);

// Mouse
 text(mouseX + " , " + mouseY, mouseX, mouseY);



};
