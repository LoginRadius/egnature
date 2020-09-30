import React from "react";
import "./App.css";
import ReactAvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA0QjVBQzE2MDZBRDExRUFBRTkyQzg0MERENzA2QkFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA0QjVBQzE3MDZBRDExRUFBRTkyQzg0MERENzA2QkFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDRCNUFDMTQwNkFEMTFFQUFFOTJDODQwREQ3MDZCQUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDRCNUFDMTUwNkFEMTFFQUFFOTJDODQwREQ3MDZCQUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz64i3UuAAAXjElEQVR42uydC5QU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",
      scrollValue: 1.2,
      finalImage: "",
      fullName: "David Johnson",
      title: "SEO Manager",
      websiteurl: "www.loginradius.com",
      editableItem: "",
      isCopied: false
    };
  }
  onCopy = () => {
    var doc = document,
      signature = doc.getElementById("signature"),
      range,
      selection;

    if (doc.body.createTextRange) {
      range = doc.body.createTextRange();
      range.moveToElementText(signature);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = doc.createRange();
      range.selectNodeContents(signature);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    this.setState({ isCopied: true });
  };
  onClickSave = () => {
    if (this.editor) {
      this.setState({ editableItem: "" });
      let canvas = document.getElementById("myCanvas");
      const canvasScaled = this.editor.getImageScaledToCanvas();
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
      finalImage,
      fullName,
      title,
      editableItem,
      isCopied,
      websiteurl
    } = this.state;
    return (
      <div className="App">
        <div className="app-inner">
          <h1>Email Signature Generator</h1>
          <p>
            Generate your email signature by just uploading a Photo, entering
            Name and Designation. Copy and Paste the signature in your email and
            you are good to go !
          </p>
          <div className="test">
            <div
              id="signature"
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                margin: 0,
                borderSpacing: 0
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
                            borderRadius: 50
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
                                    onDragEnd={(e) => e.stopPropagation()}
                                    onMouseUp={(e) => e.stopPropagation()}
                                  />
                                </div>
                              </section>
                            )}
                          </Dropzone>
                        </div>
                      )}
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
                                fontSize: "18px",
                                fontWeight: "normal",
                                display: "block"
                              }}
                            >
                              {editableItem !== "fullName" && (
                                <label
                                    className={`${!this.editor ? 'label-styles' : ''}`}
                                    onClick={(e) => {
                                    e.stopPropagation();
                                    if (!finalImage) {
                                      this.setState({
                                        editableItem: "fullName"
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
                                    this.setState({ fullName: e.target.value });
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
                                  fontSize: "14px",
                                  minWidth: "200px",
                                  color: "#b7b5b5"
                                }}
                              >
                                {editableItem !== "title" && (
                                  <label
                                      className={`${!this.editor ? 'label-styles' : ''}`}
                                      onClick={(e) => {
                                      e.stopPropagation();
                                      if (!finalImage) {
                                        this.setState({
                                          editableItem: "title"
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
                                      this.setState({ title: e.target.value });
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
                                  fontSize: "14px",
                                  minWidth: "200px",
                                  borderTop: "1px solid",
                                  paddingTop: 6,
                                  color: "#b7b5b5"
                                }}
                              >
                                
                                {editableItem !== "websiteurl" && (finalImage?
                                  <a
                                  href={`https://${websiteurl}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    color: "#2299dd",
                                    textDecoration: "none",
                                    fontSize: "14px"
                                  }}
                                >
                                  {websiteurl}
                                </a>:<label
                                style={{textTransform: "lowercase"}}
                                className={`${!this.editor ? 'label-styles' : ''}`}
                                onClick={e => {
                                    e.stopPropagation();
                                    if(!finalImage)
                                    {this.setState({ editableItem: "websiteurl" });}
                                  }}
                                >
                                  {websiteurl}
                                </label>
                                
                                )}
                                {editableItem === "websiteurl" && (
                                  <input
                                    className="degnation"
                                    type="text"
                                    value={websiteurl}
                                    onBlur={() =>
                                      this.setState({ editableItem: "" })
                                    }
                                    onClick={e => {
                                      e.stopPropagation();
                                    }}
                                    onChange={e => {
                                      this.setState({ websiteurl: e.target.value });
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
                          borderTop: "1px solid #b7b5b5"
                        }}
                      >
                        <span
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <img
                            alt="Logo"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAbCAYAAACUXxrzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALrSURBVGhD7ZoxTyJREMf/nBiIMVlyFnYchViYI6HGeNTcRb6BoVtLbfweUGprZ3lGqe/MWXtiLDwKjs5CwiZywbCGm7c7rA9Ewt4VzJL9JcbZcXaK9995M2/XSJ9AiHje8e8ZYKNas7Bb66LOnpC3mVlFVS/u8bnh2rnsCn5kou5FyFhmWFEhfgiFCgihUAEhFCogyBXK6qJy0ULk+J5/Wti8mDAhWjRFUvzm6SDevWe3ZnPACH7zzxiRQtWbFja/Wthv9Nij6OGyYSF92nm1mG78A02RFNNmp0MPR1cPiJxaqFjsIvzml4A8oawOSt+6uOTLV7QfUdKrhBY9PSle0e7ipMn3+M0vBGFC2ah8f3xZxEQc58VV9HdW8Su7yE7Qk//ETz3F/+w6lgPFl4srTnx/ZwXlFPs9/OaXgyyhrCeceFvXIsqfDBQM92otswTTNempf8KZ2sqaHex78bTo2wb2jMHBOYp1thQfld9vfkEIE8rWnvYYvvAiukSxkWCT+sktLWT1t1ZNqRgKbLrYuNNE2VC5fOaXhCih6tYzW0RiAWtsToP5Ic7WABu3nlALWCdR/if/rJE3TEyFqhC9YsZAotywiUQUaTangytQEKKEWjMW2CLaz8MNfai/qAqhHuRtVcANbWs61WttaGD85WdTCLIqKhnTGro2JqvDqT6tcT9KJ7RJ7aqDqtNX1OeTlvdmfgif+SUh7jOH7h8PTWvF9zTdKbuL3WMLR45/AikD/S23h/nLLwcRFeWMzkxhi84/2pY2ipnXFzGOw/zoEDEZf/nlMDOh1IKdZ+MwswYOkux0iGJv2/1bjj2KHB9OD4diiSRVS3EZpr74Kja/7N2fo2HiBZ/5hTC3/zNRpz6VvnLf5Zl5uQJMS0DH88mol64lFkniqP0vBLqi9Kp5E22QCDIBrigbZ0OfKcag+s4ciKQIdo9S55/rPzhR36HY5UDnKzO1hINMPFCviSYxt8PEvDGXw8T8AfwFc6VfhaDmE1wAAAAASUVORK5CYII="
                            width="100px"
                          />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              style={{
                marginTop: "50px",
                display: "flex",
                justifyContent: "center"
              }}
            >
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
                    onClick={() => this.onClickSave()}
                  />
                </div>
              )}

              {finalImage && (
                <div>
                  <input
                    type="button"
                    value="Back"
                    onClick={() =>
                      this.setState({ finalImage: "", isCopied: false })
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
      </div>
    );
  }
}

export default App;
