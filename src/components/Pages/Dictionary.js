import SearchBox from "../SearchBox";

export default function Dictionary() {
  return (
    <>
      <div className="bg-slate-300 min-h-screen">
        <h1 className="text-center py-5">Online Dictionary</h1>
        <h4 className="text-center py-5">
          Enter a word to find it's Definition:
        </h4>
        <div className="dictionaryContainer">
          <SearchBox />
        </div>
      </div>
    </>
  );
}
