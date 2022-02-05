class block {
  constructor(height, width, position) {
    this.height = height;
    this.width = width;
    this.x = position[0];
    this.y = position[1];
    this.dx = position[0];
    this.dy = position[1];
  }
}


function setup() {
  blocks = [];
  show_block = 0;
  shift_1 = false;
  move_speed = 1;
  
  createCanvas(800, 800);
  initialize_blocks(62, 5);
}

function draw() {
  background(25);
  
  if (frameCount % 2 == 0) {
    show_block ++;
    if (show_block/2 > blocks.length) {
      if (shift_1 == false){
        shift_blocks(23, [10, 10]);
        shift_1 = true;
      }
    }
  }
 
  
  for (var i = 0; i < blocks.length && i < show_block; i++) {
    var sq = blocks[i];
    if (sq.x != sq.dx || sq.y != sq.dy){
      sq.x = sq.x + move_speed;
      sq.y = sq.y + move_speed;
    }
    square(sq.x, sq.y, sq.height);
  }
}

function initialize_blocks(num_blocks, width) {
  for (var i = 0; i < num_blocks; i++) {
    pos_x = (i%width) * 15 + 10;
    pos_y = Math.floor(i/width) * 15 + 10;
    blocks.push(new block(10, 10, [pos_x, pos_y], [pos_x, pos_y]));
  }
}


function shift_blocks(num_blocks, vector) {
  for (var i = 0; i < num_blocks; i++) {
    var sq = blocks[blocks.length - i - 1];
    sq.dx = sq.x + vector[0];
    sq.dy = sq.y + vector[1];
  }
}
