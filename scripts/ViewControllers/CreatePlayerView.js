"use strict";

var Player = require('../Models/Player');

var CreatePlayerViewController = function () {
    var $ = require('jquery');
    var createPlayerTemplate = require('../Templates/CreatePlayer.hbs');

    var html = createPlayerTemplate();
    $('.container').html(html);


    $("body").on("click", "button", function(e) {
        var player = new Player($("input.name").val());
        console.log(player.name);
    });

};


module.exports = CreatePlayerViewController;
