import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import { PostProvider } from "./providers/PostProvider";
import NewPost from "./components/NewPost";
import { UserProvider } from "./providers/UserProvider";
import UserPage from "./pages/UserPage";
import SearchPage from "./pages/SearchPage";
import Modal from "./components/Modal";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "/new-post",
          element: <NewPost />,
        },
        {
          path: "/:profilename",
          element: <UserPage />,
          children: [
            {
              path: "/:profilename/:postname",
              element: <Modal />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="container">
      <UserProvider>
        <PostProvider>
          <RouterProvider router={router} />
        </PostProvider>
      </UserProvider>
    </div>
  );
}

export default App;
