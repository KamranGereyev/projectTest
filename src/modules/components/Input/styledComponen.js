import styled from 'styled-components';

export const InputStyled = styled.div`
    height: 30%;
    width: 100%;
    ${props => props.display === 'inline' ?
     `display: flex;
     align-items: center;`
     :
     `display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;`
    }
`;

InputStyled.label = styled.p`
    min-width: 60px;
    font-size: ${props => props.fontSize}px;
    color: ${props => props.labelColor};
    margin: 0;
    margin-bottom: 20px;
`;

InputStyled.input = styled.input`
    height: ${props => props.height}px;
    width: ${props => props.width}%;
    font-size: ${props => props.fontSize}px;
    background: ${props => props.inputBackground};
    outline: none;
    border: none;
    border-radius: 10px;
`;
