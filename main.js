var player_1 = localStorage.getItem('Player 1 Name ');
var player_2 = localStorage.getItem('Player 2 Name ');
player_1_score = 0;
player_2_score = 0;
document.getElementById('player_1').innerHTML = player_1+" : ";
document.getElementById('player_2').innerHTML = player_2+" : ";

document.getElementById('player_1_score').innerHTML = player_1_score;
document.getElementById('player_2_score').innerHTML = player_2_score;

document.getElementById('player_question').innerHTML =" Question Turn : "+ player_1;
document.getElementById('player_answer').innerHTML = " Answer Turn : "+player_2;

function send(){
    number_1 = document.getElementById('word').value;
    number_2 = document.getElementById('word1').value;

     answer = number_1 * number_2;
  
    question_number = "<h4 id='question' class='btn btn-danger'>Q."+number_1+"*"+number_2+"</h4><br>";
    wrong_answer = "<h4 id='wrong_answer' class='btn btn-danger'></h4><br>";
    answer_box = "<br>ANSWER:"+"<input placeholder='SOLVE IT' class='btn btn-success' id='check'>";
    button = "<br><br><button id='check_button' class='btn btn-info' onclick='check()'>CHECK</button>"

    row = question_number + wrong_answer+ answer_box + button;

    document.getElementById('output').innerHTML = row; 
    document.getElementById('word').value = "";   
    document.getElementById('word1').value = "";  
}
function check(){
    if(document.getElementById('player_question').innerHTML ==" Question Turn : "+ player_1 ){
        if(document.getElementById('check').value == answer ){
            document.getElementById('wrong_answer').innerHTML = 'CORRECT ANSWER';
            player_1_score = player_1_score + 1;
    
            document.getElementById('player_1_score').innerHTML = player_1_score;
    
            document.getElementById('player_question').innerHTML =" Question Turn : "+ player_2;
            document.getElementById('player_answer').innerHTML = " Answer Turn : "+player_1;
        }else{
            document.getElementById('player_question').innerHTML =" Question Turn : "+ player_2;
            document.getElementById('player_answer').innerHTML = " Answer Turn : "+player_1;  
        }


       
    }
    else if(document.getElementById('player_question').innerHTML ==" Question Turn : "+ player_2 ){
        
        if(document.getElementById('check').value == answer ){
            document.getElementById('wrong_answer').innerHTML = 'CORRECT ANSWER';
            player_2_score = player_2_score + 1;
    
            document.getElementById('player_2_score').innerHTML = player_2_score;
    
            document.getElementById('player_question').innerHTML =" Question Turn : "+ player_1;
            document.getElementById('player_answer').innerHTML = " Answer Turn : "+player_2;
        }else{
            document.getElementById('player_question').innerHTML =" Question Turn : "+ player_1;
            document.getElementById('player_answer').innerHTML = " Answer Turn : "+player_2;
        }
        
    }
    document.getElementById('output').innerHTML = "";


}