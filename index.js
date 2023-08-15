/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let mainInp = document.getElementById("main-input")
let button = document.getElementById("main-btn")
let val1 = document.getElementById("val1")
let val2 = document.getElementById("val2")
let val3 = document.getElementById("val3")

button.addEventListener("click", () => {
    let n = mainInp.value
    convertLength(Number(n))
    convertVolume(Number(n))
    convertMass(Number(n))
    mainInp.value = ""
})

function convertLength(num) {
    let feetVal = num * 3.281
    let meterVal = num / 3.281
    val1.textContent = `${num} meters = ${feetVal.toFixed(3)} feet | ${num} feet = ${meterVal.toFixed(3)} meters`
}

function convertVolume(num) {
    let gallVal = num * 0.264
    let litVal = num / 0.264
    val2.textContent = `${num} liters = ${gallVal.toFixed(3)} gallons | ${num} gallons = ${litVal.toFixed(3)} liters`
}

function convertMass(num) {
    let poundVal = num * 2.204
    let kiloVal = num / 2.204
    val3.textContent = `${num} kilos = ${poundVal.toFixed(3)} pounds | ${num} pounds = ${kiloVal.toFixed(3)} kilos`
}