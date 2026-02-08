import { useState, useEffect } from "react";

const SearchBar = ({ onSearch }) => {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  async function fetchWord() {
    if (!word.trim()) return;

    setLoading(true);
    setError("");
    setData(null);
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("Word not found. Please check the spelling and try again.");
        }
        throw new Error("Something went wrong. Please try again.");
      }
      const result = await res.json();
      setData(result[0]);
      onSearch(result[0]);
      saveToHistory(word);
    } catch (err) {
      if (err instanceof TypeError) {
        setError("No internet connection. Please check your network.");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchWord();
    }
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setHistory(saved);
  }, []);

  const saveToHistory = (word) => {
    setHistory((prev) => {
      const updated = [word, ...prev.filter((w) => w !== word)].slice(0, 5);
      localStorage.setItem("searchHistory", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Search Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search a word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={fetchWord}
          className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 rounded-xl border border-red-300 bg-red-50 p-4 flex items-start gap-3">
          <span className="text-red-500 text-xl">⚠️</span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-red-900">Error</p>
            <p className="text-sm text-red-700">{error}</p>
          </div>
          <button
            onClick={() => setError("")}
            className="text-red-500 hover:text-red-700 font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="mb-4 rounded-xl border border-blue-300 bg-blue-50 p-4">
          <p className="text-sm text-blue-700">🔍 Searching...</p>
        </div>
      )}

      {/* Search History Card */}
      {history.length > 0 && (
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-600">
              Recent searches
            </h3>
            <button
              onClick={() => {
                localStorage.removeItem("searchHistory");
                setHistory([]);
              }}
              className="text-xs text-red-500 hover:underline"
            >
              Clear
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {history.map((word, index) => (
              <button
                key={index}
                onClick={() => setWord(word)}
                className="rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-200 transition"
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
