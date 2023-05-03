function sliderSetup(){
	//slider definition
	// size_slider = createSlider(10, min(width, height) * 0.8, 10, 1);
	// energySizeSlider = createSlider(5, 50, 20, 1);
	// waveFrequencySlider = createSlider(0.00001, 0.005, 0.001, 0.00001);
	// energyHeightSlider = createSlider(-600, 1600, 0, 1);
	// orbit_speed_slider = createSlider(-5, 5, 0.5, 0.0001);
	// radiationSizeSlider = createSlider(0.1, 1, 0.5, 0.01);

	//slider definition
	puntoSizeSlider = createSlider(10, min(width, height) * 0.4, 100, 1);
	roundnessSlider = createSlider(0, 500, 0, 1);
	infinityNumSlider = createSlider(1, 3, 1, 1);
	infinityWidthSlider = createSlider(50, 350, 100, 1);
	waveHeightslider = createSlider(10, waveGraphics.height, 200, 1);
	
	// set slider parent and classes
	puntoSizeSlider.parent(controlPanel);
	roundnessSlider.parent(controlPanel);
	infinityNumSlider.parent(controlPanel);
	infinityWidthSlider.parent(controlPanel);
	waveHeightslider.parent(controlPanel);

	puntoSizeSlider.class('custom-slider');
	roundnessSlider.class('custom-slider');
	infinityNumSlider.class('custom-slider');
	infinityWidthSlider.class('custom-slider');
	waveHeightslider.class('custom-slider');

	resetSliders();
	
	
	// slider events
	// size_slider.mouseReleased(resetSizeSlider);
	// size_slider.touchEnded(resetSizeSlider);
	
	// puntoSizeSlider.touchStarted(puntoSliderEvent);
	// puntoSizeSlider.mousePressed(puntoSliderEvent);
	
	// roundnessSlider.touchStarted(puntoSliderEvent);
	// roundnessSlider.mousePressed(puntoSliderEvent);

	// infinityNumSlider.touchStarted(WaveSliderEvent);
	// infinityNumSlider.mousePressed(WaveSliderEvent);
	
	// infinityWidthSlider.touchStarted(energySliderEvent);
	// infinityWidthSlider.mousePressed(energySliderEvent);
	
	// waveHeightslider.touchStarted(orbitSliderEvent);
	// waveHeightslider.mousePressed(orbitSliderEvent);
	
}

function resetSliders(){

	puntoSizeSlider.position(puntoCheckbox.x + parseFloat(infinityCheckbox.style('width')) + 10, puntoCheckbox.y);
	roundnessSlider.position(puntoSizeSlider.x, puntoSizeSlider.y + sliderSpacing);
	infinityNumSlider.position(puntoSizeSlider.x, infinityCheckbox.y);
	infinityWidthSlider.position(puntoSizeSlider.x, infinityCheckbox.y + sliderSpacing);
	waveHeightslider.position(puntoSizeSlider.x, waveCheckbox.y);

	// slider style
	puntoSizeSlider.style('width', controlPanel.width * 0.9 - puntoSizeSlider.x + 'px');
	roundnessSlider.style('width', puntoSizeSlider.style('width'));
	infinityNumSlider.style('width', puntoSizeSlider.style('width'));
	infinityWidthSlider.style('width', puntoSizeSlider.style('width'));
	waveHeightslider.style('width', puntoSizeSlider.style('width'));

	// reset slider values

	puntoSizeSlider.value(100);
	roundnessSlider.value(200);
	infinityNumSlider.value(1);
	infinityWidthSlider.value(100);
	waveHeightslider.value(200);
}

// function resetSizeSlider(){
// 	size_slider.value(10);
// 	punto_r = 10;
// }

function puntoSliderEvent(){
	currentColorSelectionIndex = 2;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// puntoCheckbox.checked(true);
	generated = false;
}

function energySliderEvent(){
	currentColorSelectionIndex = 3;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// energyCheckbox.checked(true);
	generated = false;
}

function orbitSliderEvent(){
	currentColorSelectionIndex = 5;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// orbitCheckbox.checked(true);
	generated = false;
}

function radiationSliderEvent(){
	currentColorSelectionIndex = 6;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// radiationCheckbox.checked(true);
	generated = false;
}

function WaveSliderEvent(){
	currentColorSelectionIndex = 7;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// waveCheckbox.checked(true);
	generated = false;
}