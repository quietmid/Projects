const sunny = document.querySelector('#sunny')
const rain = document.querySelector('#rain')
const snow = document.querySelector('#snow')
const wind = document.querySelector('#wind')

document.querySelector('#sunnyNow').addEventListener('click', sunnyNow)
document.querySelector('#rainNow').addEventListener('click', rainNow)
document.querySelector('#snowNow').addEventListener('click', snowNow)
document.querySelector('#windNow').addEventListener('click', windNow)

function sunnyNow(){
	rain.classList.add('hidden')
	snow.classList.add('hidden')
	wind.classList.add('hidden')
	sunny.classList.toggle('hidden')
}

function rainNow(){
	sunny.classList.add('hidden')
	snow.classList.add('hidden')
	wind.classList.add('hidden')
	rain.classList.toggle('hidden')
}

function snowNow(){
	rain.classList.add('hidden')
	sunny.classList.add('hidden')
	wind.classList.add('hidden')
	snow.classList.toggle('hidden')
}

function windNow(){
	rain.classList.add('hidden')
	snow.classList.add('hidden')
	sunny.classList.add('hidden')
	wind.classList.toggle('hidden')
}
// First step, instead of changing color, I want it to change to an animated background (weather: Sunny, Rain, Snow, windy) done but needs to reload everytime to pick a new backgrounds

// Second step, I want to also have music implement upon the click

// Time, date of the week and Date top right hand corners