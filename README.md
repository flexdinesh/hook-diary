# Hook Diary

Open collection of custom react hooks. 🔥

## Why? [![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](http://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action)

We all unfathomably love react hooks and all the glory it brings to the codebase. This repo is on a mission to collect all amazing custom hooks out there and put it in one place for everyone to access and applaud.

1. Complete source code - no referencing an npm package or repo URL.
2. One stop shop to draw inspiration/ideas to build your own hooks.
3. You get to show off your hooks - full credit to hook author.

## Add your hook to this repo

If you want to add your hook to this repo, create a PR with the following info.

1. Fork this repo
2. Add your hook source code as a `.js` file in `hooks` dir. (Eg. `useMeow.js`)
3. Add your name and twitter/github handles as comments at the end of the file.
4. Add your hook name and code in `README.md` file. Refer to other hooks and follow the same approach.

## Hooks

1. [useFormField](#useFormField)
2. [useLoading](#useLoading)
3. [useWindowWidth](#useWindowWidth)
4. [useInterval](#useInterval)

### useFormField

Author - [Dinesh Pandiyan](https://twitter.com/flexdinesh)

```js
export default function useFormField(initialVal = '') {
  const [val, setVal] = React.useState(initialVal);
  const [isValid, setValid] = React.useState(true);

  function onChange(e) {
    setVal(e.target.value);

    if (!e.target.value) {
      setValid(false);
    } else if (!isValid) setValid(true);
  }

  function setValidManually(bool = false) {
    setValid(bool);
  }

  return [val, onChange, isValid, setValidManually];
}
```

### useLoading

Wrap async calls and get their loading status.

Author - [Shawn Wang](https://twitter.com/swyx)

```js
export default function useLoading() {
  const [isLoading, setState] = React.useState(false);

  const load = (aPromise) => {
    setState(true);
    return aPromise
      .then((...args) => {
        setState(false);
        return Promise.resolve(...args);
      })
      .catch((...args) => {
        setState(false);
        return Promise.reject(...args);
      });
  };

  return [isLoading, load];
}
```

### useWindowWidth

Get current width from the `window` object.

Author - [Alex Anderson](https://twitter.com/ralex1993)

```js
export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const resize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  return windowWidth;
}
```

### useInterval

Invoke a function after a specified interval

Author - [Dan Abramov](https://twitter.com/dan_abramov)

```js
export default function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return () => {};
  }, [delay]);
}
```

## License

MIT license, Copyright (c) 2019 Dinesh Pandiyan.
