function calculadora(color) {

    const arrayBotones = ["←", "/", "*", "-", "7", "8", "9", "4", "5", "6", "+", "1", "2", "3", "0", ".", "=", "%"];

    const contenedor = document.createElement("div");
    contenedor.setAttribute('id', 'contenedor');
    contenedor.style.background = color;

    const contenedorCalculos = document.createElement('div');
    contenedorCalculos.setAttribute('class', 'contenedor-input')

    const contenedorInput = document.createElement('div');


    contenedorCalculos.appendChild(contenedorInput);

    const input = document.createElement('input');
    const input2 = document.createElement('input');
    input.type = "text";
    input.disabled = true
    input2.type = "text";
    input2.value = "0"
    input2.disabled = true

    contenedorInput.appendChild(input);
    contenedorInput.appendChild(input2);
    contenedor.appendChild(contenedorCalculos);

    const contenedorGrid = document.createElement('div');
    contenedorGrid.setAttribute('class', 'grid-container');

    for (let i = 0; i < arrayBotones.length; i++) {
        let boton = document.createElement("input");
        boton.type = "button"
        boton.setAttribute('onClick', 'eventoClick(this)')
        boton.setAttribute('class', "item item-" + i);
        boton.value = arrayBotones[i];

        contenedorGrid.appendChild(boton)
    }

    contenedor.appendChild(contenedorGrid);

    return contenedor;
}