import Link from 'next/link'

import '../static/style.scss';

export default class IndexPoints extends React.Component {
  render () {
  return (
    <section className="bg-secondary">
      <div>
        <h3>Are you ready to redeem your points?</h3>
        <Link href="/" prefetch>
          <a className="btn btn-primary">
            Get more points
            <img src="../../static/images/arrow-right-white.svg" alt="Go!" />
          </a>
        </Link>
      </div>
    </section>
    )
  }
}