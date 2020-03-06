console.log("...line 1...");

//Object to store HTML classes.

var AllDetails = function(nameText, emailText, serviceText, messageText){
  this.nameText = nameText;
  this.emailText = emailText;
  this.serviceText = serviceText;
  this.messageText = messageText
}

AllDetails();

var DOMStrings = {
  mail: '.firstName',
  name: '.email',
  service: '.servicePurchased',
  message: '.textArea1',
  clientsListRep: '.clientsList',
  submitButton: '.submitButton'
}

//Method to store inputs from User;

var getInputs = function(){
  // nameText: document.querySelector(DOMStrings.name).value,
  // emailText: document.querySelector(DOMStrings.mail).value,
  // serviceText: document.querySelector(DOMStrings.service).value,
  // messageText: document.querySelector(DOMStrings.message).value,

  return {
    passInputs: function(){
      return {
        nameText: document.querySelector(DOMStrings.name).value,
        emailText: document.querySelector(DOMStrings.mail).value,
        serviceText: document.querySelector(DOMStrings.service).value,
        messageText: document.querySelector(DOMStrings.message).value,
      }
    }
  }

}


var obj = getInputs().passInputs();

var addListItem = function(obj){
  var html, newHtml, element;

  document.querySelector(DOMStrings.submitButton).addEventListener('click', function(){
    console.log(obj);
})
  //Create an HTML string with a placeholder Text.
  element = DOMStrings.clientsListRep;
  html = '<div class="uiPlaceHolder"><div class="clientID">Client ID <hr> <br><div class="actualClientID">3512546</div></div><div class="clientName">First Name <hr> <br><div class="actualClientName">%emailText%</div></div><div class="serviceOffered">Service Offered <hr> <br><div class="actualService">%serviceText%</div></div><div class="message">Review <hr> <br><div class="actualMessage">%messageText%</div><div></div>'

  console.log(html);
  //Replace the placeholder with some actual Data.
  newHtml = html.replace('%nameText%', obj.nameText);
  console.log(newHTML);
  newHtml = newHtml.replace('%emailText%', obj.emailText);
  newHtml = newHtml.replace('%serviceText%', obj.serviceText);
  newHtml = newHtml.replace('%messageText%', obj.messageText);

  console.log(newHTML);

  //Insert this into the DOM.
  document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);

};
addListItem();




console.log("application has started running");











//
