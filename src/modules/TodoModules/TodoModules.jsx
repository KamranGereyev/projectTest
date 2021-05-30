import React, { useEffect } from "react";
import { Link }  from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { TodoWrapper, MainWrapper } from "./styledComponent";
import theme from "../../themes/colors.js";
import Header from "../Header";
import { configSite } from "../config";
import CustomTable  from "../components/Table";
import CustomButton from "../components/Button";
import CustomPaginator from "./component/CustomPaginator";

const TodoModule = props => {
    const {
        tasks,
        logOut,
        isLogged,
        changePage,
        currentPage,
        pageQuantity,
        checkUserStatus,
        getTasksRequest,
        sortFieldRequest,
        openEditTaskModal,
    } = props;

    useEffect(() => {
        getTasksRequest();
        checkUserStatus();
    }, [getTasksRequest, checkUserStatus])

    const sortField = event => {
        sortFieldRequest(event.target.getAttribute('name')) 
    }

    const handlePage = event => {
        const { id } = event.target;
        changePage(id);
    }

    const onOpenModal = event => {
        if (isLogged) {
            let currentElement = event.target;

            if (!(currentElement.tagName === 'DIV')) {
                currentElement = currentElement.parentElement
            } 
            const taskId = currentElement.id;
            const taskText = currentElement.children[2].innerText;
            const taskStatus = currentElement.children[3].innerText;

            const taskData = {
                taskId,
                taskText,
                taskStatus
            }

            openEditTaskModal(taskData);
        }
    }

    const setTaskStatusFormat = taskStatus => {
        if(taskStatus === 0){
            return "task isn't completed"
        } else if (taskStatus === 1) {
            return "task isn't completed, edited by admin"
        } else if (taskStatus === 10) {
            return 'task is completed'
        } else if (taskStatus === 11) {
            return 'task is edited by admin and completed'
        }
    }

    const { columns } = configSite;

    return(
        <ThemeProvider theme={theme}>
            <MainWrapper>        
                <MainWrapper.ButtonWrapper>
                    <Link to='/login'>
                        <CustomButton
                            text={isLogged ? 'Log out' : 'Sign in'}
                            height={30}
                            handleEvent={isLogged && logOut}
                        />
                    </Link>
                </MainWrapper.ButtonWrapper>       
                <Header />
                <TodoWrapper data-at={'todo-module-conatiner'}>
                    <CustomTable
                        rows={tasks}
                        isLogged={isLogged}
                        onOpenModal={onOpenModal}
                        sortHandle={sortField}
                        columns={columns}
                        setTaskStatusFormat={setTaskStatusFormat}
                    />
                    <CustomPaginator
                        handlePage={handlePage}
                        currentPage={currentPage}
                        pageQuantity={pageQuantity}
                    /> 
                </TodoWrapper>
            </MainWrapper>
        </ThemeProvider>
    )
}

export default React.memo(TodoModule);