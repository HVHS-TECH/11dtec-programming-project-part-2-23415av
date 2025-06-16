/************************* 
Achlys
15
Term 2
*************************/

//Variables

listOfGenres = ['Choose Here', 'Something Weird', 'Something Alternative', 'Something Older', 'Something Pop', 'Something Parody', 'Something Emotional'];
listOfCds = ['N/A', 'Everything is a Lot - Will Wood', 'Eureka - Mother Mother', 'Diamond Dogs - David Bowie', 'Reputation - Taylor Swift', 'Bad Hair Day - “Weird Al” Yankovic', 'The Black Parade - My Chemical Romance'];
cdPrices = ['N/A', '$3/day', 'Eureka - Mother Mother', 'Diamond Dogs - David Bowie', 'Reputation - Taylor Swift', 'Bad Hair Day - “Weird Al” Yankovic', 'The Black Parade - My Chemical Romance'];
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



function genreDropdown() {
    for (i = 0; i < listOfCds.length; i++) {
        var newOption = '<option value="' + listOfGenres[i] + '">' + listOfGenres[i] + '</option>';
        genreSelect.innerHTML += newOption;
    }
}
genreDropdown();