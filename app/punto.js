function setupPunto(){
	puntoGraphics = createGraphics(width, height);
	puntoGraphics.rectMode(CENTER);
	// initial_punto_r = puntoGraphics.min(width, height) * 0.25;
	// punto_r = initial_punto_r;
	// drawPunto();
}

function drawPunto(){
	puntoGraphics.fill(colorList[2]);
	puntoGraphics.noStroke();	
	// puntoGraphics.ellipse(puntoGraphics.width / 2, puntoGraphics.height / 2, punto_r)
	
	puntoGraphics.rect(puntoGraphics.width * 0.8,  puntoGraphics.height * 0.8, punto_r, punto_r, roundness);
	// puntoGraphics.rect((puntoGraphics.width + s) / 2,  puntoGraphics.height / 2, punto_r, punto_r, roundness);

}