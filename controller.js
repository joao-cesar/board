(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"controller_atlas_", frames: [[722,1082,720,760],[0,1082,720,760],[962,0,648,684],[0,0,960,1080]]}
];


// symbols:



(lib.CachedTexturedBitmap_63 = function() {
	this.initialize(ss["controller_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_64 = function() {
	this.initialize(ss["controller_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_65 = function() {
	this.initialize(ss["controller_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_66 = function() {
	this.initialize(ss["controller_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ArrowButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Arrow
	this.instance = new lib.CachedTexturedBitmap_63();
	this.instance.parent = this;
	this.instance.setTransform(-180,-190,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_64();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-180,-190,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_65();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-162,-171,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_66();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-240,-270,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-270,480,540);


// stage content:
(lib.controller = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		const backButton = this.backButton;
		const frontButton = this.frontButton;
		let airConsole;
		
		function start()
		{
			airConsole = new AirConsole({ "orientation": "landscape" });
			
			backButton.on("mousedown", e => airConsole.message(AirConsole.SCREEN, { offset: -1 }));
			frontButton.on("mousedown", e => airConsole.message(AirConsole.SCREEN, { offset: 1 }));
		}
		
		start();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// UI
	this.backButton = new lib.ArrowButton();
	this.backButton.name = "backButton";
	this.backButton.parent = this;
	this.backButton.setTransform(240,270,1,1,0,0,180);
	new cjs.ButtonHelper(this.backButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.frontButton = new lib.ArrowButton();
	this.frontButton.name = "frontButton";
	this.frontButton.parent = this;
	this.frontButton.setTransform(720,270);
	new cjs.ButtonHelper(this.frontButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frontButton},{t:this.backButton}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(540,350,360,110);
// library properties:
lib.properties = {
	id: '667362787F989E47815C1C7FD437F1D5',
	width: 960,
	height: 540,
	fps: 60,
	color: "#36A2C1",
	opacity: 1.00,
	manifest: [
		{src:"images/controller_atlas_.png?1547189359810", id:"controller_atlas_"}
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