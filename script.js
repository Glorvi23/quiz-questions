// Variables
var row = $("<div>");
var column = $("<div>");
var question = $("<h3>");
var choicesOne = $("<button>");
var choicesTwo = $("<button>");
var choicesThree = $("<button>");
var choicesFour = $("<button>");
var container = $(".container");
var hide = $("#hidden");
var count = 0;
var timeLoss = 100;

row.addClass("row");
column
  .addClass("col")
  .attr("style", "text-align: left; padding: 0% 27.8% 0% 27.8%;");

$("#start").on("click", function () {
  console.log("Hello World");

  // Attributes
  hide.attr("style", "display: none");

  question.text("Commonly used data types DO NOT Include:");
  choicesOne.text("1. Quotes").addClass("choicebtn");
  choicesTwo.text("2. Curly Brackets").addClass("choicebtn");
  choicesThree.text("3. Parenthesis").addClass("choicebtn");
  choicesFour.text("4. Square Brackets").addClass("choicebtn");

  // Append
  column.append(question, choicesOne, choicesTwo, choicesThree, choicesFour);
  container.append(row, column);

  $(".choicebtn").on("click", function () {
    // var city = this.innerHTML;
    //   var city = $(this).data("city");
    var hr = $("<hr>");
    console.log("You click here!!");
    if ($(this).text() === "1. Quotes") {
      console.log("You're right!!");
      var ans = $("<p>").text("Correct!");
      column.append(ans);
      count++;
      console.log(count);
      newPage();
    } else {
      console.log("You are wrong pony boy");

      var ans = $("<p>").text("Wrong!");
      timeLoss -= 10;
      console.log(timeLoss);
      column.append(ans);
      newPage();
    }
    //   cities = renderNow(city);
  });
});

function newPage() {
  console.log("A Whole New World!!");

  // Attributes
  column.empty();
  question.text("Commonly used data types DO NOT Include:");
  choicesOne.text("1. Quotes").addClass("choicebtn");
  choicesTwo.text("2. Curly Brackets").addClass("choicebtn");
  choicesThree.text("3. Parenthesis").addClass("choicebtn");
  choicesFour.text("4. Square Brackets").addClass("choicebtn");

  // Append
  column.append(question, choicesOne, choicesTwo, choicesThree, choicesFour);
  container.append(row, column);

  $(".choicebtn").on("click", function () {
    // var city = this.innerHTML;
    //   var city = $(this).data("city");
    var clickOn = $(this).text();
    var hr = $("<hr>");
    // console.log("You click here!!");
    checkAns(clickOn);
    //   cities = renderNow(city);
  });
}

function checkAns(item) {
  if (item === "1. Quotes") {
    console.log("Item cor");
    // var ans = $("<p>").text("Correct!");
    // column.append(ans);
    // count++;
    // console.log(count);
  } else {
    console.log("item wron");

    // var ans = $("<p>").text("Wrong!");
    // timeLoss -= 10;
    // console.log(timeLoss);
    // column.append(ans);
  }
}
