import React from "react";
import "./App.css";
import ReactAvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
import Header from "./components/Header";
import Step3 from "./components/Step3";
import HeadingText from "./components/HeadingText";
import Step1And2Heading from "./components/Step1And2Heading";
import { utils } from "./util";

class App extends React.Component {
  constructor() {
    super();
    this.state = utils.initalState;
  }
  
  onCopy = () => {
    utils.copyText();
    this.setState({ isCopied: true });
  };

  onClickSave = () => {
    if (this.editor) {
      this.setState({ editableItem: "" });
      const canvasScaled = this.editor.getImageScaledToCanvas();
      // TODO: Ref can be used instead of doc.getElem...Id
      let canvas = document.getElementById("myCanvas");
      const ctx = canvas.getContext("2d");
      let that = this;
      let img = new Image();
      img.onload = function () {
        ctx.beginPath();
        ctx.arc(45, 45, 44, 0, 19.28, false);
        ctx.clip();
        ctx.stroke();
        ctx.closePath();
        ctx.drawImage(img, 0, 0);
        that.setState({ finalImage: canvas.toDataURL() });
      };
      img.src = canvasScaled.toDataURL();
    }
  };

  setEditorRef = (editor) => (this.editor = editor);
  render() {
    let {
      isFinished,
      finalImage,
      fullName,
      title,
      editableItem,
      isCopied,
      websiteurl,
    } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="app-inner">
          <HeadingText />
          <div className="app-inner-wrap">
            <Step1And2Heading finalImage={finalImage} />
            <div className="signature-wrap">
              <div
                id="signature"
                style={{
                  marginBottom: "30px",
                  borderSpacing: 0,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  this.setState({ editableItem: "" });
                }}
              >
                <table
                  width="600"
                  border="0"
                  cellSpacing="0"
                  cellPadding="0"
                  bgcolor="#fff"
                >
                  <tbody>
                    <tr>
                      <td
                        width="100"
                        style={{ padding: 15 }}
                        valign="middle"
                        className="demo"
                      >
                        <canvas
                          id="myCanvas"
                          width="90"
                          height="90"
                          style={{ display: "none", verticalAlign: "bottom" }}
                        ></canvas>

                        {finalImage && (
                          <img
                            onError={(e) => (e.target.src = "unnamed.png")}
                            src={this.state.finalImage || "unnamed.png"}
                            width="90"
                            height="90"
                            alt="profile pic"
                            style={{
                              verticalAlign: "bottom",
                              background: "black",
                              borderRadius: 50,
                            }}
                          />
                        )}

                        {!finalImage && (
                          <div>
                            <Dropzone
                              onDrop={(file) => {
                                if (file[0].type.includes("image/")) {
                                  let that = this;
                                  var reader = new FileReader();
                                  reader.readAsDataURL(file[0]);
                                  reader.onload = function () {
                                    that.setState({ image: reader.result });
                                  };
                                  reader.onerror = function (error) {};
                                } else {
                                  alert("Please upload a valid Image file!");
                                }
                              }}
                            >
                              {({ getRootProps, getInputProps }) => (
                                <section>
                                  <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <ReactAvatarEditor
                                      ref={this.setEditorRef}
                                      image={this.state.image}
                                      width={90}
                                      height={90}
                                      color={[255, 255, 255, 0.6]} // RGBA
                                      scale={this.state.scrollValue}
                                      rotate={0}
                                      borderRadius={90}
                                      position={this.state.position}
                                      onDragEnd={(e) => e.stopPropagation()}
                                      onMouseUp={(e) => e.stopPropagation()}
                                      onPositionChange={(e) => this.setState({position:{x:e.x, y:e.y}})}
                                    />
                                  </div>
                                </section>
                              )}
                            </Dropzone>
                          </div>
                        )}

                        {/* import image from url */}
                        <input
                          type="text"
                          style={{
                            margin: 5,
                            borderRadius: 3,
                            border: "1px solid gray",
                            padding: 5,
                            fontSize: 10,
                            display: isFinished ? "none" : "block",
                          }}
                          placeholder="Enter Image URL/Link"
                          onChange={(result) => {
                            utils.toDataURL(result.target.value, (data) => {
                              this.setState({ image: data });
                            });
                          }}
                        />
                        {/* end of import image from url */}
                      </td>
                      <td
                        style={{ padding: "0", textAlign: "left" }}
                        valign="middle"
                      >
                        <table>
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  fontSize: "20px",
                                  fontWeight: "normal",
                                  display: "block",
                                }}
                              >
                                {editableItem !== "fullName" && (
                                  <label
                                    className={`${
                                      !this.editor ? "label-styles" : ""
                                    }`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (!finalImage) {
                                        this.setState({
                                          editableItem: "fullName",
                                        });
                                      }
                                    }}
                                  >
                                    {fullName}
                                  </label>
                                )}

                                {editableItem === "fullName" && (
                                  <input
                                    className="name"
                                    type="text"
                                    value={fullName}
                                    onBlur={() =>
                                      this.setState({ editableItem: "" })
                                    }
                                    onChange={(e) => {
                                      this.setState({
                                        fullName: e.target.value,
                                      });
                                    }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                    }}
                                  />
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ padding: 0 }}>
                                <div
                                  style={{
                                    fontSize: "16px",
                                    minWidth: "200px",
                                    color: "#b7b5b5",
                                  }}
                                >
                                  {editableItem !== "title" && (
                                    <label
                                      className={`${
                                        !this.editor ? "label-styles" : ""
                                      }`}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        if (!finalImage) {
                                          this.setState({
                                            editableItem: "title",
                                          });
                                        }
                                      }}
                                    >
                                      {title}
                                    </label>
                                  )}
                                  {editableItem === "title" && (
                                    <input
                                      className="degnation"
                                      type="text"
                                      value={title}
                                      onBlur={() =>
                                        this.setState({ editableItem: "" })
                                      }
                                      onClick={(e) => {
                                        e.stopPropagation();
                                      }}
                                      onChange={(e) => {
                                        this.setState({
                                          title: e.target.value,
                                        });
                                      }}
                                    />
                                  )}{" "}
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ padding: 0 }}>
                                <div
                                  style={{
                                    fontSize: "16px",
                                    minWidth: "200px",
                                    borderTop: "1px solid",
                                    paddingTop: 6,
                                    color: "#b7b5b5",
                                  }}
                                >
                                  {editableItem !== "websiteurl" &&
                                    (finalImage ? (
                                      <a
                                        href={`https://${websiteurl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                          color: "#2299dd",
                                          textDecoration: "none",
                                          fontSize: "14px",
                                        }}
                                      >
                                        {websiteurl}
                                      </a>
                                    ) : (
                                      <label
                                        style={{ textTransform: "lowercase" }}
                                        className={`${
                                          !this.editor ? "label-styles" : ""
                                        }`}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          if (!finalImage) {
                                            this.setState({
                                              editableItem: "websiteurl",
                                            });
                                          }
                                        }}
                                      >
                                        {websiteurl}
                                      </label>
                                    ))}
                                  {editableItem === "websiteurl" && (
                                    <input
                                      className="degnation"
                                      type="text"
                                      value={websiteurl}
                                      onBlur={() =>
                                        this.setState({ editableItem: "" })
                                      }
                                      onClick={(e) => {
                                        e.stopPropagation();
                                      }}
                                      onChange={(e) => {
                                        this.setState({
                                          websiteurl: e.target.value,
                                        });
                                      }}
                                    />
                                  )}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" width="600" style={{ padding: 0 }}>
                        <div
                          style={{
                            display: "flex",
                            padding: "15px 15px 10px 15px",
                            alignItems: "center",
                            borderTop: "1px solid rgb(0 0 0 / 10%)",
                          }}
                        >
                          <span
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            {finalImage && (
                              <img
                                onError={(e) =>
                                  (e.target.src = this.state.logo)
                                }
                                src={this.state.logo}
                                height="27"
                                alt="Logo"
                                style={{
                                  verticalAlign: "bottom",
                                }}
                              />
                            )}

                            {!finalImage && (
                              <div>
                                <Dropzone
                                  onDrop={(file) => {
                                    if (file[0].type.includes("image/")) {
                                      let that = this;
                                      var reader = new FileReader();
                                      reader.readAsDataURL(file[0]);
                                      reader.onload = function () {
                                        that.setState({ logo: reader.result });
                                      };
                                      reader.onerror = function (error) {};
                                    } else {
                                    }
                                  }}
                                >
                                  {({ getRootProps, getInputProps }) => (
                                    <section>
                                      <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <img
                                          alt="Logo"
                                          src={this.state.logo}
                                          height="27px"
                                        />
                                      </div>
                                    </section>
                                  )}
                                </Dropzone>
                              </div>
                            )}
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="action-bar">
                {!finalImage && (
                  <div style={{ display: "flex" }}>
                    {" "}
                    <input
                      type="range"
                      step="0.01"
                      min="1"
                      max="2"
                      name="scale"
                      className="slider"
                      value={this.state.scrollValue}
                      onChange={(e) =>
                        this.setState({ scrollValue: e.target.value })
                      }
                    />
                    <input
                      type="button"
                      value="Done"
                      onClick={() => {
                        this.onClickSave();
                        this.setState({ isFinished: !this.isFinished });
                      }}
                    />
                  </div>
                )}

                {finalImage && (
                  <div>
                    <input
                      type="button"
                      value="Back"
                      onClick={() =>
                        this.setState({
                          finalImage: "",
                          isCopied: false,
                          isFinished: false,
                        })
                      }
                    />
                    <input
                      type="button"
                      value={isCopied ? "Copied" : "Copy"}
                      onClick={() => this.onCopy()}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {finalImage && (
            <React.Fragment>
              <Step3 />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default App;
