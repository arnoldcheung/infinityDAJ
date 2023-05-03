currentPixelDensity = 2;

// Control Panel Setup ----------------------------------------------------------------------------------------
let panelVisible = true; // boolean to check if controlPanel is currently visible
let controlPanel; // the Div that is the control panel

let iroPickerDiv; // div that contains the colorpicker

let elementName; // element name Div element

// buttons ----------------------------------------------------------------------------------------
let generateButton;
let nextElementButton;
let hideShowButton; // the button toggle that turns the controlPanel on & off (will rename)
let captureButton;
let resetButton;

// list of canvas and graphics stacked on top of base canvas ----------------------------------------------------------------------------------------
let mainCanvas;
let puntoGraphics;
let starsGraphics;
let orbitGraphics;
let energyGraphics;
let radiationGraphics;
let infinityGraphics;
let waveGraphics;
let buttonMenuDiv;

// flag to show signature or not ----------------------------------------------------------------------------------------
let signature = false;

// punto variables ----------------------------------------------------------------------------------------
var initial_punto_r;
var punto_r;

// flag that checks if the art is generated or modified ----------------------------------------------------------------------------------------
let generated = false;

// the generation number ----------------------------------------------------------------------------------------
let universeNumber;

// sliders ----------------------------------------------------------------------------------------

let sliderSpacing = 35;

let puntoSizeSlider;
let roundnessSlider;
let infinityNumSlider;
let infinityWidthSlider;
let waveHeightSlider;

// Checkboxes ----------------------------------------------------------------------------------------
let puntoCheckbox;
// let orbitCheckbox;
// let energyCheckbox;
// let radiationCheckbox
let infinityCheckbox;
let waveCheckbox;

// text inputs ----------------------------------------------------------------------------------------
let nameInput;
let numberInput;

// energy variables ----------------------------------------------------------------------------------------
let growSize; // spped of the energy shapes grow
let layerSize; // thickness of the energy

// font ----------------------------------------------------------------------------------------
let font = 'Courier New'; // on sketch label font


// color selection toggle ----------------------------------------------------------------------------------------

// let colorList = ['#021E3A', // bg
// 				'#FFFFFF', // stars
// 				'#FF6400', // Punto
// 				'#DBFF26', // energy 1
// 				'#3DE049', // energy 2
// 				'#FFFFFF', // orbit
// 				'#AEF064', // radiation
// 				'#FF8AFF', // wave
// 				'#FFFFFF'] // signature

// let colorNameList = ['Space',
// 					'Stars',
// 					'Punto',
// 					'Energy One',
// 					'Energy Two',
// 					'Orbit',
// 					'Radiation', 
// 					'Wave',
// 					'Signature'];


let colorList = [
	'#021E3A', // bg
	'#FFFFFF', // stars
	'#FF6400', // Punto
	'#DBFF26', // Infinity
	'#3DE049', // Wave
	'#FFFFFF'] // signature

let colorNameList = [
	'Space',
	'Stars',
	'Punto',
	'Infinity',
	'Wave',
	'Signature'];

let numSelectableColors = colorList.length;
let currentColorSelectionIndex = 0;


// new variables
// let infinitySize;
let infinityWidth;
let numBrush;
let roundness;
let waveHeight;

// orbit variable ----------------------------------------------------------------------------------------
const numCircles = 1200;
let circleData = [];

function setup() {
	createMetaTag();
	pixelDensity(currentPixelDensity);
	createCanvas(windowWidth, windowHeight);

	background(0);
	
	angleMode(DEGREES);
	
	//create main canvas ----------------------------------------------------------------------------------------
	mainCanvas = createGraphics(width, height);
	mainCanvas.angleMode(DEGREES);
	
	// create orbit cancvas ----------------------------------------------------------------------------------------
	setupOrbit();
	
	// Create punto grapghics ----------------------------------------------------------------------------------------
	setupPunto();
	
	// Create scatter grapghics ----------------------------------------------------------------------------------------
	setupStars();
	
	// Create energy grapghics ----------------------------------------------------------------------------------------
	setupEnergy();
	
	// Create wave grapghics ----------------------------------------------------------------------------------------
	setupWaves();	
	
	// Create radiation graphics ----------------------------------------------------------------------------------------
	setupRadiation();
	
	// Create radiation graphics ----------------------------------------------------------------------------------------
	setupInfinity();

	// Setup control panel ----------------------------------------------------------------------------------------
	setupControlPanel();

	setupNameInput();
	
	setupNumberInput();
	
	setupColorPicker();
	
	// Create Checkboxes ----------------------------------------------------------------------------------------
	checkboxSetup();
	
	// Create sliders ----------------------------------------------------------------------------------------
	sliderSetup();
	
	// Setup the three buttons at the bottom ----------------------------------------------------------------------------------------

	setupButtonMenu();

	togglePanel(); //turn panel off at the beginning
}

