import { useState } from "react";

export default function UploadFile() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("videoFile", event.target.videoFile.files[0]);
    const response = await fetch("/api/uploadFile", {
      method: "POST",
      body: formData,
    });
    console.log(response);
    // const data = await response.json();
    // console.log(data);
  };

  return (
    <>
      <form
        encType="multipart/form-data"
        onSubmit={handleFileUpload}
        method="POST"
      >
        <label htmlFor="videoFile">Video File</label>
        <input
          id="videoFile"
          name="videoFile"
          type="file"
          accept="video/mp4"
          onChange={handleFileChange}
        />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}
9;
