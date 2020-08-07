const { User } = require('../models')

module.exports = {
    findOneByEmail: (email)=> User.findOne({email, is_active: true}),
}

// email es lo mismo que 
// email: email