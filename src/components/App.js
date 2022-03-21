import { useState } from "react";

import "./../css/reset.css";
import "./../css/style.css";

import ScreenOne from "./ScreenOne.js";
import ScreenTwo from "./ScreenTwo.js";

export default function App() {
    const [screen, setScreen] = useState(1);

    return (
        <>
            {
                screen === 1 ?
                    <ScreenOne setScreen={setScreen} />
                    :
                    <ScreenTwo setScreen={setScreen} />
            }
        </>
    );
}