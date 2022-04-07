import React from 'react'
import '../../css/Footer/Footer.css'
import {words} from "../../words";
export default function Footer() {
    return (
        <footer className="d-flex justify-content-center align-items-center fw-bold fs-5">
            {words.footerTitle}
        </footer>
    )
}
