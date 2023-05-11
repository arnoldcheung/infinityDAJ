// var curveFunc = LemniscateOfBernoulli;
// var graphicsList = [];

// var g; //the graphics to draw the brush on

// var v = 0.5;
// var numDots = 40; //40


// var spread = 0.8; //7
// var s = 400;

var brushHeadEllipses = [];

var brushDim = [100, 50 , 10];

var tailGraphics;

var individualBrushSize = 500;


var straightBrushGraphics;
var curveBrushGraphics;

function setupBrushStroke(){

    brushGraphics = createGraphics(width, height);

    straightBrushGraphics = createGraphics(600, 600);
    curveBrushGraphics = createGraphics(600, 600);
    curveBrushGraphics2 = createGraphics(600, 600);


    // tailGraphics.background(255);
    setupTail();

    // curveBrushGraphics.background(255, 0, 0);

    /// setting up the random circles for the brush
	for(var r=0; r<1; r++){
		let row = []
		for(var e=0; e<20; e++){	
			row.push(random(10, 15));
	 	}
		// console.log(row.length);
		brushHeadEllipses.push(row); 
	}

    curveBrushGraphics.translate(curveBrushGraphics.width / 2, curveBrushGraphics.height / 2);
    straightBrushGraphics.translate(curveBrushGraphics.width / 2, curveBrushGraphics.height / 2);
   
    curveBrushGraphics2.translate(curveBrushGraphics.width / 2, curveBrushGraphics.height / 2);


    angleMode(RADIANS);
    curveBrushGraphics.noStroke();
    curveBrushGraphics.translate(-80, -100)
    drawBrushStroke(300, 300, 7, 50, 250, 0.005, 0, curveBrushGraphics)
    angleMode(DEGREES);

    angleMode(RADIANS);
    straightBrushGraphics.background(255, 0, 0)
    straightBrushGraphics.noStroke();
    straightBrushGraphics.translate(0, -100)
    drawBrushStroke(300, 300, 4, 270, 370, 0.005, 0, straightBrushGraphics)
    angleMode(DEGREES);


    // top left 
    brushGraphics.image(
        curveBrushGraphics,
        0, 
        0, 
        brushGraphics.width / 4, 
        brushGraphics.width / 4, 
        curveBrushGraphics.width / 3, 
        curveBrushGraphics.width / 3, 
        curveBrushGraphics.width * (2 / 3), 
        curveBrushGraphics.width * (2 / 3));
    

    brushGraphics.image(
        straightBrushGraphics,
        0,
        0,
        );
}

