import "./Footer.module.css";

function Footer() {
  return (
    // start footer
    <div className="footer">
      <div className="footer_icons">
        {/* start instagram button */}
        <a
          href="https://www.instagram.com/brighton__young/"
          target="_blank"
          rel="noopener noreferrer"
          className="socials_icon" //so css can access it, named for anti adblock purposes
        >
          <img src="/icons/socials1_icon.svg" alt="Social 1 Icon" loading='eager'/>
        </a>
        {/* end instagram button */}

        {/* start LinkedIn button */}
        <a
          href="https://www.linkedin.com/in/bnyg/"
          target="_blank"
          rel="noopener noreferrer"
          className="socials_icon"
        >
          <img src="/icons/socials2_icon.png" alt="Social 2 Icon" loading='lazy'/>
        </a>
        {/* end LinkedIn button */}
      </div>
        {/* Footer message */}
      <p className="footer_message">
        Website created by Brighton Young
      </p>
      {/*End footer message */}
    </div>
    // end footer
  );
}

export default Footer;
