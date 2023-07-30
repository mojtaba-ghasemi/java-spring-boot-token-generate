import React, { useState, useRef, useEffect } from "react";
import {Col} from "react-bootstrap";
import "./index.scss";

export default function PairBox(props) {

    return (
        <div className={"PairBox " + (props.className ? props.className : "")} style={props.style}
             onClick={() => props.onClick(props.name, props.value)}>
            <span className="pairbox-name me-1">
                {props.name}
            </span>
            <span>:</span>
            <span className="pairbox-value ms-2">
                {props.value}
            </span>
            {
                !props.forInfo &&
                <i className="pairbox-close bi-x ms-1"></i>
            }

        </div>
    );
}