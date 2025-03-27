import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  const linkLists = [
    {
      title: "Programs",
      links: [
        { text: "Program 1", href: "/" },
        { text: "Program 2", href: "/" },
        { text: "Program 3", href: "/" },
        { text: "Program 4", href: "/" },
      ],
    },
    {
      title: "Find out more",
      links: [
        { text: "Link 1", href: "/" },
        { text: "Link 2", href: "/" },
        { text: "Link 3", href: "/" },
      ],
    },
    {
      title: "Charterag",
      links: [
        { text: "Link 1", href: "/" },
        { text: "Link 2", href: "/" },
        { text: "Link 3", href: "/" },
      ],
    },
  ];

  const socialLinks = [
    { href:"/", src: "/star.png", alt: "star", width: 24, height: 24, bg: "#094371" },
    { href:"/",src: "/star.png", alt: "star", width: 24, height: 24, bg: "#094371" },
    { href:"/",src: "/star.png", alt: "star", width: 24, height: 24, bg: "#094371" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <h2 className={styles.footerTitle}>CHARTERAG</h2>
      <button
        className={`${styles.socialIcon} ${styles.homeBtn}`}
        style={{ backgroundColor: "white" }}
        onClick={scrollToTop}
      >
        <Image
          src={"/icons/upArrow.png"}
          alt="Back to top button"
          width={16}
          height={21}
        />
      </button>
      <div className={styles.footerContent}>
        <div className={styles.linkLists}>
          {linkLists.map((list, index) => (
            <div key={index} className={styles.linkList}>
              <h4 className={styles.listTitle}>{list.title}</h4>
              <ul className={styles.links}>
                {list.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={styles.linkItem}>
                    <Link href={link.href} className={styles.link}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.socialLinks}>
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className={styles.socialIcon}
              style={{ color: "white", backgroundColor: social.bg }}
            >
              <Image
                src={social.src}
                alt={social.alt}
                width={social.width}
                height={social.height}
              />
            </Link>
          ))}
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.footerBottom}>
        <div>
          <p className={styles.copyright}>
            Copyright &copy; 2024 Charterag Ltd. (company no. 08245801)
          </p>
          <p className={styles.copyright}>
            Lorem ipsum dolor sit amet, consectetur adipiscing, United Kingdom.
          </p>
        </div>
        <div className={styles.legalLinks}>
          <p>Legal info</p>
          <p>Terms and conditions</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
