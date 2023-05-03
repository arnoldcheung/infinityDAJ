function setupWaves(){
	waveGraphics = createGraphics(width, height);
}

function drawWave(){
	waveGraphics.fill(colorList[4]);
	waveGraphics.noStroke();
	waveGraphics.beginShape();
	waveGraphics.vertex(0, waveHeight);
	waveGraphics.vertex(0, 0);
	waveGraphics.vertex(width, 0);
	waveGraphics.vertex(width, waveHeight);
	
	for(var i=waveGraphics.width; i >= 0; i-=waveGraphics.width / 100){
		let y = waveHeight * map(noise(frameCount * 0.002, i * 0.001), 0, 1, 0.4, 1.6);
		waveGraphics.curveVertex(i, y);
	}
	waveGraphics.endShape(CLOSE);
}