import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { LogoutModalProvider } from "./context/LogoutModalProvider";

export default function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <LogoutModalProvider>
          <AppRouter />
        </LogoutModalProvider>
      </BrowserRouter>
    </div>
  );
}
