import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/Media Query/MediaQuery320-576.css";
import "../src/Media Query/MediaQuery576-768.css";
import "../src/Media Query/MediaQuery768-991.css";

createRoot(document.getElementById("root")).render(<App />);
