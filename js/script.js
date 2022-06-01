
    const form = document.getElementById('form');
    form.addEventListener('submit',formSend);
    async function formSend(e) {
        e.preventDefault();
        
        let error = formValidate(form);

        let formData = new FormData(form);


        if(error===0){
            form.classList.add('_sending');
           
            let response = await fetch('bd.php',{
            method: 'POST',
            body: formData
            });
            if(response.ok){
                let result = await response.json();
                alert(result.massage);
                form.reset();
                form.classList.remove('_sending');
            }else{
                alert("Ошибка");
                form.classList.remove('_sending');
            }
            
        }else{
            let names = document.getElementById('names');
            let mail = document.getElementById('email');
            let bio = document.getElementById('comment');
            let dates = document.getElementById('dates');
            let cheack = document.getElementById('userAgreement');
            if(names.value ===''){
                alert('Введите имя');
            }    
            if(emailTest(mail)){
                alert('Введите почту в правильном формате');
            }     
            if(bio.value === ''){
                alert('Введите биографию');
            }       
            if(dates.value=== ''){
                alert('Введите дату в правильном формате');
            }
            if(cheack.checked=== false){
                alert('Подтвердите согласие на обработку данных');
            }
            
        }
        
    }

    function formValidate(form) {
        let error =0;
        let formReq = document.querySelectorAll('._req');

        for (let index=0; index<formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('_email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }else if(input.getAttribute("type")==="checkbox"&&input.checked ===false){
                formAddError(input);
                error++;
    
            }else{
                if(input.value === ''){
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input){
        return !/^\w+([\.-]&\w+)*@\w+([\.-]?\w)*(\.\w{2,8})+$/.test(input.value);
    }

    function dateTest(input){
        return !/^([0-9]{2})\\.([0-9]{2})\\.([1-2][0-9]{4})$/.test(input.value);
    }