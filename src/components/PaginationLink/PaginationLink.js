var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from "react";
import { Link } from "gatsby";
import "./PaginationLink.css";
class PaginationLink extends React.Component {
    render() {
        if (this.props.url) {
            let className = "nav-link";
            if (this.props.className) {
                className = `${className} ${this.props.className}`;
            }
            // Clone this.props and then delete Component specific
            // props so we can spread the rest into the img.
            const rest = __rest(this.props, []);
            delete rest.style;
            delete rest.className;
            delete rest.text;
            delete rest.url;
            return (<Link to={this.props.url} {...rest} className={className}>
          {this.props.text}
        </Link>);
        }
        return null;
    }
}
export default PaginationLink;
