# hubot-babyfoot

A hubot script to manage our babyfoot party (only in french for now).

See [`src/babyfoot.js`](src/babyfoot.js) for full documentation.

## Installation

In hubot project repo, run:

`npm install hubot-babyfoot --save`

Then add **hubot-babyfoot** to your `external-scripts.json`:

```json
[
  "hubot-babyfoot"
]
```

## Local tests

`npm start`

## Sample Interaction

```
user1>> baby ?
hubot>> Quelqu'un a parlé de baby ⚽ ? @here Répondez (moi, oui ou +1) pour participer !
@user1 est inscrit !
user2>> +1
hubot>> Ok pour @user2, il reste 2 place(s) !
user3>> +1
hubot>> Ok pour @user3, il reste 1 place(s) !
user4>> +1
hubot>> Ok pour @user4
Voici les joueurs finaux :
user1
user2
user3
user4
```

## NPM Module

https://www.npmjs.com/package/hubot-babyfoot
