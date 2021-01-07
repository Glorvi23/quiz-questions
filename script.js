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
    if($(this).text() === "1. Quotes"){
        console.log("You're right!!")
        var ans = $("<p>").text("Correct!");
        count++;
    }else{
        console.log("You are wrong pony boy");
        
        $("<p>").text("Wrong!")
        timeLoss=- 10;
    }
    //   cities = renderNow(city);
  });
});
