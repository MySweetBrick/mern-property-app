import { CircularProgress, Container, FormControlLabel, Grid, makeStyles, RadioGroup, Radio, Slider, TextField } from '@material-ui/core';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
        height: '100vh',
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

    const [sliderMax, setSliderMax] = useState(2000);
    const [priceRange, setPriceRange] = useState([0, 2000]);
    const [priceOrder, setPriceOrder] = useState("descending");

    const [filter, setFilter] = useState("");
    const [sorting, setSorting] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const params = location.search ? location.search : null;

    const updateUIValues = (uiValues) => {
        setSliderMax(uiValues.maxPrice);

        if (uiValues.filtering.price) {
            let priceFilter = uiValues.filtering.price;
            setPriceRange([Number(priceFilter.gte), Number(priceFilter.lte)]);
        }
        if (uiValues.sorting.price) {
            let priceSort = uiValues.sorting.price;
            setPriceOrder(priceSort)
        }
    };

    //side effects
    useEffect(() => {
        let cancel;

        const fetchData = async () => {
            setLoading(true);
            try {
                let query;

                if (params && !filter) {
                    query = params;
                } else {
                    query = filter;
                }
                if (sorting) {
                    if(query.length === 0) {
                        query = `?sort=${sorting}`
                    } else {
                        query = query + "&sort=" + sorting;
                    }
                }
                const { data } = await Axios({
                    method: "Get",
                    url: `http://localhost:8000/rentals/properties${query}`,
                    cancelToken: new Axios.CancelToken((c) => cancel = c)
                });
                setProperties(data.data);
                setLoading(false);
                updateUIValues(data.uiValues);
            } catch (error) {
                // if (Axios.isCancel(error)) return;
                console.log(error.response.data);
            }
        }
        fetchData();
        return () => cancel();
    }, [filter, params, sorting]);

    const handlePriceInoutChange = (e, type) => {
        let newRange;

        if (type === "lower") {

            newRange = [...priceRange];
            newRange[0] = Number(e.target.value);
            setPriceRange(newRange);
        }

        if (type === "upper") {

            newRange = [...priceRange];
            newRange[1] = Number(e.target.value);
            setPriceRange(newRange);
        }
    }

    const onSliderCommitHandler = (e, newValue) => {
        buildRangeFilter(newValue)
    };

    const onTextfieldCommitHandler = () => {
        buildRangeFilter(priceRange);
    }

    const buildRangeFilter = (newValue) => {
        const urlFilter = `?price[gte]=${newValue[0]}&price[lte]=${newValue[1]}`;

        setFilter(urlFilter);
        navigate(urlFilter);
    };

    const handleSortChange = (e) => {
        setPriceOrder(e.target.value);
        if(e.target.value === "ascending") {
            setSorting("price");
        } else if (e.target.value === "descending") {
            setSorting("-price");
        };
    };

    return (
        <Background>
            <br />
            <div>
                <Slider
                    min={0}
                    max={sliderMax}
                    value={priceRange}
                    valueLabelDisplay='auto'
                    disabled={loading}
                    onChange={(e, newValue) => setPriceRange(newValue)}
                    onChangeCommitted={onSliderCommitHandler}
                />
                <div>Min Price
                    <TextField
                        size="small"
                        id="lower"
                        lable="Min Price"
                        variant="outlined"
                        type='number'
                        disabled={loading}
                        value={priceRange[0]}
                        onChange={(e) => handlePriceInoutChange(e, "lower")}
                        onBlur={onTextfieldCommitHandler}
                    />
                    Max Price
                    <TextField
                        size="small"
                        id="upper"
                        lable="Max Price"
                        variant="outlined"
                        type='number'
                        disabled={loading}
                        value={priceRange[1]}
                        onChange={(e) => handlePriceInoutChange(e, "upper")}
                        onBlur={onTextfieldCommitHandler}
                    />
                </div>
                <div>
                    <RadioGroup aria-label="price-order" name="price-order" value={priceOrder} onChange={handleSortChange}>
                        <FormControlLabel
                            value="descending"
                            disabled={loading}
                            control={<Radio />}
                            label="Price: Highest - Lowest"
                        />
                          <FormControlLabel
                            value="ascending"
                            disabled={loading}
                            control={<Radio />}
                            label="Price: Lowest - Highest"
                        />
                    </RadioGroup>
                </div>
            </div>
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