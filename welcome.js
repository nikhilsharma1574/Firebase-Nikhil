document.getElementById("loginform1").addEventListener("submit",(event)=>{
    event.preventDefault()
})
var global;
    firebase.auth().onAuthStateChanged((user)=>{
        if(!user){
            location.replace("index.html")
        }
        else{
            document.getElementById("user").innerHTML = "Hello , "+user.email
        }
        const email = user.email;
        global = email; 
        console.log(email); 
        var uid =user.uid;
        console.log(uid);
    })
function logout(){
     firebase.auth().signOut()
 }
var db = firebase.firestore();
function senddata(){    
      const Name =  document.getElementById("Name").value;
      const age =  document.getElementById("Age").value;
      const roll =  document.getElementById("roll").value;
             db.collection("Users").doc(global).set({
                  name: Name,
                  Age : age,
                  roll : roll
             })
             .then(() => {
                  console.log("Document successfully written! at "+global);
                  document.getElementById("send_data").innerHTML = "Data Sent Scussfully"
             }).then(()=>{
                setTimeout(() => {  document.getElementById("send_data").innerHTML = "" }, 3000);
             })
             .then(()=>{
                setTimeout(() => {  location.replace("data.html") }, 1000);
             })
             .catch((error) => {
                  console.error("Error writing document: ", error);
             });      
}
function deletee(){
    const Name =  document.getElementById("Name").value;
    db.collection("Users").doc(Name).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}
function update(){
    var Name = document.getElementById("Name").value;
    var age = document.getElementById("Age").value;
    var roll = document.getElementById("roll").value;
    var uid = user.uid;
//     db.collection("Users").doc(Name).set({
//         name: Name,
//         Age : age,
//         roll : roll
//    })
//    .then(() => {
//         console.log("Document successfully written!");
//    })
//    .catch((error) => {
//         console.error("Error writing document: ", error);
//    });
console.log(uid);
}

