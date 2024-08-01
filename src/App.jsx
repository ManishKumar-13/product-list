import { CartProvider } from "react-use-cart";
import Home from "./components/Home";

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;