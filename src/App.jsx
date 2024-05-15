import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Dashboard from "./pages/home/Dashboard";
import PageLayout from "./layouts/PageLayout";

// layouts and pages

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<Auth />} />
      <Route path="home" element={<Dashboard />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
