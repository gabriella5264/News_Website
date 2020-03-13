

const header = document.querySelector('header');
const section = document.querySelector('section');

//variable to count the order of the articles
var a = 1;

titles = Array();

const button = document.getElementById("buttonN");
button.setAttribute("onclick", "goNext()");
button.style.display = "inline";

const button1 = document.getElementById("buttonP");
button1.setAttribute("onclick", "goBack()");
button1.style.display = "none";


//connect with server(article1)
let requestURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

//error handling(article1)
request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
        var status = request.status;

        if (status === 0 || (200 >= status && status < 400)) {
            console.log(request.responseText);
        }
        else {
            alert("There is an error!");
        }
    }
}

//display articles
request.onload = function () {

    const article1 = request.response;
    populateHeader(article1);
    showArticles(article1);

    unitTest();

}


//go to the previous article when the user press previous button
function goBack() {

    a--;

    //a will always start from 1
    if (a < 2) {
        a = 1;
    }

    switch (a) {
        case 1:
            //set button visibility
            button1.style.display = "none";

            //connect with server(article1)
            requestURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json';
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            break;

        case 2:
            //set button visibility
            button.style.display = "inline";
            button1.style.display = "inline";

            //connect with server(article2)
            requestURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-2.json';
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            break;


        case 3:
            //set button visibility
            button.style.display = "inline";
            button1.style.display = "inline";

            //connect with server(article3)
            requestURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json';
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            break;

        case 4:
            //set button visibility
            button.style.display = "inline";
            button1.style.display = "inline";

            //connect with server(article4)
            requestURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-4.json';
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            break;

        case 5:
            //set button visibility
            button.style.display = "inline";
            button1.style.display = "inline";

            //connect with server(article5)
            requestURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-5.json';
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            break;

        case 6://create a ranking page

            //clear to avoid duplicate
            header.innerHTML = "";
            section.innerHTML = "";

            //set button visibility
            button.style.display = "none";
            button1.style.display = "none";
            document.getElementById("submit").style.display = "inline";

            //create h1
            var ranking = document.getElementById("h1");
            ranking.innerHTML = "Which article did you like the most? (5 = The Most, 1 = The Least)";
            document.body.appendChild(ranking);


            //display the textboxes and the names of the articles
            for (var i = 1; i < 6; i++) {

                this["rankingTitle" + i] = document.getElementById("p" + i);
                this["rankingTitle" + i].innerHTML = titles[i - 1];
                this["rankingTitle" + i].setAttribute("id", "sendTitle" + i);
                document.body.appendChild(this["rankingTitle" + i]);

                this["createForm" + i] = document.createElement("INPUT");
                this["createForm" + i].setAttribute("type", "text");
                this["createForm" + i].setAttribute("value", i);
                this["createForm" + i].setAttribute("id", "formValue" + i);
                document.body.appendChild(this["createForm" + i]);

            }

            //create aan empty line
            var space = document.createElement("p");
            space.innerHTML = "\n";
            document.body.appendChild(space);

            //create a submit button
            var submit = document.getElementById("submit");
            document.body.appendChild(submit);
            submit.setAttribute("onclick", "submit()");
            break;

    }
}

//go to the next article when the user press next button
function goNext() {

    header.innerHTML = "";
    section.innerHTML = "";

    a++;
    if (a > 6) {
        a = 6;
    }
    switch (a) {
        case 2:
            button.style.display = "inline";
            button1.style.display = "inline";
            requestURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-2.json';
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            break;


        case 3:
            button.style.display = "inline";
            button1.style.display = "inline";
            requestURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json';
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            break;

        case 4:
            button.style.display = "inline";
            button1.style.display = "inline";
            requestURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-4.json';
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            break;

        case 5:
            button.style.display = "inline";
            button1.style.display = "inline";
            requestURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-5.json';
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            break;

        case 6:
            header.innerHTML = "";
            section.innerHTML = "";

            button.style.display = "none";
            button1.style.display = "none";
            document.getElementById("submit").style.display = "inline";

            var ranking = document.getElementById("h1");
            ranking.innerHTML = "Which article did you like the most?<br>(5 = The Most, 1 = The Least)";
            document.body.appendChild(ranking);


            for (var i = 1; i < 6; i++) {

                this["rankingTitle" + i] = document.getElementById("p" + i);
                this["rankingTitle" + i].innerHTML = titles[i - 1];
                this["rankingTitle" + i].setAttribute("id", "sendTitle" + i);
                document.body.appendChild(this["rankingTitle" + i]);

                this["createForm" + i] = document.createElement("INPUT");
                this["createForm" + i].setAttribute("type", "text");
                this["createForm" + i].setAttribute("value", i);
                this["createForm" + i].setAttribute("id", "formValue" + i);
                this["createForm" + i].setAttribute("tabindex", 3 + i);
                document.body.appendChild(this["createForm" + i]);

            }

            var space = document.createElement("p");
            space.innerHTML = "\n";
            document.body.appendChild(space);

            var submit = document.getElementById("submit");
            document.body.appendChild(submit);
            submit.setAttribute("onclick", "submit()");
            break;

    }

}

