$(document).ready(function(){

    function displayHighscores() {
        var data = getScores();
        for (var i = 0; i < data.length; i++) {
            var tr = $("<tr>");
            var tdName = $("<td>").text(data[i].playerName);
            var tdScore = $("<td>").text(data[i].score);
            $(tr).append(tdName, tdScore);
            $("tbody").append(tr);
        }
    }

    function getScores() {
        var scores = localStorage.getItem("scores");
        if (scores === null) {
            scores = [];
        } else {
            scores = JSON.parse(scores);
        }
        return scores;
    }

    displayHighscores();
});