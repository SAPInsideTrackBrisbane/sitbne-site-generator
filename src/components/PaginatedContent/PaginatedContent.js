import React from "react";
import MainContent from "../MainContent/MainContent";
import Pagination from "../../components/Pagination/Pagination";
import "./PaginatedContent.css";
class PaginatedContent extends React.Component {
    render() {
        const { page, pages, prev, next, children } = this.props;
        let className = "";
        if (page > 1) {
            className = `${className} paged`;
        }
        return (<MainContent className={className}>
        
        <div className="extra-pagination inner">
          <Pagination page={page} pages={pages} prev={prev} next={next}/>
        </div>

        {children}

        
        <Pagination page={page} pages={pages} prev={prev} next={next}/>
      </MainContent>);
    }
}
export default PaginatedContent;
