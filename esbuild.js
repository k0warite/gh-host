import { buildSync } from 'esbuild';

buildSync({
    entryPoints: ['dist/frontend.js'],
    outfile: 'build/gh-host.js',
    bundle: true
});

buildSync({
    entryPoints: ['dist/frontend.js'],
    outfile: 'build/gh-host.min.js',
    bundle: true,
    minify: true,
});