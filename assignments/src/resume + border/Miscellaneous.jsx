function Miscellaneous({ resumeState }) {
  return (
    <div className="languages-hobbies">
      <p className="font-bold text-3xl">Languages and Hobbies</p>
      <div className="flex mt-2">
        <p>{resumeState.languages.map((lang) => `${lang}, `)}</p>
        <p>{resumeState.hobbies.map((hobby) => `${hobby}, `)}</p>
      </div>
    </div>
  );
}

export default Miscellaneous;
