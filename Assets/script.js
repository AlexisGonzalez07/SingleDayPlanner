// Select the container which holds our buttons that we want to add our event listener too.
const containerEl = document.getElementsByClassName('container');
const maindiv = document.getElementById('mainstuff')
console.log(containerEl)
// Table = document.getElementsByClassName('container')
hourArray = [
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00"
    ]
function createSchedule() {
    for (var i = 0; i < hourArray.length; i++) {
    newRow = document.createElement("div")
    newRow.classList ='row'
    console.log(newRow)
    hour = document.createElement("div")
    hour.classList = "col hour"
    hour.textContent = hourArray[i]
    // hour.setAttribute('')
    taskSpace = document.createElement("div")
    taskSpace.classList = 'col-md-8'
    taskSpace.setAttribute("data-count", i)
    console.log(taskSpace)
    iconSpace = document.createElement('div')
    iconSpace.classList = 'col saveBtn'

    console.log(iconSpace)
    newRow.append(hour);
    newRow.append(taskSpace);
    newRow.append(iconSpace);
    maindiv.append(newRow)
}}

// const clickHandler = function(event) {
//   // Convert the `data-count` attribute from a string to an integer.
//   let newevent = parseInt(event.target.getAttribute('data-count'));

//   // Check to see if the element is a button.
//   if (event.target.matches('button')) {
//     // Increase our `data-count` attribute by one.
//     count++;
    
//     // Set the newly incremented `count` variable to the `data-count` attribute.
//     event.target.setAttribute('data-count', count);

//     // Update what the button's display to show the correct amount of clicks.
//     event.target.textContent = `Clicks: ${count}`;
//   }

// };

// // Add the click handler to the container that holds our buttons.
// containerEl.addEventListener('click', clickHandler);

createSchedule()