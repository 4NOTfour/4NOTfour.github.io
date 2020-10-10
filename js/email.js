$(document).ready(function() {
    $('.send-email').on('click',function(){
        // Add text 'loading...' right after clicking on the submit button.
        $('.output_message').text('Loading...');
        var form = $('.email-form');
        $.ajax({
            url: "https://www.techamulets.com/wp-content/themes/techamulets/email.php",
            method: 'post',
            data: form.serialize(),
            success: function(result){
                if (result == 1){
                    $('.email-form').addClass('hide');
                    $('.output_message').text('Sent! We will contact you soon!');
                } else {
                    $('.output_message').text('Error! Please try again');
                }
            }
        });
        // Prevents default submission of the form after clicking on the submit button.
        return false;
    });


    let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

});

window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});