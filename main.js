function dog() {
    let race = prompt("Selecciona entre Labrador, Cocker, Pitbull y Ovejero:");
    if (race === null) {
        alert("Usted no ha seleccionado ninguna opción")
        let option = confirm("Si desea volver a seleccionar presione OK o cancelar para salir!")
        if (option == true) {
            dog()
        } else {
            alert("Esperamos vuelva pronto");
        }
    } else {
        switch (race.toLowerCase()) {
            case "labrador":
                let checkLabrador = confirm("Usted ha seleccionado Labrador, si es correcto presione Ok.");
                if (checkLabrador == true) {
                    alert("Gracias por confirmar");
                } else {
                    alert("Vuelva a seleccionar la raza");
                    dog()
                }
                break;
            case "cocker":
                let checkCocker = confirm("Usted ha seleccionado Cocker, si es correcto presione Ok.");
                if (checkCocker == true) {
                    alert("Gracias por confirmar");
                } else {
                    alert("Vuelva a seleccionar la raza");
                    dog()
                }
                break;
            case "pitbull":
                let checkPitbull = confirm("Usted ha seleccionado Pitbull, si es correcto presione Ok.");
                if (checkPitbull == true) {
                    alert("Gracias por confirmar");
                } else {
                    alert("Vuelva a seleccionar la raza");
                    dog()
                }
                break;
            case "ovejero":
                let checkOvejero = confirm("Usted ha seleccionado Ovejero, si es correcto presione Ok.");
                if (checkOvejero == true) {
                    alert("Gracias por confirmar");
                } else {
                    alert("Vuelva a seleccionar la raza");
                    dog()
                }
                break;
            default:
                alert("Nombre ingresado incorrecto o vacio!");
                dog()
        }
    }
}

function cat() {
    let race = prompt("Selecciona entre Persa, Esfinge, Cartujo y Himalayo:");
    if (race === null) {
        alert("Usted no ha seleccionado ninguna opción")
        let option = confirm("Si desea volver a seleccionar presione OK o cancelar para salir!")
        if (option == true) {
            cat()
        } else {
            alert("Esperamos vuelva pronto");
        }
    } else {
        switch (race.toLowerCase()) {
            case "persa":
                let checkPersa = confirm("Usted ha seleccionado Persa, si es correcto presione Ok.");
                if (checkPersa == true) {
                    alert("Gracias por confirmar");
                } else {
                    alert("Vuelva a seleccionar la raza");
                    cat()
                }
                break;
            case "esfinge":
                let checkEsfinge = confirm("Usted ha seleccionado Esfinge, si es correcto presione Ok.");
                if (checkEsfinge == true) {
                    alert("Gracias por confirmar");
                } else {
                    alert("Vuelva a seleccionar la raza");
                    cat()
                }
                break;
            case "cartujo":
                let checkCartujo = confirm("Usted ha seleccionado Cartujo, si es correcto presione Ok.");
                if (checkCartujo == true) {
                    alert("Gracias por confirmar");
                } else {
                    alert("Vuelva a seleccionar la raza");
                    cat()
                }
                break;
            case "himalayo":
                let checkHimalayo = confirm("Usted ha seleccionado Himalayo, si es correcto presione Ok.");
                if (checkHimalayo == true) {
                    alert("Gracias por confirmar");
                } else {
                    alert("Vuelva a seleccionar la raza");
                    cat()
                }
                break;
            default:
                alert("Nombre ingresado incorrecto o vacio!");
                cat()
        }
    }
}

function adopt() {
    let animal = prompt("Por favor selecciona Perro o Gato, dependiendo el animal que quieras adoptar:")
    if (animal === null) {
        alert("Usted no ha seleccionado ninguna opción")
        let option = confirm("Si desea volver a seleccionar presione OK o cancelar para salir!")
        if (option == true) {
            adopt()
        } else {
            alert("Esperamos vuelva pronto");
        }
    } else if (animal.toLowerCase() == "perro") {
        dog()
    } else if (animal.toLowerCase() == "gato") {
        cat()
    } else {
        alert("Seleccione el animal correcto")
        adopt()
    }
}

function requiredMoney() {
    let ganancias = 35;
    let impuestos = 17;
    let costoMascota = 40000;
    alert("Bienvenido a nuestro refugio! Vamos a calcular si posee la economía para adoptar a un animal");
    let sueldo = Number(prompt("Ingrese su sueldo bruto mensual"));
    if (sueldo === null || sueldo == 0) {
        alert("Esperamos vuelva pronto");
    } else {
        let sueldoGanancias = (sueldo * ganancias) / 100;
        let sueldoImpuestos = ((sueldo - sueldoGanancias) * impuestos) / 100;
        let deduccionesG = (sueldoGanancias + sueldoImpuestos);
        let sueldoNetoG = (sueldo - deduccionesG);
        let sueldoNetoSG = sueldo - (sueldo * impuestos) / 100
        if (sueldo >= 330000) {
            alert("Su sueldo neto es: " + sueldoNetoG);
        } else {
            alert("Su sueldo neto es: " + sueldoNetoSG);
        }
        let gastosFijos = Number(prompt("Ingrese sus gastos fijos mensuales:"));
        if (gastosFijos === null || gastosFijos == 0) {
            alert("Por favor coloque un valor válido!");
            requiredMoney();
        } else {
            let dineroLimpio = (sueldoNetoG - gastosFijos)
            alert("Para poder adoptar deberá contar con más de 40000 pesos!");
            if (dineroLimpio >= costoMascota) {
                alert("Usted tiene la economía para adoptar una mascota!");
                adopt()
            } else {
                alert("Usted es muy pobre para adoptar! Consiga un mejor trabajo y vuelva a contactarnos =)")
            }
        }
    }
}

requiredMoney()




