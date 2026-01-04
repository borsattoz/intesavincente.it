import React from 'react';
import { useState, useEffect, useMemo } from 'react';

const TITLE = "L'intesa vincente";
const DESCRIPTION = 'Simulatore online per il gioco "L\'intesa vincente" del programma Reazione a catena';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer" aria-label="Footer">
      <small className="copyright">© {year} borsattoz</small>
      <nav>
        <a
          className="social-link"
          href="https://github.com/borsattoz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          {/* GitHub SVG */}
          <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.958-.266 1.983-.399 3.003-.404 1.02.005 2.045.138 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.476 5.921.43.372.815 1.102.815 2.222 0 1.604-.014 2.896-.014 3.293 0 .321.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>

        <a
          className="social-link"
          href="https://instagram.com/borsattoz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          {/* Instagram SVG */}
          <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.403a4.92 4.92 0 0 1 1.78 1.03 4.92 4.92 0 0 1 1.03 1.78c.163.46.347 1.26.403 2.43.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.03 1.78 4.92 4.92 0 0 1-1.78 1.03c-.46.163-1.26.347-2.43.403-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.403a4.92 4.92 0 0 1-1.78-1.03 4.92 4.92 0 0 1-1.03-1.78c-.163-.46-.347-1.26-.403-2.43C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.43a4.92 4.92 0 0 1 1.03-1.78 4.92 4.92 0 0 1 1.78-1.03c.46-.163 1.26-.347 2.43-.403C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.332.013 7.052.072 5.773.13 4.842.308 4.042.616a7.076 7.076 0 0 0-2.56 1.63A7.076 7.076 0 0 0 .616 4.042C.308 4.842.13 5.773.072 7.052.013 8.332 0 8.74 0 12c0 3.26.013 3.668.072 4.948.058 1.279.236 2.21.544 3.01a7.076 7.076 0 0 0 1.63 2.56 7.076 7.076 0 0 0 2.56 1.63c.8.308 1.731.486 3.01.544C8.332 23.987 8.74 24 12 24s3.668-.013 4.948-.072c1.279-.058 2.21-.236 3.01-.544a7.076 7.076 0 0 0 2.56-1.63 7.076 7.076 0 0 0 1.63-2.56c.308-.8.486-1.731.544-3.01.059-1.28.072-1.688.072-4.948s-.013-3.668-.072-4.948c-.058-1.279-.236-2.21-.544-3.01a7.076 7.076 0 0 0-1.63-2.56A7.076 7.076 0 0 0 19.958.616c-.8-.308-1.731-.486-3.01-.544C15.668.013 15.26 0 12 0z" />
            <path d="M12 5.838A6.162 6.162 0 1 0 18.162 12 6.169 6.169 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 16 12a4.004 4.004 0 0 1-4 4z" />
            <circle cx="18.406" cy="5.594" r="1.44" />
          </svg>
        </a>

        <a
          className="social-link"
          href="https://youtube.com/@borsattoz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          title="YouTube"
        >
          {/* YouTube SVG */}
          <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M23.499 6.203a2.996 2.996 0 0 0-2.108-2.118C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.391.585A2.996 2.996 0 0 0 .5 6.203 31.2 31.2 0 0 0 0 12c0 1.65.171 3.367.5 5.797a2.996 2.996 0 0 0 2.108 2.118C4.3 20.5 12 20.5 12 20.5s7.7 0 9.391-.585a2.996 2.996 0 0 0 2.108-2.118c.329-2.43.5-4.147.5-5.797s-.171-3.367-.5-5.797zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
          </svg>
        </a>
      </nav>
    </footer>
  );
}

