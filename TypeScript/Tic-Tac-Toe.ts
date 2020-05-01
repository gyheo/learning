const table = document.querySelector('table');
let tableRows = document.querySelectorAll('tr');
let tableArrays = [];

function init() {
    // const form = document.querySelector("form");
    let XO = document.getElementsByName("XO");
    let turn:boolean = true;
    let player: string = XO[0].value; // player 처음은 X, computer는 O
    let computer: string = XO[1].value;
    let result:boolean = false;

    for(let i: number = 0; i < 2; i++) {
        XO[i].addEventListener('change', function(event) {
            // 말 바꾸기
            if(XO[0].checked) {
                player = XO[0].value;
                computer = XO[1].value
            } else {
                player = XO[1].value;
                computer = XO[0].value
            }
        })
    }

    for(let i:number = 0; i < tableRows.length; i++) {
        tableArrays.push(tableRows[i].querySelectorAll('td'));
    }
    
    for(let i:number = 0; i < tableRows.length; i++) {
        for(let j:number = 0; j < tableArrays.length; j++){
            tableArrays[i][j].addEventListener('click', function(){
                // 행, 열 표시
                // console.log(`${i}, ${j}`);
                XO[0].disabled = true;
                XO[1].disabled = true;

                // 빈 칸일 경우에만 X, O 입력 허용
                if(tableArrays[i][j].textContent === "") {
                    if(turn){
                        tableArrays[i][j].textContent = player;
                        turn = false;
                    }
                    else{
                        tableArrays[i][j].textContent = computer;
                        turn = true;
                    }

                    if((tableArrays[i][0].textContent == tableArrays[i][1].textContent && tableArrays[i][1].textContent == tableArrays[i][2].textContent && tableArrays[i][0].textContent == tableArrays[i][2].textContent) ||
                       (tableArrays[0][j].textContent == tableArrays[1][j].textContent && tableArrays[1][j].textContent == tableArrays[2][j].textContent && tableArrays[0][j].textContent == tableArrays[2][j].textContent) ||
                       (tableArrays[0][0].textContent == tableArrays[1][1].textContent && tableArrays[1][1].textContent == tableArrays[2][2].textContent && tableArrays[0][0].textContent == tableArrays[2][2].textContent)) {
                            result = true;
                    }

                    if(result) {
                        if(tableArrays[i][j].textContent == player) {
                            alert(`${player} WIN!`);
                        } else {
                            alert(`${computer} WIN!`);
                        }

                        for(let i:number = 0; i < tableRows.length; i++) {
                            for(let j:number = 0; j < tableArrays.length; j++){
                                tableArrays[i][j].textContent = '';
                            }
                        }

                        XO[0].disabled = false;
                        XO[1].disabled = false;

                        result = false;
                    } else {
                        
                    }
                }
            });
        }
    }
}

init();