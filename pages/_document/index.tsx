/* eslint-disable react/no-danger */
// #region Global Imports
import * as React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
// #endregion Global Imports
class WebAppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
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

  render() {
    return (
      <Html>
        <Head />

        {/* TODO: Commenting this user tracking script code for now to avoid conflicts of data with cloudplex */}
        {/* User Tracking Script */}
        {/* <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `UST_CT = [];UST = { s: Date.now(), addTag: function(tag) { UST_CT.push(tag) } };UST.addEvent = UST.addTag;`,
          }}
        />
        <script src='https://tracker.cloudplex.io/server/ust.min.js?v=3.5.0' async /> */}

        <body>
          {/* Google Tag Manager (noscript) */}
          {process.env.NEXT_PUBLIC_PROD === 'true' && (
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5J34SCF"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              }}
            />
          )}
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default WebAppDocument;
