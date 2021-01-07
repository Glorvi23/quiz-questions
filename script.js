$("#start").on("click", function () {
  console.log("Hello World");

  // Variables
  var container = $(".container");
  var row = $("<div>");
  var column = $("<div>");
  var hide = $("#hidden");
  var question = $("<h3>");
  var choicesOne = $("<button>");
  var choicesTwo = $("<button>");
  var choicesThree = $("<button>");
  var choicesFour = $("<button>");

  // Attributes
  hide.attr("style", "display: none");
  row.addClass("row");
  column
    .addClass("col")
    .attr("style", "text-align: left; padding: 0% 27.8% 0% 27.8%;");
  question.text("Commonly used data types DO NOT Include:");
  choicesOne.text("1. Quotes");
  choicesTwo.text("2. Curly Brackets");
  choicesThree.text("3. Parenthesis");
  choicesFour.text("4. Square Brackets");

  // Append
  column.append(question, choicesOne, choicesTwo, choicesThree, choicesFour);
  container.append(row, column);
});
