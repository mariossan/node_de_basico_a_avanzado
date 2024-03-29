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

let getEmpleado = (id) => {

    return new Promise( (resolve, reject) => {
        let empleadoDB = empleados.find( empleado => empleado.id === id)

        if ( !empleadoDB ) {
            reject(`No Existe el empleado con id ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    })
}

let getSalario = (empleado) => {
    return new Promise( (resolve, reject)  => {

        let salarioDB = salarios.find( salario => salario.empleado_id === empleado.id )

        if ( !salarioDB ) {
            reject(`No se encontró un salario para el usuario ${ empleado.nombre }`)

        } else {
            resolve({ id: empleado.id, nombre: empleado.nombre, salario: salarioDB.salario } )
        }
    })
}

getEmpleado(10)
    .then( empleado => {
        return getSalario(empleado)
    })
    .then( resp => {
        console.log(`El salario de "${ resp.nombre }" es de $ ${resp.salario}`);
        
    })
    .catch(err => console.log(err))

