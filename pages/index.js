import LayoutAuthorized from '../components/layouts/layout-authorized'
import AuthorizedFooter from '../components/authorized-footer'
import AuthorizedHeader from '../components/authorized-header'
import IndexCover from '../components/index-cover'
import IndexCategories from '../components/index-categories'
import IndexProducts from '../components/index-products'
import IndexPoints from '../components/index-points'

export default class Home extends React.Component {
  render () {
    return (
      <LayoutAuthorized>
        <section className="section__container">
          <AuthorizedHeader/>
            <IndexCover/>
            <IndexCategories/>
            <IndexProducts/>
            <IndexPoints/>
          <AuthorizedFooter/>
        </section>
      </LayoutAuthorized>
    )
  }

}