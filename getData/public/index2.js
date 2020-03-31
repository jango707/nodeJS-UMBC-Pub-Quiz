var database = firebase.database();
var ref = database.ref("Answers");

ref.on('value', gotData, errData);

function gotData(data){
    document.getElementById('table').innerHTML = "<thead><tr><th>Team Name</th><th>Team Answer</th></tr></thead><tbody></tbody>";
//clear();

    //console.log(data.val());
    var answers = data.val();
    var keys = Object.keys(answers);
    
    
    //console.log(keys[0]);
    for(var i = 0; i < keys.length; i++){
        //console.log(answers[keys[i]]);  
        var myHtmlContent = "<td>"+ keys[i] +"</td><td>" +  answers[keys[i]].Answer+ "</td>";
        var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];
    
        var newRow = tableRef.insertRow(tableRef.rows.length);
        newRow.innerHTML = myHtmlContent;
       
    }

  
}

function errData(err){
    
    console.log("Error!");
    console.log(err);
}

