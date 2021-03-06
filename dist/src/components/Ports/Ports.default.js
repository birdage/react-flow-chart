"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var __1 = require("../../");
exports.PortsDefault = function (_a) {
    var children = _a.children;
    return (React.createElement("div", null,
        React.createElement(__1.PortsGroupDefault, { side: "top" }, children.filter(function (child) { return ['input', 'top'].includes(child.props.port.type); })),
        React.createElement(__1.PortsGroupDefault, { side: "bottom" }, children.filter(function (child) { return ['output', 'bottom'].includes(child.props.port.type); })),
        React.createElement(__1.PortsGroupDefault, { side: "right" }, children.filter(function (child) { return ['right'].includes(child.props.port.type); })),
        React.createElement(__1.PortsGroupDefault, { side: "left" }, children.filter(function (child) { return ['left'].includes(child.props.port.type); }))));
};
//# sourceMappingURL=Ports.default.js.map