
import { forwardRef } from "react";
import "./service.css";
import { motion } from "framer-motion";

export default function Services(){
  return (
    <section className="container1 container-fluid">
      <h2  className="h1 title-service " id="clik-serv">ارائه خدمات تعمیرات خودروهای داخلی و خارجی</h2>
      <ul className="ulCont d-flex ">
        <li
          className="boxServ"
        >
          <i className="fas fa-oil-can"></i>
          <h3>تعمیرات موتور</h3>
        </li>
        <li
          className="boxServ"
        >
          <i className="fa fa-gear"></i>
          <h3>تعمیرات گیربکس</h3>
        </li>
        <li
          className="boxServ"
        >
          <i>☉</i>
          <h3>تراش دیسک روکار</h3>
        </li>
        <li
          className="boxServ"
        >
          <i className="fas fa-car-crash"></i>
          <h3>تعمیرات زیر و بند</h3>
        </li>
        <li
          className="boxServ"
        >
          <i className="fas fa-wrench"></i>
          <h3>تعمیرات جعبه فرمان</h3>
        </li>
        <li
          className="boxServ"
        >
          <i className="fa fa-car"></i>
          <h3>تعمیرات پلوس و اکسل</h3>
        </li>
      </ul>
    </section>
  );
}
