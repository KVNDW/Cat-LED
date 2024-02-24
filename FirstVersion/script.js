const slider = document.getElementById("mySlider");
const led1 = document.getElementById("led1");
const led2 = document.getElementById("led2");
const led3 = document.getElementById("led3");
const led4 = document.getElementById("led4");
const led5 = document.getElementById("led5");
const led6 = document.getElementById("led6");
const led7 = document.getElementById("led7");

const call = () => {

  if (slider.value == 0) {
    changeDesign(led1,"#2D009B");
  } else {
    changeDesign(led1,"grey");
  }

  if (slider.value >= 1) {
    changeDesign(led2,"red");
  } else {
    changeDesign(led2,"grey");
  }

  if (slider.value >= 2) {
    changeDesign(led3,"#FF9E13");
  } else {
    changeDesign(led3,"grey");
  }


  if (slider.value >= 3) {
    changeDesign(led4,"yellow");
  } else {
    changeDesign(led4,"grey");
  }

  if (slider.value >= 4) {
    changeDesign(led5,"#26FF2C");
  } else {
    changeDesign(led5,"grey");
  }

  if (slider.value >= 5) {
    changeDesign(led6,"#0E11FF");

  } else {
    changeDesign(led6,"grey");
  }

  if (slider.value >= 6) {
    changeDesign(led7,"#FA1BFE");
  } else {
    changeDesign(led7,"grey");
  }

}

const changeDesign = (currentLed, colorValue) => {
  currentLed.style.backgroundColor = colorValue;
  currentLed.style.boxShadow = "0 0 10px 2px " +colorValue;
}

slider.addEventListener("input", call );

