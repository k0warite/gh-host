(() => {
  // dist/frontend.js
  var BASE_URL = "https://github.com/k0warite/gh-host/raw/main/lib/";
  function removeComments(str) {
    return str.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "").trim();
  }
  function loader(module, cb) {
    fetch(BASE_URL + module).then((value) => {
      if (value.status !== 200)
        return cb(new Error(`The request returned a ${value.status}`), void 0);
      value.text().then((data) => {
        import(`data:text/javascript;string,${removeComments(data)}`).then((mod) => {
          return cb(void 0, mod);
        }).catch((e) => cb(e, void 0));
      }).catch((e) => cb(e, void 0));
    }).catch((e) => cb(e, void 0));
  }
  async function asyncLoader(module) {
    const value = await fetch(BASE_URL + module);
    if (value.status !== 200)
      throw new Error(`The request returned a ${value.status}`);
    const data = await value.text();
    const mod = await import(`data:text/javascript;string,${removeComments(data)}`);
    return mod;
  }
})();
