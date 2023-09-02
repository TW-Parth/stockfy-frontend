import { Navigate, Route, Routes } from "react-router-dom";
import ProductList from "./products/ProductList";
import Dashboard from "./index";

const DashBoardLayout = () => {
    return (
        <Routes>
            <Route path="/" Component={Dashboard} />
            <Route path="/product-list" Component={ProductList} />
            <Route path="/*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
    )
}

export default DashBoardLayout;