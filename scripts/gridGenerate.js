const padContainerParent = document.querySelector('#padContainerParent');
let pixelCounter = 0;

let red = 250;
let green = 0;
let blue = 250;

function gridGenerate() {

    const size = document.getElementById('gridSize').value;
    
    if (size > 100) {
        alert("EROOR! Cannot generate more than 100!")
        return;
    }
    else {
        for (i = 0; i < size ; i++) {

            const row = document.createElement('div');
            row.classList.add('row');    
            padContainerParent.appendChild(row);
        
            for (j = 0; j < size ; j++){
                pixelCounter++
                const column = document.createElement('div')
                column.classList.add('column');
                column.setAttribute('id', 'column' + pixelCounter);
                      
                row.appendChild(column);
            }
    
        document.getElementById("gridGenerateBtn").disabled = true;        
        }
    }
    
    var elements = document.querySelectorAll('.column');

    for(var i=0; i<elements.length; i++){
    
        elements[i].style.height = (450 / size) + "px";
    }

    elements.forEach((div) => {
    
    
        div.addEventListener('mouseenter', () => {
            div.style.background = 'rgb(' + red + ', ' + blue + ', ' + green + ')';
            rgb();
            console.log('r ' + red);
            console.log('g ' +green);
            console.log('b ' +blue);
        });
    });    
}

function gridClear() {

    const row = document.querySelectorAll('.row');

    for(i = 0; i < row.length; i++) {
        padContainerParent.removeChild(row[i]);
        
    }
    document.getElementById("gridGenerateBtn").disabled = false;
    pixelCounter = 0;
}

function rgb() {

    if (red === 250) {
        if (green === 250) {
            blue += 10;
            red -=10;
        }
        else {
            green +=10;
            blue -=10;
        }
    }
    else if (green === 250) {
        if (blue === 250) {
            red += 10;
            green -=10;
        }
        else {
            blue +=10;
            red -=10;
        }
    }
    else if (blue === 250) {
        if (red === 250) {
            green += 10;
            blue -=10;
        }
        else {
            red +=10;
            green -=10;
        }
    }
}

function rgb2() {
    if (blue === 0) {
        if (red !== 0){
            red -= 50;
            green += 50;
        }
        else {
            green -= 50;
            blue += 50;
        }
    }
    else if (red === 0 ) {
        if (green !== 0) {
            green -= 50;
            blue += 50;
        }
        else {
            blue -= 50;
            red +=50;
        }
    }
    else if (green === 0) {
        if (blue !== 0) {
            blue -= 50;
            red += 50;
        }
        else {
            red -= 50;
            green += 50;
        }
    }
}