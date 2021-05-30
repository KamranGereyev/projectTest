import React, { useState } from "react";
import CustomButton from "modules/components/Button";
import CustomInput from "modules/components/Input";
import { Wrapper, Container, InputsForm } from "./styledComponent";
import { ThemeProvider } from "styled-components";
import theme from "../../themes/colors";

const Header = props => {
    const {
        addTaskRequest
    } = props;

    const [taskData, setTaskData] = useState(
        {
            text: "",
            email: "",
            username: "",
        }
    );

    const getInputValue = e => {
        const { name, value } = e.target;
        setTaskData(preValue => {
            return {
                ...preValue,
                [name]: value
            }
        });
    }

    const addTask = e => {
        e.preventDefault();
        
        addTaskRequest(taskData)
        setTaskData({
            username: "",
            email: "",
            text: "",
        })
    }
    return(
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Container onSubmit={addTask}>
                    <InputsForm>
                        <CustomInput 
                            label="Name"
                            name="username"
                            required
                            width={80}
                            display="inline"
                            value={taskData.username}
                            handleChange={getInputValue}
                        />
                        <CustomInput
                            label="Email"
                            name="email"
                            required
                            type='email'
                            width={80}
                            display="inline"
                            value={taskData.email}
                            handleChange={getInputValue}
                        />
                        <CustomInput
                            label="Task"
                            name="text"
                            required
                            width={80}
                            display="inline"
                            value={taskData.text}
                            handleChange={getInputValue}
                        />
                        <CustomButton
                            type='submit'
                            height={30}
                            text='Add task'
                        />
                    </InputsForm>
                </Container>
            </Wrapper>
        </ThemeProvider>
    )
};

export default React.memo(Header);