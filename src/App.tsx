import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Index } from './pages/index';
import { Team } from './pages/team';

export const App: FC = () => {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="team" element={<Team />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
