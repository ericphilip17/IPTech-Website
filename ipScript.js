
//UIcontroller

var dataController = (function(){


})();


var UIManipulator = (function(){

  var IPDOMstrings = {
    menuIconRep: '.menuIcon',
    activeOnClickingRep: '.activeOnClicking',
    removeMenuBarRep: '.removeMenuBar',
    activeOnClickingRep: '.activeOnClicking',
    // topBtnRep: '.topBtn',
    activeOnClickingRep: '.activeOnClicking',
    ceoDPRep: '.ceoDP',
    ceoDPClickedRep: '.ceoDPClicked',
    ceo2DPRep: '.ceo2DP',
    ceo2DPClickedRep: '.ceo2DPClicked',
    submitBtnRep: '.submitBtn',
    submitMsgRep: '.submitMsg',
    emailBoxRep: '.emailBox',
    phoneNumberBoxRep: '.phoneNumberBox',
    textAreaBoxRep: '.textAreaBox',

  };

  var clearFields = function(){
        var fields, fieldsArr;

        fields = document.querySelectorAll(IPDOMstrings.emailBoxRep + ', ' + IPDOMstrings.phoneNumberBoxRep + ', ' + IPDOMstrings.textAreaBoxRep);

        fieldsArr = Array.prototype.slice.call(fields)

        fieldsArr.forEach(function(current, index, array){
          current.value = "";
        });
      } clearFields();

  var resettingPage = function(){
    document.querySelector('.activeOnClicking').style.display = 'none';
    document.querySelector('.submitMsg').style.display = 'none';
  };

  var actionOnClicking = function(){
        //Showing MenuBar after click
        document.querySelector(IPDOMstrings.menuIconRep).addEventListener('click', function(){
          document.querySelector(IPDOMstrings.activeOnClickingRep).style.display = 'block';
        });

        //Removing Menu Bar after clicking anywhere else
        document.querySelector(IPDOMstrings.removeMenuBarRep).addEventListener('click', function(){
          document.querySelector(IPDOMstrings.activeOnClickingRep).style.display = 'none';
        });

        document.querySelector(IPDOMstrings.topBtnRep).addEventListener('click', function(){
          document.querySelector(IPDOMstrings.activeOnClickingRep).style.display = 'none';
        });

        //Toggling The DPs after a click
        document.querySelector(IPDOMstrings.ceoDPRep).addEventListener('click', function(){
          document.querySelector(IPDOMstrings.ceoDPClickedRep).style.display = 'block';
        });

        document.querySelector(IPDOMstrings.ceo2DPRep).addEventListener('click', function(){
          document.querySelector(IPDOMstrings.ceo2DPClickedRep).style.display = 'block';
        });

        document.querySelector(IPDOMstrings.submitBtnRep).addEventListener('click', function(){
          document.querySelector(IPDOMstrings.submitMsgRep).style.display = 'block';
          clearFields();
        });

        // document.querySelector(IPDOMstrings.submitMsgRep).addEventListener('click', function(){
        //   if(clearFields.returnFields() !== ""){
        //     document.querySelector(IPDOMstrings.submitMsgRep).style.display = 'none';
        //     clearFields();
        //   }
        // });
    };


//Sharing UI components with othwer modules
  return {
    //Sharing HTML class objects
    passHtmlStrings: function(){
      return IPDOMstrings;
    },

    //What happens on clicking;
    passActionOnClicking: function(){
      return actionOnClicking();
    },

    passClearFields: function(){
      return clearFields();
    },

    passResettingPage: function(){
      return resettingPage();
    },

  };
})();


var MasterControl = (function(){

//Some code


return {
  init: function(){
    console.log("The Website has started running");
    UIManipulator.passClearFields();
    UIManipulator.passResettingPage();
  },

};
})();










// var crtlAddItem = function(){
//   var newItem, input;
//   //1. Get the field input Data
//   input = uIController.getInputs();
//   //2. Add the item to the budget Controller
//
//   if(input.description !== "" && !isNaN(input.value) && input.value > 0){
//     newItem = budgetCtrl.addItem(input.type, input.description, input.value);
//     //3. Add the item to the UI
//     uICtrl.addListItem(newItem, input.type);
//     //4 Clear the fields
//     uICtrl.clearFields();
//     //5. Calculate and update the budget
//     updateBudget();
//     //6. Calculate and Update the percentages on the UI.
//     updatePercentages();
//   }
// };












//Start program::
MasterControl.init();
