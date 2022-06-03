const propertySchema = require('../models/propertyModel');

// const getProperties = (async (req, res) => {
//     const property = await propertySchema.find({}, )
//     res.status(200).json(property)
// });

getProperties = async (req, res) => {
    await propertySchema.find({}, (err, property) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!propertySchema.length) {
        return res.status(404).json({ success: false, error: `Property not found` });
      }
  
      return res.status(200).json({ success: true, data: property });
    })
      .clone()
      .catch(err => console.log(err));
  };

module.exports = {
    getProperties
};