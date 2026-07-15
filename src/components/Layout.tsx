import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="content container">
        <Outlet />
      </main>
      <div className="container">
        <Footer />
      </div>
    </>
  );
}
