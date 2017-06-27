
'use strict';
var Alexa = require("alexa-sdk");
var speechOutput = 'Hello world!';
var repromptSpeech = 'Hello again!';





var handlers = {

  'LaunchRequest': function () {

this.emit(':tell', 'Hello World!');
//this.emit('HelloWorldIntent');
  },

  'HelloWorldIntent': function () {

      self.emit('SayHello',"res");

  },

  'SayHello': function (speechOutput) {
    this.emit(':tellWithCard',speechOutput , 'Hello',"Hello");
  }





 };
exports.handler = function(event, context, callback) {
     var alexa = Alexa.handler(event, context);
     alexa.registerHandlers(handlers);
     alexa.execute();
 };