function drawBrushStroke(a, b, n, strokeBegin, strokeLength, spacing, textureBegin, canvas){
    
    // Tail splatter

    let i = (strokeLength * 0.95) * spacing
		
    // Calculate r based on the provided formula
    let r = a * b * (1 / ((abs(a * sin(i)) ** n + abs(b * cos(i)) ** n) ** (1 / n)));

    // Squircle parametric equations
    let x = r * cos(i);
    let y = r * sin(i);

    // Calculate the derivatives
    let dr_dt = -a * b * n * (cos(i) ** n * sin(i) ** (n - 1) - sin(i) ** n * cos(i) ** (n - 1)) / ((abs(a * sin(i)) ** n + abs(b * cos(i)) ** n) ** (1 + 1 / n));
    let dx_dt = dr_dt * cos(i) - r * sin(i);
    let dy_dt = dr_dt * sin(i) + r * cos(i);

    // Calculate the rotation angle
    let theta = atan2(dy_dt, dx_dt) - (PI / 2);



    canvas.push(); //
    canvas.translate(x, y);
    canvas.translate(-brushDim[0] / 2, -brushDim[1] / 2);
    canvas.rotate(theta);
    canvas.translate(brushDim[0] / 2, brushDim[1] / 2);

    canvas.translate(-brushDim[0] / 2, - brushDim[1] / 2)
    canvas.imageMode(CORNER);
    canvas.image(tailGraphics, 0, 0);
    canvas.pop(); 
    
    
    for(var j=strokeBegin; j < strokeLength ; j++){
		
		let i = j * spacing;
		
		// Calculate r based on the provided formula
		let r = a * b * (1 / ((abs(a * sin(i)) ** n + abs(b * cos(i)) ** n) ** (1 / n)));

		// Squircle parametric equations
		let x = r * cos(i);
		let y = r * sin(i);
	
		// Calculate the derivatives
		let dr_dt = -a * b * n * (cos(i) ** n * sin(i) ** (n - 1) - sin(i) ** n * cos(i) ** (n - 1)) / ((abs(a * sin(i)) ** n + abs(b * cos(i)) ** n) ** (1 + 1 / n));
		let dx_dt = dr_dt * cos(i) - r * sin(i);
		let dy_dt = dr_dt * sin(i) + r * cos(i);

		// Calculate the rotation angle
		let theta = atan2(dy_dt, dx_dt) - (PI / 2);

        // quadratic function to calculate opacity
        let fx = -(2 * (map(j, 0, strokeLength - 1, 0, 11) ** 2)) + 255 // opacity function (negative quadratic);
		
		// Draw the car (rectangle) with the correct position and rotation
		canvas.push();
        canvas.fill('#FFFFFF' + hex(int(fx * 0.3), 2)); 
		canvas.translate(x, y);
		canvas.translate(-brushDim[0] / 2, -brushDim[1] / 2);
		canvas.rotate(theta);
		canvas.translate(brushDim[0] / 2, brushDim[1] / 2);
		canvas.rectMode(CENTER);
		canvas.rect(0, 0, brushDim[0], brushDim[1], brushDim[2]);

        for(var h=0; h<brushHeadEllipses.length; h++){
			let row = brushHeadEllipses[h];
			for(var c=0; c<row.length; c++){
				let offset = map(c, 0, row.length - 1, -brushDim[0] / 2.5, brushDim[0] / 2.5);
				canvas.push(); // --- push 4 ---
				// if(j == strokeBegin ){
				// 	canvas.fill('#FFFFFF');
				// } else {
					canvas.fill('#C9C9CB' + hex(int(fx * 0.1) , 2));
				// }
				canvas.ellipse(offset, -brushDim[1] / 2.4, row[c]);
				canvas.pop(); // --- pop 4 ---
			}
		}
		

        // brush texture

        if (j > strokeLength * textureBegin && j < strokeLength){
        // if (j == strokeBegin){
			canvas.push(); // --- push 5 ---
			canvas.imageMode(CORNER);
            canvas.translate(-brushDim[0] / 2, - brushDim[1] / 2)
			canvas.tint('#D9D9D9' + hex(int(fx * 0.5) , 2));
            canvas.blendMode(MULTIPLY);
			canvas.image(tailGraphics, 0, 0);
			canvas.pop(); // --- pop 5 ---
		}
        
        
        canvas.pop();
	}
}

function setupTail(){
    tailGraphics = createGraphics(brushDim[0], brushDim[0] * 3);
    // tailGraphics.background(255);

	for (var k=0; k < 300; k++){
		let dotAngle = random(0, 360);
				
		let dotDist = random(0, tailGraphics.width / 4);

		let dotX = 2 * dotDist * cos(dotAngle);
		let dotY = 5 * dotDist * sin(dotAngle);
		
		tailGraphics.push();
		tailGraphics.noStroke();
		tailGraphics.fill('#FFFFFF60');
        // tailGraphics.fill('#000000');
        tailGraphics.translate(tailGraphics.width / 2, 0);
		tailGraphics.ellipse(dotX, dotY, random(1, 8));	
		tailGraphics.pop();
	}
}


// function setupInfinity(){
// 	infinityGraphics = createGraphics(width, height);
// 	infinityGraphics.rectMode(CENTER);
// 	// infinityGraphics.colorMode(HSB);
// 	infinityGraphics.noStroke();
	
// 	tailGraphics = createGraphics(2 * rectDim[0], 2 * rectDim[0]);
	
