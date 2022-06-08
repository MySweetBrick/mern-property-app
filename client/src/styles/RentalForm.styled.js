import styled from "styled-components";

export const Background = styled.div`
    width: 1920px;
    height: 740px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormContainer = styled.div`
    width: 1600px;
    height: 700px;
    background-color: #fffafb;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`;

export const RentalHeader = styled.h1`
    color: #A71C1C;
    font-size: 40px;
    font-family: 'Open Sans';
    margin: 60px;;
`;

export const InnerFormContainer = styled.div`
    width: 781px;
    height: 250px;
    display: flex;
    flex-direction: row;
`;

export const LeftSide = styled.div`
    flex: 50%;
    display: flex;
    flex-direction: column;
`;

export const RightSide = styled.div`
    flex: 50%;
    display: flex;
    flex-direction: column;
`;

export const InputContainer = styled.div`
    flex: 33%;
    font-family: 'Open Sans';
    font-size: 20px;
    /* display: flex;
    flex-direction: row; */
`;

export const SearchButton = styled.button`
    box-sizing: border-box;
    background: #FFFFFF;
    width: 378px;
    height: 50px;
    border-radius: 4px;
    border: 3px solid #BF163D;
    font-family: 'Open Sans';
    font-size: 24px;
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.25));
    margin: 28px;
`;

export const SearchContainer = styled.div`
        font-family: 'Open Sans';
    font-size: 20px;
`;

export const SearchBar = styled.input`
    width: 778px;
    height: 50px;
    box-sizing: border-box;
    border: 1px solid #CED4DA;
    border-radius: 4px;
    font-family: 'Inter';
    font-size: 16px;
`;

export const CheckboxContainer = styled.div`
    width: 778px;
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const CheckboxItems = styled.div`
    flex: 23%;
    padding: 20px;
    white-space: nowrap;
    /* background-color: red; */
    font-family: 'Inter';

`;

export const PetCheckboxItem = styled.div`
    flex: 30%;
    padding: 20px;
    white-space: nowrap;
    /* background-color: red; */
    font-family: 'Inter';

`;

export const CheckboxImg = styled.img`
    width: 25px;
    height: 25px;
`;

export const CarCheckboxImg = styled.img`
    width: 25px;
    height: 25px;
`;

export const LargeInputSelect = styled.select`
    width: 378px;
    height: 50px;
    box-sizing: border-box;
    border: 1px solid #CED4DA;
    border-radius: 4px;
    font-family: 'Inter';
    font-size: 16px;
    color: #797979;
`;

export const SmallInputSelect = styled.select`
    width: 160px;
    height: 50px;
    box-sizing: border-box;
    border: 1px solid #CED4DA;
    border-radius: 4px;
    font-family: 'Inter';
    font-size: 16px;
    color: #797979;
`;

export const Spacer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 58px;
    height: 50px;
`;

export const SpacerLine = styled.div`
    width: 25px;
    height: 3px;
    background-color: #A5A5A5;
`;

export const DoubleInputContainer = styled.div`
    flex: 33%;
    font-family: 'Open Sans';
    font-size: 20px;
    display: flex;
    flex-direction: row;
`;