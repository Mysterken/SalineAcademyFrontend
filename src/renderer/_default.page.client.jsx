export {render}

import {hydrateRoot} from 'react-dom/client'

async function render(pageContext) {
  const {Page} = pageContext
  hydrateRoot(
    document.getElementById('page-view'),
    <Page/>
  )
}
