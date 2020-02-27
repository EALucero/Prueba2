window.onload=function(){

    var x=50;
    var y=500;
    var key,pos=0;
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    var img=new Image();
    img.onload=function()
    {ctx.drawImage(img,x,y);}
    img.src="images/dino.png";

    function move(e) {

      if (e.keyCode==68) {
        x+=10;
      }if (e.keyCode==65) {
        x-=10;
      }if (e.keyCode==87) {
        y-=10;
      }if (e.keyCode==83) {
        y+=10;
      }
        canvas.width=canvas.width;
        ctx.drawImage(img,x,y);
        ctx.stroke();
    }
    document.onkeydown = move;
  }
