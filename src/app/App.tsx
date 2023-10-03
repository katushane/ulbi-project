import React from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classnames/classnames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true, some: true}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};

