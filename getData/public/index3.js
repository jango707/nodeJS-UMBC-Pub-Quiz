function clearTable(){
    console.log("clear");
    
    database.ref("Answers").remove();

}