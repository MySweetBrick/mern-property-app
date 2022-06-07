import React from 'react';
import {
    Background,
    FormContainer,
    RentalHeader,
    InnerFormContainer,
    LeftSide,
    RightSide,
    InputContainer,
    LargeInputForm,
    SmallInputForm,
    SearchButton,
    SearchContainer,
    SearchBar,
    CheckboxContainer,
    CheckboxItems,
    CheckboxImg,
    CarCheckboxImg,
} from '../styles/RentalForm.styled';
import '../styles/RentalForm.css';
import GymImg from '../images/Vector.png';
import CarImg from '../images/CAR.png';
import PetsImg from '../images/paw.png';
import FurnishedImg from '../images/chair.png';


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
                            <LargeInputForm type="text" placeholder='All of Auckland'>
                            </LargeInputForm>
                        </InputContainer>
                        <InputContainer>Property Type <br />
                            <LargeInputForm type="text" placeholder='All'></LargeInputForm>
                        </InputContainer>
                        <InputContainer>Bedrooms <br />
                            <SmallInputForm type="text" placeholder='Any'></SmallInputForm>
                            -
                            <SmallInputForm type="text" placeholder='Any'></SmallInputForm>
                        </InputContainer>
                    </LeftSide>
                    <RightSide>
                        <InputContainer>Suburb <br />
                            <LargeInputForm type="text" placeholder='All Suburb'></LargeInputForm>
                        </InputContainer>
                        <InputContainer>Price <br />
                            <SmallInputForm type="text" placeholder='Any'></SmallInputForm>
                            -
                            <SmallInputForm type="text" placeholder='Any'></SmallInputForm></InputContainer>
                        <InputContainer>Bathrooms <br />
                            <SmallInputForm type="text" placeholder='Any'></SmallInputForm>
                            -
                            <SmallInputForm type="text" placeholder='Any'></SmallInputForm></InputContainer>
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
                    <CheckboxItems>
                        <label class="container">
                            <CheckboxImg src={PetsImg}></CheckboxImg>
                            Pets Negotiable
                            <input type="checkbox"></input>
                            <span class="checkmark"></span>
                        </label>
                    </CheckboxItems>
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