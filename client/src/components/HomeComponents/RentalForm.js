import React from 'react';
import {
    Background,
    FormContainer,
    RentalHeader,
    InnerFormContainer,
    LeftSide,
    RightSide,
    InputContainer,
    SearchButton,
    SearchContainer,
    SearchBar,
    CheckboxContainer,
    CheckboxItems,
    CheckboxImg,
    CarCheckboxImg,
    LargeInputSelect,
    SmallInputSelect,
    Spacer,
    DoubleInputContainer,
    SpacerLine,
    PetCheckboxItem
} from '../../styles/RentalForm.styled';
import '../../styles/RentalForm.css';
import GymImg from '../../images/Vector.png';
import CarImg from '../../images/car-side.png';
import PetsImg from '../../images/paw.png';
import FurnishedImg from '../../images/chair.png';


function RentalForm() {
    return (
        <Background>
            <FormContainer>
                <RentalHeader>
                    Find A Rental
                </RentalHeader>
                <InnerFormContainer>
                    <LeftSide>
                        <InputContainer>District <br />
                            <LargeInputSelect>
                                <option>All Of Auckland</option>
                            </LargeInputSelect>
                        </InputContainer>
                        <InputContainer>Property Type <br />
                            <LargeInputSelect>
                                <option>All</option>
                                <option>House</option>
                                <option>Townhouse</option>
                                <option>Apartment</option>
                            </LargeInputSelect>
                        </InputContainer>
                        <InputContainer>Bedrooms <br />
                            <DoubleInputContainer>
                                <SmallInputSelect>
                                    <option>Any</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </SmallInputSelect>
                                <Spacer><SpacerLine /></Spacer>
                                <SmallInputSelect>
                                    <option>Any</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5+</option>
                                </SmallInputSelect>
                            </DoubleInputContainer>
                        </InputContainer>
                    </LeftSide>
                    <RightSide>
                        <InputContainer>Suburb <br />
                            <LargeInputSelect>
                                <option>All Suburbs</option>
                                <option>Grey Lynn</option>
                                <option>Eden Terrace</option>
                                <option>St Mary's Bay</option>
                                <option>Mount Albert</option>
                                <option>Westmere</option>
                            </LargeInputSelect>
                        </InputContainer>
                        <InputContainer>Price <br />
                            <DoubleInputContainer>
                                <SmallInputSelect>
                                    <option>Any</option>
                                    <option>400</option>
                                    <option>500</option>
                                    <option>600</option>
                                    <option>700</option>
                                </SmallInputSelect>
                                <Spacer><SpacerLine /></Spacer>
                                <SmallInputSelect>
                                    <option>Any</option>
                                    <option>700</option>
                                    <option>800</option>
                                    <option>900</option>
                                    <option>1000+</option>

                                </SmallInputSelect>
                            </DoubleInputContainer>
                        </InputContainer>
                        <InputContainer>Bathrooms <br />
                            <DoubleInputContainer>
                                <SmallInputSelect>
                                    <option>Any</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </SmallInputSelect>
                                <Spacer><SpacerLine /></Spacer>
                                <SmallInputSelect>
                                    <option>Any</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5+</option>
                                </SmallInputSelect>
                            </DoubleInputContainer>
                        </InputContainer>
                    </RightSide>
                </InnerFormContainer>
                <SearchContainer>
                    Keywords <br />
                    <SearchBar type='text' placeholder="Add Keywords: eg. park, supermarket, bus stop"></SearchBar>
                </SearchContainer>
                <CheckboxContainer>
                    <CheckboxItems>
                        <label class="container">
                            <CarCheckboxImg src={CarImg}></CarCheckboxImg>
                            Car Park
                            <input type="checkbox"></input>
                            <span class="checkmark"></span>
                        </label>
                    </CheckboxItems>
                    <PetCheckboxItem>
                        <label class="container">
                            <CheckboxImg src={PetsImg}></CheckboxImg>
                            Pets Negotiable
                            <input type="checkbox"></input>
                            <span class="checkmark"></span>
                        </label>
                    </PetCheckboxItem>
                    <CheckboxItems>
                        <label class="container">
                            <CheckboxImg src={FurnishedImg}></CheckboxImg>
                            Furnished
                            <input type="checkbox"></input>
                            <span class="checkmark"></span>
                        </label>
                    </CheckboxItems>
                    <CheckboxItems>
                        <label class="container">
                            <CheckboxImg src={GymImg}></CheckboxImg>
                            Gym
                            <input type="checkbox"></input>
                            <span class="checkmark"></span>
                        </label>
                    </CheckboxItems>
                </CheckboxContainer>
                <SearchButton>Search</SearchButton>
            </FormContainer>
        </Background>
    );
};

export default RentalForm;