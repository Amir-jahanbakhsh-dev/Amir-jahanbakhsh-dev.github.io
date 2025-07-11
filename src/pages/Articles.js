import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Articless from "../components/Articles/Articless";

export default function Articles(){
    return(
        <section className="mt-5">
            <Navbar/>
            <Articless/>
            <Footer/>
        </section>
    )
}