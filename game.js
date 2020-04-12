document.getElementById("test").style.display = "none"; 
    
var S9 = {suit: 1, value: 1};var S10= {suit: 1, value: 2};var SJ = {suit: 1, value: 3};var SQ = {suit: 1, value: 4};var SK = {suit: 1, value: 5};var SA = {suit: 1, value: 6};var H9 = {suit: 2, value: 1};var H10= {suit: 2, value: 2};var HJ = {suit: 2, value: 3};var HQ = {suit: 2, value: 4};var HK = {suit: 2, value: 5};var HA = {suit: 2, value: 6};var C9 = {suit: 3, value: 1};var C10= {suit: 3, value: 2};var CJ = {suit: 3, value: 3};var CQ = {suit: 3, value: 4};var CK = {suit: 3, value: 5};var CA = {suit: 3, value: 6};var D9 = {suit: 4, value: 1};var D10= {suit: 4, value: 2};var DJ = {suit: 4, value: 3};var DQ = {suit: 4, value: 4};var DK = {suit: 4, value: 5};var DA = {suit: 4, value: 6};
deck={S9, S10, SJ, SQ, SK, H9, H10, HJ, HQ, HK, C9, C10, CJ, CQ, CK, D9, D10, DJ, DQ, DK};


    window.onload = function() {
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      var img = document.getElementById("test");
      ctx.drawImage(img, 0, 0, 50, 50/(607/807));
    };
    