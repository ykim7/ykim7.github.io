const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function loginHandler(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem("userName", userName);
    console.log(userName);
    greetingShow(userName);
}

function greetingShow(userName){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    console.log(hours);
    if(hours < 5 || hours >=21){
        greeting.innerText = `Good night, ${userName}!`;
    }else if(hours >=5 && hours < 12){
        greeting.innerText = `Good morning, ${userName}!`;
    }else if(hours >=12 && hours < 18){
        greeting.innerText = `Good afternoon, ${userName}!`;
    }else{
        greeting.innerText = `Good evening, ${userName}!`;
    }
    console.log(greeting);
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem("userName");  
if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    loginForm.addEventListener("submit", loginHandler);
}else{
    greetingShow(savedUserName);
}