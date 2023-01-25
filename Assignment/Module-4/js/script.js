/*
Solution of assignment 4:

Expected output:

Hello Yaakov
Good Bye Jinne
Good Bye Jay Z
Good Bye Jonny Sim
Hello Ronaldo
Hello Martinez
Hello Rooney
Hello Paul Pogba
*/

(function() {
    var names = ["Yaakov", "Jinne", "Jay Z", "Jonny Sim", "Ronaldo", "Martinez", "Rooney", "Paul Pogba"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
