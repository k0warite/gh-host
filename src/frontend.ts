import type { Callback, Module } from '../types/index';

const BASE_URL = 'https://github.com/k0warite/gh-host/raw/main/lib/';

function removeComments(str: string) {
    return str.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'').trim();
}

export function loader(module: Module, cb: Callback) {
    fetch(BASE_URL + module)
    .then((value: Response) => {
        if (value.status !== 200) return cb(new Error(`The request returned a ${value.status}`), undefined);

        value.text()
        .then((data: string) => {
            import(`data:text/javascript;string,${removeComments(data)}`)
            .then((mod) => {
                return cb(undefined, mod);
            })
            .catch(e => cb(e, undefined));
        })
        .catch(e => cb(e, undefined));
    })
    .catch(e => cb(e, undefined));
}

export async function asyncLoader(module: Module) {
    const value: Response = await fetch(BASE_URL + module);
    if (value.status !== 200) throw new Error(`The request returned a ${value.status}`);

    const data = await value.text();
    const mod = await import(`data:text/javascript;string,${removeComments(data)}`);

    return mod;
}