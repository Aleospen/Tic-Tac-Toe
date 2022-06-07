let datachest =  [];
let arrayQ = [-1, -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1];
let turns = 0; 
let winner;

    function render_(clicked_id) {
        
        if (winner !=undefined) {return 'Click denied'} else {

    let element = arrayQ[clicked_id];
    let img = document.getElementById(clicked_id).getElementsByTagName('img')[0];
    if (element == -1) { 
        ++turns;  

        if (turns % 2 == 0) {
            img.src = 'file:///C:/Users/Dagon/Desktop/ProgProjects/Tic%20Tac%20Toe/images/playO.png';
            arrayQ[clicked_id] = 0;
        } else {
            img.src = 'file:///C:/Users/Dagon/Desktop/ProgProjects/Tic%20Tac%20Toe/images/X-Shape-PNG-High-Quality-Image.png';
            arrayQ[clicked_id] = 1;
        }   
     
     console.log(arrayQ);
    } 
        if (arrayQ[0] == 1 & arrayQ[1] == 1 & arrayQ[2] == 1) {
            winner = 'x'; winDisplayer();   
            console.log(winner)
        } else if (arrayQ[0]  == 0 & arrayQ[1]  == 0 & arrayQ[2] == 0) {
             winner = 'o'; winDisplayer();  
        } else if (arrayQ[3]  == 1 & arrayQ[4]  == 1 & arrayQ[5] == 1) {
            winner = 'x'; winDisplayer();   
            console.log(winner)
        } else  if (arrayQ[3] == 0 & arrayQ[4] == 0 & arrayQ[5] == 0) {
            winner = 'o'; winDisplayer();  
            console.log(winner)
        } else  if (arrayQ[6] == 1 & arrayQ[7] == 1 & arrayQ[8] == 1) {
            winner = 'x'; winDisplayer();   
            console.log(winner)
        } else  if (arrayQ[6] == 0 & arrayQ[7] == 0 & arrayQ[8] == 0) {
            winner = 'o'; winDisplayer();   
            console.log(winner)
        } else  if (arrayQ[0] == 1 & arrayQ[3] == 1 & arrayQ[6] == 1) {
            winner = 'x'; winDisplayer();  
            console.log(winner)
        } else  if (arrayQ[0] == 0 & arrayQ[3] == 0 & arrayQ[6] == 0) {
            winner = 'o'; winDisplayer();   
            console.log(winner)
        } else  if (arrayQ[1] == 1 & arrayQ[4] == 1 & arrayQ[7] == 1) {
            winner = 'x'; winDisplayer(); 
            console.log(winner)
        } else  if (arrayQ[1] == 0 & arrayQ[4] == 0 & arrayQ[7] == 0) {
            winner = 'o'; winDisplayer();   
            console.log(winner)
        } else  if (arrayQ[2] == 1 & arrayQ[5] == 1 & arrayQ[8] == 1) {
            winner = 'x'; winDisplayer()  ;  
            console.log(winner)                              
        } else  if (arrayQ[2] == 0 & arrayQ[5] == 0 & arrayQ[8] == 0) {
            winner = 'o'; winDisplayer();  
            console.log(winner)
        } else  if (arrayQ[0] == 1 & arrayQ[4] == 1 & arrayQ[8] == 1) {
            winner = 'x'; winDisplayer(); 
            console.log(winner)
        } else  if (arrayQ[0] == 0 & arrayQ[4] == 0 & arrayQ[8] == 0) {
            winner = 'o';  winDisplayer() ;  
            console.log(winner)        
        } else  if (arrayQ[2] == 1 & arrayQ[4] == 1 & arrayQ[6] == 1) {
            winner = 'x'; winDisplayer();   
            console.log(winner) 
        } else  if (arrayQ[2] == 0 & arrayQ[4] == 0 & arrayQ[6] == 0) {
          winner = 'o'; winDisplayer();               
        } else if (turns == 9) {
           winner='tie' ; winDisplayer()
        }

        function winDisplayer() {
            let paragraph = document.getElementById('status');
            let ending = document.createTextNode("Game Over");
            paragraph.appendChild(ending);
        }

            

     /*

    let Gameboard = () => {
    
    const player_X = Player('Player-X');
    const player_O  = Player('Player-O');

    }

    const Player = (name) => {
    this.name = name;
    return{name};
    }

     function that stop the game (how ?) => probably if winner != null then return 'click denied' , and the function need to draw a line with text 'Game Over' and info who won X or O player (How ?) => DOM manipulation - ok now i do it
 + add the guthub link to my profile
     */
    
    // let img = document.getElementById(clicked_id).getElementsByTagName('img')[0];
    
    // // Double click check

    // if (img.src != 'file:///C:/Users/Dagon/Pictures/For%20work/playO.png' & img.src != 'file:///C:/Users/Dagon/Pictures/For%20work/X-Shape-PNG-High-Quality-Image.png') {       
    // } else {
    //     return "click denied"
    // }

    // ++turns;  
    // datachest.push(clicked_id);
   
    // // status check
    // console.log(turns + " turns");
    // console.log(clicked_id + " this id")

    // // Rendering
    // if (turns % 2 == 0) {
    //     img.src = 'file:///C:/Users/Dagon/Pictures/For%20work/playO.png';
    //     points_O.push(clicked_id)
    // } else {
    //     img.src = 'file:///C:/Users/Dagon/Pictures/For%20work/X-Shape-PNG-High-Quality-Image.png';
    //     points_X.push(clicked_id)
    // }

    // console.log(points_O + " points of O")
    }
} 