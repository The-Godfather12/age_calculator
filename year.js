const FIRST_NAME = document.querySelector("#firstName");
const LAST_NAME = document.querySelector("#lastName");
const CLIENT_YEAR = document.querySelector("#year");
const CLIENT_RESULT = document.querySelector(".Result")

function calculatebtn() {
    const date = new Date().getFullYear();
    
    let age = (date) - (CLIENT_YEAR.value);

if (FIRST_NAME.value==""  || LAST_NAME.value==""  || CLIENT_YEAR.value=="") { 
 setTimeout(() => {
    CLIENT_RESULT.textContent = "Please fill all fields!";
    CLIENT_RESULT.style.color = "red";
    CLIENT_RESULT.style.fontstyle = "italic"; setTimeout(() => {
    CLIENT_RESULT.textContent = "";
    }, 1500);
}, 100); 

} else{
        CLIENT_RESULT.innerHTML = `${FIRST_NAME.value} ${LAST_NAME.value} you are ${age} years old. Thank you for using Jephthah's age checker`;
        CLIENT_RESULT.style.color = "green";
        CLIENT_RESULT.style.fontstyle = "normal";
        CLIENT_RESULT.style.fontweight = "bold";
        CLIENT_RESULT.style.maxwidth = "700px"; 
        init()
        
    };
}

function init() {
    FIRST_NAME.value="";
    LAST_NAME.value="";
    CLIENT_YEAR.value="";
};