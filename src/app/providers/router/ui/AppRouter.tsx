import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (
                    <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
                ))}
                <Route path='/about' element={<AboutPage />} />
                <Route path='/' element={<MainPage />} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;