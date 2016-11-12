var todoList = [];
var hist = 0;
var lskey = 'LIST';

if (localStorage.getItem("count") == "NaN" || localStorage.getItem("count") == null) {
  localStorage.setItem("count","100");
}

if(localStorage.getItem("count") == 0){
    localStorage.setItem("count", "100");
}

function Task( text, id)
{
   this.text=text;
   this.id= id;
}


function addToList(){
    
    var input = document.getElementById('addtask').value;


    if(input.length > 0){
        console.log(localStorage.getItem("count"));
        var bn =  parseInt(localStorage.getItem('count')) + 1;
        localStorage.setItem("count",bn);


        var node=document.createElement("p");

        var tempcount = (localStorage.count);
        temp = new Task(input,tempcount);
        localStorage.setItem(localStorage.getItem("count"),JSON.stringify(temp));

        if(localStorage.length == 2) {

          notasks.style.display = 'block';
          col1.style.display = 'none';
          col2.style.display = 'none';
        }

        else{

          notasks.style.display = 'none';
          col1.style.display = 'inline-block';
          col2.style.display = 'inline-block';

        }



        var removeTask = document.createElement('input');
        removeTask.setAttribute('type', 'button');
        removeTask.setAttribute("value", "X");
        removeTask.setAttribute("name", tempcount);
        removeTask.setAttribute("class", "deletebutt");
        removeTask.addEventListener('click', function(e) {

          
          document.getElementById('col2').innerHTML = "";
          node.parentNode.removeChild(node);
          
          for (var j in localStorage){
              if (j != "count" && j != "count2"){
            

                var t = localStorage.getItem(j);
                var o = JSON.parse(t);
                
                if (o.id == tempcount){

                  localStorage.removeItem(j);
                  var bn2 = parseInt(localStorage.getItem('count')) - 1;
                  
                    for (var x in localStorage){

                      if (x != "count" && x != "count2"){

                        var t2 = localStorage.getItem(x);
                        var o2 = JSON.parse(t2);
                        document.getElementById('col2').innerHTML += o2.text + "<br>";
                      }
                    }
                  break;
                }
              }
          }

            if(localStorage.length == 2) {
              notasks.style.display = 'block';
              col1.style.display = 'none';
              col2.style.display = 'none';
            }

            else{
              notasks.style.display = 'none';
              col1.style.display = 'inline-block';
              col2.style.display = 'inline-block';
            }
            
        }, false);


        node.appendChild(removeTask);
        
        var test = localStorage.getItem(tempcount);
        var testobj = JSON.parse(test);
        document.getElementById('col1').appendChild(node);
        document.getElementById('col2').innerHTML += testobj.text + "<br>";
        document.getElementById("addtask").value = "";
        console.log(localStorage.getItem("count"));
        console.log(localStorage.length);
  }
    
}



localStorage.setItem("count2", "0");
var renum = 0;

if (parseInt(localStorage.getItem("count")) != 0){

  for (var i in localStorage){

    if (i != "count" && i != "count2"){

          var bn =  parseInt(localStorage.getItem('count2')) + 1;
          localStorage.setItem("count2",bn);
          var tempcount = (localStorage.count2);
          var test = localStorage.getItem(i);
          var testobj = JSON.parse(test);
          renum++;
          testobj.id = renum;
          var renum2 = renum;
          localStorage.setItem(i, JSON.stringify(testobj));

          var node = document.getElementById('col1');

          var removeTask = document.createElement('input');
          removeTask.setAttribute('type', 'button');
          removeTask.setAttribute("value", "X");

          removeTask.setAttribute("name", tempcount);
          removeTask.setAttribute("class", "deletebutt");
          removeTask.addEventListener('click', function(e) {
            
            document.getElementById('col2').innerHTML = "";

          
            node.removeChild(this);
          
            for (var j in localStorage){

              if (j != "count" && j != "count2"){
            
           
                var t = localStorage.getItem(j);
                var o = JSON.parse(t);
                
                if (o.id == this.getAttribute("name")){

                  localStorage.removeItem(j);
                  
                    for (var x in localStorage){

                      if (x != "count" && x != "count2"){

                        var t2 = localStorage.getItem(x);
                        var o2 = JSON.parse(t2);
                        document.getElementById('col2').innerHTML += o2.text + "<br>";
                      }
                    }
                }
              }
            }



            if(localStorage.length == 2) {
              notasks.style.display = 'block';
              col1.style.display = 'none';
              col2.style.display = 'none';
            }

            else{
              notasks.style.display = 'none';
              col1.style.display = 'inline-block';
              col2.style.display = 'inline-block';
            }
        }, false);
          
          node.appendChild(removeTask);
          
          document.getElementById('col2').innerHTML += testobj.text + "<br>";
          
        }
      }
}



document.getElementById("history").addEventListener("click", clearAll, false);


function clearAll() {

    document.getElementById('col1').innerHTML = "";
    document.getElementById('col2').innerHTML = "";

    for (var j in localStorage){
        if (j != "count" && j != "count2"){

            localStorage.removeItem(j);

        }
    }
    //console.log("length", localStorage.length);
    if(localStorage.length == 2) {
        notasks.style.display = 'block';
        col1.style.display = 'none';
        col2.style.display = 'none';
      }
      else{
        notasks.style.display = 'none';
        col1.style.display = 'inline-block';
        col2.style.display = 'inline-block';
      }

}





document.getElementById('addtask').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){

      var field = document.getElementById('addtask').value;
      addToList();
      return false;
    }
  }
//console.log(localStorage.length);
if(localStorage.length == 2) {
    notasks.style.display = 'block';
    col1.style.display = 'none';
    col2.style.display = 'none';
}
else{
  notasks.style.display = 'none';
  col1.style.display = 'inline-block';
  col2.style.display = 'inline-block';
}




var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['Jan','Feb','Mar','Apr','May','June','July',
'Aug','Sept','Oct','Nov','Dec'];       
var today = new Date();
today.setTime(today.getTime());       
document.getElementById("spanDate").innerHTML = days[today.getDay()] + ", " + months[today.getMonth()] + " " + today.getDate();

var hour = today.getHours();

if (hour >= 5 && hour < 11){
  document.body.style.backgroundImage = 'url("bg2.jpg")';
}
else if (hour >= 11 && hour < 16){
  document.body.style.backgroundImage = 'url("bg4.jpg")';
}
else if (hour >= 16 && hour < 20){
  document.body.style.backgroundImage = 'url("bg6.jpg")';
}
else {
  document.body.style.backgroundImage = 'url("bg5.jpg")';
}






/*var imgCount = 4;

var dir = '';

var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;

var images = new Array
        images[1] = "bg2.jpg",
        images[2] = "bg4.jpg",
        images[3] = "bg5.jpg",
        images[4] = "bg6.jpg"
    
document.body.style.backgroundImage = "url(" + images[randomCount] + ")";*/