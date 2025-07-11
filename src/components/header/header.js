import { forwardRef } from "react";
import "./header.css";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <nav className="header container-fluid row pt-5 mt-5  mb-5 pb-5 d-flex align-item-center  justify-content-center">
    
      <div className="sideText col-12 col-lg-6 ps-5 d-flex align-item-center  justify-content-center">
        <br/><br/><br/><br/>
        <h3 className="ptex">بهترین تعمیرگاه خودرو در اصفهان</h3>
        <h1> مکانیکی خودرو های داخلی و خارجی</h1>
      </div>
      <motion.div className="sideImage col-10 col-lg-4  d-flex align-item-center justify-content-center "
        animate={{  rotate: 2 }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <img className="wCos" src="/image/logojahan.png" alt="" />
      </motion.div>
    </nav>
  );
}
