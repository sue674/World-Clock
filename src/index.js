function updateTime(){

let losAngelesElement = document.querySelector("#losAngeles");

let losAngelesDateElement = losAngelesElement.querySelector(".date")
let losAngelesTimeElement = losAngelesElement.querySelector(".time")
losAngelesDateElement.innerHTML = moment().tz("America/Los_Angeles").format("dddd, MMMM Do YYYY")
losAngelesTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("h:mm:ss [<small>]A[</small>]")

let seoulElement = document.querySelector("#seoul");

let seoulDateElement = seoulElement.querySelector(".date")
let seoulTimeElement = seoulElement.querySelector(".time")
seoulDateElement.innerHTML = moment().tz("Asia/Seoul").format("dddd, MMMM Do YYYY")
seoulTimeElement.innerHTML = moment().tz("Asia/Seoul").format("h:mm:ss [<small>]A[</small>]")

}
setInterval(updateTime, 1000)