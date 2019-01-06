var Cell = function(i,j){
    //defines the cells of a grid
    this.i = i;
    this.j = j;
    //defines if there is a wall on a side
    this.walls = {"top":true,"left":true,"bottom":true,"right":true}
};

Cell.prototype.show = function(){
    var x = this.i*w;
    var y = this.j*w;
    stroke(255);
    noFill();
    //build rectangle using lines
    if(this.walls["top"]){
        line(x  , y  , x+w, y);
    }
    if(this.walls["bottom"]){
        line(x  , y+w, x+w, y+w);
    }
    if(this.walls["left"]){
        line(x  , y  , x  , y+w);
    }
    if(this.walls["right"]){
        line(x+w, y  , x+w, y+w);
    }
};

Cell.prototype.toString = function(){
    return "{"+this.i+","+this.j+"}";
}

var w = 40;
var rows, cols;
var grid = [];
var setup = function(){
    createCanvas(400,400);
    cols = floor(width/w);
    rows = floor(height/w);
    for(var i=0;i<rows;i++){
        for(var j=0;j<cols;j++){
            var cell = new Cell(i,j);
            cell.walls.top = false;
            cell.walls.bottom = false;
            grid.push(cell);
        }
    }
};

var draw = function(){
    background(51);

    for(var i=0;i<grid.length;i++){
        grid[i].show();
    }
};
