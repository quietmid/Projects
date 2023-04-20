document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('grey').onclick = partyGrey

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'black'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyGrey() {
  document.querySelector('body').style.backgroundColor = 'grey'
  document.querySelector('body').style.color = 'black'
}

// First step, instead of changing color, I want it to change to an animated background (weather: Sunny, Rain, Snow, windy)

// Second step, I want to also have music implement upon the click

// Time, date of the week and Date top right hand cornerS