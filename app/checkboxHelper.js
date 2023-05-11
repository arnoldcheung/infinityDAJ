function checkboxSetup(){
	//checkbox definition
	puntoCheckbox = createCheckbox('Punto', true);
	waveCheckbox = createCheckbox('Wave', true);
	infinityCheckbox = createCheckbox('Light', true);

	// checkbox parent
	puntoCheckbox.parent(controlPanel);
	waveCheckbox.parent(controlPanel);
	infinityCheckbox.parent(controlPanel);

	resetCheckboxes();

	// checkbox events
	puntoCheckbox.touchStarted(puntoEvent);
	puntoCheckbox.mouseClicked(puntoEvent);

	waveCheckbox.touchStarted(waveEvent);
	waveCheckbox.mouseClicked(waveEvent);

	infinityCheckbox.touchStarted(infinityEvent);
	infinityCheckbox.mouseClicked(infinityEvent);
}

function resetCheckboxes(){

	puntoCheckbox.position(iroPickerDiv.x, iroPickerDiv.y + parseFloat(iroPickerDiv.style('height')) + 20);	// this position here controls all the checkbox / sliders' position relative this this
	infinityCheckbox.position(puntoCheckbox.x, puntoCheckbox.y + 2 * sliderSpacing);
	waveCheckbox.position(puntoCheckbox.x, puntoCheckbox.y + 3 * sliderSpacing);


	puntoCheckbox.checked(true);
	infinityCheckbox.checked(true);
	waveCheckbox.checked(true);
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

	// if (this.value() == ''){
	signature = false;
	// }
}

function messageEvent(){
	currentColorSelectionIndex = 5;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
}