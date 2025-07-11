import "./blitRezerv.css";
import blitControler from "./blitScript";
export default function Blit() {
  
  return (
    <section className="Blit">
      <h3 className="mb-5 pb-3">اطلاعات فرم زیر را برای ثبت نوبت وارد کنید</h3>
      <form action="">
        <label>
          نام و نام خانوادگی:
          <input id="name" type="text" placeholder="نام و نام خانوادگی" />
        </label>
        <label>
          شماره تماس :
          <input id="phone" type="text" placeholder="شماره تماس" />
        </label>
        <label id="">
          مشکل خود را شرح دهید:
          <input id="problem"  type="text" placeholder="شرح مشکل" />
        </label>
        <label>
          نام ماشین:
          <select id="car" className="car">
            <option className="carType" type="str" value="پژو پارس">
              پژو پارس
            </option>
            <option className="carType" type="str" value="سمند">
              سمند
            </option>
            <option className="carType" type="str" value="پژو405">
              پژو405
            </option>
            <option className="carType" type="str" value="خودرو کلاسسیک">
              خودرو کلاسسیک
            </option>
            <option className="carType" type="str" value="پراید">
              پراید
            </option>
            <option className="carType" type="str" value="دیگر محصولات سایپا">
              دیگر محصولات سایپا
            </option>
            <option
              className="carType"
              type="str"
              value="دیگر محصولات ایرانخودرو"
            >
              دیگر محصولات ایرانخودرو
            </option>
          </select>
        </label>
        <button className="btn btn-danger" onClick={blitControler}>
          ارسال درخواست نوبت
        </button>
      </form>
    </section>
  );
}
