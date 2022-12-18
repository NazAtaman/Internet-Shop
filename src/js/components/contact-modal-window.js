import _vars from "../_vars";


/* let more = document.querySelector('.'),
    overlay = document.querySelector('.overlay'),
    overlayClose = document.querySelector('.overlay_close');


more.addEventListener('click', function(){
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = "hidden";
});

overlayClose.addEventListener('click', function(){
    overlay.style.display = "none";
    more.classList.remove('more-splash');
    document.body.style.overflow = "";

}); */

let join = document.querySelector('.contact_distributor_btn '),
    distributor = document.querySelector('.distributor'),
    distributorClose = document.querySelector('.distributor_close'),
    fillForm = document.querySelector('.contact_question_btn'),
    question =  document.querySelector('.question'),
    questionClose = document.querySelector('.question_close');

                             /* Distributor */

    join.addEventListener('click', function(){
    distributor.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = "hidden";
});

distributorClose.addEventListener('click', function(){
    distributor.style.display = "none";
    join.classList.remove('more-splash');
    document.body.style.overflow = "";
});


                            /* Question */

fillForm.addEventListener('click', function(){
    question.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
});

questionClose.addEventListener('click', function(){
    question.style.display = "none";
    question.classList.remove('more-splash');
    document.body.style.overflow = '';
});