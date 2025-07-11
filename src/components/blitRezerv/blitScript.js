const $ = document;
const name = $.querySelector("#name");
const phone = $.querySelector("#phone");
const car = $.querySelector("#car");
const problem = $.querySelector("#problem");

export default function blitControler(e) {
  e.preventDefault();
  if (name.value == "" || phone.value == "" || car.value == "") {
    return alert("لطفا اطلاعات فرم را کامل و بدرستی وارد کنید");
  } else {

   }
  name.value = "";
  phone.value = "";
  car.value = "";
  problem.value = "";
  console.log(name.value);
  console.log(phone.value);
  console.log(car.value);
}
