import { useFunctions } from "../../Connection/Functions";
import { Shortfact } from "../../Services/ShortfactServices";

const CreateShortfactForm = () => {
  const { createFact } = useFunctions();
  const formData = new Shortfact();
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    const updatedFormData = { ...formData };

    if (type === "file") {
      updatedFormData[name] = files[0];
    } else {
      updatedFormData[name] = value;
    }

    formData.setShortfact(updatedFormData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = formData.getFactAsForm();
      createFact(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Content</label>
        <input
          type="text"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Image</label>
        <input type="file" name="image" onChange={handleChange} />
      </div>
      <div>
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateShortfactForm;
