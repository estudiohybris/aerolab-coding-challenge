import Link from 'next/link'

import '../static/style.scss';

export default class IndexCover extends React.Component {
  render () {
  return (
    <section className="cover__container">
      <div>
        <h1>Aero<span>Points</span></h1>
        <p>Exclusive discounts, early access to sales, and much more.</p>
        <Link href="/products" prefetch>
          <a className="btn btn-primary">
            Explore
            <img src="../../static/images/arrow-right-white.svg" alt="Go!" />
          </a>
        </Link>
      </div>
    </section>
    )
  }
}