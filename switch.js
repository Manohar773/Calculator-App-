
const one=document.querySelector('#one');
const two=document.querySelector('#two');
const three=document.querySelector('#three');
const body=document.querySelector('.body');
const calcHeader=document.querySelector('.calc--header');
const switchCircle=document.querySelector('.switch--circle');
const circleBtn=document.querySelectorAll('.switch--circle button');
const allBtn=document.querySelectorAll('.calc--body button');


 one.addEventListener('click', ()=>{
     one.style.opacity='1';
      two.style.opacity='0';
      three.style.opacity='0';
      body.style.backgroundColor='hsl(222, 26%, 31%)';
      screen.style.backgroundColor='hsl(224, 36%, 15%)';
       screen.style.color='hsl(0, 0%, 100%)';
      calcHeader.style.color='hsl(0, 0%, 100%)';
      calcBody.style.backgroundColor='hsl(223, 31%, 20%)';
       allBtn.forEach(btn=>{
         btn.style.backgroundColor='hsl(0, 0%, 90%)';
         btn.style.boxShadow=' 0.02rem 0.2rem   hsl(35, 11%, 61%)';
        btn.style.color='hsl(221, 14%, 31%)';
     })
     circleBtn.forEach(btn=>{
          btn.style.backgroundColor='hsl(6, 63%, 50%)';
      })
      switchCircle.style.backgroundColor='hsl(223, 31%, 20%)';
      del.style.backgroundColor='hsl(222, 26%, 31%)';
      del.style.color='hsl(0, 0%, 100%)';
      del.style.boxShadow='0.02rem 0.2rem hsl(224, 36%, 15%)';
       reset.style.backgroundColor='hsl(222, 26%, 31%)';
       reset.style.color='hsl(0, 0%, 100%)';
       reset.style.boxShadow='0.02rem 0.2rem hsl(224, 36%, 15%)';
       result.style.color='hsl(0, 0%, 100%)';
       result.style.backgroundColor='hsl(6, 63%, 50%)';
      result.style.boxShadow='0.02rem 0.2rem hsl(6, 70%, 34%)';
 })
 
 two.addEventListener('click', ()=>{
     two.style.opacity='1';
     one.style.opacity='0';
     three.style.opacity='0';
       body.style.backgroundColor='hsl(0, 0%, 90%)';
      screen.style.backgroundColor='hsl(0, 0%, 93%)';
      screen.style.color='hsl(198, 20%, 13%)';
      calcBody.style.backgroundColor='hsl(0, 5%, 81%)';
      allBtn.forEach(btn=>{
         btn.style.backgroundColor='hsl(0, 0%, 90%)';
         btn.style.boxShadow=' 0.02rem 0.2rem hsl(224, 28%, 35%)';
        btn.style.color='hsl(221, 14%, 31%)';
     })
      calcHeader.style.color='hsl(198, 20%, 13%)';
      switchCircle.style.backgroundColor='hsl(0, 5%, 81%)';
      del.style.backgroundColor='hsl(185, 42%, 37%)';
      del.style.color='hsl(0, 0%, 100%)';
      reset.style.backgroundColor='hsl(185, 42%, 37%)';
      result.style.color='hsl(0, 0%, 100%)';
       result.style.backgroundColor='hsl(25, 98%, 40%)';
      result.style.boxShadow='0.02rem 0.2rem hsl(25, 99%, 27%)';
       circleBtn.forEach(btn=>{
          btn.style.backgroundColor='hsl(25, 98%, 40%)';
      })
 })
 
  three.addEventListener('click', ()=>{
     one.style.opacity='0';
      two.style.opacity='0';
      three.style.opacity='1';
        body.style.backgroundColor='hsl(268, 75%, 9%)';
      screen.style.backgroundColor='hsl(268, 71%, 12%)';
      calcBody.style.backgroundColor='hsl(268, 71%, 12%)';
      
     allBtn.forEach(btn=>{
         btn.style.backgroundColor='hsl(268, 47%, 21%)';
         btn.style.boxShadow=' 0.02rem 0.2rem hsl(290, 70%, 36%)';
        btn.style.color='hsl(52, 100%, 62%)';
     })
      calcHeader.style.color='hsl(52, 100%, 62%)';
      screen.style.color='hsl(52, 100%, 62%)';
      del.style.backgroundColor='hsl(281, 89%, 26%)';
       del.style.color='hsl(0, 0%, 100%)';
      reset.style.backgroundColor='hsl(281, 89%, 26%)';
      reset.style.color='hsl(0, 0%, 100%)';
      result.style.backgroundColor='hsl(176, 100%, 44%)';
      result.style.boxShadow='0.02rem 0.2rem hsl(177, 92%, 70%)';
      result.style.color='hsl(198, 20%, 13%)';
      switchCircle.style.backgroundColor='hsl(268, 71%, 12%)';
      circleBtn.forEach(btn=>{
          btn.style.backgroundColor='hsl(177, 92%, 70%)';
      })
 })