var recetas = [
    {
        "nombre": "bizcochuelo de chocolate",
        "ingredientes": ["harina", "azucar", "huevo", "chocolate", "agua", "leche", "manteca"],
        "preparacion": "Bato los huevos con el azucar, luego le agrego el aceite, seguios batiendo. Ahora le pondremos 1 taza de harina, luego de mezclar bien pondremos el chocolate en el microondas para despues ponerlo en la mezcla. Una vez que la preparación esté homogénea agregamos media taza de harina, luego un poco de leche y listo ya estamos en condiciones de poner la mezcla en el horno a 180° por 30 minutos."
    },
    {
        "nombre": "Torta Frita",
        "ingredientes": ["harina", "agua", "grasa"],
        "preparacion": "Ponemos la harina en un bowl, luego hacemos un hoyo en el medio y en el hoyo ponemos el agua y despues un poco de grasa derretida, homogeneizamos todo y pasamos a amasar. Luego de amasar por 15 minutos la dejamos leudar otros 15, despues emepezamos a calentar la grasa en un sarten mientras dividimos la masa y listo, solo queda ponerlas en el sartén"
    },
    // ...
];

var ingredientesDisponibles = [];


function menu() {
    var boton = "<button onclick='volverAlMenu()'>Volver Al Menu</button>";
    var boton1 ="<button onclick='agregarIngredienteDisponible()'>Agregar Ingrediente Disponible</button>";
    var boton2 ="<button onclick='encontrarReceta()'>Encontrar Receta</button>";
    var boton3 ="<button onclick='crearNuevaReceta()'>Crear Nueva Receta</button>";
    var boton4 ="<button onclick='verIngredientes()'>Ver los ingredientes disponibles</button>";
    var boton5 ="<button onclick='verRecetas()'>Ver las recetas</button>";
    
    output(boton);
    output("<br>");
    output(boton1);
    output("<br>");
    output(boton2);
    output("<br>");
    output(boton3);
    output("<br>");
    output(boton4);
    output("<br>");
    output(boton5);
    output("<br>");
    
    // mostrar menu:
    // boton de agregar ingredientes disponbiles
    // boton de encontrar receta
    // boton de crear nueuva receta
}
menu();

function agregarIngredienteDisponible() {
    var ingrediente = input("Escriba el ingrediente");
    ingredientesDisponibles.push(ingrediente);
    clear();
    menu();
    // pide al usuario el ingrediente y lo agrega a la lista
}

function encontrarReceta() {
    var contador = 0;
    var recetasDisponibles = {};
    recetasDisponibles.ingredientes = [];

    for (var i = 0; i < recetas.length; i++) {
        for (var j = 0; j < ingredientesDisponibles.length; j++) {
           if (recetas[i].ingredientes.includes(ingredientesDisponibles[j])) {
            contador++;
           }
             if (contador == recetas[i].ingredientes.length) {
                recetasDisponibles.push(recetas[i]);
                contador = 0;
             }           
        }
    }
     output(recetasDisponibles);
    
    // busca cual receta se puede hacer en base a los ingredientes disponibles agregados
    // se muestran los ingredientes y la preparación 
}

function crearNuevaReceta() {
    var nombreDeRecetaNueva = input("ingrese el nombre de la receta")
    var ingredientesDeRecetaNueva = input("ingrese los ingredientes")
    var preparacionDeLaNuevaReceta = input("ingrese la preparación")

    recetas.push({
        "nombre": nombreDeRecetaNueva,
        "ingredientes": ingredientesDeRecetaNueva,
        "preparacion": preparacionDeLaNuevaReceta, 
    });

    // crea una nueva receta para agregar al recetario
}

// Opcional: agregar cantidad necesaria de cada ingrediente para cada receta y verificar si se tiene suficiente para realizarla
function verIngredientes() {
    clear();
    output(ingredientesDisponibles);

    if (ingredientesDisponibles == "") {
        output("No hay ingredientes");
    }
    output("<br>");
     var boton6 = "<button onclick='volverAlMenu()'>Volver Al Menu</button";
    output(boton6)
}

function verRecetas() {
    clear();
    for (i = 0; i < recetas.length;i++) {
        output(recetas[i].nombre);
        output("<br>");
    }
    output("<br>");
    var boton7 = "<button onclick='volverAlMenu()'>Volver Al Menu</button";
    output(boton7);
}
function volverAlMenu() {
    clear();
    menu();
}