const input=document.getElementById("view");
const button=document.querySelector("button")
console.log(input);
function ac(){
input.value='';
};
function display(value){
input.value+=value;
};
function backspace(){
input.value=input.value.slice(0,-1);
};
function evalu(){
  try{
input.value=eval(input.value);
  }
  catch(error){
    input.value(error+"calculate in correct order");
  }
};

