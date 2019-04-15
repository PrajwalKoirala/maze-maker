cell = function(i,j){
  this.i=i;
  this.j=j;
  this.walls=[true,true,true,true];
  this.visited=false;
}
cell.prototype.show = function(){
  var x=this.i*w;
  var y=this.j*w;
  stroke(0,51,153);
  strokeWeight(2);
  if(this.walls[0]){
    //stroke(0);
    //strokeWeight(3);
    line(x,y,x+w,y);
  }
  if(this.walls[1]){
    //stroke(0);
    //strokeWeight(3);
    line(x+w,y,x+w,y+w);
  }
  if(this.walls[2]){
    //strokeWeight(3);
    //stroke(0);
    line(x,y+w,x+w,y+w);
  }
  if(this.walls[3]){
    //strokeWeight(3);
    //stroke(0);
    line(x,y,x,y+w);
  }
  if(this.visited){
    noStroke();
    fill(250,255,75);
    rect(x,y,w,w);
  }

}
cell.prototype.highlight = function(){
  noStroke();
  fill(180,0,0);
  rect(this.i*w,this.j*w,w-2,w-2);
}
cell.prototype.neighbour = function(){
  let i=this.i;
  let j=this.j;
  var neighbours = [];
  var up=grid[index(i,j-1)];
  var right=grid[index(i+1,j)];
  var bottom=grid[index(i,j+1)];
  var left=grid[index(i-1,j)];
  if(up && !up.visited){
    neighbours.push(up);
  }
  if(right && !right.visited){
    neighbours.push(right);
  }
  if(left && !left.visited){
    neighbours.push(left);
  }
  if(bottom && !bottom.visited){
    neighbours.push(bottom);
  }
  if(neighbours.length>0){
    return neighbours[floor(random(neighbours.length))];
  } else {
    return undefined;
  }
}
