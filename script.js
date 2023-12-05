let scoreValue = 0;

const tableContent = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

function resetButton(){

    document.getElementsByClassName("resetButton")[0].innerHTML = "RESET";

    resetValues();
    addNumbersToTable(2);
    addScore();
    toDisplay();
}

function resetValues(){

    scoreValue = 0;
    for(let i=0; i<=3; i++){
        for(let j=0; j<=3; j++){
            tableContent[i][j] = 0;
        }
    }
}

function addNumbersToTable(num){

    let free, pos, ran, count;

    for(let n=1; n<=num; n++){
        free = 0;
        for(let i=0; i<=3; i++)
            for(let j=0; j<=3; j++)
                if(tableContent[i][j] == 0) 
                    free++;
        
        pos = getRandomInt(1, free);
        if (Math.random() < 0.1) ran = 4;
        else ran = 2;

        count = 0;
        for(let i=0; i<=3; i++){
            for(let j=0; j<=3; j++){
                if(tableContent[i][j] == 0){
                    count++;
                    if(count == pos){
                        tableContent[i][j] = ran;
                    }
                }
            }
        }
    }
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toDisplay(){

    let id;

    document.getElementsByClassName("scoreValue")[0].innerHTML = scoreValue;

    for(let i=0; i<=3; i++){
        for(let j=0; j<=3; j++){
            id = "s" + String(i) + String(j);
            if(tableContent[i][j] != 0) document.getElementById(id).innerHTML = tableContent[i][j]; 
            else document.getElementById(id).innerHTML = "";

            switch(tableContent[i][j]){

                case 0:
                    document.getElementById(id).style.backgroundColor = "rgb(205,193,180)";
                    document.getElementById(id).style.color = "rgb(120,110,101)";
                    break;
                case 2:
                    document.getElementById(id).style.backgroundColor = "rgb(238,228,218)";
                    document.getElementById(id).style.color = "rgb(120,110,101)";
                    break;
                case 4:
                    document.getElementById(id).style.backgroundColor = "rgb(237,224,200)";
                    document.getElementById(id).style.color = "rgb(120,110,101)";
                    break;
                case 8:
                    document.getElementById(id).style.backgroundColor = "rgb(242,177,121)";
                    document.getElementById(id).style.color = "white";
                    break;
                case 16:
                    document.getElementById(id).style.backgroundColor = "rgb(245,149,99)";
                    document.getElementById(id).style.color = "white";
                    break;
                case 32:
                    document.getElementById(id).style.backgroundColor = "rgb(246,124,95)";
                    document.getElementById(id).style.color = "white";
                    break;
                case 64:
                    document.getElementById(id).style.backgroundColor = "rgb(246,94,59)";
                    document.getElementById(id).style.color = "white";
                    break;
                case 128:
                    document.getElementById(id).style.backgroundColor = "rgb(237,207,114)";
                    document.getElementById(id).style.color = "white";
                    break;
                case 256:
                    document.getElementById(id).style.backgroundColor = "rgb(237,204,97)";
                    document.getElementById(id).style.color = "white";
                    break;
                case 512:
                    document.getElementById(id).style.backgroundColor = "rgb(237,200,80)";
                    document.getElementById(id).style.color = "white";
                    break;
                case 1024:
                    document.getElementById(id).style.backgroundColor = "rgb(237,197,63)";
                    document.getElementById(id).style.color = "white";
                    break;
                case 2048:
                    document.getElementById(id).style.backgroundColor = "rgb(237,194,46)";
                    document.getElementById(id).style.color = "white";
                    break;
                default:
                    document.getElementById(id).style.backgroundColor = "black";
                    document.getElementById(id).style.color = "white";
                    break;
            }
        }
    }
}

function logTableContent(){

    console.log('Table content:');
    for(let i=0; i<=3; i++)
        console.log(tableContent[i][0] + ' ' + tableContent[i][1] + ' ' + tableContent[i][2] + ' ' + tableContent[i][3] + '\n');
}

function arrowKeysHandle(event){

    let a, b;

    switch(event.key){

        case "ArrowUp":
            a = performance.now();
            fArrowUp();
            b = performance.now();
            // console.log(b - a);
            break;

        case "ArrowDown":
            a = performance.now();
            fArrowDown();
            b = performance.now();
            // console.log(b - a);
            break;
            
        case "ArrowLeft":
            a = performance.now();
            fArrowLeft();
            b = performance.now();
            // console.log(b - a);
            break;

        case "ArrowRight":
            a = performance.now();
            fArrowRight();
            b = performance.now();
            // console.log(b - a);
            break;

        case "r":
            a = performance.now();
            resetButton();
            b = performance.now();
            // console.log(b - a);
            break;

        default:
            a = performance.now();
            // console.log("Another key pressed!");
            b = performance.now();
            // console.log(b - a);
            break;
    }
}

function fArrowUp(){

    upMove();
    addNumbersToTable(1);
    addScore();
    toDisplay();
}

function fArrowDown(){

    downMove();
    addNumbersToTable(1);
    addScore();
    toDisplay();
}

function fArrowLeft(){

    leftMove();
    addNumbersToTable(1);
    addScore();
    toDisplay();
}

function fArrowRight(){

    rightMove();
    addNumbersToTable(1);
    addScore();
    toDisplay();
}

function leftMove(){

    for(let i=0; i<=3; i++){
        for(let j=0; j<=2; j++){
            if(tableContent[i][j] != 0){
                for(let k=j+1; k<=3; k++){
                    if(tableContent[i][k] != 0){
                        if(tableContent[i][j] == tableContent[i][k]){
                            tableContent[i][j] *= 2;
                            tableContent[i][k] = 0;
                        }
                        break;
                    }
                }
            }
            else if(tableContent[i][j] == 0){
                for(let k=j+1; k<=3; k++){
                    if(tableContent[i][k] != 0){
                        tableContent[i][j] = tableContent[i][k];
                        tableContent[i][k] = 0;
                        for(let k2=j+1; k2<=3; k2++){
                            if(tableContent[i][k2] != 0){
                                if(tableContent[i][j] == tableContent[i][k2]){
                                    tableContent[i][j] *= 2;
                                    tableContent[i][k2] = 0;
                                }
                                break;
                            }
                        }
                        break;
                    }
                }
            }
        }
    }
}

function rightMove(){

    for(let i=0; i<=3; i++){
        for(let j=3; j>=0; j--){
            if(tableContent[i][j] != 0){
                for(let k=j-1; k>=0; k--){
                    if(tableContent[i][k] != 0){
                        if(tableContent[i][j] == tableContent[i][k]){
                            tableContent[i][j] *= 2;
                            tableContent[i][k] = 0;
                        }
                        break;
                    }
                }
            }
            else if(tableContent[i][j] == 0){
                for(let k=j-1; k>=0; k--){
                    if(tableContent[i][k] != 0){
                        tableContent[i][j] = tableContent[i][k];
                        tableContent[i][k] = 0;
                        for(let k2=j-1; k2>=0; k2--){
                            if(tableContent[i][k2] != 0){
                                if(tableContent[i][j] == tableContent[i][k2]){
                                    tableContent[i][j] *= 2;
                                    tableContent[i][k2] = 0;
                                }
                                break;
                            }
                        }
                        break;
                    }
                }
            }
        }
    }
}

function downMove(){

    for(let j=0; j<=3; j++){
        for(let i=3; i>=0; i--){
            if(tableContent[i][j] != 0){
                for(let k=i-1; k>=0; k--){
                    if(tableContent[k][j] != 0){
                        if(tableContent[i][j] == tableContent[k][j]){
                            tableContent[i][j] *= 2;
                            tableContent[k][j] = 0;
                        }
                        break;
                    }
                }
            }
            else if(tableContent[i][j] == 0){
                for(let k=i-1; k>=0; k--){
                    if(tableContent[k][j] != 0){
                        tableContent[i][j] = tableContent[k][j];
                        tableContent[k][j] = 0;
                        for(let k2=i-1; k2>=0; k2--){
                            if(tableContent[k2][j] != 0){
                                if(tableContent[i][j] == tableContent[k2][j]){
                                    tableContent[i][j] *= 2;
                                    tableContent[k2][j] = 0;
                                }
                                break;
                            }
                        }
                        break;
                    }
                }
            }
        }
    }
}

function upMove(){

    for(let j=0; j<=3; j++){
        for(let i=0; i<=3; i++){
            if(tableContent[i][j] != 0){
                for(let k=i+1; k<=3; k++){
                    if(tableContent[k][j] != 0){
                        if(tableContent[i][j] == tableContent[k][j]){
                            tableContent[i][j] *= 2;
                            tableContent[k][j] = 0;
                        }
                        break;
                    }
                }
            }
            else if(tableContent[i][j] == 0){
                for(let k=i+1; k<=3; k++){
                    if(tableContent[k][j] != 0){
                        tableContent[i][j] = tableContent[k][j];
                        tableContent[k][j] = 0;
                        for(let k2=i+1; k2<=3; k2++){
                            if(tableContent[k2][j] != 0){
                                if(tableContent[i][j] == tableContent[k2][j]){
                                    tableContent[i][j] *= 2;
                                    tableContent[k2][j] = 0;
                                }
                                break;
                            }
                        }
                        break;
                    }
                }
            }
        }
    }
}

function addScore(){

    scoreValue = 0;
    for(let i=0; i<=3; i++){
        for(let j=0; j<=3; j++){
            scoreValue += tableContent[i][j];
        }
    }
}

document.addEventListener("keydown", arrowKeysHandle);