function draw() {
 	clear(); // reset base canvas
	mainCanvas.background(colorList[0]); // reset background
	puntoGraphics.clear();
	orbitGraphics.clear();  // reset orbit
	radiationGraphics.clear();  // reset radiation
	waveGraphics.clear();  // reset wave
	infinityGraphics.clear(); // reset infinity
	
	// get values from sliders ----------------------------------------------------------------------------------------
	// layerSize = energySizeSlider.value();
	
	// stroke_w = energySizeSlider.value();
	
	// waveFrequency = waveFrequencySlider.value();
	// energyHeight = energyHeightSlider.value();
		
    punto_r = puntoSizeSlider.value();
	
	// radiationSize = radiationSizeSlider.value();
	
	// orbit_speed = orbit_speed_slider.value();

	numBrush = infinityNumSlider.value();
	roundness = roundnessSlider.value();
	waveHeight = waveHeightSlider.value();
	infinityWidth = infinityWidthSlider.value();


	
	// Star grapghics ----------------------------------------------------------------------------------------

	mainCanvas.push();
	mainCanvas.tint(colorList[1] + '80');
	mainCanvas.image(starsGraphics, 0, 0);
	mainCanvas.pop();
	
	// wave grapghics ----------------------------------------------------------------------------------------
	if(waveCheckbox.checked()){
		drawWave();
		mainCanvas.image(waveGraphics, 0, 0);	
	}
	
	// // radiation graphics ----------------------------------------------------------------------------------------
	// if(radiationCheckbox.checked()){
	// 	drawRadiation();
	// 	mainCanvas.push();
	// 	mainCanvas.imageMode(CENTER);
	// 	mainCanvas.translate(width / 2, height / 2);
	// 	mainCanvas.rotate(frameCount * 0.2);
	// 	mainCanvas.image(radiationGraphics, 0, 0); // the triangles
	// 	mainCanvas.pop();
	// }
	
	// punto graphics ----------------------------------------------------------------------------------------
	if(puntoCheckbox.checked()){
		drawPunto();
		mainCanvas.image(puntoGraphics, 0, 0); // the circle
	}

	
	// // Orbit graphics ----------------------------------------------------------------------------------------
	// if(orbitCheckbox.checked()){
	// 	drawOrbit();
	// 	mainCanvas.push();
	// 	mainCanvas.tint(colorList[5]);
	// 	mainCanvas.image(orbitGraphics, 0, 0); // the orbit
	// 	mainCanvas.pop();
	// }
	
	// // energy graphics ----------------------------------------------------------------------------------------
	// if(energyCheckbox.checked()){
	// 	drawEnergy();
	// 	mainCanvas.push();
	// 	mainCanvas.translate(width / 2, height / 2);
	// 	mainCanvas.translate(0, energyHeight);
	// 	mainCanvas.rotate(-135);
	// 	mainCanvas.image(energyGraphics, 0, 0); // the radiating squares
	// 	mainCanvas.pop();
	// }

	// infinity graphics ----------------------------------------------------------------------------------------
	if(infinityCheckbox.checked()){
		mainCanvas.push();		
		mainCanvas.tint(colorList[3]);
		drawInfinity();
		mainCanvas.image(infinityGraphics, 0, 0); // the radiating squares
		mainCanvas.pop();
	}
	
	// signature ----------------------------------------------------------------------------------------
	if(signature){
		mainCanvas.push();
		mainCanvas.fill(colorList[5]);
		mainCanvas.textFont(font);
		mainCanvas.textAlign(RIGHT, BOTTOM);
		mainCanvas.textSize(20);
		mainCanvas.text(nameInput.value() + '@MGM', width - 10, height - 5);
		mainCanvas.pop();
	}
	
	// generate universe number ----------------------------------------------------------------------------------------
	
	if(generated){
		mainCanvas.push();
		mainCanvas.fill(colorList[8]);
		mainCanvas.textFont(font);
		mainCanvas.textAlign(CENTER, BOTTOM);
		mainCanvas.textSize(20);
		mainCanvas.text(universeNumber, width / 2, height - 5);
		mainCanvas.pop();
	}
		
	// composing the canvas ----------------------------------------------------------------------------------------
	// base
	// |- mainCanvas (background = space color)
	//    |- starsGraphics
	//    |- waveGraphics
	//    |- radiationGraphics
	//    |- puntoGraphics
	//    |- orbitGraphics
	//    |- energyGraphics
	//    |- Signature
	//	  |- Universe Number
	//

	mainCanvas.push();
	mainCanvas.fill('#FF0000');
	mainCanvas.textFont(font);
	mainCanvas.textSize(50);
	mainCanvas.text('Test 6',100, 100);
	mainCanvas.pop();


	image(mainCanvas, 0, 0); // drawing the main canvas onto the base canvas
}


