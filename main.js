/************************* 
Achlys
15
Term 2
*************************/

//Variables



/*************************
Main Code
*************************/



/*************************
Functions
*************************/
function getNameInput (){
    var message = "Welome to Cool Robs CDs for rent ";
    message  = message + input_name.value;
    welcomeMessage.innerHTML = message;
}


listOfCds = ['Choose Here', 'Something Weird', 'Something Alternative', 'Something Older', 'Something Pop', 'Something Parody', 'Something Emotional'];
function genreDropdown() {
    for (i = 0; i < listOfCds.length; i++) {
        var newOption = '<option value="' + listOfCds[i] + '">' + listOfCds[i] + '</option>';
        genreSelect.innerHTML += newOption;
    }
}
genreDropdown();

function addImage(){
    if (newOption = 1){

    }
}