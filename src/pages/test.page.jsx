import Example from "../component/Example.jsx";
import {useEffect, useState} from "react";
import {getLesson} from "../API/lesson.js";
import {getMasterclasses} from "../API/masterclass.js"

export {Page}

function Page() {

  const [lesson, setLesson] = useState(null);

  useEffect(() => {
<<<<<<< HEAD
    getMasterclasses()
      .then((lesson) => console.log(lesson))
=======
    getLesson(21)
      .then((lesson) => setLesson(lesson))
>>>>>>> 5aaa3d16a4e976fc24e5da91811cb5fa009710f4
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <h1>Test Page</h1>
      
    </>
  )
}
