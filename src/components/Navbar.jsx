import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between p-[1rem] border-b">
      <section>logo</section>
      <section className="flex flex-col  space-y-[3rem]">
        <div className="ml-[87%]">Admin</div>
        <div className="flex space-x-[5rem]">
          <p>Reporters</p>
          <p>Stats</p>
          <p>Notifications</p>
          
        </div>
      </section>
    </div>
  );
}
