// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
//     // TODO: Add a listener for click events on the save button. This code should
//     // use the id in the containing time-block as a key to save the user input in
//     // local storage. HINT: What does `this` reference in the click listener
//     // function? How can DOM traversal be used to get the "hour-x" id of the
//     // time-block containing the button that was clicked? How might the id be
//     // useful when saving the description in local storage?
//     //
//     // TODO: Add code to apply the past, present, or future class to each time
//     // block by comparing the id to the current hour. HINTS: How can the id
//     // attribute of each time-block be used to conditionally add or remove the
//     // past, present, and future classes? How can Day.js be used to get the
//     // current hour in 24-hour time?
//     //
//     // TODO: Add code to get any user input that was saved in localStorage and set
//     // the values of the corresponding textarea elements. HINT: How can the id
//     // attribute of each time-block be used to do this?
//     //
//     // TODO: Add code to display the current date in the header of the page.
//   });


$(document).ready(function () {
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D YYYY'));

    $('.time-block').each(function(){
        var dayjsObject = dayjs();
        // var currentHour = dayjsObject.hour();
        var currentHour = '13'
        var blockId = this.id;
        var idSplit = blockId.split('-');
        var blockHour = idSplit[1];
        console.log(blockHour);

        // if before, during, after
        if (blockHour < currentHour) {
            // console.log("before")
            $(this).children('.description').css('background', '#d3d3d3');
        } else if (blockHour == currentHour) {
            // console.log("during");
            $(this).children('.description').css('background', '#ff6961');
        } else {
            $(this).children('.description').css('background', '#77dd77');
        }
    })

    var saveButton = $('.btn');
    saveButton.on('click', function() {
        
        var newEvent = localStorage.getItem('newEvent');
        console.log(newEvent);
        var blockHour = $('time-block');
        blockHour.textContent = newEvent;
        localStorage.setItem('newEvent', newEvent);
    })
})   

// use siblings for connecting text area to save button


