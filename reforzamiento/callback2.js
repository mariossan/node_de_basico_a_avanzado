
let empleados = [
    {
        id: 1,
        nombre: "Mario"
    },
    {
        id: 2,
        nombre: "Mario 2"
    },
    {
        id: 3,
        nombre: "Mario 3"
    }
]

let salarios = [
    {
        id: 1,
        empleado_id: 1,
        salario: 1000
    },
    {
        id: 2,
        empleado_id: 2,
        salario: 2000
    }
]

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find( empleado => empleado.id === id)
    

    if ( !empleadoDB ) {
        callback(`No Existe el empleado con id ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
}


let getSalario = (empleado, callback) => {
    
    let salarioDB = salarios.find( salario => salario.empleado_id === empleado.id )

    if ( !salarioDB ) {
        callback(`No se encontró un salario para el usuario ${ empleado.nombre }`)

    } else {
        callback(null, { id: empleado.id, nombre: empleado.nombre, salario: salarioDB.salario } )
    }
}


getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err)
    }

    getSalario(empleado, (err, empleadoFinal) => {

        if ( err ) {
            return console.log("Empleado encontrado pero no hay asignación de salario")
        }
        console.log(empleadoFinal)
    })
    // console.log(empleado)
})