//ranking submit function
function submit() {

    //connect with server
    let sendURL = 'http://yjj3.student.eda.kent.ac.uk/BBC/index.html';

    let send = new XMLHttpRequest();

    send.open("POST", sendURL, true);

    //error handling
    send.onreadystatechange = function () {
        if (send.readyState === XMLHttpRequest.DONE) {
            var status = send.status;

            if (status === 0 || (200 >= status && status < 400)) {
                console.log(send.responseText);
                alert("Submitted");
            }
            else {
                alert("There is an error!");
            }
        }
    }


    var data = Array();

    //creating array values
    for (var k = 1; k < 6; k++) {
        this["sendName" + k] = document.getElementById("sendTitle" + k).textContent;

        this["value" + k] = document.getElementById("formValue" + k).value;

        data[k - 1] = [this["sendName" + k]] + ": " + this["value" + k];

    }

    //convert a JavaScript object to a JSON string
    var dataArray = JSON.stringify(data);


    send.send(dataArray);

}

//create header
function populateHeader(jsonObj) {
    header.innerHTML = "";
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['title'];
    header.appendChild(myH1);

    myH1.setAttribute("id", "title");

    titles[a - 1] = myH1.textContent;


}

//create article
//preload is impossible with this structure
function showArticles(jsonObj) {
    section.innerHTML = "";
    const body = jsonObj['body'];

    for (let i = 0; i < body.length; i++) {
        const myArticle = document.createElement('article');
        myArticle.setAttribute("id", "article");

        const myPara3 = document.createElement('p');
        myPara3.setAttribute("id", "myPara3");

        const myList = document.createElement('ul');
        myList.setAttribute("id", "myList");

        const modelList = body[i].model;

        myPara3.textContent = modelList.text;


        var img = document.createElement('img');
        img.src = modelList.url;
        img.setAttribute("id", "img");


        const altText = document.createElement('p');
        altText.textContent = modelList.altText;

        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        //if the data type is image, display image and text
        if (body[i].type == 'image') {
            myArticle.appendChild(img);
            myArticle.appendChild(altText);
        }

        //if the data type is list, display list
        else if (body[i].type == 'list') {

            const items = modelList.items;

            for (let j = 0; j < items.length; j++) {
                const item = document.createElement('li');
                item.textContent = items[j];
                myList.appendChild(item);
            }
        }

        section.appendChild(myArticle);
    }
}

//voice instrunction function
//I was trying to make a voice guide to read articles, however, depends of the browser and version of
//the browsers, it was changing the language even after I setted it to English.
function listen() {
    var msg = new SpeechSynthesisUtterance('Press Tab button on your keyboard to navigate and press enter to click.');
    msg.lang = 'en-UK'
    msg.rate = 0.8;
    msg.pitch = 0.5;
    window.speechSynthesis.speak(msg);
}

//enter = click
document.onkeydown = function (e) {
    if (event.keyCode == 13) {
        event.preventDefault();
        document.activeElement.click();
    }
};

//unit test
function unitTest() {
    if (status === 0 || (200 >= status && status < 400)) {
        alert("The page changed successfully");
    }
    else {
        alert("Couldn't change the pages");
    }
}

//styles

document.getElementById("p1").style.marginTop = "5em";
document.getElementById("p2").style.marginTop = "2em";
document.getElementById("p3").style.marginTop = "2em";
document.getElementById("p4").style.marginTop = "2em";
document.getElementById("p5").style.marginTop = "2em";

document.getElementById("submit").style.marginTop = "2em";
document.getElementById("submit").style.display = "none";
