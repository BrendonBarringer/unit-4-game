$(function() {
    console.log("ready!");

    //declaring variables
    var wins = 0,
        losses = 0,
        randomNumber = Math.floor((Math.random() * 101) + 19),
        gemOne = Math.floor((Math.random() * 11) + 1),
        gemTwo = Math.floor((Math.random() * 11) + 1),
        gemThree = Math.floor((Math.random() * 11) + 1),
        gemFour = Math.floor((Math.random() * 11) + 1),
        totalScore = 0;

    //checking status of variables
    console.log("gem one is " + gemOne);
    console.log("gem two is " + gemTwo);
    console.log("gem three is " + gemThree);
    console.log("gem four is " + gemFour);

    //set initial values
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#number").html(randomNumber);
    $("#total_score").html(totalScore);

    function reset() {
        randomNumber = Math.floor((Math.random() * 101) + 19);
        $("#number").html(randomNumber);
        $("#total_score").html(totalScore);
        console.log("randomNumber is " + randomNumber);
        gemOne = Math.floor((Math.random() * 11) + 1);
        gemTwo = Math.floor((Math.random() * 11) + 1);
        gemThree = Math.floor((Math.random() * 11) + 1);
        gemFour = Math.floor((Math.random() * 11) + 1);
        console.log("gem one is " + gemOne);
        console.log("gem two is " + gemTwo);
        console.log("gem three is " + gemThree);
        console.log("gem four is " + gemFour);
    };

    //update totalScore when crystals are clicked
    $("#gem_1").on("click", function() {
        totalScore += gemOne;
        $("#total_score").html(totalScore);
        
        //if totalScore is equal to randomNumber player wins, if it goes above they lose
        if (totalScore == randomNumber) {
            wins++;
            totalScore = 0;
            $("#wins").html(wins);
            console.log("wins are " + wins);
            reset();
        }
        else if (totalScore > randomNumber) {
            losses++;
            totalScore = 0;
            $("#losses").html(losses);
            console.log("losses are " + losses);
            reset();
        }
        else {
            $("#total_score").html(totalScore);
            console.log("totalScore is " + totalScore);
        };
    });

    $("#gem_2").on("click", function() {
        totalScore += gemTwo;
        $("#total_score").html(totalScore);
        if (totalScore == randomNumber) {
            wins++;
            totalScore = 0;
            $("#wins").html(wins);
            console.log("wins are " + wins);
            reset();
        }
        else if (totalScore > randomNumber) {
            losses++;
            totalScore = 0;
            $("#losses").html(losses);
            console.log("losses are " + losses);
            reset();
        }
        else {
            $("#total_score").html(totalScore);
            console.log("totalScore is " + totalScore);
        };
    });

    $("#gem_3").on("click", function() {
        totalScore += gemThree;
        $("#total_score").html(totalScore);
        if (totalScore == randomNumber) {
            wins++;
            totalScore = 0;
            $("#wins").html(wins);
            console.log("wins are " + wins);
            reset();
        }
        else if (totalScore > randomNumber) {
            losses++;
            totalScore = 0;
            $("#losses").html(losses);
            console.log("losses are " + losses);
            reset();
        }
        else {
            $("#total_score").html(totalScore);
            console.log("totalScore is " + totalScore);
        };
    });

    $("#gem_4").on("click", function() {
        totalScore += gemFour;
        $("#total_score").html(totalScore);
        if (totalScore == randomNumber) {
            wins++;
            totalScore = 0;
            $("#wins").html(wins);
            console.log("wins are " + wins);
            reset();
        }
        else if (totalScore > randomNumber) {
            losses++;
            totalScore = 0;
            $("#losses").html(losses);
            console.log("losses are " + losses);
            randomNumber = Math.floor((Math.random() * 101) + 19);
            reset();
        }
        else {
            $("#total_score").html(totalScore);
            console.log("totalScore is " + totalScore);
        };
    });    
});