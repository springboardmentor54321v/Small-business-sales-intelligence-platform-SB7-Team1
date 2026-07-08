import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import LoginPage from '../pages/Login';
import LoginDuplicatePage from '../pages/LoginDuplicate';
import DashboardPage from '../pages/Dashboard';
import UploadPage from '../pages/Upload';
import InventoryPage from '../pages/Inventory';
import NotFoundPage from '../pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login-duplicate" element={<LoginDuplicatePage />} />
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;