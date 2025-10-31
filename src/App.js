import { useState } from 'react';

import Dashboard from './pages/dahsboard/Dashboard';
import ClientOnboarding from './pages/ClinetOnboarding/ClinetOnboarding'
import PeopleManagement from './pages/PeopleManagement/PeopleManagement'
import Questionnaires from './pages/Questionnaires/Questionnaires'
import PBCManagement from './pages/PBCManagement/PBCManagement'
import ReportBuilder from './pages/ReportBuilder/ReportBuilder'
import { BrowserRouter, Routes, Route } from 'react-router';
import DashboardLayout from './Layout/DashboardLayout';

// Main App Component
const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<DashboardLayout currentView={'/'} ><Dashboard /></DashboardLayout>} />
      <Route path='/clients' element={<DashboardLayout currentView={'/clients'} ><ClientOnboarding /></DashboardLayout>} />
      <Route path='/people' element={<DashboardLayout currentView={'/people'} ><PeopleManagement /></DashboardLayout>} />
      <Route path='/questionnaires' element={<DashboardLayout currentView={'/questionnaires'} ><Questionnaires /></DashboardLayout>} />
      <Route path='/pbc' element={<DashboardLayout currentView={'/pbc'} ><PBCManagement /></DashboardLayout>} />
      <Route path='/reports' element={<DashboardLayout currentView={'/reports'} ><ReportBuilder /></DashboardLayout>} />
    </Routes>
  </BrowserRouter>

};




export default App