// 	/// setting up the random circles for the brush
// 	for(var r=0; r<1; r++){
// 		let row = []
// 		for(var e=0; e<10; e++){	
// 			row.push(random(10, 15));
// 	 	}
// 		// console.log(row.length);
// 		brushHeadEllipses.push(row); 
// 	}
	
// 	// setup tail
// 	setupTail();	
// }

// function drawInfinity(){
// 	infinityGraphics.clear(); // reset infinity
	
// 	rectDim = [infinityWidth, 50, 10]
	
// 	for(var b=0; b<numBrush; b++){
// 		drawBrush(b * 120);
// 	}
	
// }

// function LemniscateOfBernoulli(t, a){
// 	let x = (a * cos(t)) / (1 + sin(t)**2); 
// 	let y = (a * sin(t) * cos(t)) / (1 + sin(t)**2); 
// 	return [x, y]
// }


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

// function drawBrush(timeDelay){
// 	infinityGraphics.push(); // --- push 1 ---
// 	infinityGraphics.translate(infinityGraphics.width / 2,infinityGraphics.height / 2);

// // the manual construction of the brush stroke

// 	// tail splatter
// 	[x, y] = LemniscateOfBernoulli(((frameCount + timeDelay) * v) - (spread * numDots), s);

// 	infinityGraphics.push(); // --- push 2 ---
// 	infinityGraphics.imageMode(CENTER);
// 	infinityGraphics.translate(x, y);
// 	infinityGraphics.rotate(sin(((frameCount + timeDelay) * v) - (spread * numDots)) * 2);
// 	infinityGraphics.image(tailGraphics, 0, 0, infinityWidth * 2, infinityWidth * 2);
// 	infinityGraphics.pop(); // --- pop 2 ---
	
// 	for(var n=0; n<numDots; n++){

		
// 		let fx = -(2 * (map(n, 0, numDots - 1, 0, 11) ** 2)) + 255 // opacity function (negative quadratic);
// 		infinityGraphics.fill('#FFFFFF' + hex(int(fx), 2));

// 		// main infinity function
// 		[x, y] = LemniscateOfBernoulli(((frameCount + timeDelay) * v) - (spread * n), s);

// 		// main brush base (rectangle)
// 		infinityGraphics.push(); // --- push 3 ---
// 		infinityGraphics.translate(x, y);
// 		infinityGraphics.rotate(sin(((frameCount + timeDelay) * v) - (spread * n)) * 2);
// 		infinityGraphics.rect(0, 0, rectDim[0], rectDim[1], rectDim[2]);
		
		
// 		// head texture of brush
// 		for(var r=0; r<brushHeadEllipses.length; r++){
// 			let row = brushHeadEllipses[r];
// 			for(var i=0; i<row.length; i++){
// 				let offset = map(i, 0, row.length - 1, -rectDim[0] / 2.5, rectDim[0] / 2.5);
// 				infinityGraphics.push(); // --- push 4 ---
// 				if(n == 0 ){
// 					infinityGraphics.fill('#FFFFFF');
// 				} else {
// 					infinityGraphics.fill('#E9E9E9' + hex(int(fx * 0.3) , 2));
// 				}
// 				infinityGraphics.ellipse(offset, rectDim[1] / 2.4, row[i]);
// 				infinityGraphics.pop(); // --- pop 4 ---
// 			}
// 		}
	
// 		// brush body texture
// 		if (n > numDots * 0.15 && n < numDots * 0.95){
// 			infinityGraphics.push(); // --- push 5 ---
// 			infinityGraphics.imageMode(CENTER);
// 			infinityGraphics.tint('#D7D7D7' + hex(int(fx * 0.3) , 2));
// 			infinityGraphics.image(tailGraphics, 0, 0, infinityWidth, infinityWidth);
// 			infinityGraphics.pop(); // --- pop 5 ---
// 		}
// 		infinityGraphics.pop(); // --- pop 3 ---
// 	}	
// 	infinityGraphics.pop(); // --- pop 1 ---
// }
