
export function notRead (){
console.log(":)");
}
/*  
 export let participantsList=['Daniel','Rubén','Emma','Ileen','Ignacio','Giacomo'];

/* let participantsList=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']; */
let participantsList = [];


let arrayCopy = participantsList;
let sacrifices = [];


 
let initialPosition;
let movement;
let participantsValue='';

let participantsNumber = participantsList.length;// nº elementos array = nº participantes
let participantPosition = participantsList.indexOf(''); // calcula la posición del nombre dado en el array
/* let whatNameThere = participantsList.charAt(0); / calcula nombre de la posición dada	 
let participantArea = 360/participantsNumber; // calcula el area (grados) que se asigna a cada participante
let participantCoordinates = participantArea*participantPosition; // calcula la posición del nombre dado en el canvas ruleta

console.log(participantsNumber + ' participantes totales'); 
console.log(participantPosition + ' posición ejemplo en el array'); 



let canvas=document.getElementById("idcanvas") as HTMLCanvasElement;
let context=canvas.getContext("2d");
let center=canvas.width/2;

const startBtn=document.getElementById("start-btn");
const restartBtn=document.getElementById("restart-btn");
 



export function fillRoulette(participantsValue){
	participantsList.push(participantsValue);

	for (var i = 0; i < participantsList.length; i++) {
		

let canvas=document.getElementById("idcanvas") as HTMLCanvasElement;
let context=canvas.getContext("2d");
let center=canvas.width/2;

const startBtn=document.getElementById("start-btn");
const restartBtn=document.getElementById("restart-btn");
 
let pos_ini=0;
let clic=0;
let movement;
let listValue='';
/* let ejecutar = setTimeout(start, 20); */

// let participantsNumber = participantsList.length;// nº elementos array = nº participantes
// let participantPosition = participantsList.indexOf(''); // calcula la posición del nombre dado en el array
/* let whatNameThere = participantsList.charAt(0); / calcula nombre de la posición dada	*/
let participantArea = 360/participantsNumber; // calcula el area (grados) que se asigna a cada participante
let participantCoordinates = participantArea*participantPosition; // calcula la posición del nombre dado en el canvas ruleta

		console.log(participantsNumber + ' participantes totales'); 
		console.log(participantPosition + ' posición ejemplo en el array'); 
export function fillRoulette(listValue){
	participantsList.push(listValue);

	// for (var i = 0; i < participantsList.length; i++) {
	// 	context.beginPath();
	// 	context.moveTo(center,center);
	// 	context.arc(center,center,center-20,i*2*participantArea, (i+1)*2*participantArea);
	// 	context.lineTo(center,center);
	// 	context.save();
	// 	context.translate(center, center);
	// 	context.rotate(-1*(1*Math.PI/participantsNumber+i*2*Math.PI/participantsNumber)); 
	// 	context.translate(-center, -center);
	// 	context.font = "13px Roboto";
	// 	context.textAlign = "right";
	// 	context.fillStyle = "black";
	// 	context.fillText(participantsList[i], canvas.width-50, center); 
	// 	context.restore();
	// }

} 



// /* IMPRIMIR LISTA EN PANTALLA */
// export function printListInRoulette (){

// 		for (var i = 0; i < participantsList.length; i++) {
// 			context.beginPath();
// 			context.moveTo(center,center);
// 			context.arc(center,center,center-20,i*2*participantArea, (i+1)*2*participantArea);
// 			context.lineTo(center,center);
// 			context.save();
// 			context.translate(center, center);
// 			context.rotate(-1*(1*Math.PI/participantsNumber+i*2*Math.PI/participantsNumber)); 
// 			context.translate(-center, -center);
// 			context.font = "13px Roboto";
// 			context.textAlign = "right";
// 			context.fillStyle = "black";
// 			context.fillText(participantsList[i], canvas.width-50, center); 
// 			context.restore();
// 		} 
// }
// printListInRoulette ()




export function deleteChosenParticipant (chosen)
{
	if(arrayCopy.includes(chosen) == true){
		console.log(":(((");
		let chosenSacrifice = arrayCopy.splice(arrayCopy.indexOf(chosen),1);
		let newSacrifice = chosenSacrifice.toString ();
	
	
			sacrifices.push(newSacrifice);
	
		console.log(arrayCopy);
		console.log(sacrifices);
	}
		console.log(chosen + ':(');

}
		


