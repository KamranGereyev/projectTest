import styled from 'styled-components';

export const ButtonStyled = styled.button`
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    font-size: ${props => props.fontSize}px;
    background: ${props => props.buttonBack};
    outline: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    :hover{
        background: ${props => props.buttonBackHover};
    }
    :active{
        background: ${props => props.buttonBackdActive};
    }
`;
