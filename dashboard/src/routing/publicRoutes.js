
import { Route, Routes } from "react-router-dom";
import { Overall } from "../component/overall";
import { EvenstData } from "../component/events";
import { ComponentData } from "../component/components";
export const PublicRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Overall />} />
                <Route path='/events/:id' element={<EvenstData />} />
                <Route path='/components/:id' element={<ComponentData />} />
                {/* <Route path="/login" element={<LoginPage page={"login"} />} />
                <Route path='/signup' element={<LoginPage page={"signup"} />} /> */}
            </Routes>
        </>
    )
}  