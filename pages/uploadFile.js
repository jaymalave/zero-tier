import { useState } from "react";

export default function UploadFile() {
  const [file, setFile] = useState(null);

  const handleFileChange = async (formData) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    const handleFileUpload = async (event) => {
      event.preventDefault();
      // console.log("in handleFileUpload");
      // console.log(event.target.videoFile.files[0].name);
      // const file = event.target.videoFile.files[0];
      // console.log(file);

      // const url = "http://localhost:3000/api/videoUpload/generateUpload";
      // const response = await fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     fileName: file.name,
      //     fileType: file.type,
      //     filePath: file.path,
      //   }),
      // });
      // console.log("response: ", response);
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
  };
}
