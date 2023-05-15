import navBottonStyles from "./NavBarBottom.module.css";
export default function NavBarBottom() {
  return (
    <div className={navBottonStyles.navBottonContainer}>
      <div className={navBottonStyles.navBottonLogo}>
        <img
          src="https://camo.githubusercontent.com/35b81f213ddb0e019b3567f6982d740bb2d01ae5dd712a1537e09e826e940228/68747470733a2f2f643331757a386c77666d796e38672e636c6f756466726f6e742e6e65742f4173736574732f6c6f676f2d68656e72792d77686974652d6c672e706e67"
          alt=""
        />
        <h2>Created by Hengers Rosario</h2>
      </div>
      <div className={navBottonStyles.navBottonElements}>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-square-github"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  );
}