export default function Board() {
  const INITIAL_TIME = 60;
  const INITIAL_RUNNING = false;
  const INITIAL_PAUSED = false;
  const INITIAL_ANSWERED = true;
  const INITIAL_SCORE = 0;
  const INITIAL_PASSO = 3;
  const INITIAL_WORDS: string[] = [];

  const INITIAL_WORD = "PRONTI";

  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [isRunning, setIsRunning] = useState(INITIAL_RUNNING);
  const [isPaused, setIsPaused] = useState(INITIAL_PAUSED);
  const [answered, setAnswered] = useState(INITIAL_ANSWERED);
  const [passo, setPasso] = useState(INITIAL_PASSO);
  const [score, setScore] = useState(INITIAL_SCORE);
  const [words, setWords] = useState(INITIAL_WORDS);
  const [word, setWord] = useState(INITIAL_WORD);

  const isDisabledStart = useMemo(() => isRunning || !answered || timeLeft <= 0, [isRunning, answered, timeLeft]);
  const isDisabledPause = useMemo(() => !isRunning || timeLeft <= 0, [isRunning, timeLeft]);
  const isDisabledPasso = useMemo(() => !isRunning || timeLeft <= 0 || passo <= 0, [isRunning, timeLeft, passo]);
  const isDisabledAnswer = useMemo(() => !isPaused || answered, [isPaused, answered]);

  const reset = () => {
    setIsPaused(INITIAL_PAUSED);
    setIsRunning(INITIAL_RUNNING);
    setTimeLeft(INITIAL_TIME);
    setAnswered(INITIAL_ANSWERED);
    setPasso(INITIAL_PASSO);
    setScore(INITIAL_SCORE);
    setWord(INITIAL_WORD);
  }

  useEffect(() => {
    const fetchWords = async () => {
      const response = await fetch('words.txt');
      if (!response.ok) throw new Error('cannot find `words.txt`');

      const text = await response.text();
      const lines = text.split("\n").map(line => line.trim()).filter(line => line != "");

      setWords(lines);
    };

    if (words.length == 0) {
      fetchWords();
    }
  }, [words]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsPaused(true);
      
      return;
    }

    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const start = () => {
    if (words.length == 0) {

    }

    const randomIndex = Math.floor(Math.random() * words.length);
    const newWords = words.filter((_, index) => index != randomIndex);

    setWord(words[randomIndex]);
    setWords(newWords);

    setIsRunning(true);
    setIsPaused(false);
    setAnswered(false);
  };

  const pause = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const doPasso = () => {
    setIsRunning(false);
    setAnswered(true);

    if (passo > 0) {
      setPasso((prev) => prev - 1);
    }
  };

  const correct = () => {
    setAnswered(true);

    setScore((prev) => prev + 1);
  };

  const error = () => {
    setAnswered(true);

    if (score > 0) {
      setScore((prev) => prev - 1);
    }
  };

  return (
    <div className='nes-container is-dark'>
      <meta name="description" content={DESCRIPTION} />
      <title>{TITLE}</title>
      <h1>{TITLE}</h1>
      <p>punteggio: {score}</p>
      <p>passo: {passo}</p>
      <p>tempo rimasto: {timeLeft}s</p>
      <h2 className='nes-container is-dark'>{word.toUpperCase()}</h2>
      <p><button onClick={() => start()} disabled={isDisabledStart} className={`nes-btn ${isDisabledStart ? "is-disabled" : ""}`}>VIA</button></p>
      <p><button onClick={() => pause()} disabled={isDisabledPause} className={`nes-btn ${isDisabledPause ? "is-disabled" : ""}`}>PRENOTA</button></p>
      <p><button onClick={() => doPasso()} disabled={isDisabledPasso} className={`nes-btn is-warning ${isDisabledPasso ? "is-disabled" : ""}`}>PASSO</button></p>
      <p><button onClick={() => correct()} disabled={isDisabledAnswer} className={`nes-btn is-success ${isDisabledAnswer ? "is-disabled" : ""}`}>CORRETTO</button></p>
      <p><button onClick={() => error()} disabled={isDisabledAnswer} className={`nes-btn is-error ${isDisabledAnswer ? "is-disabled" : ""}`}>ERRORE</button></p>
      <p><button onClick={() => reset()} className='nes-btn'>RICOMINCIA</button></p>
      <Footer />
    </div>
  );
}
