let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: "Mariossan",
        id
    }

    if (  id == 20 ) {
        callback(`El suuario con id ${id} no existe en la base de datos`)
    } else {
        callback( usuario )
    }
} 


getUsuarioById(20, (usuario) => {
    console.log("Usuario de base de datos", usuario)
})