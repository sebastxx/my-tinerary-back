require('./db')

const City = require('../models/City')

const citiesColection = [
    {
        "name": "Cuzco",
        "country": "Perú",
        "image": "https://i.imgur.com/8wQIDF6.jpg",
        "data": "Descripción de Cuzco."
    },
    {
        "name": "Cartagena",
        "country": "Colombia",
        "image": "https://i.imgur.com/MX0B5wn.jpg",
        "data": "Descripción de Cartagena."
    },
    {
        "name": "Buenos Aires",
        "country": "Argentina",
        "image": "https://i.imgur.com/x4trQbX.jpg",
        "data": "Descripción de Buenos Aires."
    },
    {
        "name": "Río de Janeiro",
        "country": "Brasil",
        "image": "https://i.imgur.com/URn7K3w.jpg",
        "data": "Descripción de Río de Janeiro."
    },
    {
        "name": "Oaxaca",
        "country": "Mexico",
        "image": "https://i.imgur.com/XpHAxxS.jpg",
        "data": "Descripción de Oaxaca."
    },
    {
        "name": "Valparaiso",
        "country": "Chile",
        "image": "https://i.imgur.com/dreVzDk.jpg",
        "data": "Descripción de Valparaiso."
    },
    {
        "name": "Guatemala",
        "country": "Guatemala",
        "image": "https://i.imgur.com/cBSvD0e.jpg",
        "data": "Descripción de Guatemala."
    },
    {
        "name": "Bahía",
        "country": "Brasil",
        "image": "https://i.imgur.com/fnDyLJq.jpg",
        "data": "Descripción de Bahía."
    },
    {
        "name": "Cuenca",
        "country": "Ecuador",
        "image": "https://i.imgur.com/YLisVTa.jpg",
        "data": "Descripción de Cuenca."
    },
    {
        "name": "Medellín",
        "country": "Colombia",
        "image": "https://i.imgur.com/4kN8CNw.jpg",
        "data": "Descripción de Medellín."
    },
    {
        "name": "Habana",
        "country": "Cuba",
        "image": "https://i.imgur.com/hOymXxY.jpg",
        "data": "Descripción de Habana."
    },
    {
        "name": "Bariloche",
        "country": "Argentina",
        "image": "https://i.imgur.com/xHskMw7.jpg",
        "data": "Descripción de Bariloche."
    }
]



City.insertMany(citiesColection)
.then(() => {
    console.log("Collection is successfully created");
})
.catch((error) => {
    console.log(error);
})

