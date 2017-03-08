function consoleText(letters, textId, consoleId) {
  var visible = true;
  var con = document.getElementById(consoleId);
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var blink = 2;
  var target = document.getElementById(textId);
console.log(target.innerHTML);
  var completed = false;
  var consoleTo = 400;

  var typingFunction = function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = letters.substring(0, letterCount)
    } else if (letterCount === letters.length + 1 && waiting === false) {
      completed = true;
    } else if (waiting === false) {
      target.innerHTML = letters.substring(0, letterCount)
      letterCount += x;
    }
    if (completed === false) {
      var to = Math.max(Math.min(Math.abs(Math.random()) * 150, 50), 150)
      window.setTimeout(typingFunction, to)
    }
  }

  var consoleFunction = function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;
    } else {
      con.className = 'console-underscore'
      visible = true;
      blink -= 1;
    }
    if (blink === 0) {
      window.setTimeout(typingFunction, 120)
    }
  }

  window.setInterval(consoleFunction, consoleTo)
}
