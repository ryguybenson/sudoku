function check (input) {
  var checkArray = [2, 4, 5, 6];
  for (var i = 0; i < checkArray.length; i++) {
    if (checkArray.includes(0)) {
      return "You cannot put in zero";
    }
    if (checkArray.includes(input)) {
      return "This is the wrong number";
    } else {
      return "Yeet";
    }
  }
}

check(1);
