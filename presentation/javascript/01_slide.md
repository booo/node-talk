!SLIDE
# Einführung in Javascript #

!SLIDE
* Einfach eine weitere Programmiersprache
* Klein, hässlich und macht Spaß

!SLIDE execute
# [Variablen Deklaration](http://en.wikipedia.org/wiki/Declaration_\(computer_programming\))
    @@@ javascript
    var i;
    var name;

!SLIDE execute
# Zuweisung
    @@@ javascript
    var i = 0;
    var name = "node.js"
    var gelogen = true;
    gelogen = false;
    i = i + 1; //i++

!SLIDE execute
# [Objekte](http://en.wikipedia.org/wiki/Component_Object_Model)
    @@@ javascript
    var person = {
        name: "foo",
        age: 42
    }

    console.log(person.name);
    person.age = 23 //Alter der Person ändern
    console.log(person.age); //neues Alter ausgeben

!SLIDE execute
# [Bedingte Anweisungen](http://en.wikipedia.org/wiki/Conditional_\(programming\))
    @@@ javascript
    var sunny = true;
    if (sunny) {
        console.log("Die Sonnescheint. Raus aus dem Keller!")
    } else {
        console.log("Rein ins Solarium.")
    }

!SLIDE execute
# [Funktionen](http://en.wikipedia.org/wiki/Subroutine)
    @@@ javascript
    var add = function add(a,b) {
        return a + b;
    }
    console.log(add(1,1));

!SLIDE execute
# Ausgabe
    @@@ javascript
    console.log("Hello World!");

!SLIDE execute
# Rechnen
    @@@ javascript
    console.log(41 + 1);
    console.log(42/2 + 2);
    console.log(23 \* 42);

!SLIDE execute
# [Schleifen (for)](http://en.wikipedia.org/wiki/Loop_\(computing\)#Loops)
    @@@ javascript
    for(var i=1;i<=13;i++) {
        console.log("Hello World");
    }

!SLIDE execute
# [Schleifen (while)](http://en.wikipedia.org/wiki/Loop_\(computing\)#Loops)

    @@@ javascript
    var i = 0;
    while(i <= 13) {
        console.log("Hello World");
        i++;
    }

!SLIDE execute
# [Datentypen](http://en.wikipedia.org/wiki/Data_type)
    @@@ javascript
    var name = "aName"; //String
    var i = 1; //Number
    var list = [1,2,3]; //Array (Liste)

!SLIDE execute
# Datentypen (Array)
    @@@ javascript
    var list = [1,2,3] //Array (Liste)
    console.log(list[0]);
    list[0] = 23;
    list.push(42); //hängt 42 ans Array an
    //Zwei Listen verknüpfen
    list2 = list.concat([4,5,6]);
    [1,"string",[],{}] //gültige Liste

!SLIDE
# [Module (require)](http://nodejs.org/docs/v0.5.7/api/modules.html)
    @@@ javascript
    //das readline Modul einbinden
    var rl = require("readline");
    //Funktion aus dem Modul benutzen
    rl.question("Wie heißt du?", function(name){
        console.log("Du heißt: " + name);
    });

!SLIDE
# Module (erstellen)
    @@@ javascript
    module.exports = exports = {
        version: "0.1",
        name: "myModule",
        add: function(a,b) {
            return a+b;
        }
    }

!SLIDE
# [Callbacks](http://en.wikipedia.org/wiki/Callback_\(computer_programming\))
    @@@ javascript

    var fn = function fn(callback) {
        //do something funny
        /call the callback
        callback("great fun");
    }

    //call the function which accepts a callback
    fn(function(result){
        console.log(result);
    })
