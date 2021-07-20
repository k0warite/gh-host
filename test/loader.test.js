import { loader } from '../dist/index.js';

describe('gh-host@01.0.0', () => {
    it('Callback loader', () => {
        loader('test_lib.js', (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    })
});