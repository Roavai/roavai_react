// import { useEffect, useState } from 'react'

// function App() {
//   const [health, setHealth] = useState(null);

//   useEffect(() => {
//     fetch('/api/health')
//       .then(res => res.json())
//       .then(setHealth)
//       .catch(error => console.error('Error fetching health status:', error));
//   }, []);

//   return (
//    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
//       <h1 className="text-4xl font-bold mb-4">RoaVAI React</h1>
//       <pre className="bg-slate-800 p-4 rounded">
//         {JSON.stringify(health, null, 2) || 'Loading...'}
//       </pre>
//     </div>
//   )
// }

// export default App

/******************************************************************************************************** */

import Router from './router';

function App() {
  return <Router />
}

export default App;