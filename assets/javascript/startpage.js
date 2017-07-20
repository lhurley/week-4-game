      var img1 = document.getElementById("img1"),
          img2 = document.getElementById("img2");
          img3 = document.getElementById("img3");


      img1.onmouseover = function(){
        img2.style.display = "block";
        img3.style.display = "block";
      }

      img1.onmouseout = function(){
        img2.style.display = "none";
        img3.style.display = "none";
      }


