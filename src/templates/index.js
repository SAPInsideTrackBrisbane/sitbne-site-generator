import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-scroll";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Drawer from "../components/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../components/SiteWrapper/SiteWrapper";
import Footer from "../components/Footer/Footer";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import PageTitle from "../components/PageTitle/PageTitle";
import PageDescription from "../components/PageDescription/PageDescription";
import PaginatedContent from "../components/PaginatedContent/PaginatedContent";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";
import Layout from "../components/layout";
class IndexTemplate extends React.Component {
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
        const { nodes, page, pages, total, limit, prev, next } = this.props.pageContext;
        const authorsEdges = this.props.data.authors.edges;
        return (<Layout location={this.props.location}>
        <Drawer className="home-template" isOpen={this.state.menuOpen}>
          <Helmet title={config.siteTitle}/>
          <SEO postEdges={nodes}/>

          
          <Navigation config={config} onClose={this.handleOnClose}/>

          <SiteWrapper>
            
            <div className="home-template">
              
              <MainHeader cover={config.siteCover}>
                <MainNav overlay={config.siteCover}>
                  <BlogLogo logo={config.siteLogo} title={config.siteTitle}/>
                  <MenuButton navigation={config.siteNavigation} onClick={this.handleOnClick}/>
                </MainNav>
                <div className="vertical">
                  <div className="main-header-content inner">
                    <PageTitle text={config.siteTitle}/>
                    <PageDescription text={config.siteDescription}/>
                    <SocialMediaIcons urls={config.siteSocialUrls} color="currentColor"/>
                  </div>
                </div>
                <Link className="scroll-down icon-arrow-left" to="content" data-offset="-45" spy smooth duration={500}>
                  <span className="hidden">Scroll Down</span>
                </Link>
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
/* eslint no-undef: "off" */
/*export const pageQuery = graphql `
  query IndexQuery2 {
    # posts data comes from the context
    # authors
    authors: allAuthorsJson {
      edges {
        node {
          uid
          name
          image
          url
          bio
        }
      }
    }
  }
`;*/
export default IndexTemplate;
