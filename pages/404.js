import LayoutError from '../components/layouts/layout-error'
import Link from 'next/link'

import '../static/style.scss';

export default function Custom404() {
    return <LayoutError>
        <main>
            <section className="errors__container section__container">
                <div className="error__img">
                    <img src="../../static/images/error404.svg" alt="Error 404" />
                </div>
                <h2><b>Oops!</b> Página no encontrada.</h2>
                <footer>
                    <Link href="/" prefetch>
                        <a className="btn btn-primary">
                            Go To Home
                            <img src="../../static/images/arrow-right-white.svg" alt="Go!" />
                        </a>
                    </Link>
                </footer>
            </section>
        </main>
    </LayoutError>
}