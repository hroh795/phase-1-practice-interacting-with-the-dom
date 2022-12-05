//See the timer increment every second once the page has loaded.
const counter = document.getElementById('counter');

function timerIncrement () {
    counterNum = parseInt(counter.innerText);
    counterNum += 1;

    counter.innerHTML = counterNum.toString();
}
pageInterval =setInterval(timerIncrement, 1000);

//Manually increment and decrement the counter using the plus and minus buttons.

const plusButton = document.getElementById("plus");

plusButton.addEventListener("click", increment);



function increment() {
    counterNum = parseInt(counter.innerText);
    counterNum += 1;

    counter.innerHTML = counterNum.toString();
}

//"Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.


const heartTracker = document.createElement("p");
const node = document.createTextNode("Number of likes: ");
heartTracker.appendChild(node);
const element = document.querySelector(".likes");
element.appendChild(heartTracker);

//heartNum element creation
const heartNum = document.createElement("p");
const heartNumNode = document.createTextNode("0");
heartNum.appendChild(heartNumNode);
element.appendChild(heartNum);
heartNum.setAttribute("id","heartNum");


//click event
const heartCounter = document.getElementById('heartNum');
const heartButton = document.getElementById("heart");
heartButton.addEventListener("click", heartIncrement)

function heartIncrement() {
    counterHeartNum = parseInt(heartCounter.innerText);
    counterHeartNum += 1;

    heartCounter.innerHTML = counterHeartNum.toString();

}

//pause the counter, which should:

const pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", pauseTimer);

function pauseTimer() {
    clearInterval(pageInterval);
    heartButton.removeEventListener("click", heartIncrement);
    plusButton.removeEventListener("click", increment);
    pauseButton.innerText = 'resume';
}


//Click the "restart" button to restart the counter and re-enable the buttons.

const RestartButtonMake = document.createElement("button");
RestartButtonMake.setAttribute("id","restart")
const restartNode = document.createTextNode("restart");
RestartButtonMake.appendChild(restartNode);
document.body.appendChild(RestartButtonMake);

const RestartButton = document.getElementById("restart");

RestartButton.addEventListener("click", resatrtTimer);

function resatrtTimer() {
    pageInterval =setInterval(timerIncrement, 1000);
    heartButton.addEventListener("click", heartIncrement);
    plusButton.addEventListener("click", increment);
    pauseButton.innerText = 'pause';
};

//Leave comments on my gameplay, such as: "Wow, what a fun game this is."
//submit click event

const submitButtom = document.getElementById("submit");

submitButtom.addEventListener("click", function(event){
    const commentText = document.querySelector("#comment-input").value;
    const comment = document.querySelector("#list");
    comment.append(commentText);
    event.preventDefault();
});
