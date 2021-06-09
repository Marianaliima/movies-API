const Movie = require('../models/movie')

const createMovie = async (req, res) =>{

    const movie = new Movie({
    title: req.body.title,
    description: req.body.description,
    type: req.body.type,
    available_on: req.body.available_on,
    created_at: req.body.created_at 

})
try {
    const newMovie = await movie.save() 
    res.status(201).json(newMovie) 
}catch (err){ 
    res.status(400).json({message: err.message})
}

}

const allMovies = async (req, res)=> {
const movies = await Movie.find() 
res.status(200).json(movies) 
}

const updateMovie = async (req, res)=>{
    try {
        const movie = await Movie.findById(req.params.id)
        if (movie == null) {
            return res.status(404).json({ message: 'filme não encontrado!'})
        }

        if (req.body.title != null) {
            movie.title = req.body.title
        }

        if (req.body.description!= null) {
            movie.description = req.body.description
        }

        if (req.body.type != null) {
            movie.type = req.body.type
        }

        if (req.body.available_on != null) {
            movie.available_on = req.body.available_on
        }

        if (req.body.created_at != null) {
            movie.created_at = req.body.created_at
        }


        const movieupdate = await movie.save()
        res.json(movieupdate)
    
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}


const deleteMovie = async (req, res)=>{
    try {
        const movie = await Movie.findById(req.params.id)
        if (movie == null) {
        return res.status(404).json({ message: 'Filme não encontrado!'})
        }
    
        await movie.remove()
        res.json({ message: 'Filme deletado com sucesso!'})
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }

}


const idMovie = async (req, res)=> {

    console.log(req.params.id)
    const onemovie = await Movie.findById(req.params.id)
    res.status(200).json(onemovie) 
}


module.exports = { 
    allMovies,
    idMovie,
    createMovie,
    updateMovie,
    deleteMovie

}