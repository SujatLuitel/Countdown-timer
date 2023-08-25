const endDate = "20 September 2023 12:00 AM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll(".counter-box");
const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    const days = Math.floor(diff / ( 60*60*24 ));
    const hours = Math.floor(diff / ( 60 * 60 ) % 24);
    const minutes = Math.floor( diff / 60 % 60 );
    const seconds = Math.floor( diff % 60);
    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
}
clock();
setInterval(clock, 1000);