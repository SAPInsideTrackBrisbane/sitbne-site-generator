import React from "react";
import "./PageBanner.css";

class PageBanner extends React.Component {
  render() {
    const { text } = this.props;
      if (text) {
          return <br/><h2 className="page-banner"><a className="page-banner" href={url}>{text}</a></h2>;
    }
    return null;
  }
}

export default PageBanner;
