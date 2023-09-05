/* Funções: ------------------------------------ */

const addOpacity = (item)=> {
    item.style.opacity = '0.2';
};

const removeOpacity = (item)=> {
    item.style.opacity = '1';
};

const checkClass = (elemento, addOrRemove, string)=> {
    switch(addOrRemove){
        case 'add':
            elemento.classList.add(`${string}`);
        break;
        case 'remove':
            elemento.classList.remove(`${string}`);
        break;
    };
};

const validateEmail = (input)=> {
    const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if(input.value.match(validRegex)){
        inputEmailValidation = true;
        inputEmailErrorMessage.style.visibility = 'hidden';
        inputEmailErrorSvg.style.display = 'none';
    }else{
        inputEmailValidation = false;
        inputEmailErrorMessage.style.visibility = 'visible';
        inputEmailErrorSvg.style.display = 'block';
    };
};

/* Variáveis: ------------------------------------ */

let inputTextValidation = '';
let inputEmailValidation = false;
let textAreaValidation = '';

let inputText = document.querySelector('.input-format[type=text]');
let inputEmail = document.querySelector('.input-format[type=email]');
let textArea = document.querySelector('.textarea-contact');

let inputTextErrorMessage = document.querySelector('.contact-right-side form .invalid-name');
let inputTextErrorSvg = document.querySelector('.contact-right-side form .name-input-area svg');

let inputEmailErrorMessage = document.querySelector('.contact-right-side form .invalid-email');
let inputEmailErrorSvg = document.querySelector('.contact-right-side form .email-input-area svg');

let textAreaErrorMessage = document.querySelector('.contact-right-side form .invalid-textarea');

/* Código: ------------------------------------ */

inputText.addEventListener('change', (e)=> {
    inputTextValidation = e.target.value;
});
textArea.addEventListener('change', (e)=> {
    textAreaValidation = e.target.value;
});

document.querySelector('.submit-input-contact input').addEventListener('click', (e)=> {
    e.preventDefault();

    validateEmail(inputEmail);

    if(inputTextValidation === ''){
        checkClass(inputText, 'add', 'false');
        checkClass(inputText, 'remove', 'true');
        inputTextErrorMessage.style.visibility = 'visible';
        inputTextErrorSvg.style.display = 'block';
    }else{
        checkClass(inputText, 'remove', 'false');
        checkClass(inputText, 'add', 'true');
        inputTextErrorMessage.style.visibility = 'hidden';
        inputTextErrorSvg.style.display = 'none';
    };

    if(inputEmailValidation === false){
        checkClass(inputEmail, 'add', 'false');
        checkClass(inputEmail, 'remove', 'true');
    }else{
        checkClass(inputEmail, 'remove', 'false');
        checkClass(inputEmail, 'add', 'true');
    };

    if(textAreaValidation === ''){
        checkClass(textArea, 'add', 'false');
        checkClass(textArea, 'remove', 'true');
        textAreaErrorMessage.style.visibility = 'visible';
    }else{
        checkClass(textArea, 'remove', 'false');
        checkClass(textArea, 'add', 'true');
        textAreaErrorMessage.style.visibility = 'hidden';
    };
});



document.querySelectorAll('.projects-box .box-project img').forEach((item)=> {
    item.addEventListener('mouseenter', ()=> {
        addOpacity(item);
        let itemButton = item.nextElementSibling.nextElementSibling.nextElementSibling;

        if(itemButton){
            itemButton.style.display = 'flex';

            itemButton.addEventListener('mouseenter', ()=> {
                addOpacity(item);
            });
            itemButton.addEventListener('mouseleave', ()=> {
                removeOpacity(item);
                itemButton.style.display = 'none';
            });
        }
        
    });

    item.addEventListener('mouseleave', ()=> removeOpacity(item))
});