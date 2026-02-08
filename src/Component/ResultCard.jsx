import { useRef } from "react";

const ResultCard = ({ data }) => {
  const audioRef = useRef(null);

  if (!data || !data.meanings) return null;

  const audioSrc =
    data.phonetics?.find(p => p.audio)?.audio || "";

  const synonyms = [
    ...new Set(
      data.meanings.flatMap(
        meaning =>
          meaning.synonyms?.length
            ? meaning.synonyms
            : meaning.definitions?.flatMap(def => def.synonyms || [])
      )
    ),
  ];
  const antonyms = [
    ...new Set(
      data.meanings.flatMap(
        meaning =>
          meaning.antonyms?.length
            ? meaning.antonyms
            : meaning.definitions?.flatMap(def => def.antonyms || [])
      )
    ),
  ];


  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 border-b border-gray-200 px-6 py-4">
        <div className="min-w-0">
          <h2 className="text-2xl font-bold text-gray-900 truncate">
            {data.word}
          </h2>
          {data.phonetic && (
            <p className="text-sm text-gray-500 truncate">
              {data.phonetic}
            </p>
          )}
        </div>

        {audioSrc && (
          <>
            <audio ref={audioRef} src={audioSrc} />
            <button
              onClick={() => audioRef.current.play()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
            >
              🔊
            </button>
          </>
        )}
      </div>

      {/* Scrollable content */}
      <div className="max-h-80 overflow-y-auto px-6 py-4 space-y-4">
        {data.meanings?.map((meaning, index) => (
          <div key={index} className="rounded-lg bg-gray-50 p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
              {meaning.partOfSpeech}
            </p>

            <ul className="space-y-2 text-sm text-gray-800">
              {meaning.definitions?.map((def, i) => (
                <li key={i}>
                  • {def.definition}
                  {def.example && (
                    <p className="mt-1 text-xs text-gray-500 italic">
                      “{def.example}”
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {synonyms.length > 0 && (
          <div className="rounded-lg bg-blue-50 p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
              Synonyms
            </p>
            <div className="flex flex-wrap gap-2">
              {synonyms.slice(0, 12).map((syn, i) => (
                <span
                  key={i}
                  className="rounded-full bg-white px-3 py-1 text-xs text-blue-700 border border-blue-200"
                >
                  {syn}
                </span>
              ))}
            </div>
          </div>
        )}
        {antonyms.length > 0 && (
          <div className="rounded-lg bg-red-50 p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-red-600">
              Antonyms
            </p>

            <div className="flex flex-wrap gap-2">
              {antonyms.slice(0, 10).map((ant, i) => (
                <span
                  key={i}
                  className="rounded-full bg-white px-3 py-1 text-xs text-red-700 border border-red-200"
                >
                  {ant}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
