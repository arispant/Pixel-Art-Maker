// Select color input
let color = document.getElementById('colorPicker');

// Select size input
let inputHeight = document.getElementById('inputHeight');
let inputWeight = document.getElementById('inputWeight');

// When size is submitted by the user, call makeGrid()
let btn = document.querySelector('input[type="submit"]');
btn.addEventListener('click', makeGrid);

//Selecting html table for adding content
let table = document.getElementById('pixelCanvas');

function makeGrid(event) {
  //clear table
  table.innerHTML = "";

  //preventing the default event(table disappears immediately)
  event.preventDefault();

  //Nested for loop to create elements for pixelCanvas
  for (let i = 0; i < inputHeight.value; i++) {
      const newTr = document.createElement('tr');
          for(let j = 0; j < inputWeight.value; j++)  {
              const newTd = document.createElement('td');
              newTr.appendChild(newTd);
            }
      table.appendChild(newTr);
  }

  //Function for respond to click, if td has color it will remove it.
  function respondToTheClick(evt) {
      evt.target.style.backgroundColor = color.value;
  }

  //Creating the event listener
  table.addEventListener('click', respondToTheClick);

}
