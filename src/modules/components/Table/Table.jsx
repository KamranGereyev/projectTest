import React from "react";
import theme from "../../../themes/colors.js";
import { ThemeProvider } from 'styled-components';
import { 
    Row,
    Rows,
    TableStyled,
    TableHeader,
} from "./styledComponent";

const Table = props => {
    const {
        rows,
        columns,
        isLogged,
        sortHandle,
        onOpenModal,
        setTaskStatusFormat
    } = props;

    return (
        <ThemeProvider theme={theme}>
        <TableStyled>
            <TableStyled.TableHeader>
                {columns.map(title => (
                    <TableHeader.columnTitle 
                        key={title.id}  
                        name={title.name}  
                        children={title.text}
                        onClick={sortHandle}
                        id={title.id}
                    />
                ))}
            </TableStyled.TableHeader>
            <Rows>
            {rows.map(rowInfo => (
                <TableStyled.Row 
                    id={rowInfo.id} 
                    key={rowInfo.id} 
                    isLogged={isLogged} 
                    onClick={onOpenModal} 
                > 
                    <Row.rowInfo children={rowInfo.username}/>
                    <Row.rowInfo children={rowInfo.email}/>
                    <Row.rowInfo children={rowInfo.text}/>
                    <Row.rowInfo children={setTaskStatusFormat(rowInfo.status)}/>
                </TableStyled.Row> 
            ))}
            </Rows>
        </TableStyled>
        </ThemeProvider>
    );
};

export default Table;