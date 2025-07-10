import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="flex flex-col justify-center space-y-3 ">
      <div>
        <h1>Primary</h1>
        <div className="flex ml-8 space-x-8">
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="md">
            Medium
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button disabled variant="primary" size="lg">
            Disabled
          </Button>
        </div>
      </div>
      <div>
        <h1>Secondary</h1>
        <div className="flex ml-8 space-x-8">
          <Button variant="secondary" size="sm">
            Small
          </Button>
          <Button variant="secondary" size="md">
            Medium
          </Button>
          <Button variant="secondary" size="lg">
            Large
          </Button>
          <Button disabled variant="secondary" size="lg">
            Disabled
          </Button>
        </div>
      </div>
      <div>
        <h1>Outline</h1>
        <div className="flex ml-8 space-x-8">
          <Button variant="outline" size="sm">
            Small
          </Button>

          <Button variant="outline" size="md">
            Medium
          </Button>

          <Button variant="outline" size="lg">
            Large
          </Button>
          <Button disabled variant="outline" size="lg">
            Disabled
          </Button>
        </div>
      </div>
      <div>
        <h1>Rounded</h1>
        <div className="flex ml-8 space-x-8">
          <Button variant="rounded" size="sm">
            Small
          </Button>
          <Button variant="rounded" size="md">
            Medium
          </Button>
          <Button variant="rounded" size="lg">
            Large
          </Button>
          <Button disabled variant="rounded" size="lg">
            Disabled
          </Button>
        </div>
      </div>
      <div>
        <h1>Text</h1>
        <div className="flex ml-8 space-x-8">
          <Button variant="text" size="sm">
            Small
          </Button>
          <Button variant="text" size="md">
            Medium
          </Button>
          <Button variant="text" size="lg">
            Large
          </Button>
          <Button disabled variant="text" size="lg">
            Disabled
          </Button>
        </div>
      </div>
      <div>
        <h1>Square</h1>
        <div className="flex ml-8 space-x-8">
          <Button variant="square" size="sm">
            Small
          </Button>
          <Button variant="square" size="md">
            Medium
          </Button>
          <Button variant="square" size="lg">
            Large
          </Button>
          <Button disabled variant="square" size="lg">
            Disabled
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
