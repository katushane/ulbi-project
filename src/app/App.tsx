import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classnames/classnames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true, some: true}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to='/' >Главная</Link>
            <Link to='/about'>О сайте</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/' element={<MainPage />} />
                    </Routes>
                </Suspense>

            {/*<Counter />*/}
        </div>
    );
};

