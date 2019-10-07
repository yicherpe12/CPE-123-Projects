var pinkColor,whiteColor,greenColor,yellowColor,brownColor;
var deerSize = 1;
function setup(){
	createCanvas(482,640);
	background(255);
	pinkColor=color('#FD5B68');
	whiteColor=color('#F5F5F5');
	greenColor=color('#798543');
	yellowColor=color('#F9B016');
	deerColor=color('#724438');
	treeColor=color('#744C40');
	noStroke();
}

function draw(){
	sky();
	clouds();
	hills();
	trees();
	deer();
	love();
}

function sky(){
	noStroke();
	fill(255,91,104);
	ellipse(250,400,700,700);
	var radius=300;
	var deltag=(255-91)/radius;
	var deltab=(255-104)/radius;
	while(radius-=4>0){
		fill(255,255-(radius*deltag),255-(radius*deltab));
		ellipse(250,400,radius,radius);
	}
}
function clouds(){
	noStroke();
	fill(color('#797898'));
	var cloudData = [
		[49,190,50],
		[16,242,30],
		[205,322,15],
		[263,203,45],
		[274,263,30],
		[410,325,20],
		[434,355,10],
		[85,315,30],
	]
	for(var i=0;i<cloudData.length;i++){
		push();
		translate(cloudData[i][0],cloudData[i][1])
		scale(cloudData[i][2]);
		drawCloud();
		pop();
	}
	push();
	translate(100,180)
	scale(50,-30);
	drawCloud();
	pop();
	push();
	translate(340,180)
	scale(60,-40);
	drawCloud();
	pop();
}
function drawCloud(){
	ellipse(0,0,2,2);
	ellipse(-1,0.3,1.5,1.5);
	ellipse(+1,0.3,1.5,1.5);
	ellipse(-1.8,0.5,1,1);
	ellipse(+1.8,0.5,1,1);
	ellipse(+2.3,0.6,0.7,0.7);
	ellipse(-2.3,0.6,0.7,0.7);
	ellipse(+2.6,0.7,0.4,0.4);
	ellipse(-2.6,0.7,0.4,0.4);
	ellipse(+2.8,0.7,0.4,0.4);
	ellipse(-2.8,0.7,0.4,0.4);
	ellipse(+3,0.75,0.3,0.3);
	ellipse(-3,0.75,0.3,0.3);
}
function hills(){
	noStroke();
	beginShape();
	fill(yellowColor);
	vertex(482,392)
	vertex(0,414)
	vertex(0,640)
	vertex(482,640)
	endShape();
	stroke(255);
	strokeWeight(8);
	noFill();
	beginShape();
    curveVertex(240,430);
    curveVertex(240,430);
    curveVertex(310,438);
    curveVertex(370,459);
    curveVertex(459,476);
    curveVertex(480,475);
    curveVertex(600,440);
    endShape();
	noStroke();
	fill(greenColor)
	beginShape();
	curveVertex(0,640)
	curveVertex(0,640)
	curveVertex(0,358)
	curveVertex(0,358)
	curveVertex(81,312)
	curveVertex(216,396)
	curveVertex(296,516)
	curveVertex(296,516)
	curveVertex(422,481)
	curveVertex(482,500)
	curveVertex(482,500)
	curveVertex(482,640)
	curveVertex(482,640)
	endShape();
}
function trees(){
	noStroke();
	fill(treeColor);
	var treeData = [
		[33,483,30],
		[378,642,35],
		[301,625,24],
		[105,456,15],
		[152,446,10],
		[75,385,10]
	]
	for(var i=0;i<treeData.length;i++){
		push();
		translate(treeData[i][0],treeData[i][1])
		scale(treeData[i][2],-1);
		drawTree();
		pop();
	}
}
function drawTree(){
	rect(0,0,1,1000);
}
function love(){
	fill(whiteColor);
	rect(0,0,482,162);
	fill(pinkColor);
	textSize(90);
	text("LOVE",120,135);
}
function deer(){
	push();
	translate(82,624);
	scale(deerSize);
	fill(deerColor);
	noStroke();
	deer1();
	deer2();
	pop();
}
function deer1(){
	//To create this part, I made a seperate p5.js applet where whenever you click, it logs a translation of the cursor position
	//inside of the vertex command and appends that to a string. I then outlined the reference image with the mouse, and logged
	//the string when i was done, then pasted that text into here.
	beginShape();
	vertex(-69,4);vertex(-72,-35);vertex(-67,-59);vertex(-56,-85);vertex(-44,-114);vertex(-34,-170);vertex(-20,-184);
	vertex(20,-195);vertex(40,-192);vertex(64,-191);vertex(94,-191);vertex(117,-207);vertex(152,-267);vertex(149,-307);
	vertex(153,-294);vertex(160,-308);vertex(157,-296);vertex(153,-291);vertex(155,-281);vertex(160,-289);vertex(157,-279);
	vertex(156,-274);vertex(163,-280);vertex(166,-274);vertex(168,-278);vertex(162,-287);vertex(168,-283);vertex(169,-289);
	vertex(165,-304);vertex(172,-295);vertex(176,-307);vertex(175,-291);vertex(173,-276);vertex(172,-267);vertex(168,-257);
	vertex(204,-237);vertex(201,-222);vertex(167,-223);vertex(148,-160);vertex(140,-139);vertex(123,-119);vertex(111,-111);
	vertex(95,-109);vertex(98,-103);vertex(91,-14);vertex(99,-9);vertex(95,1);vertex(88,-1);vertex(81,-11);vertex(80,-19);
	vertex(84,-55);vertex(84,-79);vertex(78,-49);vertex(76,-15);vertex(80,-7);vertex(76,-3);vertex(68,-11);vertex(68,-31);
	vertex(70,-107);vertex(20,-118);vertex(-32,-71);vertex(-28,-11);vertex(-24,-3);vertex(-32,4);vertex(-40,-6);vertex(-40,-61);
	vertex(-52,-63);vertex(-62,-24);vertex(-64,-15);vertex(-57,-5);vertex(-68,3);
	endShape();
}
function deer2(){
	//To create this part, I made a seperate p5.js applet where whenever you click, it logs a translation of the cursor position
	//inside of the vertex command and appends that to a string. I then outlined the reference image with the mouse, and logged
	//the string when i was done, then pasted that text into here.
	beginShape();
	vertex(218,-193);vertex(208,-195);vertex(207,-197);vertex(213,-210);vertex(213,-222);vertex(204,-236);vertex(211,-259);
	vertex(219,-245);vertex(228,-235);vertex(235,-237);vertex(244,-234);vertex(257,-249);vertex(264,-249);vertex(264,-238);
	vertex(257,-225);vertex(250,-219);vertex(251,-201);vertex(245,-173);vertex(239,-161);vertex(228,-139);vertex(224,-115);
	vertex(220,-102);vertex(216,-98);vertex(212,-76);vertex(204,-61);vertex(203,-45);vertex(200,-28);vertex(199,-8);vertex(201,4);
	vertex(201,9);vertex(195,10);vertex(186,4);vertex(188,-14);vertex(190,-28);vertex(188,-36);vertex(192,-55);vertex(194,-84);
	vertex(172,-75);vertex(167,-63);vertex(168,-59);vertex(167,-34);vertex(164,-27);vertex(164,-15);vertex(164,-2);vertex(163,9);
	vertex(159,11);vertex(152,8);vertex(153,-16);vertex(156,-41);vertex(156,-74);vertex(140,-52);vertex(124,-33);vertex(111,-15);
	vertex(114,1);vertex(112,6);vertex(99,7);vertex(95,4);vertex(99,-20);vertex(104,-40);vertex(113,-52);vertex(122,-67);
	vertex(122,-81);vertex(114,-60);vertex(110,-54);vertex(100,-31);vertex(97,-47);vertex(93,-61);vertex(87,-82);vertex(85,-107);
	vertex(93,-135);vertex(112,-149);vertex(130,-154);vertex(149,-156);vertex(168,-158);vertex(180,-161);vertex(203,-174);
	vertex(218,-191);
	endShape();
}
