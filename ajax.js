
document.querySelector('#btn').addEventListener('click', traerDatos);
document.querySelector('#btnNew').addEventListener('click', traerNew);
document.querySelector('#btnDone').addEventListener('click', traerDone);
document.querySelector('#btnBuscar').addEventListener('click', buscarNombre);

function traerDatos(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'todo.json', true);

    xhttp.send();

    xhttp.onreadystatechange =function(){

        if(this.readyState ==4 && this.status == 200){
            
            let datos = JSON.parse(this.responseText);
            let request = document.querySelector('#info');
            info.innerHTML= "";


            for(let item of datos){

                if(item.status =='NEW'){
                info.innerHTML +=`
                
                <div class="card">
                <hr>
                <div class="row">
                    <p class="m sL">De: ${item.from}</p> <p class="sL">Enviado: ${item.date}</p>
                </div>
                <div class="row">
                    <div> <p class="status">${item.status}</p> </div><strong><p>${item.subject}</p></strong>
                </div> <i class="fa fa-angle-right mar" aria-hidden="true"></i>
                    <p class="last">${item.body}</p>
                        
                </div>`}
                else{
                info.innerHTML +=`
                
                <div class="card">
                <hr>
                
                <div class="row">
                    <div> <p class="statusS">${item.status}</p> </div><strong><p>${item.subject}</p></strong>
                </div> <i class="fa fa-angle-right ma" aria-hidden="true"></i>
                    <p class="last">${item.body}</p>
                        
                </div>`

                }
            }

        }
    }
}


function traerNew(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'todo.json', true);

    xhttp.send();

    xhttp.onreadystatechange =function(){

        if(this.readyState ==4 && this.status == 200){
            
            let datos = JSON.parse(this.responseText);
            let request = document.querySelector('#info');
            info.innerHTML= "";


            for(let item of datos){

                if(item.status =='NEW'){
                info.innerHTML +=`
                
                <div class="card">
                <hr>
                <div class="row">
                    <p class="m sL">De: ${item.from}</p> <p class="sL">Enviado: ${item.date}</p>
                </div>
                <div class="row">
                    <div> <p class="status">${item.status}</p> </div><strong><p>${item.subject}</p></strong>
                </div> <i class="fa fa-angle-right mar" aria-hidden="true"></i>
                    <p class="last">${item.body}</p>
                        
                </div>`}


            }
        } 
    }
}

function traerDone(){
    let count = 0;

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'todo.json', true);

    xhttp.send();

    xhttp.onreadystatechange =function(){

        if(this.readyState ==4 && this.status == 200){
            
            let datos = JSON.parse(this.responseText);
            //let request = document.querySelector('#info');
            info.innerHTML= "";


            for(let item of datos){

                if(item.status =='SOLVED'){
                count ++;
                console.log(datos.length);   
                info.innerHTML +=`
                
               
                <div class="card">
                <hr>
                
                <div class="row">
                    <div> <p class="statusS">${item.status}</p> </div><strong><p>${item.subject}</p></strong>
                </div> <i class="fa fa-angle-right ma" aria-hidden="true"></i>
                    <p class="last">${item.body}</p>
                        
                </div>`}
                
            }

        }
    }
                
}



  function buscarNombre(){
    let count = 0;

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'todo.json', true);

    xhttp.send();

    xhttp.onreadystatechange =function(){

        if(this.readyState ==4 && this.status == 200){
            
            let palabraClave = $("#txtNombreBuscar").val();
            let datos = JSON.parse(this.responseText);
            //let request = document.querySelector('#info');
            info.innerHTML= "";


            for(let item of datos){
              // $("#info").empty();
                if(item.from == palabraClave){
                                      
                    if(item.status =='NEW'){
                        info.innerHTML +=`
                        
                        <div class="card">
                        <hr>
                        <div class="row">
                            <p class="m sL">De: ${item.from}</p> <p class="sL">Enviado: ${item.date}</p>
                        </div>
                        <div class="row">
                            <div> <p class="status">${item.status}</p> </div><strong><p>${item.subject}</p></strong>
                        </div> <i class="fa fa-angle-right mar" aria-hidden="true"></i>
                            <p class="last">${item.body}</p>
                                
                        </div>`}
                        else{
                        info.innerHTML +=`
                        
                        <div class="card">
                        <hr>
                        <div class="row">
                        <p class="m sL">De: ${item.from}</p> <p class="sL">Enviado: ${item.date}</p>
                        </div>
                        <div class="row">
                            <div> <p class="statusS">${item.status}</p> </div><strong><p>${item.subject}</p></strong>
                        </div> <i class="fa fa-angle-right mar" aria-hidden="true"></i>
                            <p class="last">${item.body}</p>
                                
                        </div>`
        
                        }
                    }
                    
                }     

                if(info.innerHTML ==``){
                    info.innerHTML +=`
                        
                        <div class="card">
                        <hr>
                        <div class="row cen">
                       <h2>No se encontro !!!</h2>
                        </div>
                        <div class="row cen">
                            <button id="btnAdd">Agregar queja</button>
                                
                        </div>`
                }
        }
    }
                
}
