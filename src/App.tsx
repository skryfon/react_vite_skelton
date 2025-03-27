import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="w-full p-0 m-0 h-screen flex justify-center items-center flex-col align-middle gap-10">
        <div className="text-3xl">
          You are ready to setup the project, If you see the text in 3Xl size
          and at the center of the screen you are able to use tailwind css
        </div>
        <div className="flex flex-col items-center justify-center">
          <Button>Click me</Button>
        </div>
        <p>
          If you see click me button with styling you are good to use{" "}
          <a
            className="underline"
            href="https://ui.shadcn.com/docs/components/"
          >
            shadcn UI components
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
