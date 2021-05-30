import React, {useState} from "react";
import { ThemeProvider } from 'styled-components';
import { Wrapper, FormWrapper } from "./styledComponent";
import theme from "../../themes/colors.js";
import CustomButton from "../components/Button";
import CustomInput from "../components/Input";

const LoginPage = props => {
    const {
        signInRequest
    } = props

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const getInputValue = event => {
        const { name, value} = event.target;

        setUserData(preValue => ({
            ...preValue,
            [name]: value
        }));
    }

    const onSignIn = event => {
        event.preventDefault();

        signInRequest(userData);
        setUserData({
            username: '',
            password: ''
        })
    }

    return(
        <ThemeProvider theme={theme}>
            <Wrapper>
                <FormWrapper onSubmit={onSignIn}>
                    <CustomInput 
                        value={userData.username}
                        required={true}
                        name='username'
                        label='Login'
                        labelColor={theme.colorFont}
                        fontSize={25}
                        height={30}
                        width={50}
                        inputBackground={theme.colorFont}
                        handleChange={getInputValue}
                    />
                    <CustomInput 
                        type='password'
                        required={true}
                        value={userData.password}
                        name='password'
                        label='Password'
                        labelColor={theme.colorFont}
                        fontSize={25}
                        height={30}
                        width={50}
                        inputBackground={theme.colorFont}  
                        handleChange={getInputValue} 
                    />
                    <CustomButton 
                        type='submit'
                        height={30}
                        text='Sing in'
                    />
                </FormWrapper>
            </Wrapper>
        </ThemeProvider>
    );
};

export default React.memo(LoginPage);