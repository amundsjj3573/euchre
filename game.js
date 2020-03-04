    document.getElementById("test").style.display = "none"; 
    
    var deck=['AS','AH','AC','AD','9S','9H','9C','9D','0S','0H','0C','0D','JS','JH','JC','JD','QS','QH','QC','QD','KS','KH','KC','KD']
    
    
    
    window.onload = function() {
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      var img = document.getElementById("test");
      ctx.drawImage(img, 0, 0, 50, 50/(607/807));
    };
    
