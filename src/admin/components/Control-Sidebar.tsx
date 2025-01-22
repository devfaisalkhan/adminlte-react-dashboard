import React from "react";

const ControlSidebar = () => {
  return (
    <aside className="control-sidebar control-sidebar-light">
      {/* Control sidebar content */}
      <div className="p-3">
        <div className="os-padding">
          <div
            className="os-viewport os-viewport-native-scrollbars-invisible"
            style={{ overflowY: "scroll" }}
          >
            <div
              className="os-content"
              style={{ padding: "16px", height: "100%", width: "100%" }}
            >
              {/* Dark Mode Option */}
              <h5>Customize Admin Panel</h5>
              <hr className="mb-2" />
              <div className="mb-4">
                <input type="checkbox" value="1" className="mr-1" />
                <span>Dark Mode</span>
              </div>

              {/* Header Options */}
              <h6>Header Options</h6>
              <div className="mb-1">
                <input type="checkbox" value="1" className="mr-1" />
                <span>Fixed</span>
              </div>
              <div className="mb-1">
                <input type="checkbox" value="1" className="mr-1" />
                <span>Dropdown Legacy Offset</span>
              </div>
              <div className="mb-4">
                <input type="checkbox" value="1" className="mr-1" />
                <span>No Border</span>
              </div>

              {/* Sidebar Options */}
              <h6>Sidebar Options</h6>
              {[
                { label: "Collapsed", checked: false },
                { label: "Fixed", checked: true },
                { label: "Sidebar Mini", checked: true },
                { label: "Sidebar Mini MD", checked: false },
                { label: "Sidebar Mini XS", checked: false },
                { label: "Nav Flat Style", checked: false },
                { label: "Nav Legacy Style", checked: false },
                { label: "Nav Compact", checked: false },
                { label: "Nav Child Indent", checked: false },
                { label: "Nav Child Hide on Collapse", checked: false },
                { label: "Disable Hover/Focus Auto-Expand", checked: false },
              ].map((option, index) => (
                <div className="mb-1" key={index}>
                  <input
                    type="checkbox"
                    value="1"
                    className="mr-1"
                    defaultChecked={option.checked}
                  />
                  <span>{option.label}</span>
                </div>
              ))}

              {/* Footer Options */}
              <h6>Footer Options</h6>
              <div className="mb-4">
                <input type="checkbox" value="1" className="mr-1" />
                <span>Fixed</span>
              </div>

              {/* Small Text Options */}
              <h6>Small Text Options</h6>
              {["Body", "Navbar", "Brand", "Sidebar Nav", "Footer"].map(
                (label, index) => (
                  <div className="mb-1" key={index}>
                    <input type="checkbox" value="1" className="mr-1" />
                    <span>{label}</span>
                  </div>
                )
              )}

              {/* Dropdown Sections */}
              {[
                { title: "Navbar Variants", options: "bg-primary bg-secondary bg-info bg-success bg-danger bg-indigo bg-purple bg-pink bg-navy bg-lightblue bg-teal bg-cyan bg-dark bg-gray-dark bg-gray bg-light bg-warning bg-white bg-orange" },
                { title: "Accent Color Variants", options: "None Selected bg-primary bg-warning bg-info bg-danger bg-success bg-indigo bg-lightblue bg-navy bg-purple bg-fuchsia bg-pink bg-maroon bg-orange bg-lime bg-teal bg-olive" },
                { title: "Dark Sidebar Variants", options: "None Selected bg-primary bg-warning bg-info bg-danger bg-success bg-indigo bg-lightblue bg-navy bg-purple bg-fuchsia bg-pink bg-maroon bg-orange bg-lime bg-teal bg-olive" },
                { title: "Light Sidebar Variants", options: "None Selected bg-primary bg-warning bg-info bg-danger bg-success bg-indigo bg-lightblue bg-navy bg-purple bg-fuchsia bg-pink bg-maroon bg-orange bg-lime bg-teal bg-olive" },
                { title: "Brand Logo Variants", options: "None Selected bg-primary bg-secondary bg-info bg-success bg-danger bg-indigo bg-purple bg-pink bg-navy bg-lightblue bg-teal bg-cyan bg-dark bg-gray-dark bg-gray bg-light bg-warning bg-white bg-orange" }
              ].map((section, index) => (
                <React.Fragment key={index}>
                  <h6>{section.title}</h6>
                  <div className="d-flex">
                    <select className="custom-select mb-3 border-0">
                      {section.options.split(" ").map((option, i) => (
                        <option key={i} className={option}>
                          {option.replace("-", " ").replace("bg-", "").toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ControlSidebar;
