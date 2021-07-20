import { loader } from '../dist/index.js';

console.log('loader');
loader('test_lib.js', (err, data) => {
    if (err) throw err;
    data.render();
});