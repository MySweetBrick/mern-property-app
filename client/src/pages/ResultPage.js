import { CircularProgress, Container, Grid, makeStyles } from '@material-ui/core';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import './ResultPage.css'
import SideFilter from '../components/ResultPageComponents/SideFilter';


import {
    Background,
    ResultContainer,
    PropertyContainer,
    ToggleBar,
    ToggleBarContainer,
    ImageContainer,
    Icon,
    DetailsContainer,
    BinocularContainer,
    AddressContainer,
    PriceContainer,
    IconContainer,
    IconCounter,
} from '../styles/ResultPage.styled';
import Menu from '../images/listMenu.png';
import Map from '../images/map.png';
import Bed from '../images/bed.png';
import Shower from '../images/shower.png';
import Car from '../images/car-side.png';
import Binocular from '../images/binoculars.png'

function ResultPage() {

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
        // fetchData();
        console.log(properties);
    }, [])

    return (
        <>
        <div className='ResultsPage__Container'>
            <SideFilter />
            <div className="ResultsPage__result-parent">
            <ResultContainer>
              
                    <PropertyContainer>
                    <ImageContainer />
                    <DetailsContainer>
                        <AddressContainer>Address:</AddressContainer>
                        <PriceContainer>Price: $ /week</PriceContainer>
                        <IconContainer>
                            <IconCounter>
                                <Icon src={Bed}></Icon>
                                2
                            </IconCounter>
                            <IconCounter>
                                <Icon src={Shower}></Icon>
                                1
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
                
                
                
            </ResultContainer>
            </div>




        </div>

        </>
    );
};

export default ResultPage;