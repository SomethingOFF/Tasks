import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/home/Homepage";
import { Suspense, lazy } from "react";
import Loader from "./components/utils/Loader";

const FormSubmission = lazy(
  () => import("./components/pages/form/FormSubmission")
);
const JokesGenerator = lazy(
  () => import("./components/pages/jokes/JokesGenerator")
);
const PasswordValidator = lazy(
  () => import("./components/pages/password/PasswordValidator")
);

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/form-submission" Component={FormSubmission} />
          <Route path="/Jokes-Generator" Component={JokesGenerator} />
          <Route path="/password-validator" Component={PasswordValidator} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
