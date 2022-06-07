import React from 'react';

const PropertyCard = ({ property, properties }) => {
    return (
        <div>
            {/* {property.map(property => <div>{property.address.street}</div>)} */}
            {/* <p>{property.price}</p> */}
            {properties.map((property) => {
                return (
                    <div>
                    <h1>Price: {property.price}</h1>
                    <h1>Street: {property.address.street}</h1>
                    <h1>Suburb: {property.address.suburb}</h1>

                </div>
                )
            }
            )
            }
            {/* <p>{property.address}</p> */}

            {/* <div className='propertyDisplay'>
                {listOfProperties.map((property) => {
                    return (
                        <div>
                            <h1>Price: {property.price}</h1>
                            <h1>Street: {property.address.street}</h1>
                            <h1>Suburb: {property.address.suburb}</h1>

                        </div>
                    )
                })}

            </div> */}
        </div>
    );
};

export default PropertyCard;