// Main Generate Universe Function ----------------------------------------------------------------------------------------

function generateUniverse(){
	
	resetUniverse();
			
	let inputNumber = numberInput.value();
	if(inputNumber.length < 8){
		let numNeeded = 8 - inputNumber.length;
		for(let i=0; i < numNeeded; i++){
			inputNumber = inputNumber + '0';
		}
	}
	
	numberInput.value(inputNumber);
	inputNumber = str(inputNumber);
	
	universeNumber = inputNumber;
		
	const numberArray = inputNumber.split('');
	
	generateSpace(numberArray);
	generateStars(numberArray);
	generatePunto(numberArray);
	// generateEnergy(numberArray);
	// generateRadiation(numberArray);
	// generateOrbit(numberArray);
	generateWave(numberArray);


	generateInfinity(numberArray);
	
	generated = true;
	
	return;
}

// Generate Space Function ----------------------------------------------------------------------------------------
function generateSpace(numberArray){
	
	let hexColor = numArrayToHex(numberArray, [2, 3, 4, 5, 0, 1]);
	hexColor = modifyRGBwithHSB(hexColor, [0, 360], [50, 100], [0, 50]);
	colorList[0] = hexColor;
}

// Generate Stars Function ----------------------------------------------------------------------------------------
function generateStars(numberArray){
	let hexColor = numArrayToHex(numberArray, [5, 4, 3, 1, 7, 6]);
	hexColor = modifyRGBwithHSB(hexColor, [0, 360], [50, 100], [0, 100]);
	colorList[1] = hexColor;
}

// Generate Punto Function ----------------------------------------------------------------------------------------
function generatePunto(numberArray){
	
	puntoCheckbox.checked(true);
	
	// Punto layer 1 ----------------------------------------------------------------------------------------
	// punto color
	let hexColor = numArrayToHex(numberArray, [2, 7, 3, 5, 1, 4]);
	hexColor = modifyRGBwithHSB(hexColor, [0, 360], [0, 100], [0, 100]);
	colorList[2] = hexColor;
	
	// Punto Size
	let puntoSizePair = parseInt(numberArray[0] + numberArray[3], 10);
	puntoSizeSlider.value(map(puntoSizePair, 0, 99, 30, min(width, height) * 0.3))	

	// Punto roundness
	let puntoRoundessPair = parseInt(numberArray[6] + numberArray[1], 10);
	roundnessSlider.value(map(puntoRoundessPair, 0, 99, 150, 0))	
}

// Generate Infinity Function ----------------------------------------------------------------------------------------
function generateInfinity(numberArray){
	
	infinityCheckbox.checked(true);
	
	// infinty color
	let hexColor = numArrayToHex(numberArray, [4, 1, 0, 2, 3, 5]);
	hexColor = modifyRGBwithHSB(hexColor, [360, 0], [100, 50], [100, 50]);
	colorList[3] = hexColor;
	
	// infinity Number
	let infinityNumberPair = parseInt(numberArray[1] + numberArray[2], 10);
	infinityNumSlider.value(floor(map(infinityNumberPair, 0, 99, 1, 4)));

	// infinity Width
	let infinityWidthPair = parseInt(numberArray[5] + numberArray[7], 10);
	infinityWidthSlider.value(map(infinityWidthPair, 0, 99, 250, 0));
}



// Generate Wave Function ----------------------------------------------------------------------------------------
function generateWave(numberArray){
	
	waveCheckbox.checked(true);
	
	// wave color
	let hexColor = numArrayToHex(numberArray, [5, 0, 4, 2, 6, 7]);
	hexColor = modifyRGBwithHSB(hexColor, [0, 360], [0, 100], [0, 100]);
	colorList[4] = hexColor;
	
	// wave frequency
	let waveHeightPair = parseInt(numberArray[4] + numberArray[6], 10);
	waveHeightSlider.value(map(waveHeightPair, 0, 99, 10, waveGraphics.height * 0.9));
}

// num input to hex color helper function ----------------------------------------------------------------------------------------
function numArrayToHex(numberArray, numChoice){
	
// first 6 numbers into background color	
	const rPair = parseInt(numberArray[numChoice[0]] + numberArray[numChoice[1]], 10);
	const gPair = parseInt(numberArray[numChoice[2]] + numberArray[numChoice[3]], 10);
	const bPair = parseInt(numberArray[numChoice[4]] + numberArray[numChoice[5]], 10);
	
	// Map the combined integers (0-99) to the RGB color space (0-255)
	const r = floor(map(rPair, 0, 99, 0, 255));
	const g = floor(map(gPair, 0, 99, 0, 255));
	const b = floor(map(bPair, 0, 99, 0, 255));

	// Convert the RGB values to a hex color code
	const hexColor = '#' + hex(r, 2) + hex(g, 2) + hex(b, 2);

	return hexColor;
}

// Modify rgb hex with hsb helper function ----------------------------------------------------------------------------------------
function modifyRGBwithHSB(inputRgbHex, hRange, sRange, vRange){
	// Convert the input RGB hex code to a p5.Color object
	const inputColor = color(inputRgbHex);

	// Change the color mode to HSB
	colorMode(HSB, 360, 100, 100);

	// Extract the HSB values from the input p5.Color object
	let h = hue(inputColor);
	let s = saturation(inputColor);
	let v = brightness(inputColor);
		
	// hsb remap
	h = map(h, 0, 360, hRange[0], hRange[1]);
	s = map(s, 0, 100, sRange[0], sRange[1]);
	v = map(v, 0, 100, vRange[0], vRange[1]);
	
	// Create a new p5.Color object with the modified HSB values
	const modifiedColor = color(h, s, v);

	// Change the color mode back to RGB
	colorMode(RGB, 255, 255, 255);
	
	// Extract the RGB values from the modified p5.Color object
	const r = floor(red(modifiedColor));
	const g = floor(green(modifiedColor));
	const b = floor(blue(modifiedColor));

	// Convert the RGB values to an RGB hex code
	const outputRgbHex = '#' + hex(r, 2) + hex(g, 2) + hex(b, 2);
	
	return outputRgbHex;
}