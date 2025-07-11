import "../App.css";
import Navbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import Desc from "../components/descripton/descripton";
import Services from "../components/services/service";
import Workers from "../components/workers/workers";
import Blit from "../components/blitRezerv/blitRezerv";
import Footer from "../components/footer/footer";

function Home() {
  return (
    <body>
      <a
        href="#"
        className="nav-link activeicons poshtiban text-light text-icon"
      >
        <i class="larg fas fa-comment-dots"></i>
      </a>

      <a id="khaneh">
        <Navbar />
      </a>
      <Header />
      <Desc 
          title="خدمات تعمیرگاه مکانیکی جهان تکنیک"
          desc={<p><ul>
            <li>تعمیرگاه ایرانخودرو در اصفهان</li>
            <li>تعمیرگاه سایپا در اصفهان</li>
            <li>تعمیرگاه پژو در اصفهان</li>
            <li>تعمیرگاه ال نود در اصفهان</li>
            <li>تعمیرگاه شاهین در اصفهان</li>
            <li>تعمیرات دنا در اصفهان</li>
            <li>تراش دیسک روکار در اصفهان</li>
            <li>تعمیرات تخصصی گیربکس در اصفهان</li>
          </ul></p>}
          src="./image/logojahan.png"
        />
      <Services />
      <a id="darbareh">
        <Desc
          title="درباره ما"
          desc="ما این افتخار را داریم که بیش از ده سال سابقه در خدمت رسانی به مردم بوده ایم و کلیه ی امور مکانیکی ماشین های سواری را  اعم از مکانیکی خودرو تعمیرات موتور گیربکس زیر و بند جعبه فرمان و سرویس پلوس و اکسل را انجام داده ایم و قصد داریم که با هدف ارائه خدمات بهتر نیاز های مشتریان نسبت به مخارج سنگین ماشین های امروزی کاهش دهیم"
          src="./image/pngwing.com.png"
        />

      </a>
      <a id="address">
        <Desc
          title="آدرس دقیق و مراجعه حضوری"
          src="./image/map.png"
          desc="اصفهان ، خیابان امام خمینی ، بعد از کوچه 108 قبل از سه راه ملک شهر ، جنب برق سهیل"
        />
      </a>
      <a id="rezerv">
        <Workers />
      </a>
      <Blit />
      <Footer />
    </body>
  );
}

export default Home;
