import React from "react";
import "./TagPageDescription.css";

class TagPageDescription extends React.Component {
  render() {
    const { text } = this.props;
    if (text) {
      return <h2 className="tag-page-description">{text}</h2>;
    }
    return null;
  }
}

export default TagPageDescription;
