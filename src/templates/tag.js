import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import Drawer from "../components/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../components/SiteWrapper/SiteWrapper";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import PageTitle from "../components/PageTitle/PageTitle";
import PageDescription from "../components/PageDescription/PageDescription";
import Footer from "../components/Footer/Footer";
import PaginatedContent from "../components/PaginatedContent/PaginatedContent";
import Layout from "../components/layout";
class TagTemplate extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            menuOpen: false
        };
        this.handleOnClick = evt => {
            evt.stopPropagation();
            if (this.state.menuOpen) {
                this.closeMenu();
            }
            else {
                this.openMenu();
            }
        };
        this.handleOnClose = evt => {
            evt.stopPropagation();
            this.closeMenu();
        };
        this.openMenu = () => {
            this.setState({ menuOpen: true });
        };
        this.closeMenu = () => {
            this.setState({ menuOpen: false });
        };
    }
    render() {
        const { tag, nodes, page, pages, total, limit, prev, next } = this.props.pageContext;
        const authorsEdges = this.props.data.authors.edges;
        return (<Layout location={this.props.location}>
        <Drawer isOpen={this.state.menuOpen}>
          <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`}/>

          
          <Navigation config={config} onClose={this.handleOnClose}/>
          <SiteWrapper>
            
            <div className="tag-template">
              
              <MainHeader className="tag-head" cover={tag.featureImage}>
                <MainNav>
                  <BlogLogo logo={config.siteLogo} title={config.siteTitle}/>
                  <MenuButton navigation={config.siteNavigation} onClick={this.handleOnClick}/>
                </MainNav>
                <div className="vertical">
                  <div className="main-header-content inner">
                    <PageTitle text={tag}/>
                    <PageDescription text={tag.description || `A ${total}-post collection`}/>
                  </div>
                </div>
              </MainHeader>

              <PaginatedContent page={page} pages={pages} total={total} limit={limit} prev={prev} next={next}>
                
                <PostListing postEdges={nodes} postAuthors={authorsEdges}/>
              </PaginatedContent>
            </div>
            
            <Footer copyright={config.copyright} promoteGatsby={config.promoteGatsby}/>
          </SiteWrapper>
        </Drawer>
      </Layout>);
    }
}
export default TagTemplate;
