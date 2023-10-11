function AddForm() {
    return (
      <div className="add-forms mt-24">
        <p className="text-center text-4xl font-bold">Add data</p>
        <form className="mt-10">
          <label htmlFor="school" className="mr-3">
            Add Education
          </label>
          <input
            type="text"
            name="school"
            id="school"
            className="mr-3 border border-black"
          />
          <label htmlFor="gradYear" className="mr-3">
            Graduation Year
          </label>
          <input
            type="number"
            name="graduationYear"
            id="gradYear"
            className="mr-3 border border-black"
          />
          <label htmlFor="degree" className="mr-3">
            Degree
          </label>
          <input
            type="text"
            name="degree"
            id="degree"
            className="border border-black"
          />
        </form>
      </div>
    );
}

export default AddForm;