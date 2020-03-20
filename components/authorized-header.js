import Link from 'next/link'

import '../static/style.scss';

import API from '../api/appsettings'

export default class AuthorizedHeader extends React.Component {
  constructor() {
    super()
    this.state = {
      _id: "5e6a3a9a312a82006f4da6e4",
      name: "John Kite",
      points: 2000,
      __v: 0,
      redeemHistory: [],
      createDate: "2020-03-12T13:35:22.093Z"
    }
  }
  componentDidMount() {
    API.get(`user/me`)
    .then((res) => {
      this.setState({
        name: res.data.name,
        points: res.data.points
      })
    })
  }
  render () {
  return (
    <header className="header__container">
      <div className="header__logo">
        <Link href="/" prefetch>
          <a>
            <img src="../../static/images/isologo.svg" alt="Aerolab" />
          </a>
        </Link>
      </div>
      <div>
        <nav className="nav__container">
          <ul>
            <li>
              <Link href="/products" prefetch>
                <a>
                  Products
                </a>
              </Link>
            </li>
            <li>
              <Link href="/categories" prefetch>
                <a>
                  Categories
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <div className="header__points">
            <img src="../../static/images/star.svg" alt="Your current points" />
            <p>{this.state.points}</p>
          </div>
          <Link href="#" prefetch>
            <a className="header__user">
              <p>{this.state.name}</p>
              <img src="../../static/images/user.svg" alt="User" />
            </a>
          </Link>
        </div>
      </div>
    </header>
    )
  }
}