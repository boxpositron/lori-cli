'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var describer = require('./commandDescriber');
var chalk = require('chalk');
var figlet = require('figlet');

var Availables = function () {
    function Availables() {
        _classCallCheck(this, Availables);

        this.commands = [];
        this.setCommands();
    }

    _createClass(Availables, [{
        key: 'log',
        value: function log() {
            figlet('Lori', this.figCb.bind(this));
        }
    }, {
        key: 'figCb',
        value: function figCb(err, data) {
            if (err) {
                console.log();
                console.log(chalk.bold(chalk.bgRed('Something went wrong...')));
                console.log();
                console.dir(err);
                console.log();
                return;
            }
            console.log(chalk.blue(data));
            this.commands.map(function (item) {
                item.log();
            });
        }
    }, {
        key: 'setCommands',
        value: function setCommands() {
            // new command
            var newDescriber = new describer('new');
            newDescriber.setDescription('Starts a new lori project.');
            newDescriber.setUsage('lori new [options] <name>');
            newDescriber.addOption('-t --type', 'For specifying development environment type, supports html, php and node.');
            this.commands.push(newDescriber);
        }
    }]);

    return Availables;
}();

module.exports = new Availables();