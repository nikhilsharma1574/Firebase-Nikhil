var global;  
    firebase.auth().onAuthStateChanged((user)=>{
        if(!user){
            location.replace("index.html")
        }
global = firebase.auth().currentUser.uid;
console.log(global);  
return global    
    })

function next(){

    firebase.auth().onAuthStateChanged((user)=>{
    var id;  
    id = firebase.auth().currentUser.uid;
    console.log(id);  
 
      const name = document.getElementById("name").value
      const age = document.getElementById("age").value
      const contact = document.getElementById("contact").value
      const email = document.getElementById("email").value
      const branch = document.getElementById("branch").value
     console.log(name)
     console.log(age)
     console.log(contact)
     console.log(email)
     console.log(branch)
     console.log(id)
      var db = firebase.firestore()
      db.collection("Users").doc(id).set({
          Name :name,   
          Age :age,
          Contact :contact,
          Email :email,
          Branch :branch,
      }).then(()=>{
          console.log("Data sent")
      }).then(()=>{
             location.replace("./welcome1.html")
         }) 
    })
}


  function uid(){
      console.log("view")
     //  console.log(firebase.auth().currentUser.uid)
      var db = firebase.firestore()
      var docRef = db.collection("Users").doc(id);
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