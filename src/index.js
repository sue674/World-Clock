function updateTime(){

let losAngelesElement = document.querySelector("#losAngeles");
if(losAngelesElement){
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
losAngelesDateElement.innerHTML = moment().tz("America/Los_Angeles").format("dddd, MMMM Do YYYY");
losAngelesTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("h:mm:ss [<small>]A[</small>]");
}
let seoulElement = document.querySelector("#seoul");
if(seoulElement){
let seoulDateElement = seoulElement.querySelector(".date");
let seoulTimeElement = seoulElement.querySelector(".time");
seoulDateElement.innerHTML = moment().tz("Asia/Seoul").format("dddd, MMMM Do YYYY");
seoulTimeElement.innerHTML = moment().tz("Asia/Seoul").format("h:mm:ss [<small>]A[</small>]");
}
}
setInterval(updateTime, 1000)

function updateCity(event){
  
    let cityTimeZone = event.target.value;
    if(cityTimeZone === "current"){
    cityTimeZone = moment.tz.guess();
    }
    let cityTime = cityTimeZone.replace("_"," ").split("/")[1];
    let cityDate = moment().tz(cityTimeZone);


    let citiesELement = document.querySelector("#cities");
    citiesELement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityTime}</h2>
          <div class="date">${cityDate.format("dddd, MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityDate.format("hh:mm:ss")} <small>${cityDate.format("A")}</small></div>
      </div>
      
      <a href="/"> All cities</a>`
      
      ;

}

let citySelectElement = document.querySelector("#citiesSelect");
    citySelectElement.addEventListener("change", updateCity);
 

    