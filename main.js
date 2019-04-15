var row, col ,w=25;
var grid=[];
var current;
var stack=[];
function setup(){
  createCanvas(400,400);
  //frameRate(10);
  row=height/w;
  col=width/w;
  for(j=0;j<col;j++){
    for(i=0;i<row;i++){
      grid.push(new cell(i,j));
    }
  }
  current=grid[0];
}



function draw(){
  current.visited=true;
  background(51,204,255);
  for(each of grid){
    each.show();
  }
  current.highlight();
  var next=current.neighbour();
  if(next){
    removeWalls(current,next);
    stack.push(current);
    current=next;
  }
  else if(stack.length>0){
    current=stack.pop();
  }

}



function index(i,j){
  if(i<0||i>=col||j<0||j>=row){
    return -1;
  }
  else{
    return j*col+i;
  }
}
function removeWalls(a,b){
  let x=a.i-b.i;
  if(x==1){
    a.walls[3]=false;
    b.walls[1]=false;
  }
  if(x==-1){
    a.walls[1]=false;
    b.walls[3]=false;
  }
  let y=a.j-b.j;
  if(y==1){
    a.walls[0]=false;
    b.walls[2]=false;
  }
  if(y==-1){
    a.walls[2]=false;
    b.walls[0]=false;
  }
}
