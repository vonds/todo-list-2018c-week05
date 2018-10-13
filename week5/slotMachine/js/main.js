//Reviewing this I'm realizing that I need to add notes and sudo code. I will make another commit with both

var Coins = 50;

document.getElementById("coinID").innerHTML = "Total Coins = " + Coins;
function myFunction() {
  var x = Math.floor((Math.random() * 5) + 1);
  var y = Math.floor((Math.random() * 5) + 1);
  var z = Math.floor((Math.random() * 5) + 1);
  var bid = document.getElementById("BidID").value;
  if (bid > 0 && bid < Coins) {
    document.getElementById("demo").innerHTML = x;
    document.getElementById("demo2").innerHTML = y;
    document.getElementById("demo3").innerHTML = z;

    if (x == y || x == z || y == z) {
      var bid = document.getElementById("BidID").value;
      document.getElementById("res").innerHTML = "Alright my g";
      Coins = Coins + bid * 2;
      document.getElementById("coinID").innerHTML = "Total Coins = " + Coins;
      document.getElementById("payout").innerHTML = "Won " + bid * 2 + " coins!!!";
    }
    else {
      var bid = document.getElementById("BidID").value;
      document.getElementById("res").innerHTML = "You a bum";
      Coins = Coins - bid;
      document.getElementById("coinID").innerHTML = "Total Coins = " + Coins;
      document.getElementById("payout").innerHTML = "lost " + bid + " coins";
    }

  }
  else {
    document.getElementById("res").innerHTML = "you have to bid more then 0 - . -; or less then max coins";
  }
}

function win() {
  var bid = document.getElementById("BidID").value;
  document.getElementById("res").innerHTML = "Alright my g";
  Coins = Coins + bid * 2;
  document.getElementById("coinID").innerHTML = "Total Coins = " + Coins;
  document.getElementById("payout").innerHTML = "Won " + bid * 2 + " coins!!!";
}

function lose() {
  var bid = document.getElementById("BidID").value;
  document.getElementById("res").innerHTML = "You a bum";
  Coins = Coins - bid;
  document.getElementById("coinID").innerHTML = "Total Coins = " + Coins;
  document.getElementById("payout").innerHTML = "lost " + bid + " coins";

}




