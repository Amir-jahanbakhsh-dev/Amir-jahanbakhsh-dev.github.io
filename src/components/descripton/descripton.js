import "./descripton.css";
import { motion } from "framer-motion";
export default function Desc(prop) {
  return (
    <div className="desc row pt-5 pb-5 p-3">
      <div className="text col-12 col-lg-9">
        <h3 className="h1">{prop.title}</h3>
        <div className="paragraph ">
          <p className="pElem ps-2">
            {prop.desc}
          </p>
        </div>
      </div>
      
    </div>
  );
}
