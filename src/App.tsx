import { ToastContainer } from 'react-toastify';
import RoutesPage from "./Routes";

const App = () => {
  return (
    <div className="App bg-gray6 w-screen">
      <RoutesPage />
      <ToastContainer />
    </div>
  );
};

export default App;
