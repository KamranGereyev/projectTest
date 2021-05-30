import React from "react";
import theme from "../../../themes/colors.js";
import { InputStyled } from "./styledComponen";

const Input = props => {
    const {
        type,
        name,
        label,
        width,
        value,
        height,
        display,
        checked,
        required,
        fontSize,
        labelColor,
        handleChange,
        inputBackground,
    } = props;

    return(
        <InputStyled display={display}>
        {label && 
        <InputStyled.label fontSize={fontSize} 
                            children={label}
                            labelColor={labelColor}
        />}
        <InputStyled.input 
            type={type}
            name={name}
            value={value}
            width={width}
            height={height}
            checked={checked}
            fontSize={fontSize}
            required={required}
            onChange={handleChange}
            inputBackground={inputBackground}
        />
    </InputStyled>
    )
}

Input.defaultProps = {
    type: 'text',
    width: 40,
    height: 25,
    display: 'block',
    fontSize: 18,
    required: false,
    value:'',
    inputBackground: theme.infoBack,
}

export default React.memo(Input);