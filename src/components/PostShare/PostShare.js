import React from "react";
//import { ShareButtons } from "react-share";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import "./PostShare.css";
const formatSiteUrl = (siteUrl, pathPrefix, path) => siteUrl + (pathPrefix === "/" ? "" : pathPrefix) + path;
/*
 const getCover = post => {
   const { cover } = post;
   if (cover && cover.childImageSharp && cover.childImageSharp.original) {
     return cover.childImageSharp.original.src;
   }
   return "";
 };*/
class PostShare extends React.Component {
    render() {
        const { postNode, postPath, config } = this.props;
        const post = postNode.frontmatter;
        const url = formatSiteUrl(config.siteUrl, config.pathPrefix, postPath);
        /* const { FacebookShareButton, GooglePlusShareButton, 
        // PinterestShareButton,
        TwitterShareButton } = ShareButtons; */
        return (<section className="share">
        <h4>Share this post</h4>
        <div style={{ display: "flex" }}>
          <TwitterShareButton url={url} title={post.title}>
            <a className="icon-twitter" style={{ fontSize: "1.4em" }}>
              <span className="hidden">Twitter</span>
            </a>
          </TwitterShareButton>
          <FacebookShareButton url={url} quote={post.title}>
            <a className="icon-facebook" style={{ fontSize: "1.4em" }}>
              <span className="hidden">Facebook</span>
            </a>
          </FacebookShareButton>
        </div>
      </section>);
    }
}
export default PostShare;
