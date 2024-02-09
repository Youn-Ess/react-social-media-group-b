
import { Route, Routes } from 'react-router-dom';
import { MyProvider } from './utils/contextProvider';
import { HomePage } from './pages/Home/home';
import { LoginPage } from './pages/Login/Login';
import { ProfilePage } from './pages/Profile/Profile';
import { GroupsPage } from './pages/Groups/Groups';
import { MarketPage } from './pages/Market/Market';
import { ErrorsPage } from './pages/err/errors';
import { ForgetPassword } from './pages/forgetPassword/ForgetPassword';
import { VideoPage } from './pages/video/videoPage';
import { LivePage } from './pages/live/livePage';
import { EventPage } from './pages/events/eventPage';
import { MessagesPage } from './pages/messages/messagesPgae';
import { SavedPage } from './pages/saved/savedPage'
import { SettingPage } from './pages/Settings/settingPage';
import { ShowProducts } from './pages/showproduct/ShowProducts';


function App() {
  return (
    <MyProvider>
      <Routes >
        <Route path='/' element={<LoginPage />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/home' element={<HomePage />} />

        <Route path='/Video' element={<VideoPage />} />
        <Route path='/Live' element={<LivePage />} />
        <Route path='/Events' element={<EventPage />} />
        <Route path='/Messages' element={<MessagesPage />} />
        <Route path='/Saved' element={<SavedPage />} />

        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/groups' element={<GroupsPage />} />
        <Route path='/market' element={<MarketPage />} />
        <Route path='/market/:id' element={<ShowProducts />} />

        <Route path='/settings' element={<SettingPage />} />
        <Route path='*' element={<ErrorsPage />} />
      </Routes >
    </MyProvider>
  );
}

export default App;



