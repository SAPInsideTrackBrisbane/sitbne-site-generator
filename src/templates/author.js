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
import AuthorImage from "../components/AuthorImage/AuthorImage";
import AuthorProfile from "../components/AuthorProfile/AuthorProfile";
import AuthorName from "../components/AuthorName/AuthorName";
import AuthorBio from "../components/AuthorBio/AuthorBio";
import AuthorMeta from "../components/AuthorMeta/AuthorMeta";
import AuthorLocation from "../components/AuthorLocation/AuthorLocation";
import AuthorWebsite from "../components/AuthorWebsite/AuthorWebsite";
import AuthorStats from "../components/AuthorStats/AuthorStats";
import Footer from "../components/Footer/Footer";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";
import Layout from "../components/layout";
class AuthorTemplate extends React.Component {
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
        const { author, cover } = this.props.pageContext;
        const postEdges = this.props.data.allMarkdownRemark &&
            this.props.data.allMarkdownRemark.edges
            ? this.props.data.allMarkdownRemark.edges
            : [];
        const authorsEdges = this.props.data.allAuthorsJson && this.props.data.allAuthorsJson.edges
            ? this.props.data.allAuthorsJson.edges
            : [];
        const getAuthor = () => authorsEdges[0].node;
        return (<Layout location={this.props.location}>
        <Drawer className="author-template" isOpen={this.state.menuOpen}>
          <Helmet title={`Posts by "${author}" | ${config.siteTitle}`}/>

          
          <Navigation config={config} onClose={this.handleOnClose}/>

          <SiteWrapper>
            <MainHeader className="author-head" cover={cover}>
              <MainNav>
                <BlogLogo logo={config.siteLogo} title={config.siteTitle}/>
                <MenuButton navigation={config.siteNavigation} onClick={this.handleOnClick}/>
              </MainNav>
            </MainHeader>

            <AuthorProfile className="inner">
              <AuthorImage author={getAuthor()}/>
              <AuthorName name={getAuthor().name}/>
              <AuthorBio bio={getAuthor().bio}/>
              <AuthorMeta>
                <AuthorLocation location={getAuthor().location}/>
                <AuthorWebsite url={getAuthor().url}/>
              </AuthorMeta>
              <AuthorStats postEdges={postEdges}/>
            </AuthorProfile>

            
            <PostListing postEdges={postEdges} postAuthors={authorsEdges}/>

            
            <SocialMediaIcons urls={getAuthor().socialUrls}/>

            
            <Footer copyright={config.copyright} promoteGatsby={config.promoteGatsby}/>
          </SiteWrapper>
        </Drawer>
      </Layout>);
    }
}
export default AuthorTemplate;
