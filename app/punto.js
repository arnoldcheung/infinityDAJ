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
	
	sinVal = map(sin(frameCount), -1, 1, 0.9, 1.1)
	
	puntoGraphics.rect(punto_r,  puntoGraphics.height * 0.8, sinVal * 100, sinVal * 100, roundness);
	// puntoGraphics.rect(puntoGraphics.width * 0.8,  puntoGraphics.height * 0.8, punto_r, punto_r, roundness);
	// puntoGraphics.rect((puntoGraphics.width + s) / 2,  puntoGraphics.height / 2, punto_r, punto_r, roundness);

}