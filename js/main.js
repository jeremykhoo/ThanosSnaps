let slider = document.querySelector('.slider'),
    o = document.querySelector('.value'),
    field = document.querySelector('.number')
o.innerHTML = slider.value;

slider.addEventListener('input', function () {
  field.value = slider.value;
  o.innerHTML = slider.value;
}, false)

field.addEventListener('input', function () {
  slider.value = field.value;
  o.innerHTML = slider.value;
})

//get stuff
let enterBtn = document.querySelector('.enterBtn')
    snapBtn = document.querySelector('.snapBtn')
    hAliveEmt = document.querySelector('.hAlive')
    resetBtn = document.querySelector('.resetBtn')
    snapCtnEmt = document.querySelector('.snapCtn')
    toggleBtwn = false
    hAlive = 7546100816
    snapCtnVar = 0

var array = []


let initiateSnaps = function(seed,array){
  enterBtn.style.visibility = "hidden"
  slider.style.visibility = "hidden"
  field.style.visibility = "hidden"
  snapBtn.style.visibility = "visible"
  hAliveEmt.innerHTML = "Humans alive: " + Math.round(hAlive)
  snapCtnEmt.innerHTML = "Snap: " + snapCtnVar
  var a = 1664525,
      c = 1013904223,
      m = Math.pow(2, 32),
      seed = seed

  for (i = 0; i < 40; i++) {
    let x
    seed = (a * seed + c) % m
    x = seed / m
    array.push(x)
  }
}
  let reset = function(){
    enterBtn.style.visibility = "visible"
    slider.style.visibility = "visible"
    field.style.visibility = "visible"
    resetBtn.style.visibility = "hidden"
    hAlive = 7546100816
    snapCtnVar = 0
    hAliveEmt.innerHTML = "Humans alive: " + Math.round(hAlive)
    snapCtnEmt.innerHTML = "Snap: " + snapCtnVar
  }

let snap = function(array){
  if (array[0] < 0.5) {
  array.shift()
  hAlive = hAlive/2
  hAliveEmt.innerHTML = "Humans alive: " + Math.round(hAlive)
  snapCtnVar = snapCtnVar + 1
  snapCtnEmt.innerHTML = "Snap: " + snapCtnVar
  }

  else {
  snapCtnVar = snapCtnVar + 1
  snapCtnEmt.innerHTML = "Snap: " + snapCtnVar
  resetBtn.style.visibility = "visible"
  snapBtn.style.visibility = "hidden"
  alert("you ded")
  array.splice(0,array.length)
  }
}
