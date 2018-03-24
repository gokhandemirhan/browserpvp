"use strict";

function Player(name) {
    this.name = name;
    this.isAlive = 1;
    this.baseHealth = 10;
    this.health = 0;
    this.damage = 0;
    this.hit = function(robot) {
        if (this.isAlive && this.damage) {
            robot.health -= this.damage;
            this.say(" I hit " + robot.name + " with " + this.damage);
            if (robot.health <= 0) {
                robot.isAlive = 0;
                robot.say("I am dead!");
            }
        }
    };
    this.say = function(sentence) {
        printScreen(this.name + ": " + sentence);
    };
    this.equip = function(item) {
        if (item instanceof Weapon) {
            this.weapon = item;
        } else if (item instanceof Armour) {
            this.armour = item;
        }
        this.updateStats();
        this.say(" I equiped " + item.type);
    };
    this.updateStats = function(){
        this.health = this.baseHealth + (this.armour && this.armour.health || 0);
        this.damage = (this.weapon && this.weapon.damage) || 0;
    };

    this.updateStats();
}

module.exports = Player;