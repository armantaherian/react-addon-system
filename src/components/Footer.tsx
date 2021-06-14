import React from "react";
import { AppCore } from "../plugins/loadModules";

function Footer() {
  return (
    <footer className="app-footer">
      <div dangerouslySetInnerHTML={{ __html: AppCore.getFooter() }} />
    </footer>
  );
}

export default Footer;
