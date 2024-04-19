import "./Header.css"


function Header() {
  return (
    <header>
      <div class="logo">
      <img src="/images/descarga.png"></img>
      </div>
      <input type="checkbox" id="nav_check" hidden />
      <nav>
      <div class="logo">
      <img src="/images/logo2.png"/>
      </div>
        <ul>
          <li>
            <a href="Home" class="active" >Home</a>
          </li>
          <li>
            <a href="Feature">Products</a>
          </li>
          <li>
            <a href="">Feature</a>
          </li>
          <li>
            <a href="Conditions">About</a>
          </li>
          <li>
            <a href="Cookies">Contact</a>
          </li>
          <li>
            <a><img src="/images/cesta.png"/></a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;