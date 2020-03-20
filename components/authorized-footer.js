import Link from 'next/link'

import '../static/style.scss';

export default function AuthorizedFooter() {
  return <footer className="footer__container">
    <div className="footer__logo">
      <Link href="/" prefetch>
        <a>
          <img src="../../static/images/logo.svg" alt="Aerolab" />
        </a>
      </Link>
    </div>
    <div>
      <p>© 2020 AeroPoints</p>
    </div>
  </footer>
}