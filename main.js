/************************* 
Achlys
15
Term 2
*************************/

//Variables
const listOfGenres = ['Choose Here', 'Something Weird', 'Something Alternative', 'Something Older', 'Something Pop', 'Something Parody', 'Something Emotional'];
let index = listOfGenres.indexOf('Something Weird');
listOfCds = ['N/A', 'Everything is a Lot - Will Wood', 'Eureka - Mother Mother', 'Diamond Dogs - David Bowie', 'Reputation - Taylor Swift', 'Bad Hair Day - “Weird Al” Yankovic', 'The Black Parade - My Chemical Romance'];
cdPrices = ['N/A', '$3/day', '$3/day', ' $5/day', ' $5/day', ' $4/day', '$3.50/day'];
/*************************
Main Code
*************************/



/*************************
Functions
*************************/
/*
This function serves the purpose of being able to collect the users name.
It will then display the users name in a welcome message.
*/
function getNameInput() {
    var message = "Welome to Cool Robs CDs for rent ";
    message = message + input_name.value;
    welcomeMessage.innerHTML = message;
}
/*
This function serves the purpose of being able to allow the user to choose a genre.
It will then be used to proceed with rental information.
*/
function genreDropdown() {
    for (i = 0; i < listOfCds.length; i++) {
        var newOption = '<option value="' + listOfGenres[i] + '">' + listOfGenres[i] + '</option>';
        genreSelect.innerHTML += newOption;
    }
}
genreDropdown();
/*
This function serves the purpose of being able to show the users CD and pricing per day.
It will then display the users choice and price with a message underneath.
*/
function yourCd() {
    var cd = "The CD you have selected is ";
    cd = cd + listOfCds[listOfGenres.indexOf(genreSelect.value)];
    cdName.innerHTML = cd;
    var price = "This will cost you ";
    price = price + cdPrices[listOfGenres.indexOf(genreSelect.value)];
    dailyPrice.innerHTML = price;
}
/*
What I need to do now so I do not forget.
Figure out how many days the user wishes to rent the cd.
Make sure it is valid. Validating your input slide 4
Have a max and min for days. 1-10
Use the math ability to display how much it will cost them for that many days for that cd. base number x dayX
Have one underneath that shows what the price would be with the additional charge of a cd player rent. base number + 20 x dayX
Add ones for bond payment if time.
Then work on website look if time.
*/