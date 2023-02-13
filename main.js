// //seleccion por etiqueta

// document.getElementsByTagName("p")

// console.log(document.getElementsByTagName("p"))

// // seleccion por clase

// document.getElementsByClassName("parrafo")
// console.log(document.getElementsByClassName("parrafo"))

// // sellecion por id

// document.getElementById("parrafo")
// console.log(document.getElementById("parrafo"))

// // //otros selectores

// // console.log(document.getElementsByName("name"))

// //ECMS + 6

// console.log(document.querySelector("p"))
// console.log(document.querySelector(".parrafo"))
// console.log(document.querySelector("#parrafo"))
// console.log(document.querySelectorAll("#parrafo")) //cuando varios id hacen lo mismo

// const parrafo = document.querySelector(".parrafo").innerHTML = "Hola inner"

// parrafo.textContent = "Nuevo parrafo"

// parrafo.innerHTML = "Parrafo Inner"

// let nombre = prompt("ingrese su nombre: ")
// parrafo.textContent = nombre

// const enlace = document.querySelector("a")
// enlace.textContent= "Nuevo enlace"
// enlace.href="https://www.google.com"
// enlace.target = "_blanck"

// const nombre = document.querySelector("#nombre") //nombre de la variable se puede nombrar igual que el id
// console.log(nombre)
// nombre.value="luisa herrera"
// nombre.type = "color"
// nombre.type = "submit"

// const capturarDatos =()=>{
//     const nombre = document.querySelector("#nombre")
//     alert(nombre.value)
// }


// el   e.preventDefault() previene problemas por defecto

// const sumarNumeros = (e) =>{
//     e.preventDefault()
    // const numero1 = document.querySelector("#numero1")
    // const numero2 = document.querySelector("#numero2")
    // const resultado = document.querySelector("#resultado")
    // resultado.value = parseInt(numero1.value) + parseInt(numero2.value)

const sumarNumeros = () =>{
    const numero1 = document.querySelector("#numero1")
    const numero2 = document.querySelector("#numero2")
    const resultado = document.querySelector("#resultado")
    resultado.value = parseInt(numero1.value) + parseInt(numero2.value)
}

const restarNumeros = () =>{
    const numero1 = document.querySelector("#numero1")
    const numero2 = document.querySelector("#numero2")
    const resultado = document.querySelector("#resultado")
    resultado.value = parseInt(numero1.value) - parseInt(numero2.value)
}

const multiplicarNumeros = () =>{
    const numero1 = document.querySelector("#numero1")
    const numero2 = document.querySelector("#numero2")
    const resultado = document.querySelector("#resultado")
    resultado.value = parseInt(numero1.value) * parseInt(numero2.value)
}

const dividirNumeros = () =>{
    const numero1 = document.querySelector("#numero1")
    const numero2 = document.querySelector("#numero2")
    const resultado = document.querySelector("#resultado")
    resultado.value = parseInt(numero1.value) / parseInt(numero2.value)
}
