//Initialise
let dayEl = document.getElementById("day");
let dateEl = document.getElementById("today_date");
//arrays

Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
];
Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

//Date function
let todayData = new Date();

todayDay = todayData.getDay();
todayDate = todayData.getDate();
todayMonth = todayData.getMonth();

dayEl.innerText = Days[todayDay];
dateEl.innerText = `${todayDate}    ${Months[todayMonth]}`;

//main code

const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

const dataHide = document.querySelector(".middle_layer");
const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = "Please fill city name";
        dataHide.classList.add("data_hide");
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&APPID=e09b1ed34820e2c0e9470b45ea3dc0fa`;
            const response = await fetch(url);
            const data = await response.json();
            const dataArr = [data];
            temp.innerHTML = `${dataArr[0].main.temp}<sup>o</sup>C`;
            // console.log(data);
            city_name.innerText = `${dataArr[0].name}  , ${dataArr[0].sys.country}`;

            // const tempMood = dataArr[0].weather[0].main;
            // console.log(tempMood);
            temp_status.innerText = dataArr[0].weather[0].main;

            // if (tempMood == "Clear") {
            //     temp_status.innerHTML =
            //         "<i class='fas fa - sun ' style='color: yellow;'></i>";
            // } else if (tempMood == "Rain") {
            //     temp_status.innerHTML =
            //         "<i class='fas fa -cloud-rain ' style='color: yellow;'></i>";
            // } else if (tempMood == "Clouds") {
            //     temp_status.innerHTML =
            //         "<i class='fa fa - cloud ' style='color: blue;'></i>";
            // } else {
            //     temp_status.innerHTML =
            //         "<i class='fas fa - sun ' style='color: yellow;'></i>";
            // }

            dataHide.classList.remove("data_hide");
        } catch {
            city_name.innerText = "Please enter valid city name";
            dataHide.classList.add("data_hide");
        }
    }
};
submitBtn.addEventListener("click", getInfo);