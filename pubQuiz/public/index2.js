function writeData(){
    //var today = new Date();
    //var timestamp = "--" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    if(document.getElementById("nameField").value != ""){
        firebase.database().ref("Answers/"+document.getElementById("nameField").value).update({
            
            Answer: document.getElementById("answerField").value
            
        });
        document.getElementById("error").style.display = "none";
    }else{
        document.getElementById("error").style.display = "block";   
    }

    document.getElementById("answerField").value = "";
    document.getElementById("nameField").value = "";
    
}