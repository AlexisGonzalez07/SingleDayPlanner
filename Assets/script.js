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
    hour = document.createElement("div")
    hour.classList = "col hour"
    hour.setAttribute("data-hour", i)
    hour.textContent = hourArray[i]
    // hour.setAttribute('')
    taskSpace = document.createElement("textarea")
    taskSpace.classList = 'col-md-8'
    taskSpace.setAttribute("data-text", i)
    iconSpace = document.createElement('div')
    button =document.createElement('button')
    iconSpace.append(button)
    iconSpace.classList = 'col saveBtn'
    newRow.append(hour);
    newRow.append(taskSpace);
    newRow.append(iconSpace);
    maindiv.append(newRow)
}
  populatePage();
}

const clickHandler = function(event) {
  // Check to see if the element is clicked.
 if (event.target.matches('button')){
  localStorage.setItem(event.target.parentNode.previousSibling.getAttribute("data-text"),JSON.stringify(event.target.parentNode.previousSibling.value))
};
};

const populatePage = function() {
  let arr= document.querySelectorAll(`[data-text]`);
  console.log(arr)
  for (let i=0; i<arr.length; i++){
    let index = i.toString()
     let keyName = localStorage.getItem(index)
     arr[i].value = keyName
  }
  checkDate()
}

var date = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(date)

const checkDate = function() {
  let arr= document.querySelectorAll(`[data-hour]`);
  console.log(arr)
  for (let i=0; i<arr.length; i++){
    if (arr[i].textContent < date ){
    arr[i].classList.add('past')
  } else if (arr[i].textContent == date ){
     arr[i].classList.add('present')
  } else {arr[i].classList.add('future')}
}
}

// Add the click handler to the container that holds our buttons.
maindiv.addEventListener('click', clickHandler);

createSchedule()
