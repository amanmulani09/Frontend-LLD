
const inputField = document.querySelector('.password');
const followText = document.querySelector('.show');

inputField.addEventListener('keyup',(e)=>{
 
    let inputData = e.target.value;
    
    let inputArray = inputData.split('');

    const vaildChar = '!@#$%'

    if(inputArray.length>10 && inputArray.includes('@') | inputArray.includes('!') | inputArray.includes('#') | inputArray.includes('&') | inputArray.includes('%') && inputArray.length > 5 ){
        followText.innerHTML = 'Strong';
        followText.style.color = 'green';
        inputField.style.border = '2px solid green';
        inputField.style.color = 'green';
    } 
    else if(inputArray.includes('@') | inputArray.includes('!') | inputArray.includes('#') | inputArray.includes('&') | inputArray.includes('%')  && inputArray.length > 5 ){
        followText.innerHTML = 'good'
        followText.style.color = 'blue';
        inputField.style.border = '2px solid blue';
        inputField.style.color = 'blue';

    }
    else if(inputArray.length>5){
        followText.innerHTML = 'average'
        followText.style.color = 'orange';
        inputField.style.border = '2px solid orange';
        inputField.style.color = 'orange';
    }
    else {
        followText.innerHTML = 'Low'
        inputField.style.border = '2px solid red';
        followText.style.color = 'red';
        inputField.style.color = 'red';
    }
})

