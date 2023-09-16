function Example({lesson}) {
  return (
    <div>
      <h2>Example</h2>
      <p>{lesson.title}</p>
      <p>{lesson.description}</p>
      <p>{lesson.videoUrl}</p>
      <p>{lesson.masterclassOrder}</p>
    </div>
  )
}

export default Example
