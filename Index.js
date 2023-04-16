const UserInput = document.querySelector("#UserInput")
const submitBtn = document.querySelector("#submitBtn");


submitBtn.addEventListener("submit", () => {
    setCookie("UserInput", UserInput.value, 365);
});
submitBtn.addEventListener("click", () => {
});

function setCookie(UserInput, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${UserInput}=${value}; ${expires}; path=/`
}
function deleteCookie(UserInput){
    setCookie(UserInput, null, null);
}
function getCookie(UserInput){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(UserInput) == 0){
            result = element.substring(UserInput.length + 1)
        }
    })
    return result;
}