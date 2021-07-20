import { asyncLoader } from '../dist/index.js';

console.log('asyncLoader');
asyncLoader('test_lib.js').then(data => {
    data.render();
});