import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import SearchBox from "../SearchBox";
import { useNavigate } from "react-router-dom";

export default function Definition() {
  const [Word, setWord] = useState();
  const { search } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
      .then((res) => {
        if (res.status === 404) {
          navigate("/notfound/" + search);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setWord(data[0].meanings);
        console.log(data[0].meanings);
      });
  }, []);
  return (
    <>
      {Word ? (
        <>
          <h1 className="px-[70px] py-4">Definition:</h1>
          <div className="col-8 mx-auto">
            {Word.map((meaning) => {
              return (
                <div key={v4()} className="">
                  <p>
                    <span className="font-semibold">
                      {meaning.partOfSpeech + " : "} &nbsp;&nbsp;
                    </span>{" "}
                    {meaning.definitions[0].definition}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-[500px] d-flex justify-center mx-auto py-5">
            <div>
              <p className="font-semibold">Search again:</p>
              <SearchBox />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
