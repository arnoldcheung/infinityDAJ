var curveFunc = LemniscateOfBernoulli;
var graphicsList = [];

var g; //the graphics to draw the brush on

var v = 0.5;
var numDots = 40; //40


var spread = 0.8; //7
var s = 400;

var brushHeadEllipses = [];

var rectDim = [100, 50 , 10];

var tailGraphics;


function setupInfinity(){
	infinityGraphics = createGraphics(width, height);
	infinityGraphics.rectMode(CENTER);
	// infinityGraphics.colorMode(HSB);
	infinityGraphics.noStroke();
	
	tailGraphics = createGraphics(2 * rectDim[0], 2 * rectDim[0]);
	
	/// setting up the random circles for the brush
	for(var r=0; r<1; r++){
		let row = []
		for(var e=0; e<10; e++){	
			row.push(random(10, 15));
	 	}
		// console.log(row.length);
		brushHeadEllipses.push(row); 
	}
	
	// setup tail
	setupTail();	
}

function drawInfinity(){
	infinityGraphics.clear(); // reset infinity
	
	rectDim = [infinityWidth, 50, 10]
	
	for(var b=0; b<numBrush; b++){
		drawBrush(b * 120);
	}
	
}

function LemniscateOfBernoulli(t, a){
	let x = (a * cos(t)) / (1 + sin(t)**2); 
	let y = (a * sin(t) * cos(t)) / (1 + sin(t)**2); 
	return [x, y]
}


// function setupTail(){
// 	for (var k=0; k < 200; k++){
// 		let dotAngle = random(0, 360);
				
// 		let dotDist = random(0, tailGraphics.width / 4);

// 		let dotX = 1 * dotDist * cos(dotAngle);
// 		let dotY = 1.4 * dotDist * sin(dotAngle);
		
// 		tailGraphics.push();
// 		tailGraphics.noStroke();
// 		tailGraphics.fill('#FFFFFFA0');
// 		tailGraphics.translate(tailGraphics.width / 2, tailGraphics.height / 2);
// 		tailGraphics.ellipse(dotX, dotY, random(1, 8));	
// 		tailGraphics.pop();
// 	}
// }

function drawBrush(timeDelay){
	infinityGraphics.push(); // --- push 1 ---
	infinityGraphics.translate(infinityGraphics.width / 2,infinityGraphics.height / 2);

// the manual construction of the brush stroke

	// tail splatter
	[x, y] = LemniscateOfBernoulli(((frameCount + timeDelay) * v) - (spread * numDots), s);

	infinityGraphics.push(); // --- push 2 ---
	infinityGraphics.imageMode(CENTER);
	infinityGraphics.translate(x, y);
	infinityGraphics.rotate(sin(((frameCount + timeDelay) * v) - (spread * numDots)) * 2);
	infinityGraphics.image(tailGraphics, 0, 0, infinityWidth * 2, infinityWidth * 2);
	infinityGraphics.pop(); // --- pop 2 ---
	
	for(var n=0; n<numDots; n++){

		
		let fx = -(2 * (map(n, 0, numDots - 1, 0, 11) ** 2)) + 255 // opacity function (negative quadratic);
		infinityGraphics.fill('#FFFFFF' + hex(int(fx), 2));

		// main infinity function
		[x, y] = LemniscateOfBernoulli(((frameCount + timeDelay) * v) - (spread * n), s);

		// main brush base (rectangle)
		infinityGraphics.push(); // --- push 3 ---
		infinityGraphics.translate(x, y);
		infinityGraphics.rotate(sin(((frameCount + timeDelay) * v) - (spread * n)) * 2);
		infinityGraphics.rect(0, 0, rectDim[0], rectDim[1], rectDim[2]);
		
		
		// head texture of brush
		for(var r=0; r<brushHeadEllipses.length; r++){
			let row = brushHeadEllipses[r];
			for(var i=0; i<row.length; i++){
				let offset = map(i, 0, row.length - 1, -rectDim[0] / 2.5, rectDim[0] / 2.5);
				infinityGraphics.push(); // --- push 4 ---
				if(n == 0 ){
					infinityGraphics.fill('#FFFFFF');
				} else {
					infinityGraphics.fill('#E9E9E9' + hex(int(fx * 0.3) , 2));
				}
				infinityGraphics.ellipse(offset, rectDim[1] / 2.4, row[i]);
				infinityGraphics.pop(); // --- pop 4 ---
			}
		}
	
		// brush body texture
		if (n > numDots * 0.15 && n < numDots * 0.95){
			infinityGraphics.push(); // --- push 5 ---
			infinityGraphics.imageMode(CENTER);
			infinityGraphics.tint('#D7D7D7' + hex(int(fx * 0.3) , 2));
			infinityGraphics.image(tailGraphics, 0, 0, infinityWidth, infinityWidth);
			infinityGraphics.pop(); // --- pop 5 ---
		}
		infinityGraphics.pop(); // --- pop 3 ---
	}	
	infinityGraphics.pop(); // --- pop 1 ---
}
