import "../App.css";
import "./login.css";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
const  d =document;
async function Loger(name,phone) {
  let url = 'https://api.sheety.co/bf9c142a2592e92d34a318006447aaba/jahanteknik/sheet1';
  let body = {
    sheet1: {
      name: name,
      phone: phone
    }
  }
   await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {'Content-Type' :'application/json'}
  })
  .then((response) => response.json())
  .then(json => {
    // Do something with object
    alert(`کاربر \n ${json.sheet1.name} \n به باشگاه مشتریان جهان تکنیک خوش آمدید`);
    
  })
  
  
  
  // await fetch("https://api.sheety.co/bf9c142a2592e92d34a318006447aaba/jahanteknik/sheet1").then(
  //   response=>response.json()
  // ).then(data=>console.log(data))
}
export default function Login() {
  return (
    <section className="d-flex  flex-column secBody">
      <Navbar />
      <br />
      <br />
      <br />
      <div className="login row m-5  p-5  bg-light">
        <h1 className="text-dark text-center mb-5">ورود / ثبت نام</h1>
        <span>نام و نام خانوادگی:</span>
        <input
          className="mb-3 form-control"
          id="name"
          type="text"
          placeholder="نام و نام خانوادگی"
        />
        <span>شماره تلفن:</span>{" "}
        <input
          className="mb-3 form-control"
          type="text"
          id="phone"
          placeholder="شماره تماس"
        />
        <button onClick={()=>{
            Loger(d.getElementById("name").value,d.getElementById("phone").value)
        }} className="btn btn-danger btn-api">
          ورود
        </button>
      </div>
      <Footer />
    </section>
  );
}