export function chooseRandomParticipant () 
{ 
	
	let chosenParticipant = participantsList[Math.floor(Math.random()*participantsList.length)];
	console.log(chosenParticipant + ' participante al azar');
	deleteChosenParticipant (chosenParticipant);

	let participantPosition = participantsList.indexOf(chosenParticipant)
	console.log(participantPosition + ' su posición en el array');

	let constantNumber = participantPosition + 1;
	console.log(constantNumber + ' número sig.posición array. a sumar');
	
	let participantCoordinates = (participantArea/2)*(constantNumber)+(participantArea/2)*(participantPosition);
	console.log(participantCoordinates + ' grados que se le suman para hayar posición en ruleta');

    for (var i = 0; i < participantsList.length; i++) {

		// context.beginPath();
		// context.moveTo(center,center);
		// context.arc(center,center,center-20,i*2*participantArea, (i+1)*2*participantArea);
		// context.lineTo(center,center);
		// context.save();
		// context.translate(center, center);
		// context.rotate(-1*(1*Math.PI/participantsNumber+i*2*Math.PI/participantsNumber)); 
		// context.translate(-center, -center);
		// context.font = "13px Roboto";
		// context.textAlign = "right";
		// context.fillStyle = "black";
		// context.fillText(participantsList[i], canvas.width-50, center); 
		// context.restore();

	}

}  
/* 
 
  for (var i = 0; i < participantsList.length; i++) {
	  context.beginPath();
	  context.moveTo(center,center);
	  context.arc(center,center,center-20,i*2*Math.PI/participantsList.length, (i+1)*2*Math.PI/participantsList.length);
	  context.lineTo(center,center);
	  context.save();
	  context.translate(center, center);
	  context.rotate(3*2*Math.PI/(5*participantsList.length)+i*2*Math.PI/participantsList.length); 
	  context.translate(-center, -center);
	  context.font = "15px Roboto MS";
	  context.textAlign = "right";
	  context.fillStyle = "black";
	  context.fillText(participantsList[i], canvas.width-50, center); 
	  context.restore();
  }
 */
/*    function start(){
	  let timer=15;
		  let canvas=document.getElementById("idcanvas");
		  let index = 0
		  let player
		  movement = setInterval(function(){
			  initialPosition+=20;
			  canvas.style.transform='rotate('+initialPosition+'deg)';
			  timer--;
			  if(timer<=0){
				  clearInterval(movement);
			  } 
			  
			  player = participantsList[index]
			  index++;
			  console.log(player)

			  if(index>(participantsList.length-1)){
				  index=0;
			  }
			  
		  },100);
		}  
 */



/* 
function start(){

	} 
	

	function start(){

		if (clic==0) {	
		let canvas=document.getElementById("idcanvas");
		movement=setInterval(function(){
			pos_ini+=20;
			// canvas.style.transform='rotate('+pos_ini+'deg)';
			canvas.style.transform = `rotate(${participantCoordinates}deg)`;
		
		},20);
		clic=1;
		document.getElementById("idestado").innerHTML="Detener";
	}
	
		clearInterval(movement);
		clic=0;
		document.getElementById("idestado").innerHTML="Iniciar";
	
	}  
	

	start() */
	




/*   function random_color(){
	  let ar_digit=['2','3','4','5','6','7','8','9'];
	  let color='';
	  let i=0;
	  while(i<6){
		  let pos=Math.round(Math.random()*(ar_digit.length-1));
		  color=color+''+ar_digit[pos];
		  i++;
	  }
	  return '#'+color;
  }
 */
 /*  startBtn.addEventListener('click',start ); */

	// start()
	
// } 
		



export function random_color(){
	let ar_digit=['2','3','4','5','6','7','8','9'];
	let color='';
	let i=0;
	while(i<6){
		let pos=Math.round(Math.random()*(ar_digit.length-1));
		color=color+''+ar_digit[pos];
		i++;
	}
	return '#'+color;
} 


/*



function startBtn() {
			spinAngleStart = Math.random() * 10 + 10;
			spinTime = 0;
			spinTimeTotal = Math.random() * 3 + 4 * 1000;
			rotateWheel();
		  } 

 Initialize Variables
var inicioAngulo = 0;
var tiemoutGirar = null;
var optRuleta;
var GirarArcStart = 10;
var GirarTime = 0;
var GirarTimeTotal = 0;
var arc = Math.PI / (options.length / 2);

 Evento de girar del index principal.
document.getElementById("Girar").addEventListener("click", Girar);



		
function Girar() {
	GirarAngleStart = Math.random() * 10 + 10;
	GirarTime = 0;
	GirarTimeTotal = Math.random() * 3 + 4 * 1000;
	rotarRuleta();
  }
  
   Función que realiza el giro de la ruleta.
  function rotarRuleta() {
	GirarTime =  GirarTime + 30;
	if(GirarTime >= GirarTimeTotal) {
	  detenerRotacionRuleta();
	  return;
	}
	var GirarAngle = GirarAngleStart - mathOperations(GirarTime, 0, GirarAngleStart, GirarTimeTotal);
	inicioAngulo += (GirarAngle * Math.PI / 180);
	dibujarRuleta();
	tiemoutGirar = setTimeout('rotarRuleta()', 30);
  }
  
  // Detener la ruleta.
  function detenerRotacionRuleta() {
	clearTimeout(tiemoutGirar);
	var degrees = inicioAngulo * 180 / Math.PI + 90;
	var arcd = arc * 180 / Math.PI;
	var index = Math.floor((360 - degrees % 360) / arcd);
	optRuleta.save();
	optRuleta.font = 'bold 30px Verdana, Arial';
	var text = options[index]
	optRuleta.fillText(text, 250 - optRuleta.measureText(text).width / 2, 250 + 10);
  
  }
  
  function mathOperations(GirarTime, b, GirarAngleStart, GirarTimeTotal) {
	var ts = (GirarTime/=GirarTimeTotal)*GirarTime;
	var tc = ts*GirarTime;
	return b+GirarAngleStart*(tc + -3*ts + 3*GirarTime);
  }
  
  // Llamamos nuestra función que invocará las demás.
  dibujarRuleta();   
  
  */

