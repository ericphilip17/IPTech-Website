//
// var deadline = new Date();
// // console.log(deadline.getFullYear());
// // console.log(deadline.getMonth());
// // console.log(deadline.getDate());
// // console.log(deadline.getDay());
// // console.log(deadline.getHours());
// // console.log(deadline.getUTCHours());
// // console.log(deadline.toString());
// // console.log(deadline.toUTCString());
// console.log(deadline.toLocaleDateString());
// console.log(deadline.toLocaleTimeString());
// // console.log(deadline.toISOString());


    var IPDOMstrings = {
      menuIconRep: '.activeMenuIcon',
      activeOnClickingRep:'.menubar',
      removeMenuBarRep: '.removeMenuBar',
      topBtnRep: '.menubar',
      ceoDPRep: '.ceoDP',
      ceoDPClickedRep: '.ceoDPClicked',
      ceo2DPRep: '.ceo2DP',
      ceo2DPClickedRep: '.ceo2DPClicked',
      submitBtnRep: '.submitBtn',
      emailBoxRep: '.emailBox',
      phoneNumberBoxRep: '.phoneNumberBox',
      textAreaBoxRep: '.textAreaBox',
      submitMsgRep: '.submitMsg',
      declineMsg: '.notSendMsg',
      dateLabelRep: '.dateLabel',
      topSectionRep: '.topSection',
      topSectionRep: '.topSection',
      activeMenuIconRep: '.activeMenuIcon',
      iplogoRep: '.iplogo',
      dateLabelRep: '.dateLabel',
      placeOrderRep: '.placeOrder'


    };

    var inputFields = {
      inputEmail: document.querySelector(IPDOMstrings.emailBoxRep).value,
      inputPhoneNumber: document.querySelector(IPDOMstrings.phoneNumberBoxRep).value,
      messageInput: document.querySelector(IPDOMstrings.textAreaBoxRep).value
    };

// input.description !== "" && !isNaN(input.value) && input.value > 0

    // var showMessage = function(){
    //   document.querySelector(IPDOMstrings.submitBtnRep).addEventListener('click', function(){
    //     if(!isNaN(inputFields.inputPhoneNumber)){
    //       document.querySelector(IPDOMstrings.submitMsgRep).style.display = 'block';
    //       // document.querySelector(IPDOMstrings.declineMsg).style.display = 'none';
    //       // clearFields();
    //
    //     }else {
    //       document.querySelector(IPDOMstrings.declineMsg).style.display = 'block';
    //       // document.querySelector(IPDOMstrings.submitMsgRep).style.display = 'none';
    //       // clearFields();
    //     }
    //
    //   });
    // };
    // showMessage();



    var displayDate = function(){
      let monthArray, curYear, today, month, dayDate, time;

      monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

      today = new Date();
      month = today.getMonth();
      month = monthArray[month];
      dayDate = today.getDate();
      curYear = today.getFullYear();

      time = today.toLocaleTimeString();

      // console.log(`Today ${dayDate}/${month}/${curYear}`);
      document.querySelector(IPDOMstrings.dateLabelRep).textContent = `Today: ${dayDate} ${month} ${curYear} at ${time}`;
    };
    displayDate();

var actionOnClicking = function(){
      //Showing MenuBar after click
      document.querySelector(IPDOMstrings.menuIconRep).addEventListener('click', function(){
        document.querySelector(IPDOMstrings.activeOnClickingRep).style.display = 'block';
      });

      //Removing Menu Bar after clicking anywhere else
      document.querySelector(IPDOMstrings.removeMenuBarRep).addEventListener('click', function(){
        document.querySelector(IPDOMstrings.activeOnClickingRep).style.display = 'none';
      });
      // document.querySelector(IPDOMstrings.topBtnRep).addEventListener('click', function(){
      //   document.querySelector(IPDOMstrings.activeOnClickingRep).style.display = 'none';
      // });
      document.querySelector(IPDOMstrings.iplogoRep).addEventListener('click', function(){
        document.querySelector(IPDOMstrings.activeOnClickingRep).style.display = 'none';
      });
      document.querySelector(IPDOMstrings.dateLabelRep).addEventListener('click', function(){
        document.querySelector(IPDOMstrings.activeOnClickingRep).style.display = 'none';
      });
      document.querySelector(IPDOMstrings.placeOrderRep).addEventListener('click', function(){
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
        if(inputFields.messageInput === "" && inputFields.inputEmail === ""){
          document.querySelector(IPDOMstrings.declineMsg).style.display = 'block';
          clearFields();
        }else {
          document.querySelector(IPDOMstrings.submitMsgRep).style.display = 'block';
        }
      });

      document.querySelector(IPDOMstrings.submitMsgRep).addEventListener('click', function(){
      resettingPage();
      });
      document.querySelector(IPDOMstrings.declineMsg).addEventListener('click', function(){
      resettingPage();
      });
};
 actionOnClicking();

var clearFields = function(){
      var fields, fieldsArr;

      fields = document.querySelectorAll(IPDOMstrings.emailBoxRep + ', ' + IPDOMstrings.phoneNumberBoxRep + ', ' + IPDOMstrings.textAreaBoxRep);

      fieldsArr = Array.prototype.slice.call(fields)

      fieldsArr.forEach(function(current, index, array){
        current.value = "";
      });
    };
    clearFields();



    var resettingPage = function(){
      document.querySelector(IPDOMstrings.activeOnClickingRep).style.display = 'none';
      document.querySelector(IPDOMstrings.submitMsgRep).style.display = 'none';
      document.querySelector(IPDOMstrings.declineMsg).style.display = 'none';
      clearFields();
      displayDate();
    };
    resettingPage();
