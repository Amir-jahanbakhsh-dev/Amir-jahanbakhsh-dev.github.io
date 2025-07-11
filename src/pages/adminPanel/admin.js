import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
const username = "6104338677757185";
const passwoard = "403075471";
let isUserName = true;
// let isPasswoard = prompt("enter user passwoard:");
 async function getUsers() {
  let url =
    "https://api.sheety.co/bf9c142a2592e92d34a318006447aaba/jahanteknik/sheet1";
  await fetch(url)
    .then((response) => response.json())
    .then((json) => {
      // Do something with the data
      json.sheet1.forEach(data=>{
          document.querySelector("tbody").insertAdjacentHTML("beforeend",`
            <tr>
              <th scope="row">${data.id}</th>
              <td>${data.name}</td>
              <td>${data.phone}</td>
            </tr>
            `)
          console.log(data);
      })
    });
}
export default function Admin() {
  //isUserName == username && isPasswoard == passwoard

  if (isUserName) {
    window.addEventListener("load",getUsers)
    return (
      <div className="adminPanel">
        <Navbar />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h1 className="p-3">لیست کاربران وبسایت</h1>
        <table class="table table-dark table-stripe  d-inline table-hover m-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">نام مشتری</th>
              <th scope="col">شماره تماس</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Footer />
      </div>
    );
  } else {
    return alert("admin is not valid");
  }
}
