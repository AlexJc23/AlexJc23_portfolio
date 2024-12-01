import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ModalProvider, Modal } from "../context/Modal";
// import { thunkAuthenticate } from "../redux/session";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";


export default function Layout() {

  const [isLoaded, setIsLoaded] = useState(true);
//   useEffect(() => {
//     dispatch(thunkAuthenticate()).then(() => setIsLoaded(true));
//   }, [dispatch]);

  return (
    <>
      <ModalProvider>
        <Nav />
        {isLoaded && <Outlet />}
        <Footer />
        <Modal />
      </ModalProvider>
    </>
  );
}
