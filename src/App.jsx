
import { Route, Routes } from 'react-router-dom';
import { MyProvider } from './utils/contextProvider';
import { HomePage } from './pages/Home/home';
import { LoginPage } from './pages/Login/Login';
import { ProfilePage } from './pages/Profile/Profile';
import { GroupsPage } from './pages/Groups/Groups';
import { MarketPage } from './pages/Market/Market';
import { ErrorsPage } from './pages/err/errors';
import { SettingsPage } from './pages/Settings/Settings';


function App() {
  return (
    <MyProvider>
      <Routes >
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/groups' element={<GroupsPage />} />
        <Route path='/market' element={<MarketPage />} />
        <Route path='/profile/setting' element={<SettingsPage />} />
        <Route path='*' element={<ErrorsPage />} />
      </Routes >
    </MyProvider>
  );
}

export default App;



