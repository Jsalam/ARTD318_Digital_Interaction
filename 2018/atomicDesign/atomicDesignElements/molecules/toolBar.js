var toolBar = function (toolTitle){

    var mGlass = new magnifyingGlass();
    var myLabel = new label(toolTitle);
    var myDrawerButton = new drawerButton(); 

    this.show = function(orgX, orgY, p5js){
        p5js.fill(125,125,250,60);
        p5js.rect(orgX, orgY, 375, 8*7);
        mGlass.show(orgX + 385 - 35, orgY+ 27, 18, p5js);
        p5js.fill(250);
        myLabel.show(orgX+ 72, orgY+ 36, 25, p5js);
        myDrawerButton.show (orgX+ 20, orgY+17, p5js);        
    }
}