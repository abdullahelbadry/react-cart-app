import React from 'react';
import "../../css/Header/Header.css";
import {words} from "../../words";

export default function Header() {
    return (
        <header className="d-flex justify-content-center align-items-center fw-bold fs-5">
            {words.headerTitle}
        </header>
    )
}
