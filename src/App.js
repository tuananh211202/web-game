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
        <Route path="/" element={<HomePage />} />
        <Route path="caro-game" element={<CaroGame />} />
        <Route path="chess" element={<Chess />} />
        <Route path="guess-number-game" element={<GuessNumberGame />} />
        <Route path="hangman" element={<HangMan />} />
        <Route path="quiz-game" element={<QuizGame />} />
        <Route path="rps-game" element={<RPSGame />} />
      </Routes>
      <NameModal />
    </ConfigProvider>
  );
}

export default App;
