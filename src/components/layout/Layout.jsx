import { Footer } from "./footer/Footer";

function Layout(props) {
  return (
    <>
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
