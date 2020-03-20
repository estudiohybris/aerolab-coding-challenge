import Head from 'next/head';

import '../../static/style.scss';

export default class LayoutError extends React.Component {
  render() {
  return <div>
          <Head>

            <title>AeroPoitns / 404</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Redeem all your Points for Products." />
            <meta name="keywords" content="Aerolab, AeroPoints, points, store, products" />
            <meta name="author" content="Natalia Giannantonio, nataliagiannantonio@gmail.com" />
            <meta name="copyright" content="Natalia Giannantonio" />
            <meta name="robots" content="noindex,nofollow" />
            <meta name="url" content="https://aerolab.co/" />
            <meta name="geo.placename" content="Buenos Aires" />
            <meta name="geo.region" content="AR" />
            <link rel="canonical" href="https://aerolab.co/" />

            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />>
            <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

            <link rel="shortcut icon" type="image/x-icon" href="static/favicons/favicon.ico" />
            <link rel="mask-icon" href="static/favicons/favicon.svg" color="#ffffff" />
            <link rel="apple-touch-icon" sizes="57x57" href="static/favicons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="static/favicons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="static/favicons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="static/favicons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="static/favicons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="static/favicons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="static/favicons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="static/favicons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="static/favicons/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="static/favicons/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="static/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="static/favicons/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="static/favicons/favicon-16x16.png" />
            <meta name="msapplication-TileColor" content="#ff4f00" />
            <meta name="msapplication-TileImage" content="static/favicons/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ff4f00" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <link rel="apple-touch-startup-image" href="static/favicons/android-icon-192x192.png" />

            <meta property="og:locale" content="es_AR" />
            <meta property="og:url" content="https://aerolab.co/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="AeroPoitns" />
            <meta property="og:description" content="Redeem all your Points for Products." />
            <meta property="og:image" content="static/images/shared.png" />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="400" />
            <meta property="og:site_name" content="AeroPoitns" />

          </Head>

          { this.props.children }

        </div>
  }
}