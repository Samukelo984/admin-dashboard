import "./NewPage.scss";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const NewPage = ({ inputs, title }) => {
  const [image, setImage] = useState("");

  // console.log(image);

  return (
    <main className="new">
      <Sidebar />
      <section className="new-container">
        <Navbar />
        <article className="top">
          <h1>{title}</h1>
        </article>
        <article className="btm">
          <aside className="left">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="new-avatar"
            />
          </aside>
          <aside className="right">
            <form>
              <aside className="form-input">
                <label htmlFor="upload">
                  Uplaod Image
                  <DriveFolderUploadIcon />
                </label>
                <input
                  type="file"
                  id="upload"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </aside>
              {inputs.map((input) => (
                <aside className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </aside>
              ))}

              <button>Send</button>
            </form>
          </aside>
        </article>
      </section>
    </main>
  );
};

export default NewPage;
