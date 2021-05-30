import styled from "styled-components";

export const Wrapper = styled.div`
    width: 30%;
    height: 30%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    box-shadow: ${props => props.theme.mainBoxShadow};
    border-radius: 25px;
    background: white;
    box-sizing: border-box;
`;

export const Container = styled.form`
    height: 90%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const InputsForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;