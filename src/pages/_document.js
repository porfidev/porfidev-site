import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const schema = {
  '@context': 'https://schema.org/',
  '@type': 'Person',
  name: 'Porfirio Chávez (porfidev)',
  url: 'https://porfi.dev',
  image: 'https://secure.gravatar.com/avatar/05870bf67ffda554c989ba6134265262?s=400',
  sameAs: [
    'https://twitter.com/porfidev',
    'https://www.instagram.com/porfidev/',
    'https://www.youtube.com/channel/UCwwC9Sd1AWvoKmrAhXBPyLQ',
    'https://www.linkedin.com/in/porfidev/',
    'https://github.com/porfidev',
    'https://porfi.dev',
  ],
  jobTitle: 'UX Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Octopy',
  },
};

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es-mx">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400&display=swap"
            rel="stylesheet"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
