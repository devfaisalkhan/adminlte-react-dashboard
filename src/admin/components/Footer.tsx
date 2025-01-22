const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <strong>
        Copyright &copy; {currentYear} <a href="https://github.com/devfaisalkhan">My Github</a>
      </strong>
      <div className="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.2.0
      </div>
    </footer>
  );
};

export default Footer;
