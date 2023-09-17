export {render}

import {hydrateRoot} from 'react-dom/client'
import "../style/base.css"

async function render(pageContext) {
  const {Page} = pageContext
  hydrateRoot(
    document.getElementById('page-view'),
    <Page/>
  )
}
