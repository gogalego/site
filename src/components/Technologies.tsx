import React from 'react';
import './technologies.css';
import { DiReact, DiAngularSimple } from "react-icons/di";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";
import { SiPowershell, SiCsharp, SiMicrosoftsharepoint, SiPowerautomate } from "react-icons/si";

const Tecnologies = () => {
  return (
    <div className="tec-container">
      <h1>Tecnologies</h1>

        <div className='tec-list'>
            <DiReact title='React'/>
            <SiCsharp title='.NET'/>
            <DiAngularSimple title='Angular'/>
            <VscAzure title='Azure'/>
            <SiPowershell title='Powershell'/>
            <VscAzureDevops title='DevOps'/>
            <SiMicrosoftsharepoint title="Sharepoint Online"/>
            <SiPowerautomate title="Power Automate"/>
        </div>
    </div>
  );
};

export default Tecnologies;