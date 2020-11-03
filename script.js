$(document).ready(function() {
    // event handlers
    $("#submitButton").click(outputResults);

    function outputResults() {
        // vars
        var name = ($("#firstName").val()) + " " + ($("#lastName").val());
        var rank = $('input[name="rankRadio"]:checked').val() + " ";
        console.log(rank);

        // coloring
        switch (rank) {
            case "Private ":
                alert(1);
                $("#outputRank").addClass("red");
                break;
            case "Sergeant ":
                $("#outputRank").addClass("green");
                break;
            case "Captain ":
                $("#outputRank").addClass("blue");
                break;
            case "General ":
                $("#outputRank").addClass("purple");
                break;

        }

        // output
        $("#outputParagraph").show();
        $("#outputRank").text(rank);
        $("#outputName").text(name);
    }


});