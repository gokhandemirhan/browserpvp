"use strict";
var IndexView = require('./ViewControllers/IndexView.js');
var CreatePlayerView = require('./ViewControllers/CreatePlayerView.js');

var Navigo = require('navigo');

var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router
    .on({
        '/index': IndexView,
        '/createPlayer': CreatePlayerView,
        '*': function () {
            console.log('different url')
        }
    })
    .resolve();

console.log('APP JS says hello');