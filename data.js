var global_mail;
var user_uid;
firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }
    else
    {
    const email = user.email;
    global_mail = email;
    console.log("Done");
    console.log(" Hi = "+global_mail);
    console.log(" Mail ID = "+global_mail);
    document.getElementById("firebase-email").innerHTML = user.email;
    document.getElementById("firebase-uid").innerHTML = user.uid;
    }
})
var db = firebase.firestore();
function showmail(){
    console.log("Hey Baby "+global_mail);
    var docRef = db.collection("Users").doc(global_mail);
    docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        console.log("No such document!");
    }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    }

