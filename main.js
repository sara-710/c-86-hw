var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
block_imgwidth = 30;
block_imgheight = 30;

var player_object = "";
var block_img_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top: player_y,
            left: player_x
        })
        canvas.add(player_object)
    })
}

function newImg(getimg) {
    fabric.Image.fromURL(getimg, function(Img) {
        block_img_object = Img
        block_img_object.scaleToWidth(block_imgwidth)
        block_img_object.scaleToHeight(block_imgheight)
        block_img_object.set({
            top: player_y,
            left: player_x
        })
        canvas.add(block_img_object)
    })
}