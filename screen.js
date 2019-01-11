(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"screen_atlas_", frames: [[138,0,80,80],[138,82,80,80],[134,164,72,72],[0,0,136,136],[0,138,132,132]]}
];


// symbols:



(lib.CachedTexturedBitmap_67 = function() {
	this.initialize(ss["screen_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_68 = function() {
	this.initialize(ss["screen_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_69 = function() {
	this.initialize(ss["screen_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_70 = function() {
	this.initialize(ss["screen_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_71 = function() {
	this.initialize(ss["screen_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_71();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tile, new cjs.Rectangle(-1,-1,66,66), null);


(lib.Highlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_70();
	this.instance.parent = this;
	this.instance.setTransform(-2,-2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Highlight, new cjs.Rectangle(-2,-2,68,68), null);


(lib.ArrowButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Arrow
	this.instance = new lib.CachedTexturedBitmap_67();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_68();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,-20,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_69();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-18,-18,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.Tiles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tile();
	this.instance.parent = this;
	this.instance.setTransform(768,256);

	this.instance_1 = new lib.Tile();
	this.instance_1.parent = this;
	this.instance_1.setTransform(704,256);

	this.instance_2 = new lib.Tile();
	this.instance_2.parent = this;
	this.instance_2.setTransform(704,320);

	this.instance_3 = new lib.Tile();
	this.instance_3.parent = this;
	this.instance_3.setTransform(704,384);

	this.instance_4 = new lib.Tile();
	this.instance_4.parent = this;
	this.instance_4.setTransform(640,384);

	this.instance_5 = new lib.Tile();
	this.instance_5.parent = this;
	this.instance_5.setTransform(576,384);

	this.instance_6 = new lib.Tile();
	this.instance_6.parent = this;
	this.instance_6.setTransform(512,384);

	this.instance_7 = new lib.Tile();
	this.instance_7.parent = this;
	this.instance_7.setTransform(512,320);

	this.instance_8 = new lib.Tile();
	this.instance_8.parent = this;
	this.instance_8.setTransform(512,256);

	this.instance_9 = new lib.Tile();
	this.instance_9.parent = this;
	this.instance_9.setTransform(512,192);

	this.instance_10 = new lib.Tile();
	this.instance_10.parent = this;
	this.instance_10.setTransform(448,192);

	this.instance_11 = new lib.Tile();
	this.instance_11.parent = this;
	this.instance_11.setTransform(384,192);

	this.instance_12 = new lib.Tile();
	this.instance_12.parent = this;
	this.instance_12.setTransform(320,192);

	this.instance_13 = new lib.Tile();
	this.instance_13.parent = this;
	this.instance_13.setTransform(320,128);

	this.instance_14 = new lib.Tile();
	this.instance_14.parent = this;
	this.instance_14.setTransform(320,64);

	this.instance_15 = new lib.Tile();
	this.instance_15.parent = this;
	this.instance_15.setTransform(256,64);

	this.instance_16 = new lib.Tile();
	this.instance_16.parent = this;
	this.instance_16.setTransform(192,64);

	this.instance_17 = new lib.Tile();
	this.instance_17.parent = this;
	this.instance_17.setTransform(128,64);

	this.instance_18 = new lib.Tile();
	this.instance_18.parent = this;
	this.instance_18.setTransform(128,128);

	this.instance_19 = new lib.Tile();
	this.instance_19.parent = this;
	this.instance_19.setTransform(128,192);

	this.instance_20 = new lib.Tile();
	this.instance_20.parent = this;
	this.instance_20.setTransform(128,256);

	this.instance_21 = new lib.Tile();
	this.instance_21.parent = this;
	this.instance_21.setTransform(128,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tiles, new cjs.Rectangle(127,63,706,386), null);


// stage content:
(lib.screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		const tiles = this.tiles;
		const highlight = this.highlight;
		const backButton = this.backButton;
		const frontButton = this.frontButton;
		let airConsole;
		
		function start()
		{
			airConsole = new AirConsole();
			
			airConsole.onConnect = deviceId =>
			{
				checkTwoPlayers();
			};
		
			airConsole.onDisconnect = deviceId =>
			{
			  const player = airConsole.convertDeviceIdToPlayerNumber(deviceId);
				
			  if (player !== undefined)
				  airConsole.setActivePlayers(0);
			  
			  checkTwoPlayers();
			};
			
			airConsole.onMessage = (deviceId, data) =>
			{
				const player = airConsole.convertDeviceIdToPlayerNumber(deviceId);
				
				if (player !== undefined && data.offset !== undefined)
					moveHighlight(tiles.index + data.offset);
			};
			
			tiles.index = 0;
			moveHighlight(tiles.index);
			backButton.on("click", e => moveHighlight(--tiles.index));	
			frontButton.on("click", e => moveHighlight(++tiles.index));
		}
		
		function checkTwoPlayers()
		{
			const activePlayers = airConsole.getActivePlayerDeviceIds();
			const connectedControllers = airConsole.getControllerDeviceIds();
		
			if (activePlayers.length == 0)
				if (connectedControllers.length >= 2)
					airConsole.setActivePlayers(2);
		}
		
		function moveHighlight(index)
		{
			tiles.index = clamp(index, 0, tiles.children.length - 1);
			highlight.x = tiles.children[tiles.index].x;
			highlight.y = tiles.children[tiles.index].y;
		}
		
		function clamp(value, min, max)
		{
			if (value < min)
				return min;
			else if (value > max)
				return max;
			else
				return value;
		}
		
		stage.on("drawstart", start, null, true);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// UI
	this.backButton = new lib.ArrowButton();
	this.backButton.name = "backButton";
	this.backButton.parent = this;
	this.backButton.setTransform(436,504,1,1,0,0,180);
	new cjs.ButtonHelper(this.backButton, 0, 1, 2);

	this.frontButton = new lib.ArrowButton();
	this.frontButton.name = "frontButton";
	this.frontButton.parent = this;
	this.frontButton.setTransform(524,504);
	new cjs.ButtonHelper(this.frontButton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frontButton},{t:this.backButton}]}).wait(1));

	// Tiles
	this.tiles = new lib.Tiles();
	this.tiles.name = "tiles";
	this.tiles.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.tiles).wait(1));

	// Highlight
	this.highlight = new lib.Highlight();
	this.highlight.name = "highlight";
	this.highlight.parent = this;
	this.highlight.setTransform(128,320);

	this.timeline.addTween(cjs.Tween.get(this.highlight).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(606,333,227,191);
// library properties:
lib.properties = {
	id: '667362787F989E47815C1C7FD437F1D5',
	width: 960,
	height: 540,
	fps: 60,
	color: "#36C1A8",
	opacity: 1.00,
	manifest: [
		{src:"images/screen_atlas_.png?1547189572052", id:"screen_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['667362787F989E47815C1C7FD437F1D5'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;