function Experiences({ experiences }) {
  return (
    <div>
      <h2>Experience</h2>
      {experiences.map((experience) => {
        return (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div key="1">
                <h3>
                  {experience.company}, {experience.location}
                </h3>
                <p>
                  <i>{experience.title}</i>
                </p>
              </div>
              <div>
                <p>
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
            </div>
            <div className="desc">
              <p>{experience.responsibilities}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Experiences;
