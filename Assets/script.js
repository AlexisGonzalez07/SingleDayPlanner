Table = document.getElementsByClassName('container')
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
    "17:00",
    ]
console.log(hourArray)
function createSchedule() {
    for (var i = 0; i < hourArray.length; i++) {
    newRow = document.createElement("div")
    newRow.classList ='row'
    console.log(newRow)
    hour = document.createElement("div")
    hour.classList = "col-md-3"
    hour.textContent = hourArray[i]
    console.log(hour)
    taskSpace = document.createElement("div")
    taskSpace.classList = 'col-md-8'
    console.log(taskSpace)
    iconSpace = document.createElement('div')
    iconSpace.classList = 'col-md-1'
    console.log(iconSpace)
    newRow.append(hour);
    newRow.append(taskSpace);
    newRow.append(iconSpace);
}}

createSchedule()