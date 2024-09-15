import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider
} from 'react-router-dom'

// import strings from './i18n/strings'
import RootLayout from './router/RootLayout'
import Dashboard from './Pages/Dashboard'
import Create from './Pages/Create'
import Profile from './Pages/Profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
