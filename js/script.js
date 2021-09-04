
//Tablero de juego
let sodokuDesboard = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let gameState = false

// Podes sumar 1 en la posicion deseada.
//Necesito una poscion para i, y otra para j. 

function Add(i, j, id){
    
    if(!gameState){
        if(sodokuDesboard[i][j] < 3){
            sodokuDesboard[i][j]++
        }else{
            sodokuDesboard[i][j] = 1
        }
    } 

    gameState = IsGameOver()

    if(gameState == true){
        //console.log("Ganaste!!")
        //alert("GANASTE")
        document.getElementById("text").innerHTML = "Ganaste!!"

    }

    console.table(sodokuDesboard)
    document.getElementById(id).innerHTML =
    sodokuDesboard[i][j]
}


function IsGameOver(){
    let bandera = true //Supongo que no hay ningun repetido.
    
    //Contorlo filas
    for (let i = 0; i < sodokuDesboard.length; i++) {
        //Si hay almenos dos posiciones en una fila que tengan el mismo valor o alguna es igual a 0 (esta sin completar). La condicion es verdadera, entonces no gane todavia!!. 
        if(sodokuDesboard[i][0] == sodokuDesboard[i][1] || sodokuDesboard[i][0] == sodokuDesboard[i][2] || sodokuDesboard[i][1] == sodokuDesboard[i][2] || sodokuDesboard[i][0] == 0 || sodokuDesboard[i][1] == 0 || sodokuDesboard[i][2] == 0){
            bandera = false
        }
    }


    for(let j = 0; j < sodokuDesboard.length; j++){
        //Si hay almenos dos posiciones en una columna que tengan el mismo valor o alguna es igual a 0 (esta sin completar). La condicion es verdadera, entonces no gane todavia!!. 
        if(sodokuDesboard[0][j] == sodokuDesboard[1][j] || sodokuDesboard[0][j] == sodokuDesboard[2][j] || sodokuDesboard[1][j] == sodokuDesboard[2][j] || sodokuDesboard[0][j] == 0 || sodokuDesboard[1][j] == 0 || sodokuDesboard[2][j] == 0){
            bandera = false
        }
    }

    return bandera
}