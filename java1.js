
window.alert("Bienvenido/a")
let a =1, b = 2;
let res=0;
res = a+b;

console.log('el resultado es '+res);


document.getElementById("boton").onclick = function () {
	console.log("hacer click");
	document.getElementById ("demo").innerHTML= "Clickeado";
}
/*
*Se cambia con clickear en cualquier lado
document.addEventListener("click", function(){
	console.log("hola desde addEventListener")
	document.getElementById("demo2").innerHTML= "segundo click";

});
*/
document.getElementById("boton_color").onclick = function () {
	console.log("hacer click");
	document.body.style.backgroundColor = 'grey';
}
document.getElementById("boton_default").onclick = function () {
	console.log("hacer click");
	document.body.style.backgroundColor = 'black';
}