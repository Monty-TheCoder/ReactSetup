
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './pages/AuthPage/ProtectedRoute';

// Lazy load module components
const AuthModule = lazy(() => import('./layouts/AuthLayout'));
const DashBoardModule = lazy(() => import('./layouts/DashBoardLayout'))

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* unautorized routes */}
          <Route path="/auth/*" element={<AuthModule />} />
          {/* authorized Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path='/*' element={<DashBoardModule />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;