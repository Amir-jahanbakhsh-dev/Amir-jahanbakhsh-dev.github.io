import "./footer.css";

export default function Footer() {
  return (
    <footer class="footer bg-dark-cos text-white text-right p-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3 me-5">
            <h4>جهان تکنیک</h4>
            <p>ما به عنوان خدمات پیشرو در اصفهان، اطمینان داریم که در وقت و هزینه شما صرفه جویی خواهیم کرد. بیش از هر چیز دیگری ، ما تلاش می کنیم یک تجربه برتر را ارائه دهیم</p>
          </div>
          <div class="col-md-3 me-5">
            <h4>مارا در نقشه ببینید</h4>
            <a blank href="https://maps.app.goo.gl/kxgJMwRJruvhgThx5"><img src="./image/map.png" className="mapsAdress" alt="" /></a>
          </div>
          <div class="col-md-3">
            <h4>تماس با ما</h4>
            <p>09935566903 - 09308716037</p>
            <a href="https://www.instagram.com/mohamad_jahan_536/"><p>@mohamad_jahan_536</p></a>
          </div>
        </div>
        <hr  className="container-fluid"/>
        <div className="lastText d-flex justify-content-between">
        <p>&#xa9; کلیه ی حقوق متعلق به جهان تکنیک</p>
        <span>جهت ثبت سفارش طراحی سایت خود به صورت اختصاصی  به پیج ما مراجعه کنید <a href='https://www.instagram.com/abolfazl_jahanbakhsh._.pv/'>پیج ما</a></span>
        </div>
      </div>

    </footer>
  );
}
