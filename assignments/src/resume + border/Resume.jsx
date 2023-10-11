import { resumeData } from "./data/resumeData";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Miscellaneous from "./Miscellaneous";
import { useState } from "react";

function Resume() {
  const [resumeState, setResumeState] = useState(resumeData);

  return (
    <div className="flex h-screen">
      <div className="w-2/5 h-full bg-blue-500 flex flex-col justify-center items-center p-3">
        <ContactInfo resumeState={resumeState} />
      </div>

      <div className="w-3/5 h-full p-4 flex flex-col">
        <Education resumeState={resumeState} />
        <Experience resumeState={resumeState} />
        <Skills resumeState={resumeState} />
        <Miscellaneous resumeState={resumeState} />
      </div>
    </div>
  );
}

export default Resume;
