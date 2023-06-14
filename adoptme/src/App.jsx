import { createRoot } from "react-dom/client";
import Search from "./Search";

const App = () => {
    return (
        <div>
            <h1>Hi</h1>
            <Search />
        </div>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);