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
    taskSpace = document.createElement("textarea")
    taskSpace.classList = 'col-md-8'
    taskSpace.setAttribute("data-text", i)
    console.log(taskSpace)
    iconSpace = document.createElement('div')
    button =document.createElement('button')
    iconSpace.append(button)
    iconSpace.classList = 'col saveBtn'

    console.log(iconSpace)
    newRow.append(hour);
    newRow.append(taskSpace);
    newRow.append(iconSpace);
    maindiv.append(newRow)
}}

const clickHandler = function(event) {
  // Check to see if the element is clicked.
 if (event.target.matches('button')){
   if(event.target.parentNode.previousSibling.textContent=""){
     console.log('empty')
   } else (event.target.parentNode.previousSibling.textContent!=="")
    localStorage.setItem(event.target.parentNode.previousSibling.getAttribute("data-text"),JSON.stringify(event.target.parentNode.previousSibling.textContent))
    console.log("success")
    console.log(localStorage) 
  }
};

date = moment().format('MMMM Do YYYY, h:mm:ss a');

// Add the click handler to the container that holds our buttons.
maindiv.addEventListener('click', clickHandler);

createSchedule()