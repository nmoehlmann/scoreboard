let robotHealth = 100
let wizardHealth = 100

function robotRepair() {
  if (robotHealth >= 100) {
    return alert('robot is fully repaired!')
  }
  robotHealth += 10
  draw()
}

function wizardHeal() {
  if (wizardHealth >= 100) {
    return alert('wizard has full health!')
  }
  wizardHealth += 10
  draw()
}

function laserCannon() {
  wizardHealth -= 20
  draw()
  gameOver()
}

function fireball() {
  robotHealth -= 20
  draw()
  gameOver()
}

function draw() {
  document.getElementById("robotHealth").innerText = `${robotHealth}`
  document.getElementById("wizardHealth").innerText = `${wizardHealth}`
}

function drawRestart() {
  document.getElementById("robotHealth").innerText = `${robotHealth}`
  document.getElementById("wizardHealth").innerText = `${wizardHealth}`
  document.getElementById("cardHeader").innerText = 'Robot vs Wizard'
}

function restartGame() {
  robotHealth = 100
  wizardHealth = 100
  drawRestart()
}

function gameOver() {
  if (robotHealth <= 0) {
    document.getElementById("cardHeader").innerText = 'Wizard Wins'
    return
  }
  if (wizardHealth <= 0) {
    document.getElementById("cardHeader").innerText = 'Robot Wins'
    return
  }
}
