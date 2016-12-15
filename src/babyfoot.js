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
}
