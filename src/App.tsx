import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classnames/classnames";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true, some: true}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to='/' >Главная</Link>
            <Link to='/about'>О сайте</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/about' element={<AboutPageAsync />} />
                        <Route path='/' element={<MainPageAsync />} />
                    </Routes>
                </Suspense>

            {/*<Counter />*/}
        </div>
    );
};

