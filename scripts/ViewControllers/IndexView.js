"use strict";

var IndexViewController = function () {
    var $ = require('jquery');
    var menuTemplate = require('../Templates/Menu.hbs');

    var obj = {
        links :[
            {title: "Start game", path: '#!/createPlayer'},
            {title: "Load player", path: '/loadPlayer'},
            {title: "About game", path: '/about'}
        ]
    };

    var html = menuTemplate(obj);
    $('.container').html(html);

};


module.exports = IndexViewController;
