// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// import CommentsForm from './CommentsForm'
// import realCommentForm from './realCommentForm'
// import Form from './realCommentForm'
// import Form from "./Form"
// import CommentForm from './CommentForm'
import './App.css'
// import CommentForm from './CommentForm'
// import Comment from './Comments'
// function App() {
//   return (
//     <>
//       {/* <Comment /> */}
//       <CommentForm/>
//     </>
//   )
// }
// export default App




import NewCommentsForms from './NewCommentsForms'
import NewComments from './NewComments'
function App() {
  return (
    <>
      {/* <NewCommentsForms /> */}
      <NewComments />
    </>
  )
}
export default App