function convertTemp(){

let degree = document.getElementById("degree").value;
let type = document.getElementById("type").value;
let result;

if(degree === ""){
document.getElementById("result").innerText = "Enter a value!";
return;
}

degree = Number(degree);

if(type === "c"){
result = (degree * 9/5) + 32;
document.getElementById("result").innerText =
result.toFixed(2) + " °F";
}

else if(type === "f"){
result = (degree - 32) * 5/9;
document.getElementById("result").innerText =
result.toFixed(2) + " °C";
}

else{
result = degree - 273.15;
document.getElementById("result").innerText =
result.toFixed(2) + " °C";
}

}