import "./navbar.css";

export default function khanehNavbar() {
  window.onscroll=()=>{
    if (window.scrollY>=700) {
      document.querySelector(".nav1").setAttribute("id","anime1")
    }else{
      document.querySelector(".nav1").removeAttribute("id")
    }
  }
  return (
    <div className="row-cols-12 p-0 m-0">
      <nav  class=" navbar nav1 navbar-expand-lg navbar-light  costom-navbar bg-dark col-11 ">
        <div class="container">
          <a href="/">
          <img
            
            class="img-fluid col-1 logo"
            src="./image/logojahan.png"
            alt=""
          />
          </a>
          <button
            class="navbar-toggler customstylebtnHambergeri"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse tablet-background"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-4  ulCostom">
              <li class="hoverItemLi nav-item  p-3 me-0 me-md-2 me-lg-0 me-xxl-4 ms-2">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="/#khaneh"
                >
                  خانه
                </a>
              </li>
              <li class="hoverItemLi nav-item  p-3 me-0 me-md-2 me-lg-0 me-xxl-4 ms-2">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="/#darbareh"
                >
                  درباره‌ما
                </a>
              </li>
              <li class="hoverItemLi nav-item  p-3 me-0 me-md-2 me-lg-0 me-xxl-4 ms-2">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="/#rezerv"
                >
                  رزرو نوبت
                </a>
              </li>
              <li class="hoverItemLi nav-item  p-3 me-0 me-md-2 me-lg-0 me-xxl-4 ms-2">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="/#address"
                >
                  آدرس
                </a>
              </li>
              <li class="hoverItemLi nav-item  p-3 me-0 me-md-2 me-lg-0 me-xxl-4 ms-2">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="/Articles"
                >
                  مقالات
                </a>
              </li>
              <li class="hoverItemLi nav-item  p-3 me-0 me-md-2 me-lg-0 me-xxl-4 ms-2">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="/login"
                >
                  حساب کاربری
                </a>
              </li>
            </ul>
            {/*  */}
          </div>
        </div>
      </nav>
      
    </div>
  );
}
