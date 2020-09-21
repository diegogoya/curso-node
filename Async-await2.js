let empleados = [{
    id: 1,
    nombre: 'Diego'
}, {
    id: 2,
    nombre: 'Natalia'
}, {
    id: 3,
    nombre: 'Luna'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`)
    } else {
        return empleadoDB;
    }
}

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Eror(`No se encontro el salario del empleado ${empleado.nombre}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }

}


let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tienen un salario de ${ resp.salario}$`;

}

getInformacion(3)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));