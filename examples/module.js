//modul einbinden
var fs = require('fs');

//readFile Funktion auf der aktuellen Datei ausführen
fs.readFile(__filename, function(error, data){
    if (error) {
        //falls ein Fehler entstanden ist -> ausgeben
        console.log(error);
    } else {
        //Quelcode auf der Konsole ausgeben
        console.log(data.toString());
    }
});
