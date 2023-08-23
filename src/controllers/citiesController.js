const City = require("../models/City")

const getCities = async (req, res) => {
    try {
        const searchTerm = req.query.name
        if (searchTerm) {
            const filteredCities = await City.find({ name: {$regex: `^${searchTerm}`, $options: 'i'} }) 
            res.status(200).json({ cities: filteredCities }) 
        } else {
            let cities = await City.find()
            res.status(200).json({ cities })  
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getCity = async (req, res) => {
    try {
        const {id} = req.params
        const city = await City.findById(id)
        res.status(200).json({ city })
    } catch (error) {
        res.status(500).json({ message: error.message })  
    }
}

const addCity = async (req, res) => {
    try {
        let dataCity = req.body
        let cityCreate = await City.create(dataCity)
    
        res.status(201).json({
            message: "City has been added",
            city: cityCreate
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteCity = async (req, res) => {
    try {
        const {id} = req.params
        await City.findByIdAndDelete(id)
    
        res.status(201).json({
            message: "City has been delete",
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateCity = async (req, res) => {
    try {
        let newData = { 
            name: req.body.name,
            country: req.body.country,
            image: req.body.image,
            landing: req.body.landing,
            data: req.body.landing
        }
        
        const {id} = req.params
        await City.findByIdAndUpdate(id, newData)

        res.status(201).json({
            message: "City has been update",
            newData
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addCitiesCollection = async (req, res) => {
    try {
        let citiesCollection = [
            {
                "name": "Cuzco",
                "country": "Perú",
                "image": "https://i.imgur.com/8wQIDF6.jpg",
                "landing": "https://i.imgur.com/cNlDhxX.jpg",
                "data": "Descripción de Cuzco."
            },
            {
                "name": "Cartagena",
                "country": "Colombia",
                "image": "https://i.imgur.com/MX0B5wn.jpg",
                "landing": "https://i.imgur.com/YLQ7yDd.jpg",
                "data": "Descripción de Cartagena."
            },
            {
                "name": "Buenos Aires",
                "country": "Argentina",
                "image": "https://i.imgur.com/x4trQbX.jpg",
                "landing": "https://i.imgur.com/Vf50xVH.jpg",
                "data": "Descripción de Buenos Aires."
            },
            {
                "name": "Río de Janeiro",
                "country": "Brasil",
                "image": "https://i.imgur.com/URn7K3w.jpg",
                "landing": "https://i.imgur.com/htAfN06.jpg",
                "data": "Descripción de Río de Janeiro."
            },
            {
                "name": "Oaxaca",
                "country": "Mexico",
                "image": "https://i.imgur.com/XpHAxxS.jpg",
                "landing": "https://i.imgur.com/23uO0Uz.jpg",
                "data": "Descripción de Oaxaca."
            },
            {
                "name": "Valparaiso",
                "country": "Chile",
                "image": "https://i.imgur.com/dreVzDk.jpg",
                "landing": "https://i.imgur.com/qvy08qr.jpg",
                "data": "Descripción de Valparaiso."
            },
            {
                "name": "Guatemala",
                "country": "Guatemala",
                "image": "https://i.imgur.com/cBSvD0e.jpg",
                "landing": "https://i.imgur.com/6DwuTjz.jpg",
                "data": "Descripción de Guatemala."
            },
            {
                "name": "Bahía",
                "country": "Brasil",
                "image": "https://i.imgur.com/fnDyLJq.jpg",
                "landing": "https://i.imgur.com/zFCX4Zp.jpg",
                "data": "Descripción de Bahía."
            },
            {
                "name": "Cuenca",
                "country": "Ecuador",
                "image": "https://i.imgur.com/YLisVTa.jpg",
                "landing": "https://i.imgur.com/Q4JcUny.jpg",
                "data": "Descripción de Cuenca."
            },
            {
                "name": "Medellín",
                "country": "Colombia",
                "image": "https://i.imgur.com/4kN8CNw.jpg",
                "landing": "https://i.imgur.com/BnIKff2.jpg",
                "data": "Descripción de Medellín."
            },
            {
                "name": "Habana",
                "country": "Cuba",
                "image": "https://i.imgur.com/hOymXxY.jpg",
                "landing": "https://i.imgur.com/FVrG30V.jpg",
                "data": "Descripción de Habana."
            },
            {
                "name": "Bariloche",
                "country": "Argentina",
                "image": "https://i.imgur.com/xHskMw7.jpg",
                "landing": "https://i.imgur.com/hEK1PZg.jpg",
                "data": "Descripción de Bariloche."
            }
        ]
    
        await City.insertMany(citiesCollection)

        res.status(201).json({ 
            message: "Cities collection has ben hadded successfully",
            citiesCollection 
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getCities, getCity, addCity, deleteCity, updateCity, addCitiesCollection }