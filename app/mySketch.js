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
let infinityGraphics;
let brushGraphics;
let waveGraphics;
let buttonMenuDiv;

// flag to show signature or not ----------------------------------------------------------------------------------------
let signature = false;

// punto variables ----------------------------------------------------------------------------------------
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
let infinityCheckbox;
let waveCheckbox;

// text inputs ----------------------------------------------------------------------------------------
let nameInput;
let numberInput;

// font ----------------------------------------------------------------------------------------
let font = 'Courier New'; // on sketch label font

// color selection toggle ----------------------------------------------------------------------------------------

let colorList = [
	'#F5F4EB', // bg
	'#FFFFFF', // stars
	'#FF6400', // Punto
	'#0032C9', // Infinity
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


// infinity variables ----------------------------------------------------------------------------------------
let infinityWidth;
let numBrush;
let roundness;

// wave variables ----------------------------------------------------------------------------------------
let waveHeight;

function setup() {
	createMetaTag();
	pixelDensity(currentPixelDensity);
	createCanvas(windowWidth, windowHeight);

	background(0);
	
	angleMode(DEGREES);
	
	//create main canvas ----------------------------------------------------------------------------------------
	mainCanvas = createGraphics(width, height);
	mainCanvas.angleMode(DEGREES);
	
	// Create punto grapghics ----------------------------------------------------------------------------------------
	setupPunto();
	
	// Create scatter grapghics ----------------------------------------------------------------------------------------
	setupStars();
	
	// Create wave grapghics ----------------------------------------------------------------------------------------
	setupWaves();	
	
	// Create brushStroke graphics ----------------------------------------------------------------------------------------
	// setupInfinity();

	setupBrushStroke();


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
	waveGraphics.clear();  // reset wave
	// infinityGraphics.clear(); // reset infinity
	
	// get values from sliders ----------------------------------------------------------------------------------------
		
    punto_r = puntoSizeSlider.value();
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
	
	// punto graphics ----------------------------------------------------------------------------------------
	if(puntoCheckbox.checked()){
		drawPunto();
		mainCanvas.image(puntoGraphics, 0, 0); // the circle
	}

	// infinity graphics ----------------------------------------------------------------------------------------
	if(infinityCheckbox.checked()){
		mainCanvas.push();		
		mainCanvas.tint(colorList[3]);
		// drawInfinity();
		// mainCanvas.push();
		// mainCanvas.tint(colorList[3])
		mainCanvas.image(brushGraphics, 0, 0, width, height);
		// mainCanvas.pop();
		// mainCanvas.image(infinityGraphics, 0, 0); // the radiating squares
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
		mainCanvas.fill(colorList[5]);
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

	// mainCanvas.push();
	// mainCanvas.fill('#FF0000');
	// mainCanvas.textFont(font);
	// mainCanvas.textSize(50);
	// mainCanvas.text('Test 8',100, 100);
	// mainCanvas.pop();


	image(mainCanvas, 0, 0); // drawing the main canvas onto the base canvas
}


