import React from "react";
import "./TagPageTitle.css";

class TagPageTitle extends React.Component {
  render() {
    const { text } = this.props;
    if (text) {
      return <h1 className="tag-page-title">{text}</h1>;
    }
    return null;
  }
}

export default TagPageTitle;
