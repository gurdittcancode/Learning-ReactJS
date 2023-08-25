function Miscallaneous({ skills, langs, hobbies }) {
  return (
    <div>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="langs">
        <h3>Languages</h3>
        <ul>
            {langs.map(lang => <li>{lang}</li>)}
        </ul>
      </div>

      <div className="hobbies">
        <h3>Hobbies</h3>
        <ul>
            {hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Miscallaneous;
