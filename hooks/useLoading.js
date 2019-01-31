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

/*
  Author: Shawn Wang
  GitHub: https://github.com/sw-yx
  Twitter: https://twitter.com/swyx
*/
