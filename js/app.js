const drawingArea = document.querySelector('#drawingArea')
const slider = document.querySelector('#slider')
const sliderText = document.querySelector('#sliderText')

slider.addEventListener('input', () => {
  updateSliderText()
  updateDrawingAreaGrid()
})

function updateSliderText(){
  let rangeValue = slider.value
  sliderText.innerText = `${rangeValue} x ${rangeValue}`
}

function updateDrawingAreaGrid(){
  drawingArea.replaceChildren()
  let rangeValue = slider.value
  for(let i=0; i<rangeValue; i++){
    const drawingAreaElement = document.createElement('div')
    drawingAreaElement.classList.add('drawingAreaElement')
    drawingArea.appendChild(drawingAreaElement)
  }
}

updateSliderText()
updateDrawingAreaGrid()