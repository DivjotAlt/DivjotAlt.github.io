function $(id) {
    return document.getElementById(id);
}
form=document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    num1 = parseInt($('firstNum').value);
    num2 = parseInt($('secondNum').value);
    add = $('add');
    subtract = $('subtract');
    multiply = $('multiply');
    divide = $('divide');
    answerC = $('answerContainer');
    answer = $('answer');

    if(add.checked && num1 && num2){
        answerC.removeAttribute('class');
        answer.innerHTML = (num1)+(num2);
    }
    else if(subtract.checked && num1 && num2){
        answerC.removeAttribute('class');
        answer.innerHTML = (num1)-(num2);
    }
    else if(multiply.checked && num1 && num2){
        answerC.removeAttribute('class');
        answer.innerHTML = (num1)*(num2);
    }
    else if(divide.checked && num1 && num2){
        answerC.removeAttribute('class');
        answer.innerHTML = (num1)/(num2);
    }

})