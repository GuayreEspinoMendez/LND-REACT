import "./Footer.css"

function Footer() {
  return (
    <footer>
        <img src="/images/logo.png" alt="" class="logo2"/>
        <div class="social-icons-containner">
            <img src="/images/instagram.png" class="social-icon"></img>
           
            <img src="/images/linkedin.png" class="social-icon"></img>
            
            <img src="/images/Twitter.png" class="social-icon"></img>
            
            <img src="/images/facebook.png" class="social-icon"></img>
    
           
            
        </div>
        <ul className="footer-menu-container">
            <li className="menu-item"><a href="Conditions">Legal</a></li>
            <li className="menu-item"><a href="Cookies">Cookies</a></li>
            <li className="menu-item"><a href="">Privacy</a></li>
            <li className="menu-item"><a href="">Shipping</a></li>
            <li className="menu-item"><a href="Refound">Refounds</a></li>
            <li className="menu-item"><a href="public/rss.xml"><img src="/images/images.png" class="social-icon"></img></a></li>
        </ul>
        <span className="copyrigth">&copy;2024, Xike. All rigths reserved.</span>
    </footer>


  )


}

export default Footer;