import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <header className="container grid grid-cols-min grid-flow-col mx-auto">
        <div className="col-auto">
          <a href="">Logo</a>
          <a href="">Link 1</a>
          <a href="">Link 2</a>
          <a href="">Link 3</a>
          <a href="">Link 4</a>
        </div>
        <div className="col-auto">
          <button>Login</button>
          <button>Create Account</button>
        </div>
      </header>
    </div>
  );
}
