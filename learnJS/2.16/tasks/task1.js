/*Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);*/

let ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}

ask("are you right?", () => alert("You accepted"), () => alert("You declined"));