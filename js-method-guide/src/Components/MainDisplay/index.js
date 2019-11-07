import React from "react";
import Methods from "../../Data/Methods";
import Card from "./../MethodCard";

class MainDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let d = new Date();
    return (
      <div className="display-wrap">
        {Methods.map(method => (
            <Card method = {method} />
        ))}      
        <p className="copyright">© Copyright {d.getFullYear()} Ming Liu</p>

      </div>      

    );
  }
}

export default MainDisplay;
