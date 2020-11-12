import React, { Component } from 'react'
import HeaderImg from "../../Images/chrome-capture.jpg"
import "../../Styles/Header.css"
import {Image} from "bumbag"
import {Panel} from "rsuite"

export default class HeaderImage extends Component {
    render() {
        return (
            <div className="HeaderImage img-fluid">
                <Panel>
                <Image src={HeaderImg} alt="OLX" className="img-fluid fluid" />
                </Panel>
            </div>
        )
    }
}
