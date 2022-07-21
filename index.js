var str1 = "";
var str2 = "";
alert(
  "Welocome To The Simon Game!!!\n• There is only one rule to win the game ,'Just Remeber the blinked TILES'.\n• When you start the game a TILE will blink, you have to press the same TILE.\n• In next level again a TILE will blink, press both level 1st & 2nd TILES,in same order.\n• In each next Level, You have to press the tiles in same sequence they have blinked previously,till now.\n• See how many levels you clear ,and compare your remeberence with your friends.\n• Press Ok! to continue...\n\n\n• REMEMBER, To restart Game press 'CTRL+R'."
);
$("body").keydown(function (e) {
  if (e.key === "s" || e.key === "S") {
    if (str1.length === 0) {
      pressRandom();
    }
  }
});
$("#s").click(function () {

  if (str1.length === 0) {
    pressRandom();
  }

});

$(".btn").click(function (e) {
  var num = e.target.id;
  makeSound(num);

  makeFlash(num);
  str2 += num;

  if (str2.charAt(str2.length - 1) !== str1.charAt(str2.length - 1)) {
    gameover();
    return;
  }
  if (str1.length === str2.length) {
    setTimeout(function () {
      pressRandom();
    }, 1000);
  }
});

function pressRandom() {
  var rdm = Math.floor(Math.random() * 4);
  makeSound("" + rdm);
  makeBlink(rdm);

  str1 += "" + rdm;
  $("#level-title").text("Level " + str1.length);
  str2 = "";
}

function makeSound(numb) {
  if (numb === "0") {
    var audio = new Audio("sounds/green.mp3");
    audio.play();
  }
  if (numb === "1") {
    var audio = new Audio("sounds/red.mp3");
    audio.play();
  }
  if (numb === "2") {
    var audio = new Audio("sounds/yellow.mp3");
    audio.play();
  }
  if (numb === "3") {
    var audio = new Audio("sounds/blue.mp3");
    audio.play();
  }
}

function makeBlink(rdm) {
  $("#" + rdm).addClass("blink");

  setTimeout(function () {
    $("#" + rdm).removeClass("blink");
  }, 200);
}

function makeFlash(id) {
  $("#" + id).addClass("pressed");

  setTimeout(function () {
    $("#" + id).removeClass("pressed");
  }, 200);
}

function gameover() {
  $("#level-title").text("Game Over, Press [Ctrl+R] Key to Restart");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 100);
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();

  str1 = "";
  str2 = "";
}
