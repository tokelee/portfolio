import styled from "styled-components";

export const MenuItem = styled.a `
    border: thin solid rgb(0, 255, 234); 
    color: rgb(0, 255, 234);
    margin: 5px;
    padding: 5px;
    width: 130px;
    text-align: center;
    cursor: pointer;
    font-size: small;
    
    &:hover{
        background-color: rgba(0, 255, 234, 0.1);
    }
`;