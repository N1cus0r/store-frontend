import ShopTheme from "./theme/ShopTheme";
import ShopRouter from "./utils/routing/ShopRouter";

function App() {
  return (
    <div className="App">
      <ShopTheme>
        <ShopRouter />
      </ShopTheme>
    </div>
  );
}

export default App;
