const propertySchema = require('../models/propertyModel');

// const getProperties = (async (req, res) => {
//     const property = await propertySchema.find({}, )
//     res.status(200).json(property)
// });

getProperties = async (req, res) => {

  let query;

  const reqQuery = { ...req.query };

  const removeFields = ["sort"];

  removeFields.forEach(val => delete reqQuery[val]);

  let queryStr = JSON.stringify(reqQuery);
 
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`);

  query = propertySchema.find(JSON.parse(queryStr));

  if (req.query.sort) {
    const sortByArr = req.query.sort.split(',');
    const sortByStr = sortByArr.join(' ');

    query = query.sort(sortByStr);
  }
  
  const property = await query;

  res.status(200).json({
    success: true,
    data: property
  });

  // await propertySchema.find(JSON.parse(queryStr), (err, property) => {
  //   if (err) {
  //     return res.status(400).json({ success: false, error: err });
  //   }
  //   if (!propertySchema.length) {
  //     return res.status(404).json({ success: false, error: `Property not found` });
  //   }

  //   return res.status(200).json({ success: true, data: property });
  // })
  //   .clone()
  //   .catch(err => console.log(err));
};

module.exports = {
  getProperties
};