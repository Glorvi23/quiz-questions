$("#start").on("click", function(){
    console.log("Hello World");


    // Variables
    var container = $(".container");
    var row = $("<div>");
    var column = $("<div>");
    var hide = $("#hidden");

    // Attributes
    hide.attr("style", "display: none");
    row.addClass("row");
    column.addClass("col").attr("style", "text-align: left; padding: 0% 27.8% 0% 27.8%;");


    // Append
    container.append(row, column);

   
})