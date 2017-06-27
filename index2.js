'use strict';
var Alexa = require("alexa-sdk");
var axios = require('axios');
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
var days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
    'today',
    'yesterday',
    'this week',
    'last week',
    'this month'
  ]
var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
    'HelloWorldIntent': function () {
        this.emit('SayHello');
    },
    SayHello :function () {
        this.emit(':tell', 'Hello World!');
    },
    travelintent :function () {
      var self = this;
      var tt = this.event.request.intent.slots.slotDay.value;
      if (tt === undefined){
              this.emit(':ask', typeof(tt),typeof(tt));
      }else{
        if (days.includes(tt.toLowerCase())){
//self.emit(':tell', "Transfer was successful. Goodbye!");


          foo2(tt)
          .then(function(res){
                  if(res.status == 200) {
                    //var str = '';
                    // JSON.parse(res.date, function(key, value) {
                    //
                    //   var str = value;
                    //   return value;
                    // });

                  //  alert( event.date.getDate() ); // теперь сработает!
                  //var arr = JSON.parse(res.data, function(key, value) {return value;});
                  // console.log(arr[0]);
                    self.emit(':tell', "123");


                  }
                  else
                  {
                    self.emit(':tell', "Transfer was unsuccessful");

                  }
                })
                .catch(function(e) {
            // Функция не перевыбросила исключение 'e'
            // в результате произойдёт resolve(undefined)
            // для Promise, возвращённого функцией catch

          });



    }else{

      this.emit(':ask', 123,123);
    }

      }

// if (guessNum === undefined){
//         this.emit(':ask', typeof(guessNum),typeof(guessNum));
// }else{
// this.emit(':ask', guessNum,guessNum);
//
// }

    }
};

var foo =function (myname,amount) {
return axios.post('https://sbertech.herokuapp.com/transfers', { nick: myname ,transfer_amount: amount } )
            .then( function (response){return response.status;} );
};


 function foo2(name) {
return axios.get('https://thawing-mesa-47033.herokuapp.com/days/monday')//+name.toLowerCase())
            .then( function (response){
              if(response.data===null) {return 400;}
              else {
                return response
              }} )
              .catch(function(e){
                return 404;
              });
};
