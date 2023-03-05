import React from "react";
import ChangeLanguage from "./ChangeLanguage";
import { withTranslation } from "react-i18next";
import "./NavBar.css"
import useToken from "../hooks/useToken";

const NavBar = (props) => {
    const {t, token} = props

    return (
        <nav>
            <ul className="list-item">
                <li><a href="/nsbe-hacks">{t("Home")}</a></li>
                <li><a href="/nsbe-hacks/login">{t("Login")}</a></li>
                <li><a href="/nsbe-hacks/signup">{t("Sign Up")}</a></li>
                <li><a href="/nsbe-hacks/video2">{t("Party")}</a></li>
                <li><a href="/nsbe-hacks/video">{t("Video")}</a></li>
                <li><a href="/nsbe-hacks/video4">{t("Pin Vid")}</a></li>
                
            </ul>
        </nav>
    );
};

export default withTranslation()(NavBar);
