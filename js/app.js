const drawingArea = document.querySelector('#drawingArea')
const slider = document.querySelector('#slider')
const sliderText = document.querySelector('#sliderText')
const colorPicker = document.querySelector('#colorPicker')

let rangeValue = slider.value
let colorValue = colorPicker.value
let checkMouseDown = false

slider.addEventListener('input', () => {
  rangeValue = slider.value
  updateSliderText(rangeValue)
  updateDrawingAreaElements(rangeValue)
  updateDrawingAreaGrid(rangeValue)
})

colorPicker.addEventListener('input', () => {
  colorValue = colorPicker.value
})

document.body.addEventListener('mousedown', () => {
  checkMouseDown =  true
})

document.body.addEventListener('mouseup', () => {
  checkMouseDown =  false
})

function updateSliderText(rangeValue){
  sliderText.innerText = `${rangeValue} x ${rangeValue}`
}

function updateDrawingAreaElements(rangeValue){
  drawingArea.replaceChildren()
  for(let i=0; i<rangeValue**2; i++){
    const drawingAreaElement = document.createElement('div')
    drawingAreaElement.classList.add('drawingAreaElement')
    drawingAreaElement.addEventListener('mouseover', () => {
      if(checkMouseDown === true){
        drawingAreaElement.style.backgroundColor = colorValue
      }
    })
    drawingArea.appendChild(drawingAreaElement)
  }
}

function updateDrawingAreaGrid(rangeValue){ 
  drawingArea.style.gridTemplateColumns = "repeat(" + rangeValue + ",1fr)"
  drawingArea.style.gridTemplateRows = "repeat(" + rangeValue + ",1fr)"
}

updateSliderText(rangeValue)
updateDrawingAreaElements(rangeValue)
updateDrawingAreaGrid(rangeValue)