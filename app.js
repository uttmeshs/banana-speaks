var btnTranslate = document.querySelector("#btn-translate");
var txtInput =document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";
//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
//var serverURL ="https://api.funtranslations.com/translate/dothraki.json";

function getTransalationURL(text){
	return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
	console.log(error);
	alert("Someting wrong! with server try after sometime.")
}

function clickEventHeandler(){
	console.log("clicked!");
	//outputdiv.innerText = "dummy text: " + txtInput.value;
	var inputText = txtInput.value;

	fetch(getTransalationURL(inputText))
	.then(response => response.json())
	.then(json => { tanslatedText= json.contents.translated;
		outputdiv.innerText = tanslatedText;
	 })
	.catch(errorHandler);
}
btnTranslate.addEventListener("click",  clickEventHeandler)