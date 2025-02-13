let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');

let turnO = true; //playerX, playerOs

const winPatterns = [
    [0,1,2], [0,3,6], [0,4,8],  //rows
    [1,4,7], [2,5,8], [2,4,6],  //columns
    [3,4,5], [6,7,8]            //diagonals
];

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        if(box.innerHTML === '') {
            box.innerHTML = turnO ? 'O' : 'X';
            turnO = !turnO;
        }
        checkWinner();
    });
});

const checkWinner = () => {
    winPatterns.forEach((pattern) => {
        const [a, b, c] = pattern;
        if(boxes[a].innerHTML && boxes[a].innerHTML === boxes[b].innerHTML && boxes[a].innerHTML === boxes[c].innerHTML) {
            boxes[a].style.backgroundColor = 'green';
            boxes[b].style.backgroundColor = 'green';
            boxes[c].style.backgroundColor = 'green';
            boxes.forEach(box => box.style.pointerEvents = 'none');
        }
    });
}

const resetGame = () => {
    boxes.forEach(box => {
        box.innerHTML = '';
        box.style.backgroundColor = '';
        box.style.pointerEvents = 'auto';
    });
}

resetBtn.addEventListener('click', resetGame);