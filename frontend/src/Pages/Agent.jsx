import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useContext } from 'react'
import { context } from '../Context/Context'
import AgentBg from '../Components/AgentBg'


const Agent = () => {
  
  const {OurAgentData} = useContext(context)
  return (
    <div>
      <Header/>
      <AgentBg/>
      <div>
        <div className="px-20 py-15  flex justify-center flex-wrap gap-5">
          {OurAgentData.map((agent) => (
            <div key={agent.agentName} className="flex flex-col px-5 overflow-hidden">
              <img src={agent.agentimage} alt="agent_image" className="flex object-cover object-center h-[20em] grow max-w-[250px] rounded-[20px] "></img>
              <div className="adj font-bold">{agent.agentName}</div>
              <div className="ads">{agent.agentExperence} <span>exp</span></div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Agent
