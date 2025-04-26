import {Routes, Route} from "react-router";
import {MainPage} from "./pages/MainPage.tsx";
import {Layout} from "./layout/Layot.tsx";
import {PlacesPage} from "./pages/PlacesPage.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";
import {ProfilePage} from "./pages/ProfilePage.tsx";
import {RegisterPage} from "./pages/RegistrationPage.tsx";
import {RoutePage} from "./pages/RoutePage.tsx";
import {Toast} from "./components/light/Toast.tsx";

function App() {
  return (<>
      <Toast/>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<MainPage/>}/>
          <Route path="/places" element={<PlacesPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route index path="/profile" element={<ProfilePage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path="/route" element={<RoutePage/>}/>
        </Route>
      </Routes>
    </>

  )
}

export default App
