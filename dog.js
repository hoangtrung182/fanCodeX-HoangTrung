var chalk = require('chalk');

function Dog(name) {
	this.name = name;
	this.dead = false;
}
Dog.prototype.sayHi = function() {
	console.log('Hi! I am a dog. My name is ' + chalk.red(this.name));
};

module.exports = Dog;