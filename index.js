let kg = 1000;
let lbs = 2.20462262;

document.getElementById("submit").onclick = function(){
 kg = document.getElementById("myText").value;
 kg = Number(kg);
 lbs = lbs * kg;
 document.getElementById("myH3").textContent = lbs + "lbs";
}


let lbs2 = 1;
let kg2 = 0.45359237;

document.getElementById("submit2").onclick = function(){
 lbs2 = document.getElementById("myText2").value;
 lbs2 = Number(lbs2);
 kg2 = kg2 * lbs2;
 document.getElementById("H3").textContent = kg2 + "kg";
}