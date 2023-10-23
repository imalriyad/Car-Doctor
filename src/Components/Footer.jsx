const Footer = () => {
  return (
    <div className=" bg-base-200 mt-10 ">
      <footer className="footer p-10 max-w-screen-2xl mx-auto text-base-content">
        <aside className="space-y-3">
          <img src="https://i.ibb.co/FxdV691/logo.png" alt="" />
          <p>
            Edwin Diaz is a software and web technologies <br /> engineer, a life coach trainer who is also a serial .
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
