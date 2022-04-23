const express = require("express")
const app = express()
const fs = require("fs");
const Contenedor = require("./classItem");
const port = 3000;

const archivo2 = new Contenedor("tienda.txt")


const Productos = async () => {
    const productos = await archivo2.getAll()
    app.get('/productos', (req, res) => {
        res.send(productos)
    })
}
Productos()

// app.get("/productoRandom"), (req, res) =>{
//     res.send("Hola guapo")
// }

const ProductosRandom = async () => {
    const productosRan = await archivo2.getAll()

    app.get("/productoRandom", (req, res) => {
        
        let productoRandom = productosRan[Math.floor(Math.random() * productosRan.length)];
        res.send(productoRandom)
    })
}

ProductosRandom()


// app.get("/productoRandom", (req, res) => {

//     fs.readFile(`./tienda.txt`, `utf-8`, (err, data) => {
//         if (err) {
//             console.log("Error en la carga")
//         } else {
//             let productosParseados = JSON.parse(data)
//             let productoRandom = productosParseados[Math.floor(Math.random() * productosParseados.length)];
//             res.send(productoRandom)
//         }
//     })

// })

app.get("/", (req, res) => {
    res.send("Bienvenidos al desafío 6 de Juan Pablo Mirabile")
})


app.listen(port, () => {
    console.log("Server en funcionamiento")
})

const escuadra = {
    title: 'Escuadra',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
    id: 1
}

const calculadora = {
    title: 'Calculadora',
    price: 234.56,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
    id: 2
}

const globoTerraqueo = {
    title: 'Globo Terráqueo',
    price: 345.67,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
    id: 3
}

//archivo.save(escuadra)
//archivo.save(calculadora)
//archivo.save(globoTerraqueo)
//archivo1.save()
//achirvo1.getAll()
//archivo1.deleteAll()