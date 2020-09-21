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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);
        }

    });

}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontro el salario del empleado ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }

    });

}



getEmpleado(5).then(empleado => {

        return getSalario(empleado);

    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${ resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    })