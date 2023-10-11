import pfp from "../assets/download.png";

function ContactInfo({ resumeState }) {
  return (
    <>
      <img src={pfp} alt="" className="h-64 w-64" />
      <div className="flex flex-col items-center my-10">
        <div className="text-4xl font-bold">{resumeState.name}</div>
        <div className="mt-4">
          {resumeState.contactInfo.phone} . {resumeState.contactInfo.email} .{" "}
          {resumeState.contactInfo.address}
        </div>
        <div className="mt-5 italic px-4">"{resumeState.summary}"</div>
      </div>
    </>
  );
}

export default ContactInfo;
