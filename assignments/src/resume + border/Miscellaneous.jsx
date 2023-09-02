function Miscallaneous({ skills, langs, hobbies }) {
  return (
    <div>
      <div className="skills">
        <h2 style={{ textDecoration: "underline " }}>Skills</h2>
        <ul>
          {skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="langs">
        <h2 style={{ textDecoration: "underline " }}>Languages</h2>
        <ul>
          {langs.map((lang, idx) => (
            <li key={idx}>{lang}</li>
          ))}
        </ul>
      </div>

      <div className="hobbies">
        <h2 style={{ textDecoration: "underline " }}>Hobbies</h2>
        <ul>
          {hobbies.map((hobby, idx) => (
            <li key={idx}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Miscallaneous;
