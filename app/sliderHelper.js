function sliderSetup(){
	//slider definition
	// size_slider = createSlider(10, min(width, height) * 0.8, 10, 1);
	// energySizeSlider = createSlider(5, 50, 20, 1);
	// waveFrequencySlider = createSlider(0.00001, 0.005, 0.001, 0.00001);
	// energyHeightSlider = createSlider(-600, 1600, 0, 1);
	// orbit_speed_slider = createSlider(-5, 5, 0.5, 0.0001);
	// radiationSizeSlider = createSlider(0.1, 1, 0.5, 0.01);

	//slider definition
	puntoSizeSlider = createSlider(30, min(width, height) * 0.3, 100, 1);
	roundnessSlider = createSlider(0, 200, 0, 1);
	infinityNumSlider = createSlider(1, 3, 1, 1);
	infinityWidthSlider = createSlider(50, 250, 100, 1);
	waveHeightSlider = createSlider(10, waveGraphics.height * 0.9, 200, 1);
	
	// set slider parent and classes
	puntoSizeSlider.parent(controlPanel);
	roundnessSlider.parent(controlPanel);
	infinityNumSlider.parent(controlPanel);
	infinityWidthSlider.parent(controlPanel);
	waveHeightSlider.parent(controlPanel);

	puntoSizeSlider.class('custom-slider');
	roundnessSlider.class('custom-slider');
	infinityNumSlider.class('custom-slider');
	infinityWidthSlider.class('custom-slider');
	waveHeightSlider.class('custom-slider');

	resetSliders();
	
	
	// slider events
	// size_slider.mouseReleased(resetSizeSlider);
	// size_slider.touchEnded(resetSizeSlider);
	
	puntoSizeSlider.touchStarted(puntoSliderEvent);
	puntoSizeSlider.mousePressed(puntoSliderEvent);

	roundnessSlider.touchStarted(puntoSliderEvent);
	roundnessSlider.mousePressed(puntoSliderEvent);
	
	// roundnessSlider.touchStarted(puntoSliderEvent);
	// roundnessSlider.mousePressed(puntoSliderEvent);

	infinityNumSlider.touchStarted(infinitySliderEvent);
	infinityNumSlider.mousePressed(infinitySliderEvent);
	
	infinityWidthSlider.touchStarted(infinitySliderEvent);
	infinityWidthSlider.mousePressed(infinitySliderEvent);
	
	waveHeightSlider.touchStarted(waveSliderEvent);
	waveHeightSlider.mousePressed(waveSliderEvent);
	
}

function resetSliders(){

	puntoSizeSlider.position(puntoCheckbox.x + parseFloat(infinityCheckbox.style('width')) + 10, puntoCheckbox.y);
	roundnessSlider.position(puntoSizeSlider.x, puntoSizeSlider.y + sliderSpacing);
	infinityNumSlider.position(puntoSizeSlider.x, infinityCheckbox.y);
	infinityWidthSlider.position(puntoSizeSlider.x, infinityCheckbox.y + sliderSpacing);
	waveHeightSlider.position(puntoSizeSlider.x, waveCheckbox.y);

	// slider style
	puntoSizeSlider.style('width', controlPanel.width * 0.9 - puntoSizeSlider.x + 'px');
	roundnessSlider.style('width', puntoSizeSlider.style('width'));
	infinityNumSlider.style('width', puntoSizeSlider.style('width'));
	infinityWidthSlider.style('width', puntoSizeSlider.style('width'));
	waveHeightSlider.style('width', puntoSizeSlider.style('width'));

	// reset slider values

	puntoSizeSlider.value(100);
	roundnessSlider.value(200);
	infinityNumSlider.value(1);
	infinityWidthSlider.value(100);
	waveHeightSlider.value(200);
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

function infinitySliderEvent(){
	currentColorSelectionIndex = 3;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	infinityCheckbox.checked(true);
	generated = false;
}

function waveSliderEvent(){
	currentColorSelectionIndex = 4;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	waveCheckbox.checked(true);
	generated = false;
}