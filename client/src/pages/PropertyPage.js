import { CircularProgress, Container, Grid, makeStyles } from '@material-ui/core';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';

const useStyles = makeStyles({
    root: {
        marginTop: 20,
    }, 
    loader: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function PropertyPage() {
    //Material UI styles
    const classes=useStyles();

    //component state
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);

    //side effects
    useEffect(() => {
        let cancel;

        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await Axios({
                    method: "Get",
                    url: `http://localhost:8000/rentals/properties`,
                    cancelToken: new Axios.CancelToken((c) => cancel = c)
                });
                setProperties(data.data);
                setLoading(false);
            } catch (error) {
                console.log(error.response.data);
            }
        }
        fetchData();
        console.log(properties);
    }, [])

    return (
        <Container className={classes.root}>
            <Grid container spacing={2}>
                {loading ? (
                    <div className={classes.loader}>
                        <CircularProgress size="3rem" thickness={5} />
                    </div>
                ) : (
                    properties.map(property => (
                        <Grid item key={property._id} xs={12} sm={6} md={4} lg={3}>
                          <div>
                    <p>Price: {property.price}</p>
                    <p>Bedrooms: {property.bedrooms}</p>
                    <p>Street: {property.address.street}</p>
                    <p>Suburb: {property.address.suburb}</p>

                </div>
                        </Grid>
                    ))
                )}
            </Grid>

        </Container>
    );
};

export default PropertyPage;