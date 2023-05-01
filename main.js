import './style.css'

const COLOR_PALETTE = {
  '#F7EBEC': 'Lavender Blush',
  '#DDBDD5': 'Thistle',
  '#AC9FBB': 'Rose Quartz',
  '#59656F': "Payne's Gray",
  '#1D1E2C': 'Raisin Black',

};


const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');
  const colorOptions = Object.keys(COLOR_PALETTE).map((color) => {
    const option = document.createElement('option');
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    return option;
  })
  colorPickerSelect.append(...colorOptions);
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');
  const colorName = document.querySelector('#color-name');
  colorPickerSelect.addEventListener('change', (ev) => {
    const newColor = ev.target.value;
    console.log(newColor);
    document.body.style.backgroundColor = newColor;
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor} `;
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : '-';
  })
};

const colorsInput = () => {
  const colorInput = document.getElementById('color-input');
  const colorName = document.querySelector('#color-name');
  colorInput.addEventListener('change', (ev) => {
    const newColorInput = ev.target.value;
    document.body.style.backgroundColor = newColorInput;
    colorName.innerText = newColorInput;
    console.log(newColorInput);
  })

};



addOptionsToColorPicker();
addEventListenerToColorPicker();
colorsInput();