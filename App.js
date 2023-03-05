import React from "react";
import { BrowserRouter, RouterProvider, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import useToken from "./hooks/useToken";
import Home from "./pages/Home";
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Video2 from "./pages/Video2";
import CreatePage from "./pages/Video2/CreatePage";
import JoinPage from "./pages/Video2/JoinPage";
import RoomPage from "./pages/Video2/RoomPage";
import Video3 from "./pages/Video3/webpack.config";
import VideoApp from "./pages/Video/VideoApp";
import VideoPlayer from "./pages/video4/VideoPlayer";

function App() {
    const {token, setToken} = useToken()

    return (
        <div>
            <NavBar token={token}/>
            <React.StrictMode>

                    <BrowserRouter>

                        <Routes>
                            <Route
                                path="/"

                            >
                                <Route
                                    path="/nsbe-hacks"
                                    element={<Home />}
                                />
                                <Route
                                    path="/nsbe-hacks/login"
                                    element={<Login setToken={setToken} />}
                                />
                                <Route
                                    path="/nsbe-hacks/signup"
                                    element={<Signup setToken={setToken} />}
                                />
                                <Route
                                    path="/nsbe-hacks/video2"
                                    element={<Video2 />}
                                />
                                <Route
                                    path="/nsbe-hacks/video2/create"
                                    element={<CreatePage />}
                                />
                                <Route
                                    path="/nsbe-hacks/video2/join"
                                    element={<JoinPage />}
                                />
                                <Route
                                    path="/nsbe-hacks/video2/room"
                                    element={<RoomPage />}
                                />
                                <Route
                                    path="/nsbe-hacks/video"
                                    element={<VideoApp />}
                                />
                                <Route
                                    path="/nsbe-hacks/video4"
                                    element={<VideoPlayer />}
                                />

                            </Route>
                        </Routes>
                    </BrowserRouter>
    
            </React.StrictMode>
        </div>
    );
}

export default App;
