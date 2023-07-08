import Heading from "./Heading";
import Footer from "./Footer";
import Contact from "./Contact";
import Section2 from "./Section2";
import Section6 from "./Section6";
import Section3 from "./Section3";
import Section4 from "./Section4";

export default function Front() {
    return (
        <>
            <Heading />
            <Section2 />
            <Section3 />
            <Section4 />
            <Contact />
            <Section6 />
            <Footer />
        </>
    );
}