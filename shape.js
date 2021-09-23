var gl; 
var size=1;
window.onload = function init() {

  const canvas = document.querySelector("#glcanvas");
  gl = canvas.getContext("webgl");
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }
  var program=initShaders(gl,"vertex-shader","fragment-shader"); 
  gl.useProgram(program);
   var theta,thetaLoc;
   var x,y,z;
   var xColor;
   var right,up;
   var vTrans1,vTrans2,vScale;
  
    var myButton = document.getElementById("ColourButton"); 
	myButton.addEventListener("click",function() {x=1.0,y=0.0,z=0.0;});

    var myButton2 = document.getElementById("rotate"); 
	myButton2.addEventListener("click",function(){theta=0;size=1;});

    xColor=gl.getUniformLocation(program,"vColor");
	x=1.0;
	y=1.0;
    z=1.0;
	gl.uniform4f(xColor,x,y,z,1);
	
	thetaLoc=gl.getUniformLocation(program,"theta");
	theta=0;
	gl.uniform1f(thetaLoc,theta);
	
	vTrans1=gl.getUniformLocation(program,"translate1");
	right=0;
	up=0;
	gl.uniform1f(vTrans1,right);
	
	vTrans2=gl.getUniformLocation(program,"translate2");
	right=0;
	up=0;
	gl.uniform1f(vTrans2,right);
	
    vScale=gl.getUniformLocation(program,"scale");
    size=1;
    gl.uniform1f(vScale,size);
	
	var m = document.getElementById("mymenu");
	var m1=document.getElementById("mymenu1");
	var m2=document.getElementById("mymenu2");
	m.addEventListener("click", function() {
		switch (m.selectedIndex) {
			case 0:
				xColor=gl.getUniformLocation(program,"vColor");
				x=1.0;
				y=0.0;
				z=0.0;
				gl.uniform4f(xColor,x,y,z,1);
				//gl.uniform4f(xColor,1,0,0,1);
				render();
				break;
			case 1:
				xColor=gl.getUniformLocation(program,"vColor");
				x=0.0;
				y=1.0;
				z=0.0;
				gl.uniform4f(xColor,x,y,z,1);
				render();
				break;
			case 2:
				xColor=gl.getUniformLocation(program,"vColor");
				x=0.0;
				y=0.0;
				z=1.0;
				gl.uniform4f(xColor,x,y,z,1);
				render();
				break;
			case 3:
			    xColor=gl.getUniformLocation(program,"vColor");
				x=1.0;
				y=1.0;
				z=0.0;
				gl.uniform4f(xColor,x,y,z,1);
				render();
				break;
			case 4:
			    xColor=gl.getUniformLocation(program,"vColor");
				x=1.0;
				y=0.0;
				z=1.0;
				gl.uniform4f(xColor,x,y,z,1);
				render();
				break;
			case 5:
			    xColor=gl.getUniformLocation(program,"vColor");
				x=1.0;
				y=0.5;
				z=0.0;
				gl.uniform4f(xColor,x,y,z,1);
				render();
				break;
				
		}
	});
	
		m1.addEventListener("click", function() {
		switch (m1.selectedIndex) {
			case 0:
			 thetaLoc=gl.getUniformLocation(program,"theta");
				theta-=0.3;
				gl.uniform1f(thetaLoc,theta);
				render();
				break;
	        case 1:
			thetaLoc=gl.getUniformLocation(program,"theta");
				theta+=0.3;
				gl.uniform1f(thetaLoc,theta);
				render();
				break;
			case 2:
				vScale=gl.getUniformLocation(program,"scale");
				size=size*2;
				gl.uniform1f(vScale,size);
				render();
				break;
	        case 3:
				vScale=gl.getUniformLocation(program,"scale");
				size=size/2;
				gl.uniform1f(vScale,size);
				render();
				break;
		}
	});
	 
	 
	
window.addEventListener("keydown",function() {
      switch (event.keyCode) {
         case 38: //’up’key
		  vTrans2=gl.getUniformLocation(program,"translate2");
		  up+=0.4;
		  gl.uniform1f(vTrans2,up);
		  render();
		  break;
         case 40: // ’down’key
		 vTrans2=gl.getUniformLocation(program,"translate2");
			up-=0.4;
			gl.uniform1f(vTrans2,up);
		    render();
		    break;
         case 39: // ’right’key
		 vTrans1=gl.getUniformLocation(program,"translate1");
		   right+=0.4;
		   gl.uniform1f(vTrans1,right);
            render();
            break;
		case 37: //leftkey
		 vTrans1=gl.getUniformLocation(program,"translate1");
		 right-=0.4;
		 gl.uniform1f(vTrans1,right);
          render();
			break;
      }
   });

	
//initial square vertex coordinates
var vertices = [ vec2(-0.2,0.4), //S
                 vec2(-0.6,0.4),
				 vec2(-0.2,0.3),
				 vec2(-0.6,0.4),
                 vec2(-0.6,0.3),
				 vec2(-0.2,0.3),
				 
				 vec2(-0.6,0.3),
                 vec2(-0.6,0.0),
				 vec2(-0.5,0.3),
				 vec2(-0.5,0.3),
                 vec2(-0.5,0.0),
				 vec2(-0.6,0.0),
				 
				 vec2(-0.5,0.0),
                 vec2(-0.2,0.0),
				 vec2(-0.5,0.1),
				 vec2(-0.2,0.0),
                 vec2(-0.2,0.1),
				 vec2(-0.5,0.1),
				 
				 vec2(-0.2,0.0),
                 vec2(-0.3,0.0),
				 vec2(-0.3,-0.3),
				 vec2(-0.2,0.0),
                 vec2(-0.3,-0.3),
				 vec2(-0.2,-0.3),
				 
				 vec2(-0.2,-0.3),
                 vec2(-0.6,-0.3),
				 vec2(-0.6,-0.4),
				 vec2(-0.2,-0.3),
                 vec2(-0.2,-0.4),
				 vec2(-0.6,-0.4),
				 //K 
				 vec2(0.2,0.4),
                 vec2(0.3,0.4),
				 vec2(0.2,-0.4),
				 vec2(0.3,0.4),
                 vec2(0.3,-0.4),
				 vec2(0.2,-0.4),
				 
				 vec2(0.3,0.1),
                 vec2(0.6,0.4),
				 vec2(0.7,0.3),
				 vec2(0.3,0.1),
                 vec2(0.3,0.0),
				 vec2(0.7,0.3),
				 
				 
				 vec2(0.3,0.1),
                 vec2(0.3,0.0),
				 vec2(0.7,-0.3),
				 vec2(0.3,0.0),
                 vec2(0.6,-0.4),
				 vec2(0.7,-0.3),
				 
				 ]
				 
			   
 var bufferId = gl.createBuffer();
 gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
 gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );
 
 var vPosition = gl.getAttribLocation( program, "vPosition" );
 gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
 gl.enableVertexAttribArray( vPosition );

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  render();

};

function render(){ 
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.TRIANGLES, 0, 48);
}
