import Link from 'next/link'

import '../static/style.scss';

import API from '../api/appsettings'

export default class IndexProducts extends React.Component {
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
    render() {
    return (
      <section className="bg-light">
        <h2>Products</h2>
        <div className="products__container">
            {this.state.products.slice(0, 8).map(P =>
                <div className="card">
                    <Link as={`/products/${P._id}`} href={{
                        pathname: '/products/${P._id}'
                        }}>
                        <a>
                            <img src={P.img.hdUrl} alt={P.name}/>
                            <div>
                                <span>
                                    <p>{P.category}</p>
                                    <span className="points">
                                        <img src="../../static/images/star.svg" alt="Points" />
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
                )
            }
        </div>
        <Link href="/products" prefetch>
            <a className="btn btn-primary">
                See more
                <img src="../../static/images/arrow-right-white.svg" alt="Go!" />
            </a>
        </Link>
      </section>
    )
  }
}