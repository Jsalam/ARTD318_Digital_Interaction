
var list = function (items, p5js, listTitle){

    var bxTitle;
    var buttons = [];
    var startY = 0

    if (listTitle != undefined){
        var bxTitle = new boxedTitle(listTitle, p5js.CENTER);
        startY = 41;
    }

    for (var i = 0; i < items ; i++){
        buttons.push(new rectButton("ITEM " +i));
    }


    this.show = function(oX, oY, w, h, p5js){
        if (listTitle != undefined){
            bxTitle.show(oX, oY, w, h, p5js)
        }
        for (var i = 0; i < items ; i++){
            buttons[i].show(oX, oY + startY + i*h   , w, h, p5js);
        }
    }
}