module.exports = function (robot) {
  var leaveMessages = [
    function (username) { return "Ca tombe bien, on voulait pas de toi! @" + username + " ."; },
    function (username) { return "Non mais tu croyais qu'on voulait jouer avec toi @" + username + " ?!?!"; },
    function (username) { return "T'façon t'es une quich au baby @" + username + " !!"; },
    function (username) { return "NULL @" + username + " !!!"; },
    function (username) { return "Tu n'es plus inscrit @" + username + " !"; },
    function (username) { return "@" + username + " LOSER!!!"; },
    function (username) { return "Du travail, encore du travail! @" + username + " ."; },
    function (username) { return "Vous êtes... le maillon faible @" + username + " !"; },
    function (username) { return "Prenez votre sac, récupérez votre flambeau et venez me rejoindre @" + username + " ..."; },
    function (username) { return "La tribu a décidé de vous éliminer @" + username + " !"; },    
  ];

  var currentPlayers = [];
  var isListeningForPlayers = false;

  robot.hear(/baby.*\?.*/i, function (res) {
    var username = res.envelope.user.name;
    isListeningForPlayers = true;
    currentPlayers = [username];
    res.send("Quelqu'un a parlé de baby :soccer: ? @here Répondez (moi, oui +1, non ou -1) pour participer ou vous désinscrire !\n@" + username + ' est inscrit !');
  });

  robot.hear(/moi|oui|\+1/i, function (res) {
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

  robot.hear(/non|\-1/i, function (res) {
    if (!isListeningForPlayers) {
      return;
    }

    var username = res.envelope.user.name;
    var playerIdx = currentPlayers.indexOf(username);
    var leftMessage = null;

    if (playerIdx !== -1) {
      currentPlayers.splice(playerIdx, 1);
      leftMessage = " Il reste " + (4 - currentPlayers.length) + " place(s) !";
    } else {
      leftMessage = " De toute manière, tu n'étais pas inscrit boulet...";
    }

    var rand = Math.floor((Math.random() * leaveMessages.length));

    res.send(leaveMessages[rand](username) + leftMessage);
  });

}
