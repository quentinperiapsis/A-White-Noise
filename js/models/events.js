function Events() {

	this.activeScene = null;
	this.eventQueue = [];

	this.loadScene = function(name) {
		engine.log('loading scene: ' + name);
		this.activeScene = name;
		
		var scene = new Scene(name);

	}

	this.activeEvent = function() {
		if (this.eventQueue && this.eventQueue.length > 0) {
			return this.eventQueue[0];
		}
		
		return null;
	}

	this.startEvent = function(event, options) {
		if(event) {
			this.eventQueue.unshift(event);
		}
	}

}