import {Routes, Route, Navigate} from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Repositories } from '../pages/Repositories/'



export const AppRoutes = () => {


  return (
    <Routes>
     <Route path= "/Dashboard" element={<Dashboard/>}  />
     <Route path= "/Repositories" element={<Repositories/>} />
     <Route path= "*" element={<Navigate to="/Dashboard"/>}  />
    </Routes>
  )
} 