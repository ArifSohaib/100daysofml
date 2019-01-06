var Cell = function(i,j){
    //defines the cells of a grid
    this.i = i;
    this.j = j;
};

Cell.prototype.show = function(){
    var x = this.i*w;
    var y = this.j*w;
    stroke(255);
    noFill();
    rect(x,y,w,w);
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
