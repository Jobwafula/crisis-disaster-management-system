import React from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';


export default function Navbar() {
  return (
    <div className="flex justify-between p-[1rem] border-b">
      <section>logo</section>
      <section className="flex flex-col  space-y-[3rem]">
        <div className="ml-[87%]"><PersonIcon />Admin</div>
        <div className="flex space-x-[5rem]">
          <p> <span className="text-red-700"><GroupIcon /></span>Reporters</p>
          <p><span className="text-red-700"><BarChartIcon /></span> Stats</p>
          <p><span className="text-red-700"><NotificationsIcon /></span>  Notifications</p>
          
        </div>
      </section>
    </div>
  );
}
