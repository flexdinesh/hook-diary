export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const resize = () => setWindowWidth(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  return windowWidth;
}

/*
  Author: Alex Anderson
  GitHub: https://github.com/alexanderson1993
  Twitter: https://twitter.com/ralex1993
*/
