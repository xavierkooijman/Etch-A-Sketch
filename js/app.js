const drawingArea = document.querySelector('#drawingArea')
const slider = document.querySelector('#slider')
const sliderText = document.querySelector('#sliderText')
const colorPicker = document.querySelector('#colorPicker')

slider.addEventListener('input', () => {
  updateSliderText()
  updateDrawingAreaElements()
  updateDrawingAreaGrid()
})

function updateSliderText(){
  let rangeValue = slider.value
  sliderText.innerText = `${rangeValue} x ${rangeValue}`
}

function updateDrawingAreaElements(){
  drawingArea.replaceChildren()
  let rangeValue = slider.value
  for(let i=0; i<rangeValue**2; i++){
    const drawingAreaElement = document.createElement('div')
    drawingAreaElement.classList.add('drawingAreaElement')
    drawingArea.appendChild(drawingAreaElement)
  }
}

function updateDrawingAreaGrid(){
  let rangeValue = slider.value 
  drawingArea.style.gridTemplateColumns = "repeat(" + rangeValue + ",1fr)"
  drawingArea.style.gridTemplateRows = "repeat(" + rangeValue + ",1fr)"
}

updateSliderText()
updateDrawingAreaElements()
updateDrawingAreaGrid()