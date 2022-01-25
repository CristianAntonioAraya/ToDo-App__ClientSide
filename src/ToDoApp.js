import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes';

const ToDoApp = () => {
  return (
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
  );
};

export default ToDoApp;
