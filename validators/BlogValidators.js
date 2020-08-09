const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]:Joi.object().keys({
            title: Joi.string().required(),
            text: Joi.string().required(),
            date: Joi.date().required(),
            author: Joi.string().required(),
        }),
    }),
    change: celebrate({
        [Segments.BODY]:Joi.object().keys({
            title: Joi.string(),
            text: Joi.string(),
            date: Joi.date(),
            author: Joi.string(),
        }),
    }),
};

