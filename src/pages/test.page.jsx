import Example from "../component/Example.jsx";
import {useEffect, useState} from "react";
import {getLesson} from "../API/lesson.js";

export {Page}

function Page() {

  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    getLesson(21)
      .then((lesson) => setLesson(lesson))
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <h1>Test Page</h1>
      {lesson && <Example lesson={lesson} />}
    </>
  )
}
