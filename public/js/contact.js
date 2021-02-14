(function(){
            
    $('#btn-contact-submit').click(function(event){
        if(event){
            event.preventDefault()
        }
        var visitor={
            name: $('#contact-form-name').val(),
            email: $('#contact-form-email').val(),
            subject: $('#contact-form-subject').val(),
            message: $('#contact-form-message').val(),

        }
        console.log("contact submitted:"+JSON.stringify(visitor))
        $.ajax({
            url:'/api/subscriber',
            type:'POST',
            data:visitor,
            success:function(response){
                console.log('subscriber created:'+JSON.stringify(response))
            },
            error:function(response){
                
            }
        })
    })
})()