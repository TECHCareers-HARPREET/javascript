let clickCount =0;
function outputToConsole(){
    console.log("Script works");
    clickCount++;
}

const linkToClick = document.querySelector("a");
linkToClick.addEventListenser("click", outputToConsole);