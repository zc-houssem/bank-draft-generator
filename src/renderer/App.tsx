import { Button } from "@/components/ui/button";
import { electronMessage, setWindowTitle } from "./electron";

function App() {
  return (
    <div className="text-center h-screen bg-background text-foreground">
      <p>Hello</p>
      <Button
        variant="default"
        onClick={() => setWindowTitle("Hello from renderer")}
      >
        Click me
      </Button>
    </div>
  );
}

export default App;
