function MyApp({ Component, pageProps }) {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
