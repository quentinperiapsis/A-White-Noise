function Engine() {
	
	this.isRunning = null;
	this.events = null;


	this.init = function() {
		this.isRunning = false;
		this.events = new Events();
		this.events.loadScene("forest");
	}

	this.log = function(stuff) {
		console.log(stuff);
	}
}