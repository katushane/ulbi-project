import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        alias: {},
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        mainFiles: ['index'],
        modules: [options.paths.src, 'node_modules']
    }
}