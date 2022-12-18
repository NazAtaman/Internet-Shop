import _vars from "../_vars";



const $stepperInput = _vars.$stepper.querySelector('.stepper_input'),
      $stepperMinus = _vars.$stepper.querySelector('.stepper_btn_minus'),
      $stepperPlus = _vars.$stepper.querySelector('.stepper_btn_plus');

$stepperInput.addEventListener('keydown', (e) => {
     if (e.currentTarget.value <= 1){
        $stepperMinus.classList.add('stepper_btn_disable');
        $stepperMinus.classList.remove('stepper_btn_disable');
     } else {
        $stepperMinus.classList.remove('stepper_btn_disable');
     }

     if (e.currentTarget.value > 998){
        $stepperMinus.classList.remove('stepper_btn_disable');
        $stepperMinus.classList.add('stepper_btn_disable');
     } else {
        $stepperMinus.classList.remove('stepper_btn_disable');
     }

 });     


 $stepperPlus.addEventListener('click', (e) => {
   let currentValue = parseInt($stepperInput.value);
   currentValue++;
   $stepperInput.value = currentValue;
   $stepperMinus.classList.remove('stepper_btn_disable');

   if ($stepperInput.value > 998){
      $stepperInput.value = 999;
      $stepperPlus.classList.add('stepper_btn_disable');
   } else {
      $stepperPlus.classList.remove('stepper_btn_disable');
   }
 });

 $stepperMinus.addEventListener('click', (e) => {
   let currentValue = parseInt($stepperInput.value);
   currentValue--;
   $stepperInput.value = currentValue;
   $stepperPlus.classList.remove('stepper_btn_disable');

   if ($stepperInput.value <= 1){
      $stepperInput.value = 1;

      $stepperMinus.classList.add('stepper_btn_disable');
   } else {
      $stepperMinus.classList.remove('stepper_btn_disable');
   }
 });







/*   $stepperMinus.addEventListener('click', (e) => {
   let currentValue = parseInt($stepperInput.value);
   console.log(currentValue);
   currentValue--;
   $stepperInput.value = currentValue;
   
   $stepperPlus.classList.remove('stepper_btn_disable');

   if ($stepperInput.value <= 1){
      $stepperInput.value = 1;
      $stepperMinus.classList.add('stepper_btn_disable');
   } else {
      $stepperMinus.classList.remove('stepper_btn_disable');
   }
 });  */





 
/*  $(document).ready(function() {
   $(".stepper_btn_minus").on("click", function() {
      $(".stepper_input").val(parseInt($(".stepper_input").val())-1);
   }); 
   $(".stepper_btn_plus").on("click", function() {
      $(".stepper_input").val(parseInt($(".stepper_input").val())+1);
   }); 
});  */






















/*  console.log('helloooo');


let stepperInput = {
   el:document.querySelectorAll(".stepper-input input"),
   plusBtn:document.querySelector(".stepper-input .input .plus-btn"),
   minusBtn:document.querySelector(".stepper-input .input .minus-btn"),
   list:document.querySelector(".stepper-input .input .list")
};


stepperInput.min = parseInt(stepperInput.el.attr("min"));
stepperInput.max = parseInt(stepperInput.el.getAttribute("max"));
stepperInput.min = parseInt(stepperInput.el.getAttribute("min"));
  */