import Example from "../component/Example.jsx";
import {useEffect, useState} from "react";
import {getLesson} from "../API/lesson.js";
import {getMasterclasses} from "../API/masterclass.js"

export {Page}

function Page() {

  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    getMasterclasses()
      .then((lesson) => console.log(lesson))

      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <h1>Test Page</h1>
      
    </>
  )
}
