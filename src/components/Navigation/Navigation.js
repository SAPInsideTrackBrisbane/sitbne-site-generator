var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component, createElement, isValidElement } from "react";
import GetNavList from "./GetNavList";
import "./Navigation.css";
import SubscribeButton from "../SubscribeButton/SubscribeButton";
const Divider = () => null;
const Subheader = props => {
    const { primaryText } = props;
    return <h3>{primaryText}</h3>;
};
const ListItem = props => {
    const { primaryText, component } = props, remainingProps = __rest(props, ["primaryText", "component"]);
    return (<li className="nav-opened" role="presentation">
      {createElement(component, remainingProps, primaryText)}
    </li>);
};
const mapToListParts = (item, index) => {
    if (typeof item === "string" || typeof item === "number") {
        return createElement(ListItem, { key: item, primaryText: item });
    }
    else if (isValidElement(item)) {
        return item;
    }
    const { divider, subheader, nestedItems } = item, remainingProps = __rest(item, ["divider", "subheader", "nestedItems"]);
    let component;
    if (divider) {
        component = Divider;
    }
    else if (subheader) {
        component = Subheader;
    }
    else {
        component = ListItem;
    }
    const props = Object.assign({}, remainingProps, { key: item.key || index });
    if (nestedItems) {
        props.nestedItems = nestedItems.map(mapToListParts);
    }
    return createElement(component, props);
};
class Navigation extends Component {
    render() {
        const { config, onClose } = this.props;
        const navItems = GetNavList(config);
        return (<div>
        <div className="nav">
          <h3 className="nav-title">Menu</h3>
          <a href="#close" className="nav-close" onClick={onClose}>
            <span className="hidden">Close</span>
          </a>
          <ul>{navItems.map(mapToListParts)}</ul>
          <SubscribeButton url={config.siteRss}/>
        </div>
        <span className="nav-cover"/>
      </div>);
    }
}
export default Navigation;
