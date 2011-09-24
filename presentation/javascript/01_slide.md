!SLIDE
# Einführung in Javascript #

!SLIDE
* Einfach eine weitere Programmiersprache
* Klein, hässlich und macht Spaß

!SLIDE execute
# Variablen Deklaration
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
# Objekte
    @@@ javascript
    var person = {
        name: "foo",
        age: 42
    }

    console.log(person.name);
    person.age = 23 //Alter der Person ändern
    console.log(person.age); //neues Alter ausgeben

!SLIDE execute
# Bedingte Anweisungen
    @@@ javascript
    var gelogen = true;
    if (gelogen) {
        console.log("Du hast gelogen.")
    } else {
        console.log("Du hast nicht gelogen.")
    }

!SLIDE execute
# Funktionen
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
    console.log(41 + 1)
    console.log(42/2 + 2)
    console.log(23 * 42)

!SLIDE execute
# Schleifen (for)
    @@@ javascript
    for(var i=1;i<=13;i++) {
        console.log("Hello World")
    }

!SLIDE execute
# Schleifen (while)

    @@@ javascript
    var i = 0;
    while(i <= 13) {
        console.log("Hello World");
        i++;
    }
