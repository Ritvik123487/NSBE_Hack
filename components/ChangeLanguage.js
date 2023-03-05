import React from "react";
import i18n from "./../i18n";

const ChangeLanguage = () => {
    const handleClickEn = () => {
        i18n.changeLanguage("en");
    }

    const handleClickFr = () => {
        i18n.changeLanguage("fr");
    }

    return (
        <div>
            <button onClick={handleClickEn}>english</button>
            <button onClick={handleClickFr}>francais</button>
        </div>
    );
}

export default ChangeLanguage