function Unicode() {
  var word = '';
  var operation = new Operation();

  this.initialize = function(val) {
    operation.initialize(val);
  };

  this.unicoder = function(val) {
    var lastLetter = val[val.length - 1];
    word = word + lastLetter;

    var flg = operation.checkVowel(lastLetter, word);

    if (flg != true) {
      var wordUpdate = operation.convert(word, lastLetter);
      if (wordUpdate != null) word = wordUpdate;
    }
  };

  this.resetflags = function() {
    operation.resetflags();
  };

  this.spacePressed = function() {
    var data = operation.spacePressed();
    word = '';
  };

  this.checkCharacter = function(val) {
    return operation.checkCharacter(val);
  };
}
