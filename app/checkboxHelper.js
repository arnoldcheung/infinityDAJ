function checkboxSetup(){
	//checkbox definition
	puntoCheckbox = createCheckbox('Punto', false);
	// orbitCheckbox = createCheckbox('Orbit', false);
	// energyCheckbox = createCheckbox('Energy', false);
	// radiationCheckbox = createCheckbox('Radiation', false);
	waveCheckbox = createCheckbox('Wave', false);
	infinityCheckbox = createCheckbox('Infinity', false);
	// signatureCheckbox = createCheckbox('Signature', false);
	
	// checkbox parent
	puntoCheckbox.parent(controlPanel);
	// orbitCheckbox.parent(controlPanel);
	// energyCheckbox.parent(controlPanel);
	// radiationCheckbox.parent(controlPanel);
	waveCheckbox.parent(controlPanel);
	infinityCheckbox.parent(controlPanel);

	resetCheckboxes();

	// checkbox events
	puntoCheckbox.touchStarted(puntoEvent);
	puntoCheckbox.mouseClicked(puntoEvent);
	
	// energyCheckbox.touchStarted(energyEvent);
	// energyCheckbox.mouseClicked(energyEvent);
	
	// orbitCheckbox.touchStarted(orbitEvent);
	// orbitCheckbox.mouseClicked(orbitEvent);
	
	// radiationCheckbox.touchStarted(radiationEvent);
	// radiationCheckbox.mouseClicked(radiationEvent);
	
	waveCheckbox.touchStarted(waveEvent);
	waveCheckbox.mouseClicked(waveEvent);

	infinityCheckbox.touchStarted(infinityEvent);
	infinityCheckbox.mouseClicked(infinityEvent);
}

function resetCheckboxes(){

	puntoCheckbox.position(iroPickerDiv.x, iroPickerDiv.y + parseFloat(iroPickerDiv.style('height')) + 20);	// this position here controls all the checkbox / sliders' position relative this this
	// energyCheckbox.position(puntoCheckbox.x, puntoCheckbox.y + sliderSpacing);
	// orbitCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 3 * sliderSpacing);
	// radiationCheckbox.position(energyCheckbox.x, puntoCheckbox.y + 4 * sliderSpacing);
	infinityCheckbox.position(puntoCheckbox.x, puntoCheckbox.y + 3 * sliderSpacing);
	waveCheckbox.position(puntoCheckbox.x, puntoCheckbox.y + 5 * sliderSpacing);


	puntoCheckbox.checked(false);
	infinityCheckbox.checked(false);
	// orbitCheckbox.checked(false);
	// energyCheckbox.checked(false);
	// radiationCheckbox.checked(false);
	waveCheckbox.checked(false);
}

function puntoEvent(){
	currentColorSelectionIndex = 2;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	generated = false;
}

function infinityEvent(){
	currentColorSelectionIndex = 3;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	generated = false;
}

function waveEvent(){
	currentColorSelectionIndex = 4;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	generated = false;
}

function signatureEvent(){
	currentColorSelectionIndex = 5;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
}
