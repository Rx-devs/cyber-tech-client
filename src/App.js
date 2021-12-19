import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import AdminRoute from "./Pages/Authentication/AdminRoute/AdminRoute";
import Login from "./Pages/Authentication/Login/Login";
import PrivateRoute from "./Pages/Authentication/PrivateRoute/PrivateRoute";
import Register from "./Pages/Authentication/Register/Register";
import AddService from "./Pages/Dashboard/Admin/AddService/AddService";
import MakeAdmin from "./Pages/Dashboard/Admin/MakeAdmin/MakeAdmin";
import ManageOrders from "./Pages/Dashboard/Admin/ManageOrders/ManageOrders";
import ManageServices from "./Pages/Dashboard/Admin/ManageServices/ManageServices";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from './Pages/Home/Home/Home';
import PurchaseProduct from "./Pages/PurchaseProduct/PurchaseProduct";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
			<Route path="/purchaseProduct/:serviceId" element={<PrivateRoute> <PurchaseProduct/> </PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>}>
              <Route path="/dashboard" element={<AdminRoute> <ManageOrders></ManageOrders> </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/addService`} element={<AdminRoute> <AddService></AddService> </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute> <MakeAdmin/> </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/manageServices`} element={<AdminRoute> <ManageServices/> </AdminRoute>}>
              </Route>
			  <Route path={`/dashboard/myOrders`} element={<MyOrders></MyOrders>}>
              </Route>
              <Route path={`/dashboard/pay`} element={<Pay></Pay>}>
              </Route>
              <Route path={`/dashboard/review`} element={ <Review></Review>}>
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
