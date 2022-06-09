const propertySchema = require('../models/propertyModel');

// const getProperties = (async (req, res) => {
//     const property = await propertySchema.find({}, )
//     res.status(200).json(property)
// });

getProperties = async (req, res) => {

  let query;

  let uiValues = {
    filtering: {},
    sorting: {}
  };

  const reqQuery = { ...req.query };

  const removeFields = ["sort"];

  removeFields.forEach(val => delete reqQuery[val]);

  const filterKeys = Object.keys(reqQuery);
  const filterValues = Object.values(reqQuery);

  filterKeys.forEach((val, idx) => uiValues.filtering[val] = filterValues[idx]);

  let queryStr = JSON.stringify(reqQuery);
 
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`);

  query = propertySchema.find(JSON.parse(queryStr));

  if (req.query.sort) {
    const sortByArr = req.query.sort.split(',');

    sortByArr.forEach(val => {
      let order;

      if(val[0] === '-') {
        order = "descending";
      } else {
        order = "ascending";
      }

      uiValues.sorting[val.replace("-", "")] = order;
    });

    const sortByStr = sortByArr.join(' ');

    query = query.sort(sortByStr);
  } else {
    query = query.sort("-price");
  }
  
  const property = await query;

  const maxPrice = await propertySchema.find().sort({ price: -1 }).limit(1).select("-_id price");
  const minPrice = await propertySchema.find().sort({ price: 1 }).limit(1).select("-_id price");
  uiValues.maxPrice = maxPrice[0].price;
  uiValues.minPrice = minPrice[0].price;

  res.status(200).json({
    success: true,
    data: property,
    uiValues,
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