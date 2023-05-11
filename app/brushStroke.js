

var brushHeadEllipses = [];

var brushDim = [100, 50 , 10];

var tailGraphics;

// var individualBrushSize = 500;
var brushCanvasSize = 600;

// var straightBrushGraphics;
// var curveBrushGraphics;

var brush1;
var brush2;
var brush3;
var brush4;
var brush5;
var brush6;



function setupBrushStroke(){

    brushGraphics = createGraphics(1180, 820);

    brushGraphics1 = createGraphics(1180, 820);
    brushGraphics2 = createGraphics(1180, 820);
    brushGraphics3 = createGraphics(1180, 820);

    // straightBrushGraphics = createGraphics(600, 600);
    // curveBrushGraphics = createGraphics(600, 600);
    // curveBrushGraphics2 = createGraphics(600, 600);

    brush1 = createGraphics(brushCanvasSize, brushCanvasSize);
    brush2 = createGraphics(brushCanvasSize, brushCanvasSize);
    brush3 = createGraphics(brushCanvasSize, brushCanvasSize);
    brush4 = createGraphics(brushCanvasSize, brushCanvasSize);
    brush5 = createGraphics(brushCanvasSize, brushCanvasSize);
    brush6 = createGraphics(brushCanvasSize, brushCanvasSize);


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

    // curveBrushGraphics.translate(curveBrushGraphics.width / 2, curveBrushGraphics.height / 2);
    // straightBrushGraphics.translate(curveBrushGraphics.width / 2, curveBrushGraphics.height / 2);
   
    // curveBrushGraphics2.translate(curveBrushGraphics.width / 2, curveBrushGraphics.height / 2);

    brush1.translate(brushCanvasSize / 2, brushCanvasSize / 2)
    brush2.translate(brushCanvasSize / 2, brushCanvasSize / 2)
    brush3.translate(brushCanvasSize / 2, brushCanvasSize / 2)
    brush4.translate(brushCanvasSize / 2, brushCanvasSize / 2)
    brush5.translate(brushCanvasSize / 2, brushCanvasSize / 2)
    brush6.translate(brushCanvasSize / 2, brushCanvasSize / 2)


    // setup brush 1
    angleMode(RADIANS);
    // straightBrushGraphics.background(255, 0, 0)
    brush1.noStroke();
    brush1.translate(0, -530)
    drawBrushStroke(300, 300, 4, 240, 370, 0.005, 0, brush1)
    angleMode(DEGREES);

    // setup brush 2
    angleMode(RADIANS);
    brush2.noStroke();
    brush2.translate(-250, -380)
    drawBrushStroke(300, 300, 5, 80, 250, 0.005, 0, brush2)
    angleMode(DEGREES);


    // setup brush 3
    angleMode(RADIANS);
    // curveBrushGraphics2.background(255, 0, 0)
    brush3.noStroke();
    brush3.translate(-250, -350)
    drawBrushStroke(300, 300, 5, 70, 190, 0.005, 0, brush3)
    angleMode(DEGREES);

    // setup brush 4
    angleMode(RADIANS);
    // straightBrushGraphics.background(255, 0, 0)
    brush4.noStroke();
    brush4.translate(0, -530)
    drawBrushStroke(300, 300, 4, 240, 300, 0.005, 0, brush4)
    angleMode(DEGREES);

     // setup brush 5
     angleMode(RADIANS);
     brush5.noStroke();
     brush5.translate(-250, -380)
     drawBrushStroke(300, 300, 5, 70, 180, 0.005, 0, brush5)
     angleMode(DEGREES);


    
    //drawing the brushes on the canvas

    // 1
    brushGraphics1.image(
        brush1,
        0,
        0,
        );

    // 2
    brushGraphics1.image(
        brush2,
        200, 
        0,);

    // 3
    brushGraphics2.push();
    brushGraphics2.translate(brush3.width / 2, 0)
    brushGraphics2.scale(-1, 1);
    brushGraphics2.image(
        brush3,
        -700, 
        0,);
    brushGraphics2.pop();

    //4
    brushGraphics3.push();
    brushGraphics3.translate(brush1.width / 2, 0)
    brushGraphics3.scale(-1, 1);
    brushGraphics3.image(
        brush1,
        -900, 
        0,);
    brushGraphics3.pop();

    //5
    brushGraphics1.push();
    brushGraphics1.translate(230, 330);
    brushGraphics1.rotate(PI / 2 - 0.3);
    brushGraphics1.translate(-230, -330);
    brushGraphics1.image(
        brush2,
        0, 
        200,);
    brushGraphics1.pop();

    //6
    brushGraphics2.push();
    brushGraphics2.translate(50, 50);
    brushGraphics2.translate(400, 400);
    brushGraphics2.rotate(-PI / 2);
    brushGraphics2.translate(-400, -400);
    brushGraphics2.image(
        brush4,
        150, 
        300,);
    brushGraphics2.pop();

    //7
    brushGraphics2.push();
    brushGraphics2.translate(350, 220);
    brushGraphics2.push();
    brushGraphics2.translate(300, 150);
    brushGraphics2.rotate(PI / 2);
    brushGraphics2.translate(-300, -150);
    brushGraphics2.image(
        brush5,
        0, 
        0,);
    brushGraphics2.pop();
    brushGraphics2.pop();
    
    //8
    brushGraphics3.push();
    brushGraphics3.translate(600, 220);
    brushGraphics3.push();
    brushGraphics3.translate(300, 150);
    brushGraphics3.rotate(PI);
    brushGraphics3.translate(-300, -150);
    brushGraphics3.image(
        brush2,
        0, 
        0,);
    brushGraphics3.pop();
    brushGraphics3.pop();

    //9
    brushGraphics3.push();
    brushGraphics3.translate(740, 220);
    brushGraphics3.push();
    brushGraphics3.translate(300, 150);
    brushGraphics3.rotate(PI);
    brushGraphics3.translate(-300, -150);
    brushGraphics3.image(
        brush4,
        0, 
        0,);
    brushGraphics3.pop();
    brushGraphics3.pop();
}

function drawBrushStroke(a, b, n, strokeBegin, strokeLength, spacing, textureBegin, canvas){
    
    // Tail splatter --------------------------------------------------------------------

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

    canvas.push();
    canvas.translate(x, y);
    canvas.translate(-brushDim[0] / 2, -brushDim[1] / 2);
    canvas.rotate(theta);
    canvas.translate(brushDim[0] / 2, brushDim[1] / 2);

    canvas.translate(-brushDim[0] / 2, - brushDim[1] / 2)
    canvas.imageMode(CORNER);
    canvas.image(tailGraphics, 0, 0);
    canvas.pop(); 
    
    
    // Main brush body --------------------------------------------------------------------

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
		
		// Draw the (rectangle) with the correct position and rotation
		canvas.push();
        canvas.fill('#FFFFFF' + hex(int(fx * 0.3), 2)); 
		canvas.translate(x, y);
		canvas.translate(-brushDim[0] / 2, -brushDim[1] / 2);
		canvas.rotate(theta);
		canvas.translate(brushDim[0] / 2, brushDim[1] / 2);
		canvas.rectMode(CENTER);
		canvas.rect(0, 0, brushDim[0], brushDim[1], brushDim[2]);

        // brush head --------------------------------------------------------------------

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
		

        // brush texture ----------------------------------------------------------------------

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

