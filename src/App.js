import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CaroGame from "./pages/CaroGame";
import Chess from "./pages/Chess";
import GuessNumberGame from "./pages/GuessNumberGame";
import HangMan from "./pages/HangMan";
import QuizGame from "./pages/QuizGame";
import RPSGame from "./pages/RPSGame";
import NameModal from "./components/NameModal";
import { ConfigProvider } from "antd";

const App = () => {

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainerDisabled: "#DCDCDC"
        }
      }}
    >
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="caro-game" element={<CaroGame />} />
        <Route exact path="chess" element={<Chess />} />
        <Route exact path="guess-number-game" element={<GuessNumberGame />} />
        <Route exact path="hangman" element={<HangMan />} />
        <Route exact path="quiz-game" element={<QuizGame />} />
        <Route exact path="rps-game" element={<RPSGame />} />
      </Routes>
      <NameModal />
    </ConfigProvider>
  );
}

export default App;
