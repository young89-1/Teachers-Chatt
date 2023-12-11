import React from "react";

const SideBar = () => {
  return (
    <div className="display: inline">
      <div>
        
          <div>
            <p>Home</p>
          </div>
        
          <div>
            <p>Principals</p>
          </div>

          <div>
            <p>Blog</p>
          </div>

          <div>
            <p>Union</p>
          </div>

      </div>
      <div >

        <div>
                <button className="bg-red-500 px-4 py-2 text-white rounded-full">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;