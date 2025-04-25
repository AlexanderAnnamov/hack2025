import {Routes, Route} from "react-router";
import {MainPage} from "./pages/MainPage.tsx";
import {Layout} from "./layout/Layot.tsx";
import {FriendsPage} from "./pages/FriendsPage.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";
import {ProfilePage} from "./pages/ProfilePage.tsx";
import {RegistrationPage} from "./pages/RegistrationPage.tsx";
import {RoutePage} from "./pages/RoutePage.tsx";

function App() {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/'  element={<MainPage/>}/>
          <Route path="/chats" element={<FriendsPage/>}/>
          <Route element={<LoginPage/>}/>
          <Route index path="/profile" element={<ProfilePage/>}/>
          <Route element={<RegistrationPage/>}/>
          <Route path="/route" element={<RoutePage/>}/>
        </Route>
      </Routes>
  )
}

export default App
