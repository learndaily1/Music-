
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  var m = document.querySelectorAll("button")
    [i].addEventListener("click", function () {
      var key = this.textContent;
      call(key);
    });
  
  document.addEventListener("keyup",function(event){
    call(event.key);
  });
}


function call(m){
    switch (m) {
      case "a":
        var tom = new Audio("sounds/a.mp3");
        tom.play();
        break;
      case "b":
        var tom = new Audio("sounds/b.mp3");
        tom.play();
        break;
      case "c":
        var tom = new Audio("sounds/c.mp3");
        tom.play();
        break;
      case "d":
        var tom = new Audio("sounds/d.mp3");
        tom.play();
        break;
      case "e":
        var tom = new Audio("sounds/e.mp3");
        tom.play();
        break;
      case "f":
        var tom = new Audio("sounds/f.mp3");
        tom.play();
        break;
      case "g":
        var tom = new Audio("sounds/g.mp3");
        tom.play();
        break;
      case "h":
        var tom = new Audio("sounds/h.mp3");
        tom.play();
        break;
      case "i":
        var tom = new Audio("sounds/i.mp3");
        tom.play();
        break;
      case "j":
        var tom = new Audio("sounds/j.mp3");
        tom.play();
        break;
      case "k":
        var tom = new Audio("sounds/k.mp3");
        tom.play();
        break;
      case "l":
        var tom = new Audio("sounds/l.mp3");
        tom.play();
        break;
      case "m":
        var tom = new Audio("sounds/m.mp3");
        tom.play();
        break;
      case "n":
        var tom = new Audio("sounds/n.mp3");
        tom.play();
        break;
      case "o":
        var tom = new Audio("sounds/o.mp3");
        tom.play();
        break;
      case "p":
        var tom = new Audio("sounds/p.mp3");
        tom.play();
        break;
      case "q":
        var tom = new Audio("sounds/q.mp3");
        tom.play();
        break;
      case "r":
        var tom = new Audio("sounds/r.mp3");
        tom.play();
        break;
      case "s":
        var tom = new Audio("sounds/s.mp3");
        tom.play();
        break;
      case "t":
        var tom = new Audio("sounds/t.mp3");
        tom.play();
        break;
      case "u":
        var tom = new Audio("sounds/u.mp3");
        tom.play();
        break;
      case "v":
        var tom = new Audio("sounds/v.mp3");
        tom.play();
        break;
      case "w":
        var tom = new Audio("sounds/w.mp3");
        tom.play();
        break;
      case "x":
        var tom = new Audio("sounds/x.mp3");
        tom.play();
        break;
      case "y":
        var tom = new Audio("sounds/y.mp3");
        tom.play();
        break;
      case "z":
        var tom = new Audio("sounds/z.mp3");
        tom.play();
        break;
      default:
        console.log("cannot detect");
        break;
    }
}

