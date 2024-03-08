import styled from "styled-components";

export const Header = styled.header`
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

    box-sizing: content-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #FBF8CC;
    padding: 16px 96px 96px;
    
    h1 {
        font-size: 1.5rem;
        font-family: "Poppins", sans-serif;
        color: #03045E;
        font-weight: 600;
    }

    ul {
        display: flex;
        flex-direction: row;
    }

    ul li {
        margin: 0px 16px 0px;
    }

    img {
        width: 32px;
        height: 32px;
    }
`;

export const Main = styled.main`
    padding: 16px 96px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FBF8CC;
`;

export const DisplayText = styled.span`
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
    color: #03045E;
    font-weight: 600;

    &.large {
        font-size: 100px;
        font-weight: 800;

    }
    &.section {
        margin-top: 96px;
    }
`;

export const PrimaryButton = styled.button`
    margin: 16px 0px;
    width: 256px;   
    position: relative;
    border: 1px solid #474306;
    background-color: #F5EE84;
    font-size: 1.3rem;
    font-family: "Poppins", sans-serif;
    color: #03045E;
`;

export const Title = styled.h3`
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    color: #03045E;
    font-weight: 600;
`;

export const BodyText = styled.p`
    font-size:1.5rem;
    font-family: "Poppins", sans-serif;
    color: #03045E;
`;

export const Image = styled.img`
    width: 560px;
    height: 400px;

    &.square {
        width: 400px;
        height: 400px;
        margin: 0px 5rem;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;