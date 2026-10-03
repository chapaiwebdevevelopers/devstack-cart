
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">

      {/* ================= Main Footer ================= */}
      <div className="footer p-10 sm:footer-horizontal">

        {/* Logo & Description */}
        <aside>
          <img
            src={Logo}
            alt="Logo"
            className="w-40"
          />

          <p className="mt-3 max-w-xs">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
        </aside>

        {/* Services */}
        <nav>
          <h6 className="footer-title">Product</h6>

          <a href="#" className="link link-hover">
            Branding
          </a>

          <a href="#" className="link link-hover">
            Design
          </a>

          <a href="#" className="link link-hover">
            Marketing
          </a>

          <a href="#" className="link link-hover">
            Advertisement
          </a>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title">Company</h6>

          <a href="#" className="link link-hover">
            About us
          </a>

          <a href="#" className="link link-hover">
            Contact
          </a>

          <a href="#" className="link link-hover">
            Jobs
          </a>

          <a href="#" className="link link-hover">
            Press kit
          </a>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title">Legal</h6>

          <a href="#" className="link link-hover">
            Terms of use
          </a>

          <a href="#" className="link link-hover">
            Privacy policy
          </a>

          <a href="#" className="link link-hover">
            Cookie policy
          </a>
        </nav>

      </div>

      {/* ================= Bottom Footer ================= */}
      <div className="footer flex justify-between flex-wrap  bg-neutral text-neutral-content items-center p-4">

        {/* Copyright */}
          <p>
          © {new Date().getFullYear()} DevStack.All right reserved
          </p>



        {/* Social Icons */}
        <nav className=" grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <ul className="flex gap-7">
            <li><a>privacy</a></li>
            <li><a>Terms</a></li>
          </ul>

        </nav>

      </div>
    </footer>
  );
};

export default Footer;