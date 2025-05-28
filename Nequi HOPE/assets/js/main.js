function pageMethodPay(){
    const loader = document.getElementById('loader');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    loader.classList.remove('hidde');
    
    setTimeout(function(){
        loader.classList.add('hidde');
        page1.classList.add('hidde');
        page2.classList.remove('hidde');
    }, 1000);
}

function handleChange(event) {
    const buttonContinue = document.getElementById('buttonContinue');
    const totalPay = document.getElementById('totalPay').innerHTML;
    const priceChoose = document.getElementById('priceChoose');
    const priceToPay = document.getElementById('priceToPay');

    if (event.target.checked) {
        priceChoose.innerHTML = totalPay;
        priceToPay.classList.remove('box__price--hidde');
        buttonContinue.classList.remove('box__pay--disabled');
        buttonContinue.disabled = false;
    } else {
        buttonContinue.classList.add('box__pay--disabled');
        priceToPay.classList.add('box__price--hidde');
        buttonContinue.disabled = true;
    }
}

function continuePay(){
    const loader = document.getElementById('loader');

    const buttonContinue = document.getElementById('buttonContinue');
    const checkbox = document.getElementById('checkboxBtn');

    const methodPay = document.getElementById('methodPay');
    const btnMethodPay = document.getElementById('btnMethodPay');

    const checkStep2 = document.getElementById('checkStepTwo');
    const step2 = document.getElementById('stepTwo');

    loader.classList.remove('hidde');

    setTimeout(() => {
        loader.classList.add('hidde');

        buttonContinue.classList.add('box__pay--disabled');
        buttonContinue.disabled = true;
        checkbox.disabled = true;

        methodPay.classList.remove('box__content--hidde');
        btnMethodPay.classList.remove('box__btn--hidde');

        checkStep2.classList.remove('box__icon-check--hidde');
        step2.classList.add('box__step--hidde');
    }, 300);
}

function methodPaySelected(){
    const boxPic = document.getElementById('boxPic');

    const checkStep3 = document.getElementById('checkStepThree');
    const step3 = document.getElementById('stepThree');

    const buttonPay = document.getElementById('buttonPay');

    boxPic.classList.add('box__picture--selected');

    checkStep3.classList.remove('box__icon-check--hidde');
    step3.classList.add('box__step--hidde');

    buttonPay.classList.remove('box__pay--disabled');
    buttonPay.disabled = false;
}

function authorizeForm(event){
    const formAuthorize = document.getElementById('formAuthorize');

    if (event.target.checked) {
        formAuthorize.classList.remove('box__form--hidde');
    }else{
        formAuthorize.classList.add('box__form--hidde');
    }
}