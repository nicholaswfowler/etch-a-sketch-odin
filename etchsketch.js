const content = document.querySelector("#container");

const gridResize = document.querySelector(".grid-size");
gridResize.addEventListener("click", ()=>{
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
    let columnLength = prompt('How many squares per row and column? (Enter 1 number)');
    let gridSquares = (columnLength * columnLength);

    createGrid(columnLength, gridSquares);
})

function createGrid(length, total){
    total += Number(length);
    length++;

    for(i = 1; i <= total; i++){
        const div = document.createElement("div");
        div.setAttribute('style', `border: 1px solid black; height: ${500/length}px; width: ${500/length}px;`)
        div.addEventListener("mouseover", () =>{
            function random_rgb() {
                var o = Math.round, r = Math.random, s = 255;
                return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
            }
            let color = random_rgb();
            div.style.background = color;
        });
        content.appendChild(div);
    }

    const endChild = document.querySelectorAll(`#container>div:nth-child(${length}n + 1)`);
    endChild.forEach((value)=> value.setAttribute('style', 'width: 100%; height: 0px; border: 0;'));
}

const reset = document.querySelector(".reset-button");
reset.addEventListener("click", ()=>{
    const div = document.querySelectorAll('div');
    div.forEach((value) =>{
        value.style.background = 'white';
    })
})

let columnLength = prompt('How many squares per row and column? (Enter 1 number)');
let gridSquares = (columnLength * columnLength);

createGrid(columnLength, gridSquares);
