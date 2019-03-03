// Purpose is to test that inputs are valid on the order review page before allowing user to submit


$(() => {

    //disable button on load
    $('#confirmOrder').prop('disabled', true); 

    let firstNameLength = 0;
    let lastNameLength = 0;
    let phoneInputLength = 0;

    $("#firstName").keyup(function() {
        firstNameLength = $('#firstName').val().length;
        console.log(firstNameLength)
        submitStatus()
    })

    $("#lastName").keyup(function() {
        lastNameLength = $('#lastName').val().length;
        console.log(lastNameLength)
        submitStatus()
    })

    $("#phoneInput").keyup(function() {
        phoneInputLength = $('#phoneInput').val().length;
        let serializePhone = $("#phoneInput").serialize()
        phoneInputContents = serializePhone.slice(12)
        parsedPhoneInputContents = parseInt(phoneInputContents, 10)
        console.log(phoneInputLength)
        console.log("--",phoneInputContents)
        console.log("---type", typeof(parsedPhoneInputContents))
        console.log(typeof(parsedPhoneInputContents) == "number")

        submitStatus()
    })

    //test conditions of length > 0, or 10 digits for phone
    let submitStatus = function () {
        if (lastNameLength > 0 && firstNameLength > 0 && phoneInputLength === 10 && typeof(parsedPhoneInputContents) == "number") {
            $('#confirmOrder').prop('disabled', false);
        } else {
            $('#confirmOrder').prop('disabled', true);
        }
    }

});