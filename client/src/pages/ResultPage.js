import { CircularProgress, Container, Grid, makeStyles } from '@material-ui/core';
import Axios from 'axios';
import { useEffect, useState } from 'react';

import {
    PropertyContainer,
    ImageContainer,
    DetailsContainer,
    AddressContainer,
    PriceContainer,
    IconContainer,
    IconCounter,
    Icon,
    BinocularContainer,
    ResultContainer,
    Background,
    ToggleBar,
    ToggleBarContainer,
    
} from '../styles/ResultPage.styled';

import Bed from '../images/bed.png';
import Shower from '../images/shower.png';
import Car from '../images/car-side.png';
import Binocular from '../images/binoculars.png'
import Menu from '../images/listMenu.png';
import Map from '../images/map.png';

const useStyles = makeStyles({
    loader: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function PropertyPage() {
    //Material UI styles
    const classes = useStyles();

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
        <Background>
             <ToggleBar>
                <ToggleBarContainer>
                    <Icon src={Menu}></Icon>
                    List
                </ToggleBarContainer>
                <ToggleBarContainer>
                    <Icon src={Map}></Icon>
                    Map
                </ToggleBarContainer>
            </ToggleBar>

            <ResultContainer>
                {loading ? (
                    <div className={classes.loader}>
                        <CircularProgress size="3rem" thickness={5} />
                    </div>
                ) : (
                    properties.map(property => (
                        <PropertyContainer>
                            <ImageContainer />
                            <DetailsContainer>
                                <AddressContainer>{property.address.street}, {property.address.suburb}</AddressContainer>
                                <PriceContainer>${property.price}/week</PriceContainer>
                                <IconContainer>
                                    <IconCounter>
                                        <Icon src={Bed}></Icon>
                                        {property.bedrooms}
                                    </IconCounter>
                                    <IconCounter>
                                        <Icon src={Shower}></Icon>
                                        {property.bathrooms}
                                    </IconCounter>
                                    <IconCounter>
                                        <Icon src={Car}></Icon>
                                        1
                                    </IconCounter>
                                </IconContainer>
                            </DetailsContainer>
                            <BinocularContainer>
                                <Icon src={Binocular}></Icon>
                            </BinocularContainer>
                        </PropertyContainer>
                    ))
                )}
            </ResultContainer>
        </Background>
    );
};

export default PropertyPage;