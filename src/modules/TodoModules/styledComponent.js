import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${props => props.theme.mainBack};
`;

export const TodoWrapper = styled.div`
    width: 60%;
    height: 40%;
    box-shadow: ${props => props.theme.mainBoxShadow};
    border-radius: 25px;
    background: white;
    padding: 10px;
    box-sizing: border-box;
`;

MainWrapper.ButtonWrapper = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
`;

MainWrapper.TodoWrapper = TodoWrapper;