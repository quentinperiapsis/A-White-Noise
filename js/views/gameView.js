function gameView() {

	this.levelDiv = null;
	this.storyDiv = null;
	this.statsDiv = null;

	this.init = function() {
		this.levelDiv = document.createElement("div");
		this.levelDiv.id = "levelDiv";
		this.levelDiv.style.width = "80%";
		this.levelDiv.style.height = "100%";
		this.levelDiv.style.backgroundColor = "black";
		this.levelDiv.style.position = "absolute";
		this.levelDiv.style.top = "0px";
		this.levelDiv.style.left = "0px";

		this.storyDiv = document.createElement("div");
		this.storyDiv.id = "storyDiv";
		this.storyDiv.style.width = "20%";
		this.storyDiv.style.height = "70%";
		this.storyDiv.style.backgroundColor = "white";
		this.storyDiv.style.position = "absolute";
		this.storyDiv.style.bottom = "0px";
		this.storyDiv.style.right = "0px";

		this.statsDiv = document.createElement("div");
		this.statsDiv.id = "statsDiv";
		this.statsDiv.style.width = "20%";
		this.statsDiv.style.height = "30%";
		this.statsDiv.style.backgroundColor = "blue";
		this.statsDiv.style.position = "absolute";
		this.statsDiv.style.top = "0px";
		this.statsDiv.style.right = "0px";

		document.body.appendChild(this.levelDiv);
		document.body.appendChild(this.storyDiv);
		document.body.appendChild(this.statsDiv);
	}

	this.render = function() {

	}
}
