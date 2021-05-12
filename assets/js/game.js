//DEFINE VARABLES

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// FIGHT FUNCTION START

var fight = function(enemyName) {
 
  while (playerHealth > 0 && enemyHealth > 0) {


  // WELCOME MESSAGE
  // window.alert("Welcome to Robot Gladiators!");

  // ASK USER IF THEY WANT TO FIGHT OR SKIP BATTLE
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  // PLAYER SKIPS
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // SUBTRACT money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney)
      break;
    }
  }

 // FIGHT BATTLE
 if (promptFight === "fight" || promptFight === "FIGHT");
 
  //REDUCE ENEMUYHEALTH.  the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
  
  // Log a resulting message to the console so we know that it worked.
  console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );
  

  // CHECK enemy's health
  if (enemyHealth <= 0) {
    alert(enemyName + " has died!");

    // AWARD PLAYER money for winning
    playerMoney = playerMoney + 20;

    // leave while() loop since enemy is dead
    break;

  } else {
    alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // REMOVE player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;

  console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

  // check player's health
  if (playerHealth <= 0) {
  window.alert(playerName + " has died!");


  // leave while() loop if player is dead
  break;
} else {
  window.alert(playerName + " still has " + playerHealth + " health left."); }
   
   }
  };

  

     

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    }
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);

  
 }

 // REPLACE fight(); WITH THE FOR LOOP ABOVE.
