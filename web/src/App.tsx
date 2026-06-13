import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProblemsPage from '@/pages/ProblemsPage';
import ProblemDetailPage from '@/pages/ProblemDetailPage';
import ProgressPage from '@/pages/ProgressPage';
import SystemDesignPage from '@/pages/SystemDesignPage';
import LoginPage from '@/pages/LoginPage';
import { useAuthStore } from '@/store/authStore';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const token = useAuthStore((s) => s.token);
  return token ? <>{children}</> : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Navigate to="/problems" replace />} />
        <Route path="problems" element={<ProblemsPage />} />
        <Route path="problems/:slug" element={<ProblemDetailPage />} />
        <Route path="progress" element={<ProgressPage />} />
        <Route path="system-design" element={<SystemDesignPage />} />
      </Route>
    </Routes>
  );
}
