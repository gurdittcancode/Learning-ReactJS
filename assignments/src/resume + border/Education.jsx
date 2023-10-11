function Education({ resumeState }) {
  return (
    <div className="education my-3">
      <p className="text-3xl font-bold">Education</p>
      {resumeState.education.map((edu, idx) => {
        return (
          <div key={idx} className="flex justify-between mt-2">
            <div>
              <p className="font-bold">{edu.school}</p>
              <p className="italic">{edu.degree}</p>
            </div>
            <p>{edu.graduationYear}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
