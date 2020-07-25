class teaLiquid{


constructor(x_, y_){

this.x = x_;
this.y = y_;
this.size = 5;



}

draw(){
    fill(230);
    ellipse(this.x, this.y, this.size);

}

move(){

    this.y += 1;

}
}