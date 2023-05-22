// #region Global Imports
import React from 'react';
import NextHead from 'next/head';
// #endregion Global Imports

/**
 * *This component embeds meta tags into page head
 * *also adding page title and favicon
 * *seo is enabled through next-seo module keeping it very simple
 */
export const Head = () => {
  return (
    <>
      <NextHead>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' href='/static/images/favicon.png' />
        <link rel='icon' href='/static/images/favicon.png' type='image/x-png' />
        <script async type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' />
        <link rel='alternate' hrefLang='en' href='/' />
      </NextHead>
    </>
  );
};
