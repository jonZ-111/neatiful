import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-brand">
          <Link href="/" aria-label="neatiful homepage">
            <Image
              src="/neatiful_logo.png"
              alt="neatiful"
              width={180}
              height={56}
            />
          </Link>

          <p>
            Thoughtful cleaning and organization for more comfortable spaces.
          </p>
        </div>

        <nav className="site-footer-navigation" aria-label="Footer navigation">
          <p>Explore</p>
          <Link href="/#services">Services</Link>
          <Link href="/#about">Why neatiful</Link>
          <Link href="/estimate">Free estimate</Link>
        </nav>

        <div className="site-footer-contact">
          <p>Contact</p>

          <a href="tel:+19564664138">(956) 466-4138</a>

          <a href="mailto:hello@neatifulliving.com">
            hello@neatifulliving.com
          </a>

          <span>Austin, Houston, and surrounding areas</span>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>© 2026 neatiful. All rights reserved.</span>
        <Link href="/privacy">Privacy notice</Link>
      </div>
    </footer>
  );
}