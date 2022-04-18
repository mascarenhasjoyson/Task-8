var section=document.createElement('section');

var mdiv=document.createElement('div');
mdiv.classList.add('class','container');

var cdiv1=document.createElement('div');
cdiv1.setAttribute('class', 'display');

          var display1= document.createElement('div');
          display1.setAttribute('class','display-1');
          display1.innerText='0';
          var display2=document.createElement('div');
          display2.setAttribute('class','display-2');
          display2.innerText='0';
          var display3=document.createElement('div');
          display3.setAttribute('class', 'temp-result');
          display2.innerText='';

          cdiv1.append(display1, display2, display3);

var cdiv2=document.createElement('div');
cdiv2.setAttribute('class', 'all-buttons');

          var acdiv=document.createElement('div');
          acdiv.setAttribute('class', 'button all-clear');
          acdiv.innerText='C';
          var lastcdiv=document.createElement('div');
          lastcdiv.setAttribute('class', 'button last-entity-clear');
          lastcdiv.innerText='CE';
          var moddiv=document.createElement('div');
          moddiv.setAttribute('class', 'button operation');
          moddiv.innerText='%';
          var divdiv=document.createElement('div');
          divdiv.setAttribute('class', 'button operation');
          divdiv.innerText='/';
          var div7=document.createElement('div');
          div7.setAttribute('class', 'button number');
          div7.innerText='7';
          var div8=document.createElement('div');
          div8.setAttribute('class', 'button number');
          div8.innerText='8';
          var div9= document.createElement('div');
          div9.setAttribute('class', 'button number');
          div9.innerText='9';
          var muldiv=document.createElement('div');
          muldiv.setAttribute('class', 'button operation');
          muldiv.innerText='X';
          var div4= document.createElement('div');
          div4.setAttribute('class', 'button number');
          div4.innerText='4';
          var div5=document.createElement('div');
          div5.setAttribute('class', 'button number');
          div5.innerText='5';
          var div6=document.createElement('div');
          div6.setAttribute('class', 'button number');
          div6.innerText='6';
          var minusdiv=document.createElement('div');
          minusdiv.setAttribute('class', 'button operation');
          minusdiv.innerText='-';
          var div1=document.createElement('div');
          div1.setAttribute('class', 'button number');
          div1.innerText='1';
          var div2=document.createElement('div');
          div2.setAttribute('class', 'button number');
          div2.innerText='2';
          var div3=document.createElement('div');
          div3.setAttribute('class', 'button number');
          div3.innerText='3';
          var plusdiv=document.createElement('div');
          plusdiv.setAttribute('class', 'button operation');
          plusdiv.innerText='+';
          var div0=document.createElement('div');
          div0.setAttribute('class', 'button number btn-0');
          div0.innerText='0';
          var dotdiv=document.createElement('div');
          dotdiv.setAttribute('class', 'button number dot');
          dotdiv.innerText='.';
          var equaldiv=document.createElement('div');
          equaldiv.setAttribute('class', 'button equal');
          equaldiv.innerText='=';

          cdiv2.append(acdiv, lastcdiv, moddiv, divdiv, div7, div8, div9, muldiv, div4, div5, div6, minusdiv, div1, div2, div3, plusdiv, div0, dotdiv, equaldiv);

          mdiv.append(cdiv1, cdiv2);
          section.append(mdiv);
          document.body.append(section);










const display1El=document.querySelector('.display-1');
const display2El=document.querySelector('.display-2');
const tempResultEl=document.querySelector('.temp-result');
const numbersEl=document.querySelectorAll('.number');
const operationsEl=document.querySelectorAll('.operation');
const equalEl=document.querySelector('.equal');
const clearEl=document.querySelector('.all-clear');
const clearLastEl=document.querySelector('.last-entity-clear');


let dis1Num='';
let dis2Num='';
let result=null;
let lastOperation='';
let haveDot=false;

numbersEl.forEach(number =>{
  number.addEventListener('click', (e)=> {
    if(e.target.innerText === '.' && !haveDot){
      haveDot=true;
    }else if(e.target.innerText === '.' && haveDot){
      return;
    }
    dis2Num += e.target.innerText;
    display2El.innerText=dis2Num;
  })
});

operationsEl.forEach(operation => {
  operation.addEventListener('click', (e)=>{
    if(!dis2Num) return;
    haveDot= false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation){
      mathOperation();
    } else {
      result= parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation= operationName;
    console.log(result);
  })
});

function clearVar(name=''){
  dis1Num += dis2Num+ ' ' + name + ' ';
  display1El.innerText= dis1Num;
  display2El.innerText='';
  dis2Num='';
  tempResultEl.innerText=result;
}

function mathOperation(){
  if(lastOperation === 'X'){
    result = parseFloat(result) * parseFloat(dis2Num);
   } else if (lastOperation === '+'){
     result = parseFloat(result) + parseFloat(dis2Num);
   } else if (lastOperation === '-'){
     result = parseFloat(result) - parseFloat(dis2Num);
   } else if (lastOperation === '/'){
     result = parseFloat(result) / parseFloat(dis2Num);
   } else if (lastOperation === '%'){
     result = parseFloat(result) % parseFloat(dis2Num);
   }
}

equalEl.addEventListener('click', (e)=> {
  if(!dis1Num || !dis2Num) return;
  haveDot= false;
  mathOperation();
  clearVar();
  display2El.innerText=result;
  tempResultEl.innerText='';
  dis2Num=result;
  dis1Num='';
});

clearEl.addEventListener('click', (e)=> {
  display1El.innerText='0';
  display2El.innerText='0';
  dis1Num='';
  dis2Num='';
  result='';
  tempResultEl.innerText='0';
});

clearLastEl.addEventListener('click', (e)=> {
  display2El.innerText='';
  dis2Num='';
});

window.addEventListener('keydown', (e)=>{
  if(
    e.key==='0' ||
    e.key==='1' ||
    e.key==='2' ||
    e.key==='3' ||
    e.key==='4' ||
    e.key==='5' ||
    e.key==='6' ||
    e.key==='7' ||
    e.key==='8' ||
    e.key==='9' ||
    e.key==='.'
  ){
    clickbuttonEl(e.key);
  }else if(
    e.key === '+' ||
    e.key === '-' ||
    e.key === '%' ||
    e.key === '/'
  ){
    clickOperation(e.key);
  } else if(e.key==="*"){
    clickOperation('X');
  }else if(e.key== 'Enter' || e.key=== "="){
    clickequal();
  }else if(e.key== 'Backspace'){
    backspace();
  }else if(e.key== 'Delete'){
    delete1();
  }else {
    alert("Please enter a valid input!!!");
  }
});

function clickbuttonEl(key){
  numbersEl.forEach(button => {
    if(button.innerText===key){
      button.click();
    }
  });
}

function clickOperation(key){
  operationsEl.forEach(button =>{
    if(button.innerText===key){
      button.click();
    }
  });
}

function clickequal(){
  equalEl.click();
}

function backspace(){
  clearLastEl.click();
}

function delete1(){
  clearEl.click();
}