export {render}
export {passToClient}

import ReactDOMServer from 'react-dom/server'
import {dangerouslySkipEscape, escapeInject} from 'vite-plugin-ssr/server'

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ['pageProps']

function render(pageContext) {
  let pageHtml
  if (!pageContext.Page) {
    // SPA
    pageHtml = ''
  } else {
    // SSR / HTML-only
    const {Page, pageProps} = pageContext
    pageHtml = ReactDOMServer.renderToString(
      <Page {...pageProps} />
    )
  }

  return escapeInject`<!DOCTYPE html>
    <html lang="fr">
      <body>
        <div id="react-container">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}
