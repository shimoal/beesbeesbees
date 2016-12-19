var Grub = function() {
	this.age = 0;
	this.color = 'pink';
	this.food = 'jelly';
};

Grub.prototype.eat = function() {
	return;
};

var Bee = function() {
  this.age = 5;
  this.color = 'yellow';
};

// Bee.prototype = Object.create(Grub.prototype);

// Bee.prototype.constructor = Bee;