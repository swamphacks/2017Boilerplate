var selectedFile;
var config = {
    apiKey: "AIzaSyCKrjgs7TMiPDl-nqaqnBTAhigNrNszQPk",
    authDomain: "swamphacks-a6338.firebaseapp.com",
    databaseURL: "https://swamphacks-a6338.firebaseio.com",
    storageBucket: "swamphacks-a6338.appspot.com",
    messagingSenderId: "949283718048"
};
firebase.initializeApp(config);

//watch for the uploaded files
$('#resume').on("change", function (event) {
   selectedFile = event.target.files[0];
});

$('#submit-info').click(e => {
    var fileName = selectedFile.name;
    console.log(fileName);
    var storageRef = firebase.storage().ref('/resumes/' + fileName);
    var uploadTask = storageRef.put(selectedFile);
    //TODO: add a progress bar

    //put the email and password in the database
    e.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();
    firebase.database().ref('users').push({
        email,
        password
    }).then(() => {
        window.location.replace("index.html");
    });
});