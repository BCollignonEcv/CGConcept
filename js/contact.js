const getFormSubmit = formTag => {
    // Get form submit
    formTag.addEventListener('submit', event => {
        event.preventDefault();

        if(checkUserValue($('[name="lastName"]').val())
            && checkUserValue($('[name="firstName"]').val()) 
            && checkUserValue($('[name="lastName"]').val()) 
            && checkUserValue($('[name="email"]').val())
            && checkUserValue($('[name="object"]').val())
            && checkUserValue(!$('[name="message"]').val())
        ){

            const person = {}
            let visitor = Object.create(person);

            visitor.firstName = $('[name="firstName"]').val();
            visitor.lastName = $('[name="lastName"]').val();
            visitor.email = $('[name="email"]').val();
            visitor.object = $('[name="object"]').val();
            visitor.message = $('[name="message"]').val();

            if(checkUserValue($('[name="company"]').val())){
                visitor.company = $('[name="company"]').val();
            }
            if(checkUserValue($('[name="phone"]').val())){
                visitor.phone = $('[name="phone"]').val();
            }
            if(checkUserValue($('[name="address"]').val())){
                visitor.address = $('[name="address"]').val();
            }
            if(checkUserValue($('[name="city"]').val())){
                visitor.city = $('[name="city"]').val();
            }
            if(checkUserValue($('[name="postalCode"]').val())){
                visitor.postalCode = $('[name="postalCode"]').val();
            }

            jQuery.ajax({
                url: "php/sendMail.php",
                data:
                'firstName='+visitor.firstName+
                '&lastName='+visitor.lastName+
                '&email='+visitor.email+
                '&company='+visitor.company+
                '&phone='+visitor.phone+
                '&address='+visitor.address+
                '&city='+visitor.city+
                '&postalCode='+visitor.postalCode+
                '&object='+visitor.object+
                '&message='+visitor.message,
                type: "POST",
                success:function(data){
                    $("#mail-status").html(data);
                },
                error:function (){}
            });
        }
    });
}

function checkUserValue(userInput){
    if(userInput.length < 1){
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    getFormSubmit(document.querySelector('form'));
});