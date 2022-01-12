function Footer() {
  // VANILLA CODE:

  // const newAnchor = document.createElement("a");
  // const newFooter = document.createElement("footer");

  // newAnchor.setAttribute("href", "https://www.linkedin.com/in/micheliseneld/");
  // newAnchor.setAttribute("target", "_blank");
  // newAnchor.innerHTML = "Coded by Michel Iseneld";
  // newFooter.append(newAnchor);

  // return document.querySelector("body").append(newFooter);

  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/micheliseneld/"
        target="_blank"
        rel="noreferrer"
      >
        Coded by Michel Iseneld
      </a>
    </footer>
  );
}

export default Footer;
