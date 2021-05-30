import React from "react";
import theme from "themes/colors";
import { ButtonStyled } from "./styledComponents";

const Button = props => {
    const {
        type,
        text,
        width,
        height,
        fontSize,
        handleEvent,
        buttonBack,
        buttonBackHover,
        buttonBackActive,
    } = props;

    return(
        <ButtonStyled
            width={width}
            height={height}
            type={type}
            fontSize={fontSize}
            onClick={handleEvent}
            buttonBack={buttonBack}
            buttonBackHover={buttonBackHover}
            buttonBackActive={buttonBackActive}
        >
            {text}
        </ButtonStyled>
    );
};

Button.defaultProps = {
    text: 'button',
    type: 'button',
    width: 100,
    height: 25,
    fontSize: 18,
    buttonBack: theme.buttonBack,
    buttonBackHover: theme.buttonBackHover,
    buttonBackdActive: theme.buttonBackActive,
}

export default React.memo(Button);