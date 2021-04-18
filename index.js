
$(document).ready(function() {
    
    $('#ExemploModalCentralizado').modal('show');

    $('#button_start_game').click(function() {
        capturaDadosJogadores();
    });

    $("td").click(function() {
        if ($(this).html() == '') {
            preencheColunaJogoDaVelha(this);            
        }
    });
});

function capturaDadosJogadores() {
    
    let playerOne = $('input[name="input_player_one"]').val();
    let playerTwo = $('input[name="input_player_two"]').val();

    let startGame = true;

    if(playerOne == '' || playerTwo == ''){
        if (playerOne == '') {
            alert('Write name of the player One to go to the start game!')
            startGame = false;            
        }else{
            alert('Write name of the player Two to go to the start game!')
            startGame = false;
        }
    }

    if (startGame == true) {
        $('#ExemploModalCentralizado').modal('hide');
        preencheNomeJogadores();
        $('#game').show('slow');
        $('#span_round').html('x');


    }  
}

function preencheNomeJogadores() {
    $("#span_player_one ,#victory_player_one").html($('input[name="input_player_one"]').val());
    $("#span_player_two ,#victory_player_two").html($('input[name="input_player_two"]').val());    
}

let ultimaJogada = '';
let numeroDeRodadas = 0;

function preencheColunaJogoDaVelha(coluna) {
    var jogadaAtual;

    if (ultimaJogada == '') {
        jogadaAtual = 'x';
        $('#span_round').html('0');     
    }

    if (ultimaJogada == 'o') {
        jogadaAtual = 'x';
        $('#span_round').html('o');
    }
    
    if (ultimaJogada == 'x') {
        jogadaAtual = 'o';
        $('#span_round').html('x');
    }

    ultimaJogada = jogadaAtual;
    
    $(coluna).html(jogadaAtual);

    numeroDeRodadas = numeroDeRodadas + 1;

    if(numeroDeRodadas == 9){
        adicionaValorAoRank(0);
    }

    const c1 = $('#cube1').html();
    const c2 = $('#cube2').html();
    const c3 = $('#cube3').html();
    const c4 = $('#cube4').html();
    const c5 = $('#cube5').html();
    const c6 = $('#cube6').html();
    const c7 = $('#cube7').html();
    const c8 = $('#cube8').html();
    const c9 = $('#cube9').html();

    let playerWin = 0;
    
    if (jogadaAtual == 'x') {
       if (c1 == jogadaAtual && c2 == jogadaAtual && c3 == jogadaAtual) {
             playerWin = 1;
       }         
       if (c4 == jogadaAtual && c5 == jogadaAtual && c6 == jogadaAtual) {          
            playerWin = 1;           
       }         
       if (c7 == jogadaAtual && c8 == jogadaAtual && c9 == jogadaAtual) {           
            playerWin = 1;            
       } 
       if (c1 == jogadaAtual && c4 == jogadaAtual && c7 == jogadaAtual) {      
            playerWin = 1;           
       } 
       if (c2 == jogadaAtual && c5 == jogadaAtual && c8 == jogadaAtual) {
            playerWin = 1;            
       } 
       if (c3 == jogadaAtual && c6 == jogadaAtual && c9 == jogadaAtual) {            
            playerWin = 1;            
       } 
       if (c1 == jogadaAtual && c5 == jogadaAtual && c9 == jogadaAtual) {
            playerWin = 1;            
       } 
       if (c3 == jogadaAtual && c5 == jogadaAtual && c7 == jogadaAtual) {
            playerWin = 1;            
       }       
    }else{
        if (c1 == jogadaAtual && c2 == jogadaAtual && c3 == jogadaAtual) {
             playerWin = 2;            
       }         
       if (c4 == jogadaAtual && c5 == jogadaAtual && c6 == jogadaAtual) {
            playerWin = 2;            
       }         
       if (c7 == jogadaAtual && c8 == jogadaAtual && c9 == jogadaAtual) {
            playerWin = 2;           
       } 
       if (c1 == jogadaAtual && c4 == jogadaAtual && c7 == jogadaAtual) {
            playerWin = 2;            
       } 
       if (c2 == jogadaAtual && c5 == jogadaAtual && c8 == jogadaAtual) {
            playerWin = 2;            
       } 
       if (c3 == jogadaAtual && c6 == jogadaAtual && c9 == jogadaAtual) {
            playerWin = 2;           
       } 
       if (c1 == jogadaAtual && c5 == jogadaAtual && c9 == jogadaAtual) {
            playerWin = 2;            
       } 
       if (c3 == jogadaAtual && c5 == jogadaAtual && c7 == jogadaAtual) {
            playerWin = 2;            
       }       
    } 
    if (playerWin != 0) {     
        adicionaValorAoRank(playerWin);
    }
}

let scorePlayerOne = 0;
let scorePlayerTwo = 0;

function adicionaValorAoRank(vencedor) {
    if (vencedor == 1) {
        $('#player_one_win').modal('show');
        scorePlayerOne += 1;
    }
    if (vencedor == 2) {
        $('#player_two_win').modal('show');
        scorePlayerTwo += 1;
    }
    if (vencedor == 0) {
        $('#no_have_winner').modal('show');
    }
    numeroDeRodadas = 0;

    $('#span_player_one_score').html(scorePlayerOne);
    $('#span_player_two_score').html(scorePlayerTwo);


    $('#resultGame').modal('hide');

    setInterval(function(){
        $('td').html('');
    }, 2500);

    
}