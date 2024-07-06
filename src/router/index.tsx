import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignUpPage, LogInPage, DashboardPage } from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};
