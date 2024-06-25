import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import Layout from "../components/layout";
class CategoryTemplate extends React.Component {
    render() {
        const category = this.props.pageContext.category;
        const postEdges = this.props.data.allMarkdownRemark.edges;
        const authorsEdges = this.props.data.authors.edges;
        return (<Layout location={this.props.location}>
        <div className="category-container">
          <Helmet title={`Posts in category "${category}" | ${config.siteTitle}`}/>
          <PostListing postEdges={postEdges} postAuthors={authorsEdges}/>
        </div>
      </Layout>);
    }
}
export default CategoryTemplate;
