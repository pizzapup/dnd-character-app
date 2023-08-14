import "./styles.css";
import DiceMiniGame from "./components/DiceMiniGame/DiceMiniGame";
import {NavLink, Outlet, Route, Routes} from "react-router-dom";
import {Suspense, lazy} from "react";
import Layout from "./routes/Layout";
const Home = lazy(() => import("./routes/Home"));
export const pages = [
  {title: "Home", path: "home", element: "Home"},
  {title: "Dice Roller", path: "diceRoller", element: "DiceRoller"},
  {
    title: "Character Builder",
    path: "characterBuilder",
    element: "CharacterBuilder",
  },
];

const Pages = pages.map((page, i) => {
  const Component = lazy(() => import(`./routes/${page.element}`));
  return (
    <Route
      key={`page-${i}`}
      path={page.path}
      element={<Suspense fallback={<>...</>}>{<Component />}</Suspense>}
    />
  );
});

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout pages={pages} />}>
          <Route
            index
            element={
              <Suspense fallback={<>...</>}>
                <Home />
              </Suspense>
            }
          />
          {Pages}
          <Route
            path="home"
            element={
              <Suspense fallback={<>...</>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="diceRoller"
            element={
              <Suspense fallback={<>...</>}>
                <DiceMiniGame />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={<p> yikes - there's nothing at this url. try again ? </p>}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
