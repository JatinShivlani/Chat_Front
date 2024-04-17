import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

const InfoBar = ({ room }) => (
  <div className="flex items-center justify-between bg-blue-900 rounded-t-[4px] rounded-l-none h-[60px] w-full">
    <div className="flex-[0.5] flex items-center ml-[5%] text-white">
      <img className="mr-[5%]" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="flex-[0.5] justify-end mr-[5%] flex">
      <a href="/"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;