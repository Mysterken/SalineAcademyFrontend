export {render}

import {hydrateRoot} from 'react-dom/client'
import "../style/base.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


async function render(pageContext) {
  const {Page} = pageContext
  hydrateRoot(
    document.getElementById('page-view'),
    <Page url={window.location.href} />
  )
}
