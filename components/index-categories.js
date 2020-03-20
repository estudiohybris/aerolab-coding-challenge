import Link from 'next/link'

import '../static/style.scss';

import API from '../api/appsettings'

export default class IndexCategories extends React.Component {
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
      <section>
        <h2>Categories</h2>
        <div className="categories__container">
          {this.state.products.slice(0, 3).map(P =>
            <div className="card">
              <Link as={`/categories/${P.category}`} href={{
                pathname: '/categories/${P.category}'
                }}>
                <a>
                  <img src="../../static/images/categories/electronics.png" alt="Categories Electronics"/>
                  <div>
                    <h3>{P.category}</h3>
                    <img src="../../static/images/arrow-right-white.svg" alt="Go!" />
                  </div>
                </a>
              </Link>
            </div>
          )}
        </div>
      </section>
    )
  }
}