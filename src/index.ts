import type { Callback, Module } from '../types/index';
import fetch, { Response } from 'node-fetch';

const BASE_URL = 'https://github.com/kowarite/gh-host/raw/master/public/';

export function loader(module: Module, cb: Callback) {
    fetch(`${BASE_URL}/${module}`).then((value: Response) => {
        if (value.status !== 200) return cb(new Error(`The request returned a ${value.status}`), undefined);

        value.text().then((data: string) => {
            const mod = '';
            console.log(data);
        })
        .catch(e => cb(e, undefined));
    }).catch(e => cb(e, undefined));
}