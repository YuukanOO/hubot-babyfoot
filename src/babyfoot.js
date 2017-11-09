module.exports = function(robot) {
  var currentPlayers = [];
  var isListeningForPlayers = false;

  robot.hear(/baby.*\?.*/i, function(res) {
    var username = res.envelope.user.name;
    isListeningForPlayers = true;
    currentPlayers = [username];
    res.send("Quelqu'un a parlé de baby :soccer: ? @here Répondez (moi, oui ou +1) pour participer !\n@" + username + ' est inscrit !');
  });

  robot.hear(/moi|oui|\+1/i, function(res) {
    if (!isListeningForPlayers) {
      return;
    }

    var username = res.envelope.user.name;

    if (currentPlayers.indexOf(username) !== -1) {
      res.send("Tu es déjà inscrit @" + username + " !");
    } else {
      currentPlayers.push(username);

      if (currentPlayers.length === 4) {
        res.send("Ok pour @" + username + "\nVoici les joueurs finaux :\n" + currentPlayers.join("\n"));
        isListeningForPlayers = false;
      } else {
        res.send("Ok pour @" + username + ", il reste " + (4 - currentPlayers.length) + " place(s) !");
      }
    }
  });
  
    
   robot.hear(/non|\-1/i, function(res) {
    if (!isListeningForPlayers) {
      return;
    }
	
	if (currentPlayers.indexOf(username) !== -1) {
      currentPlayers.splice(indexOf(username), 1);
    }

    var username = res.envelope.user.name;
    var rand = Math.floor((Math.random() * 10) + 1);
    
    switch(rand){
            case "1" :
				 res.send("Ca tombe bien, on voulait pas de toi! @" + username + " . Il reste " + (4 - currentPlayers.length) + " place(s) !");
				 break;
            case "2" :
				 res.send("Non mais tu croyais qu'on voulait jouer avec toi @" + username + " ?!?! Il reste " + (4 - currentPlayers.length) + " place(s) !");
				 break;
            case "3" :
				 res.send("T'façon t'es une quich au baby @" + username + " !! Il reste " + (4 - currentPlayers.length) + " place(s) !");
				 break;
            case "4" :
				 res.send("NULL @" + username + " !!!");
				 break;
            case "5" :
				 res.send("Tu n'es plus inscrit @" + username + " ! Il reste " + (4 - currentPlayers.length) + " place(s) !");
				 break;
            case "6" :
				 res.send("@" + username + " LOSER!!! Il reste " + (4 - currentPlayers.length) + " place(s) !");
				 break;
            case "7" :
				 res.send("Du travail, encore du travail! @" + username + " . Il reste " + (4 - currentPlayers.length) + " place(s) !");
				 break;
            case "8" :
				 res.send("Vous êtes... le maillon faible @" + username + " ! Il reste " + (4 - currentPlayers.length) + " place(s) !");
				 break;
            case "9" :
				 res.send("Prenez votre sac, récupérez votre flambeau et venez me rejoindre @" + username + " ... Il reste " + (4 - currentPlayers.length) + " place(s) !");
				 break;
            case "10" :
				 res.send("La tribu a décidé de vous éliminer @" + username + " ! Il reste " + (4 - currentPlayers.length) + " place(s) !");
				 break;
			default:
				res.send("Ca tombe bien, on voulait pas de toi! @" + username + " ! Il reste " + (4 - currentPlayers.length) + " place(s) !");
	}

   });
   
}
