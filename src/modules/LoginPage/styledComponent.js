import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${props => props.theme.mainBoxShadow};
    background: ${props => props.theme.mainBack};
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
`;

export const FormWrapper = styled.form`
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

export const ButtonWrapper = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
`;
