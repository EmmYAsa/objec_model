let button_more = document.querySelector(".more");
let button_less = document.querySelector(".less");
let number = document.querySelector(".number");

button_more.addEventListener('click', () => {
    let num = parseInt(number.textContent);
    num++;
    number.textContent = num;
});

button_less.addEventListener('click', () => {
    let num = parseInt(number.textContent);
    num--;
    number.textContent = num;
});

//------------------------------------------------

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    let color = `rgb(${r}, ${g}, ${b})`

    return color
}

const blocks = document.querySelector('.blocks');
const createColorButton = document.querySelector('.create_color');

createColorButton.addEventListener('click', () => {
    const newBlock = document.createElement('div');
    newBlock.classList.add('color_block');
    newBlock.style.backgroundColor = getRandomColor();
    blocks.appendChild(newBlock);
});

//----------------------------------------------------

let colors_blocks = document.querySelectorAll('.color')
let change_text = document.querySelector('.change_text')
colors_blocks.forEach(color_block => {
    const color = color_block.getAttribute('data-color');

    color_block.style.backgroundColor = color

    color_block.addEventListener('click', () => {
        change_text.style.color = color
    })
})

//-----------------------------------------------------

let button_add_comment = document.querySelector('.add_comment');

button_add_comment.addEventListener('click', () => {
    let result = document.querySelector('.res_comment'); // Додайте крапку перед селектором

    var name = document.createElement('h5');
    name.className = 'name';
    name.textContent = document.getElementById("name").value;

    var date = document.createElement('h5');
    date.className = 'date';
    date.textContent = new Date().toLocaleDateString();

    var hr = document.createElement('hr');

    var message = document.createElement('p');
    message.className = 'comment_res';
    message.textContent = document.getElementById("comment").value;

    result.appendChild(name);
    result.appendChild(date);
    result.appendChild(message);
    result.appendChild(hr);

    document.getElementById("name").value = '';
    document.getElementById("comment").value = '';
});
