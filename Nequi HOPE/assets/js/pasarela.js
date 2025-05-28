function formTitular(event){
    const formTitular = document.getElementById('checkboxTitularForm');
    
    if(event.target.checked){
        formTitular.classList.remove('hidde');
    }else{
        formTitular.classList.add('hidde');
    }
}

function typePerson(){
    const inputCheckBox = document.querySelectorAll('.inputCheckBox-JN');

    inputCheckBox.forEach(function(item){
        item.addEventListener('click', function(){
            inputCheckBox.forEach(function(input){
                input.checked = false;
            });

            item.checked = true;
        })
    });
}

typePerson();

function bankSelected(){
    const bankSelected = document.getElementById('bankSelected').value;
    const txtBankSelected = document.getElementById('txtBankSelected');

    txtBankSelected.value = bankSelected;
}