


const guardarContacto = (dataBase, contacto) => {
    dataBase.setItem (contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}

const cargarContactos = (dataBase, parentNode) => {
    let claves = Object.keys(dataBase) 
    
    for(clave of claves){
        let contacto = JSON.parse(dataBase.getItem(clave))
        crearContacto(parentNode, contacto, dataBase)
        
    }
}

const crearContacto = (ParentNode, contacto, dataBase) => {

    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h5')
    let numeroContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('SPAN')

    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = 'X'

    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = () =>{
        dataBase.removeItem(contacto.id)
        window.location.href = '/'
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    ParentNode.appendChild(divContacto)

}