import React from "react";
import { Wrapper, PagesWrapper } from "./styledComponent";

const Paginator = props => {
    const {
        handlePage,
        currentPage,
        pageQuantity,
    } = props;

    const pageList = Array.from(Array(pageQuantity+1).keys()).slice(1);

    return (
        <Wrapper data-at={"wrapper-container"}>
        <PagesWrapper>
            {pageList.map(page => (
                <PagesWrapper.pageNumber
                    id={page}
                    key={page}
                    onClick={handlePage}
                    children={page}
                    currentPage={+currentPage === page ? true: false}
                />
            ))    
            }
        </PagesWrapper>
    </Wrapper>
    )
};

Paginator.defaultProps = {
    pageQuantity: 0,
}

export default React.memo(Paginator);