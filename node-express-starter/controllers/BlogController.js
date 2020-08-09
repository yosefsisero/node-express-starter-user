const { Blog } = require('../models');


module.exports = {
    findAll:(req, res)=>{
       Blog.find()
            .then((resDB) => res.status(200).json(resDB))
            .catch((Error)=> console.log(Error)) 
    },
    findOne: (req, res) => {
      Blog.findById(req.params.id)
            .then((resDB) => res.status(200).json(resDB))
            .catch((Error)=> console.log(Error)) 
    },
    create:(req, res)=>{
        const { body } = req;
        const newBlog = new Blog(body);
        newBlog.save()
        .then((resDB) => res.status(201).json(resDB))
        .catch((Error)=> console.log(Error))      
    },
    change:(req, res)=>{
        const { body } = req
       Blog.findByIdAndUpdate(req.params.id, body, {new: true})
           .then((resDB)=> res.status(200).json(resDB))
           .catch((err)=> res.status(400).json(err))
    },
    delete:(req, res)=>{
        Blog.findByIdAndDelete(req.params.id)
           .then((resDB)=> res.status(204).json(resDB))
           .catch((err)=> res.status(400).json(err))
    },
}   