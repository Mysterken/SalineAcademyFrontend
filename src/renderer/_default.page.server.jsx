export {render}

import {renderToString} from 'react-dom/server'
import {dangerouslySkipEscape, escapeInject} from 'vite-plugin-ssr/server'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



async function render(pageContext) {
  const {Page} = pageContext
  const viewHtml = dangerouslySkipEscape(
    renderToString(
      <Page/>
    )
  )

  return escapeInject`<!DOCTYPE html>
    <html lang="fr">
      <body style="margin: 0; background-color: #1E1E1E;">
        <div id="page-view">${viewHtml}</div>
      </body>
    </html>`
}
