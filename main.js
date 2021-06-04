//document.getElementById("myCanvas"); == fabric.Canvas("myCanvas");

canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

player_object = "";
block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
    console.log("Player Visible");
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
    console.log("Block Visible");
}

window.addEventListener("keydown", myKeydown);

function myKeydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == "80") {
        console.log("P & Shift");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keypressed == "77") {
        console.log("M & Shift");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (keypressed == "38") {
        up();
        console.log("UP");
    }

    if (keypressed == "37") {
        left();
        console.log("LEFT");
    }

    if (keypressed == "40") {
        down();
        console.log("DOWN");
    }

    if (keypressed == "39") {
        right();
        console.log("RIGHT");
    }

    if (keypressed == "87") {
        new_image("wall.jpg");
        console.log("Wall");
    }

    if (keypressed == "71") {
        new_image("ground.png");
        console.log("Ground");
    }

    if (keypressed == "76") {
        new_image("light_green.png");
        console.log("L. Green");
    }

    if (keypressed == "84") {
        new_image("trunk.jpg");
        console.log("Trunk");
    }

    if (keypressed == "82") {
        new_image("roof.jpg");
        console.log("Roof");
    }

    if (keypressed == "89") {
        new_image("yellow_wall.png");
        console.log("Y. Wall");
    }

    if (keypressed == "68") {
        new_image("dark_green.png");
        console.log("D. Green");
    }

    if (keypressed == "85") {
        new_image("unique.png");
        console.log("Unique");
    }

    if (keypressed == "67") {
        new_image("cloud.jpg");
        console.log("Cloud");
    }
}

function up() {
    if (player_y >= 10) {
        player_y = player_y - block_image_height;
        console.log("Block Image Height = " + block_image_height);
        console.log("When up is pressed, X = " + player_x + " | Y= " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 450) {
        player_y = player_y + block_image_height;
        console.log("Block Image Height = " + block_image_height);
        console.log("When down is pressed, X = " + player_x + " | Y= " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 10) {
        player_x = player_x - block_image_width;
        console.log("Block Image Width = " + block_image_width);
        console.log("When left is pressed, X = " + player_x + " | Y= " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}


function right() {
    if (player_x <= 850) {
        player_x = player_x + block_image_width;
        console.log("Block Image Width = " + block_image_width);
        console.log("When up is pressed, X = " + player_x + " | Y= " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}