/* https://github.com/telotortium/bookmarklets/blob/main/hn_collapse_level_n_comments.js */
(function() {
  function getNumberFromUser(defaultValue = "2") {
    let userInput;
    let isNumber = false;
    let number = -1;
    while (!isNumber) {
      userInput = prompt("Please enter a number:", defaultValue);
      // Try to convert the input to a number
      let numberInt = parseInt(userInput, 10);
      number = parseFloat(userInput);
      // Check if the conversion was successful and if the number is not NaN
      if (!isNaN(number) && number === numberInt && number >= 0) {
        isNumber = true;
      } else {
        alert("That's not a valid integer >= 0. Please try again.");
      }
    }
    return number;
  }

  function toggleCollapseDelay(id, timeout) {
    var tr = $(id),
      coll = !hasClass(tr, 'coll');
    collstate(tr, coll);
    (coll ? hidekids : showkids)(tr);
    if ($('logout')) {
      setTimeout(() => {
        new Image().src = 'collapse?id=' + id + (coll ? '' : '&un=true');
      }, timeout);
    }
  }
  let indentSize = getNumberFromUser("2");
  let comments = document.querySelectorAll(`tr.athing td.ind[indent="${indentSize}"]`);
  for (let i = 0; i < comments.length; i++) toggleCollapseDelay(comments[i].parentElement.querySelector("a.togg.clicky").id, 5e2 * i)
})();
