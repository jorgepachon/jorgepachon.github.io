var xmlhttp = new XMLHttpRequest();
var url = "Json/jorge.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var documentJson = JSON.parse(this.responseText);
        var myArr = documentJson.Actividades;
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
	
	var ul = document.getElementById("navigationMenu");
	 for(i = 0; i < arr.length; i++) {
		
		var li = document.createElement("li");
        var a = document.createElement("a");
        var span = document.createElement("span");
         
        var p = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        var p5 = document.createElement("p");
        var p6 = document.createElement("p");
        var p7 = document.createElement("p");
        
         
		var textoP = document.createTextNode(arr[i].titulo);
        var textoP2 = document.createTextNode(arr[i].FechaRealizacion);
        var textoP3 = document.createTextNode(arr[i].MiembrosGrupo);
        var textoP4 = document.createTextNode(arr[i].AsignaturasRelacionadas);
        var textoP5 = document.createTextNode(arr[i].Disponible);
        var textoP6 = document.createTextNode(arr[i].Responsive);
        var textoP7 = document.createTextNode(arr[i].visualizacionRecomendada);
         
         if(i == 0){
            a.setAttribute("class", "home");
         }
         else if(i == 1){
             a.setAttribute("class", "about");
         }
         else if(i == 2){
            a.setAttribute("class", "services");
         }
         else if(i == 3){
             a.setAttribute("class", "portfolio");
         }
         else if(i == 4){
             a.setAttribute("class", "contact");
         }
        else{
            a.setAttribute("class", "services");
        }
        
        a.setAttribute("href", arr[i].link);
		
		ul.appendChild(li);
        li.appendChild(a);
        a.appendChild(span);
         
         span.appendChild(p);
         span.appendChild(p2);
         span.appendChild(p3);
         span.appendChild(p4);
         span.appendChild(p5);
         span.appendChild(p6);
         span.appendChild(p7);
         
         
        p.appendChild(textoP);
        p2.appendChild(textoP2);
        p3.appendChild(textoP3);
        p4.appendChild(textoP4);
        p5.appendChild(textoP5);
        p6.appendChild(textoP6);
        p7.appendChild(textoP7);
    }
			
 
 
 
          
 
        }




























