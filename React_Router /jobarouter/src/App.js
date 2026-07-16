import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";

// help
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";

// layouts
import { RootLayout } from "./layouts/RootLayout";
import { HelpLayout } from "./layouts/HelpLayout";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index /*path="/"*/ element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
