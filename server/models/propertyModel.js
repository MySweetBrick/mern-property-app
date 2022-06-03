const mongoose = require('mongoose');

const propertySchema = mongoose.Schema(
    {
        address: {
            street: { type: String, required: false },
            suburb: { type: String, required: false },
            city : { type: String, required: false },
        },
        price: { type: Number, required: false },
        bedrooms: { type: Number, required: false },
        bathrooms: { type: Number, required: false },
        supermarket: { type: Boolean, required: false },
        park: { type: Boolean, required: false },
        beach: { type: Boolean, required: false },
        furnished: { type: Boolean, required: false },
        gym: { type: Boolean, required: false },
        carpark: { type: Boolean, required: false },
        propertyType: { type: String, required: false },
        floors: { type: String, required: false },
        petsNegotiable: { type: String, required: false }
    }
)

module.exports = mongoose.model('property', propertySchema)