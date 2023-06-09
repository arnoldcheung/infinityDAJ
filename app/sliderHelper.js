function sliderSetup(){
	//slider definition
	puntoSizeSlider = createSlider(width * 0.1, width * 0.9, width * 0.7, 1);
	roundnessSlider = createSlider(0, 50, 50, 1);
	infinityNumSlider = createSlider(1, 3, 3, 1);
	// infinityWidthSlider = createSlider(50, 250, 100, 1);
	waveHeightSlider = createSlider(10, waveGraphics.height * 0.9, waveGraphics.height * 0.6, 1);
	
	// set slider parent and classes
	puntoSizeSlider.parent(controlPanel);
	roundnessSlider.parent(controlPanel);
	infinityNumSlider.parent(controlPanel);
	// infinityWidthSlider.parent(controlPanel);
	waveHeightSlider.parent(controlPanel);

	puntoSizeSlider.class('custom-slider');
	roundnessSlider.class('custom-slider');
	infinityNumSlider.class('custom-slider');
	// infinityWidthSlider.class('custom-slider');
	waveHeightSlider.class('custom-slider');

	resetSliders();
	
	
	// slider events
	puntoSizeSlider.touchStarted(puntoSliderEvent);
	puntoSizeSlider.mousePressed(puntoSliderEvent);

	roundnessSlider.touchStarted(puntoSliderEvent);
	roundnessSlider.mousePressed(puntoSliderEvent);

	infinityNumSlider.touchStarted(infinitySliderEvent);
	infinityNumSlider.mousePressed(infinitySliderEvent);
	
	// infinityWidthSlider.touchStarted(infinitySliderEvent);
	// infinityWidthSlider.mousePressed(infinitySliderEvent);
	
	waveHeightSlider.touchStarted(waveSliderEvent);
	waveHeightSlider.mousePressed(waveSliderEvent);	
}

function resetSliders(){

	puntoSizeSlider.position(puntoCheckbox.x + parseFloat(infinityCheckbox.style('width')) + 10, puntoCheckbox.y);
	roundnessSlider.position(puntoSizeSlider.x, puntoSizeSlider.y + sliderSpacing);
	infinityNumSlider.position(puntoSizeSlider.x, infinityCheckbox.y);
	// infinityWidthSlider.position(puntoSizeSlider.x, infinityCheckbox.y + sliderSpacing);
	waveHeightSlider.position(puntoSizeSlider.x, waveCheckbox.y);

	// slider style
	puntoSizeSlider.style('width', controlPanel.width * 0.9 - puntoSizeSlider.x + 'px');
	roundnessSlider.style('width', puntoSizeSlider.style('width'));
	infinityNumSlider.style('width', puntoSizeSlider.style('width'));
	// infinityWidthSlider.style('width', puntoSizeSlider.style('width'));
	waveHeightSlider.style('width', puntoSizeSlider.style('width'));

	// reset slider values

	puntoSizeSlider.value(width * 0.7);
	roundnessSlider.value(50);
	infinityNumSlider.value(3);
	// infinityWidthSlider.value(100);
	waveHeightSlider.value(waveGraphics.height * 0.6);
}

function puntoSliderEvent(){
	currentColorSelectionIndex = 2;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	puntoCheckbox.checked(true);
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