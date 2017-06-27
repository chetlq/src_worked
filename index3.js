'use strict';
var axios = require('axios');

foo2("monday")
.then(function(res){
  var self = this;
        if(res.status == 200) {
          //   "alexa-sdk": "^1.0.7",
          //var str = '';
          // JSON.parse(res.date, function(key, value) {
          //
          //   var str = value;
          //   return value;
          // });

        //  alert( event.date.getDate() ); // теперь сработает!
//         var str = '["2017-06-19T00:00:00.000Z",  "2017-06-20T00:00:00.000Z"]';
//
//         JSON.parse(str, function(k, v) {
//   console.log(k); // пишем имя текущего свойства, последним именем будет ""
//   return v;       // возвращаем неизменённое значение свойства
// });
console.log(res.data.length);
var menu = res.data;
for (var key in menu) {
  // этот код будет вызван для каждого свойства объекта
  // ..и выведет имя свойства и его значение

  console.log( "Ключ: " + key + " значение: " + menu[key] );
}
        //console.log( res.headers.toString());


        }
        else
        {
          console.log("321")

        }
      })
      .catch(function(e) {
  // Функция не перевыбросила исключение 'e'
  // в результате произойдёт resolve(undefined)
  // для Promise, возвращённого функцией catch

});

 function foo2(name) {
return axios.get('https://thawing-mesa-47033.herokuapp.com/days/'+name.toLowerCase())
            .then( function (response){
              if(response.data===null) {return 400;}
              else {
                return response
              }} )
              .catch(function(e){
                return 404;
              });
};
