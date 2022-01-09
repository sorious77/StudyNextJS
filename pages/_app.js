import NavBar from "../Components/NavBar";

export default ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps}></Component>

      <style jsx global>{`
        .active {
          background-color: #6c5ce7;
          color: white;
          border-radius: 5px;
        }

        a {
          text-decoration: none;
          margin-right: 10px;
          color: #6c5ce7;
        }
      `}</style>
    </>
  );
};
