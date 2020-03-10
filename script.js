const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    const article1 = request.response;
    populateHeader(article1);
    showArticles(article1);


    const button = document.getElementById("button");
    button.setAttribute("onclick", "goNext()");

}

var a = 1;
var titles = Array();

function goNext() {
    a++;

    switch (a) {
        case 2:
            requestURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-2.json';
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();


            break;


        case 3:
            requestURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json';
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            break;

        case 4:
            requestURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-4.json';
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            break;

        case 5:
            requestURL = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-5.json';
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            break;

        case 6:

            document.getElementById("button").style.display = "none";
            header.innerHTML = "";
            section.innerHTML = "";

            var ranking = document.createElement("h1");
            ranking.innerHTML = "Which article did you like the most? (5 = The Most, 1 = The Least)";
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
                document.body.appendChild(this["createForm" + i]);

            }

            var space = document.createElement("p");
            space.innerHTML = "\n";
            document.body.appendChild(space);

            var submit = document.createElement("button");
            submit.innerHTML = "Submit";
            document.body.appendChild(submit);
            submit.setAttribute("onclick", "submit()");
            submit.setAttribute("id", "submit");
            break;

    }

}

function submit() {

    //let sendURL = 'https://raw.githubusercontent.com/gabriella5264/yjj93/master/receive.json';
    //let send = new XMLHttpRequest();

    //send.open("POST", sendURL, true);
    //send.setRequestHeader("Content-Type", "application/json");

    //send.onreadystatechange = function () { // Call a function when the state changes.
    //    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

    //        alert("Submitted!");
    //    }
    //}

    var data = Array();

    for (var k = 1; k < 6; k++) {
        this["sendName" + k] = document.getElementById("sendTitle" + k).textContent;

        this["value" + k] = document.getElementById("formValue" + k).value;

        //this["rankings" + k] = this["sendName" + k] + ": " + this["value" + k];
        data[k - 1] = [this["sendName" + k]] + ": " + this["value" + k];

    }

    window.fetch('https://raw.githubusercontent.com/gabriella5264/yjj93/master/receive.json', {
        method: 'POST',
        body: JSON.stringify(data),
    }).then(resolve, reject);

    //send.send(JSON.stringify(data));


}

function populateHeader(jsonObj) {
    header.innerHTML = "";
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['title'];
    header.appendChild(myH1);

    myH1.setAttribute("id", "title");

    titles[a - 1] = myH1.textContent;


}

function showArticles(jsonObj) {
    section.innerHTML = "";
    const body = jsonObj['body'];


    for (let i = 0; i < body.length; i++) {
        const myArticle = document.createElement('article');
        myArticle.setAttribute("id", "article");

        //const myH2 = document.createElement('h2');
        //const myPara1 = document.createElement('p');
        //const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        myPara3.setAttribute("id", "myPara3");

        const myList = document.createElement('ul');
        myList.setAttribute("id", "myList");

        const modelList = body[i].model;


        //myH2.textContent = body[i].type;
        //myPara1.textContent = 'Type: ' + body[i].type;
        //myPara2.textContent = 'Items: ' + body[i].items;
        myPara3.textContent = modelList.text;


        var img = document.createElement('img');
        img.src = modelList.url;
        img.setAttribute("id", "img");


        const altText = document.createElement('p');
        altText.textContent = modelList.altText;

        //myArticle.appendChild(myH2);
        //myArticle.appendChild(myPara1);
        //myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        if (body[i].type == 'image') {
            myArticle.appendChild(img);
            myArticle.appendChild(altText);
        }
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