import React, { useState } from "react";
import "./Boxstyle.css";
function Box() {
  return (
    <div className="box">
      <div className="blog">
        <div className="overlap-group">
          <img className="rectangle" alt="Rectangle" src="rectangle-3.png" />
          <p className="text-wrapper">
            The Ultimate Guide to Bookstagram for Beginners
          </p>
          <img className="male-user" alt="Male user" src="male-user.png" />
          <img className="time" alt="Time" src="time.png" />
          <div className="div">Emdadul Islam</div>
          <p className="p">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante.
          </p>
          <div className="text-wrapper-2">7 Hour Ago</div>
        </div>
      </div>
    </div>
  );
}
export default Box;
