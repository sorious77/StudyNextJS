import NavBar from "./NavBar";

export default ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};
