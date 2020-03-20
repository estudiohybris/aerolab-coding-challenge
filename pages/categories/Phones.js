import LayoutAuthorized from '../../components/layouts/layout-authorized'
import AuthorizedFooter from '../../components/authorized-footer'
import AuthorizedHeader from '../../components/authorized-header'
import IndexPoints from '../../components/index-points'
import Link from 'next/link'

import '../../static/style.scss';

import API from '../../api/appsettings'

export default class Phone extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [],
            _id: "5a0b35c1734d1d08bf7084c3",
            name: "iPhone 8",
            cost: 800,
            category: "Phones",
            img: {
                url: "https://aerolab-challenge.now.sh/images/iPhone8-x1.png",
                hdUrl: "https://aerolab-challenge.now.sh/images/iPhone8-x2.png"
            }
        }
      }
      componentDidMount() {
          API.get(`products`)
              .then((res) => {
              this.setState({products: res.data})
          })
          
          console.log(this.state.products)
    }
    render () {
    return (
      <LayoutAuthorized>
        <section className="section__container">
        <AuthorizedHeader/>
            <section className="cover__container">
                <div>
                    <h1>Phones</h1>
                    <p>All the phones you can find.</p>
                </div>
            </section>
            <section>
          <div className="products__container">
            {this.state.products.map(P =>
              <div className="card">
                  <Link as={`/product/${P._id}`} href={{
                      pathname: '/product'
                      }}>
                      <a>
                        <img src={P.img.hdUrl} alt={P.name}/>
                        <div>
                          <span>
                            <p>{P.category}</p>
                            <span className="points">
                                <img src="../../static/images/star.svg" alt="Points" />
                                <p>{P.cost}</p>
                            </span>
                          </span>
                          <h3 alt={P.name}>{P.name}</h3>
                        </div>
                      </a>
                  </Link>
                  <div className="card--hover">
                    <img src="../../static/images/shopping-bag.svg" alt="Shopping" />
                    <div>
                        <span className="points">
                            <img src="../../static/images/star.svg" alt="Points" />
                            <h2><b>{P.cost}</b></h2>
                        </span>
                        <Link href="#">
                            <a className="btn btn-secondary">
                                Redeem now
                            </a>
                        </Link>
                    </div>
                  </div>
                </div>
                )}
              </div>
            </section>
        <IndexPoints/>
        <AuthorizedFooter/>
        </section>
      </LayoutAuthorized>
    )
  }

}