const pageBody = document.getElementsByTagName('body')[0];
const paraGraph = document.querySelector('.paragraph');
const readMoreBtn = document.querySelector('.btn');
const switchBtn = document.querySelector('.icon');

switchBtn.addEventListener('click',()=>{
   
    pageBody.classList.toggle('black');
    paraGraph.classList.toggle('blackpara');
    readMoreBtn.classList.toggle('blackbtn');
    switchBtn.classList.toggle('btnchange')
  
})