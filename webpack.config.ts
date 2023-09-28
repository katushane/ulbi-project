import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPaths} from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode: BuildMode = env.mode || 'development';
    const PORT = env.port || 8000;

    const isDev = mode === 'development'


    return buildWebpackConfig({
        mode,
        paths,
        port: PORT,
        isDev,
    });
};