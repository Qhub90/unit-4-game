// DECLARING VARIABLES
var wins = 0;
var losses = 0;
var counter = 0;   
var compNumber  = Math.floor(Math.random() * (120 - 20) ) + 20;
var blackCrystal = Math.floor(Math.random() * (12 - 2) ) + 2;
var blueCrystal  = Math.floor(Math.random() * (12 - 2) ) + 2;
var greenCrystal = Math.floor(Math.random() * (12 - 2) ) + 2;
var  redCrystal  = Math.floor(Math.random() * (12 - 2) ) + 2;
 


//WRITING WINS, LOSSES, AND THE NUMBER TO MATCH 
   $("#number-to-match").html(compNumber);
//    $("#Wins").html(currentWins);
//    $("#Losses").html(currentLosses);

//  A FUNCTION TO RESET THE GAME
 function resetGame(){
   counter =0;
   compNumber  = Math.floor(Math.random() * (120 - 20) ) + 20;
   blackCrystal = Math.floor(Math.random() * (12 - 2) ) + 2;
   blueCrystal  = Math.floor(Math.random() * (12 - 2) ) + 2;
   greenCrystal = Math.floor(Math.random() * (12 - 2) ) + 2;
   redCrystal  = Math.floor(Math.random() * (12 - 2) ) + 2;
   $("#number-to-match").html(compNumber);
};


// MY ON CLICK BUTTONS AND THIER FUNCTIONS(ADDING THE CRYSTAL VALUES AND KEEPING TRACK OF IF YOU WIN OR LOSE. ALSO IT SHOULD ADD TO THE WIN OR LOSE)
     $("#blackCrystal").on("click", function() {
        
         counter = counter + blackCrystal;
        $("#lastBox").html(counter);
        
        if(counter === compNumber){
            wins = wins +1;
            console.log(currentWins);
            $("#Wins").html(wins);
            alert("You Win!!");
            resetGame();
        }
        else if(counter > compNumber) {
            losses = losses +1;
            $("#Losses").html(losses);
            console.log(losses);
            alert("Games Over Scrub!!");
            resetGame();
            
        }
        
          
});
     $("#blueCrystal").on("click", function() {
        counter = counter + blueCrystal;
        $("#lastBox").html(counter);
         
        if(counter === compNumber) {
            wins = wins +1;
            $("#Wins").html(win);
             alert("You Win!!");
            resetGame();
        }
        else if(counter > compNumber) {
            losses = losses + 1;
            $("#Losses").html(losses);
            alert("Games Over Scrub!!");
            resetGame();
        }    
      
});
     $("#greenCrystal").on("click", function() {
        counter = counter + greenCrystal;
        $("#lastBox").html(counter);

        if(counter === compNumber){
            wins = wins +1;
            $("#Wins").html(wins);
             alert("You Win!!");
            resetGame();
        }
        else if(counter > compNumber) {
            losses = losses +1;            
            $("#Losses").html(losses);
            alert("Games Over Scrub!!");
            resetGame();
        }
        
    });
     $("#redCrystal").on("click", function() {
        counter = counter + redCrystal;
        $("#lastBox").html(counter);

        if(counter === compNumber){
            wins = wins +1;
            $("#Wins").html(wins);            
            alert("You Win!!");
            resetGame();
        }
        else if(counter > compNumber) {
            losses = losses +1;
            $("#Losses").html(losses);
            alert("Games Over Scrub!!");
            resetGame();
        }
        
   }); 


  