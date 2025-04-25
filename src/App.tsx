import './App.css'
import {Routes, Route} from 'react-router';
import {MainPage} from "./pages/MainPage.tsx";
import {RoutePage} from "./pages/RoutePage.tsx";

function App() {

  return (
     <Routes>
       <Route path="/" element={<MainPage />} />
        <Route path="/route" element={<RoutePage/>}/>
     </Routes>
  )
}

export default App
