/*document.getElementById("sheizon") = "https://api.propublica.org/congress/v1/113/senate/members.json"*/

    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");

    let tree = {palm: 3, fruit: 5, root: 7};
    let count = [];

    let palm = new Image();
    let fruit = new Image();
    let root = new Image();
    palm.src = "images/palm.png";
    fruit.src = "images/fruit.png";
    root.src = "images/root.png";

    //Define the size of a frame
    var frameWidth = 50;
    var frameHeight = 61;

    //Rows and columns start from 0
    var row = 1;
    var column = 4;


    if (tree.palm >= 2) {
      palm.onload = function() {
        ctx.drawImage(palm, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 325, 200, frameWidth, frameHeight)
      }
      if (tree.palm >= 4) {
        palm.onload = function() {
          ctx.drawImage(palm,325,200)
          ctx.drawImage(palm,245,200)
        }
        if (tree.palm >= 6) {
          palm.onload = function() {
            ctx.drawImage(palm,325,200)
            ctx.drawImage(palm,245,200)
            ctx.drawImage(palm,165,200)
          }
          if (tree.palm >= 8) {
            palm.onload = function() {
              ctx.drawImage(palm,325,200)
              ctx.drawImage(palm,245,200)
              ctx.drawImage(palm,165,200)
              ctx.drawImage(palm,85,200)
            }
            if (tree.palm >= 10) {
              palm.onload = function() {
                ctx.drawImage(palm,325,200)
                ctx.drawImage(palm,245,200)
                ctx.drawImage(palm,165,200)
                ctx.drawImage(palm,85,200)
                ctx.drawImage(palm,5,200)
              }
            }
          }
        }
      }
    }if (tree.fruit >= 2) {
      fruit.onload = function() {
        ctx.drawImage(fruit,325,300)
      }
      if (tree.fruit >= 4) {
        fruit.onload = function() {
          ctx.drawImage(fruit,325,300)
          ctx.drawImage(fruit,245,300)
        }
        if (tree.fruit >= 6) {
          fruit.onload = function() {
            ctx.drawImage(fruit,325,300)
            ctx.drawImage(fruit,245,300)
            ctx.drawImage(fruit,165,300)
          }
          if (tree.fruit >= 8) {
            fruit.onload = function() {
              ctx.drawImage(fruit,325,300)
              ctx.drawImage(fruit,245,300)
              ctx.drawImage(fruit,165,300)
              ctx.drawImage(fruit,85,300)
            }
            if (tree.fruit == 10) {
              fruit.onload = function() {
                ctx.drawImage(fruit,325,300)
                ctx.drawImage(fruit,245,300)
                ctx.drawImage(fruit,165,300)
                ctx.drawImage(fruit,85,300)
                ctx.drawImage(fruit,5,300)
              }
            }
          }
        }
      }
    }if (tree.root >= 2) {
      root.onload = function() {
        ctx.drawImage(root,325,400)
      }
      if (tree.root >= 4) {
        root.onload = function() {
          ctx.drawImage(root,325,400)
          ctx.drawImage(root,245,400)
        }
        if (tree.root >= 6) {
          root.onload = function() {
            ctx.drawImage(root,325,400)
            ctx.drawImage(root,245,400)
            ctx.drawImage(root,165,400)
          }
          if (tree.root >= 8) {
            root.onload = function() {
              ctx.drawImage(root,325,400)
              ctx.drawImage(root,245,400)
              ctx.drawImage(root,165,400)
              ctx.drawImage(root,85,400)
            }
            if (tree.root == 10) {
              root.onload = function() {
                ctx.drawImage(root,325,400)
                ctx.drawImage(root,245,400)
                ctx.drawImage(root,165,400)
                ctx.drawImage(root,85,400)
                ctx.drawImage(root,5,400)
              }
            }
          }
        }
      }
    }
