// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona


const tarjeta = document.querySelector('.tarjeta');
//btnAPI.addEventListener('click', function(){

    const btnAPI = document.querySelector('#random');
    btnAPI.addEventListener('click', function(){



fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos la respuesta
        console.log(data)
        renderizarDatosUsuario(data)
    });
    
    })
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    


    function renderizarDatosUsuario(datos) {
        datos.results.forEach(element => {
         
            let usuario = `
            <div>
                <img src="${element.picture.medium}" alt="foto">
                <h1>${element.name.first} ${element.name.last}</h1>
                <p>${element.email}</p>
            </div>
            `
    
            tarjeta.innerHTML = usuario;
        });
        
       
    }
    



/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.


