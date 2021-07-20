import fetch from 'node-fetch';
const BASE_URL = 'https://github.com/kowarite/gh-host/raw/main/lib/';
export function loader(module, cb) {
    fetch(BASE_URL + module)
        .then((value) => {
        if (value.status !== 200)
            return cb(new Error(`The request returned a ${value.status}`), undefined);
        value.text()
            .then((data) => {
            import(`data:text/javascript;string,${data}`)
                .then((mod) => {
                return cb(undefined, mod);
            })
                .catch(e => cb(e, undefined));
        })
            .catch(e => cb(e, undefined));
    })
        .catch(e => cb(e, undefined));
}
export async function asyncLoader(module) {
    const value = await fetch(BASE_URL + module);
    if (value.status !== 200)
        throw new Error(`The request returned a ${value.status}`);
    const data = await value.text();
    const mod = await import(`data:text/javascript;string,${data}`);
    return mod;
}
