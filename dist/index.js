import fetch from 'node-fetch';
const BASE_URL = 'https://github.com/kowarite/gh-host/raw/master/public/';
export function loader(module, cb) {
    fetch(`${BASE_URL}/${module}`).then((value) => {
        if (value.status !== 200)
            return cb(new Error(`The request returned a ${value.status}`), undefined);
        value.text().then((data) => {
            const mod = '';
            console.log(data);
        })
            .catch(e => cb(e, undefined));
    }).catch(e => cb(e, undefined));
}
