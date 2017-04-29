function proximo(){

    posicao++;

    if(posicao >= 10){
        posicao = 10;
        return;
    }
    limpar();

    console.log('\n Valor da Posição Functions: ', posicao);

    $('.titulo').html(questoes[posicao].titulo);
    $('.resp0').html(' ' + questoes[posicao].respostas[0]);
    $('.resp1').html(' ' + questoes[posicao].respostas[1]);
    $('.resp2').html(' ' + questoes[posicao].respostas[2]);
    $('.resp3').html(' ' + questoes[posicao].respostas[3]); 

    localizar(posicao);
}



function voltar(back) {
    console.log('\n\n ### Voltar.....');
    if(posicao <= 0){
        posicao = 0;
        return;
    }
    posicao--;     

    limpar();

    console.log('\n Valor da Posição Functions: ', posicao);

    $('.titulo').html(questoes[posicao].titulo);
    $('.resp0').html(' ' + questoes[posicao].respostas[0]);
    $('.resp1').html(' ' + questoes[posicao].respostas[1]);
    $('.resp2').html(' ' + questoes[posicao].respostas[2]);
    $('.resp3').html(' ' + questoes[posicao].respostas[3]); 

    localizar(posicao);

}


function validar(posicao){
    var valid = validaVazio();

    if( valid === 4 ){
        return;
    };

    var posic = posicao - 1;
    var correto = questoes[posic].correta;  

    var obj = {
        nivel: 'iniciante',
        questao: posic,
        certo: correto,
        selecionado: valorSelecionado
    };

    certoErrado.push(obj);
    localStorage.setItem("iniciante", JSON.stringify(certoErrado));

    console.log('Objeto com as informações: ', obj);

    if(valorSelecionado === correto){
        certo ++;
    }else{
        errado ++;
    }        
}

function validaVazio(posicao){

    if( $('input[type="radio"]').not(':checked').length == 4 ){
        alert('Selecione uma opção!');
        return 4;
    }
}    

function limpar(){

    $('.icon0').removeClass("space fa fa-times red");
    $('.icon1').removeClass("space fa fa-times red");
    $('.icon2').removeClass("space fa fa-times red");
    $('.icon3').removeClass("space fa fa-times red");

    $('.icon0').removeClass("space fa fa-check green");
    $('.icon1').removeClass("space fa fa-check green");
    $('.icon2').removeClass("space fa fa-check green");
    $('.icon3').removeClass("space fa fa-check green");
}