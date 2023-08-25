function Education({ education }) {
  return (
    <>
      <h2>Education</h2>
      {education.map((edu) => {
        return (
          <div style={{display: "flex", justifyContent: "space-between"}} key={Math.floor(Math.random() * 10)}>
            <div>
              <h3>{edu.school}</h3>
              <p>
                <i>{edu.degree}</i>
              </p>
            </div>
            <div>
              <p>
                <i>{edu.graduationYear}</i>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Education;
