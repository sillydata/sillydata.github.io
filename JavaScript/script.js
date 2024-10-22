const carrusel = document.querySelector(".items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth     // Determinar el límite del scroll
let intervalo = null;
let step = 1;       // Velocidad, paso. Si se quiere que el carrusel cambie de imagen una por una, se le pone el ancho definido de dicho elemento.

// Funciones que alteran el movimiento de las imágenes
const start = () =>{  
    intervalo = setInterval(function () {       // Función con el ícono cuadrado, sin parámetros ni nombre
        carrusel.scrollLeft = carrusel.scrollLeft + step;       // Intervalo con base en la velocidad antes definida
        if(carrusel.scrollLeft === maxScrollLeft){       // Si el scroll llega a su máximo límite...
            step = step * -1;      // Se devuelve el scroll de derecha a izquierda, contracorriente
        } else if(carrusel.scrollLeft === 0){
            step = step * -1;       // Permite que rebote nuevamente de izquierda a derecha
        }
    }, 10);
};

const stop = () =>{
    clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {     // Cuando pasa el cursor por encima, el carrusel se detiene
    stop();
});

carrusel.addEventListener("mouseout", () => {       // Cuando pasa el cursor por encima, el carrusel se mueve de nuevo
    start();
});

start(); // Ejecutar método "start"

const maquina1 = document.getElementById('maquina1')
const maquina2 = document.getElementById('maquina2')
const maquina3 = document.getElementById('maquina3')
const maquina4 = document.getElementById('maquina4')
const maquina5 = document.getElementById('maquina5')

const maquinaEs1 = (text = '', tiempo = 200, etiqueta = '') => {     // Método para que el texto se "escriba" y se detenga . Sección de parámetros del método.
    let arrayCar = text.split('')      // El espacio en blanco sirve para separar el array carácter por carácter
    etiqueta.innerHTML = ''     // Limpiador
    let cont = 0        // Contador
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCar[cont]
        cont++      // Aumentar el contador
        if(cont === arrayCar.length){       // Detener el escrito después de llegar a la longitud de carácteres del texto que se imprime
            clearInterval(escribir)
        }
    }, tiempo)
}

const maquinaEs2 = (text = '', tiempo = 200, etiqueta = '') => {     // Método para que el texto se "escriba", se detenga, se borre y se vuelva a escribir
    let arrayCar = text.split('')      
    etiqueta.innerHTML = ''
    let cont = 0        // Contador
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCar[cont]
        cont++
        if(cont === arrayCar.length){       // Reiniciar contador e innerHTML
            cont = 0
            etiqueta.innerHTML = ''
        }
    }, tiempo)
}

const maquinaEs3 = (text = '', tiempo = 200, etiqueta = '') => {     // Método para que el texto se "escriba" y se borre carácter por carácter
    let arrayCar = text.split('')
    etiqueta.innerHTML=''       
    let i = 0        // Contador
    let j = text.length  
    let escribir = setInterval(function() {
        if(i === arrayCar.length){      // Retroceso
            etiqueta.innerHTML = text.substring(0,j)       // Mostrar una parte del texto
            j--     // Disminuir la longitud del texto por el lado derecho
            if(j === 0){        // Si el texto  no se muestra
                etiqueta.innerHTML=''      
                i = 0       
                j = text.length     // Todo se reinicia
            }
        } else{
            etiqueta.innerHTML += arrayCar[i]
            i++
        }    
    }, tiempo)
} 

const maquinaEs4 = (text = '', tiempo = 200, etiqueta = '') => {    
    let arrayCar = text.split('')
    etiqueta.innerHTML=''       
    let i = 0        // Contador
    let escribir = setInterval(function() {
        if(arrayCar[i] === '*'){
            etiqueta.innerHTML += '</br>'       // Salto de línea
        } else{
            etiqueta.innerHTML += arrayCar[i]
        }
        if(i === arrayCar.length){
            etiqueta.innerHTML=''       
            i = 0 
        }
        i++
    }, tiempo)
} 

maquinaEs1("El Extranjero", 300, maquina1)      // El número determina el tiempo
maquinaEs2("Y El Absurdo    ", 200, maquina2)
maquinaEs3("Rebelde  ", 150, maquina3)
maquinaEs3("Nuestra tarea como hombres es encontrar las pocas fórmulas que calmarán la angustia infinita de las almas libres. Hemos de remendar todo lo que está desgarrado, convertir la justicia en algo imaginable, en un mundo tan evidentemente injusto, y la felicidad significativa para los pueblos envenenados por la desgracia del siglo. Ni que decir tiene, es una tarea sobrehumana. Pero llamamos sobrehumanas a las tareas que los hombres tardan mucho en hacer, eso es todo.  ", 50, maquina4)
maquinaEs4(" Si sigo así, * terminaré por morir feliz. * Habré consumido toda mi esperanza.  ", 100, maquina5)
