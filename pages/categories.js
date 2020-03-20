import LayoutAuthorized from '../components/layouts/layout-authorized'
import AuthorizedFooter from '../components/authorized-footer'
import AuthorizedHeader from '../components/authorized-header'
import IndexPoints from '../components/index-points'
import Link from 'next/link'

import '../static/style.scss';

import API from '../api/appsettings'

export default class Categories extends React.Component {
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
                        <h1>Categories</h1>
                        <p>All the categories you can find.</p>
                    </div>
                </section>
                <section>
                    <div className="categories__container">
                        {this.state.products.slice(0,3).map(C =>
                            <div className="card">
                                <Link as={`/categories/${C.category}`} href={{
                                    pathname: '/categories/${C.category}'
                                    }}>
                                    <a>
                                        <img src="../../static/images/categories/electronics.png" alt="Categories Electronics"/>
                                        <div>
                                            <h3>{C.category}</h3>
                                            <img src="../../static/images/arrow-right-white.svg" alt="Go!" />
                                        </div>
                                    </a>
                                </Link>
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