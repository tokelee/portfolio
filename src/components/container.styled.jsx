import styled from "styled-components";

export const Container = styled.div `
    border: 5px solid rgb(0, 255, 234);
    margin: 70px;
    padding: 30px;

    @media (max-width: 900px) {
        border: 3.5px solid rgb(0, 255, 234);
        margin: 20px;
        padding: 20px;
    }
`;