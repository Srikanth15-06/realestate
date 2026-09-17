import React from 'react'
import { useContext } from 'react'
import { context } from '../Context/Context'


const OurAgents = () => {
  const {OurAgentData} = useContext(context)
  return (
    <div>
      <div className="pt-5 bg-gray-100 flex flex-col justify-center items-center">
        <div className="text-[gold] ">------AGENT------</div>
        <div className="font-bold text-[1.8em]">Our Agents</div>
        <div className="pt-8 pb-5 flex justify-center flex-wrap gap-5">
          {OurAgentData.slice(0,5).map((agent) => (
            <div key={agent.agentName} className="flex flex-col px-5 overflow-hidden">
              <img src={agent.agentimage} alt="agent_image" className="flex object-cover object-center h-[15em] max-w-[180px] "></img>
              <div className="adj font-bold">{agent.agentName}</div>
              <div className="ads">{agent.agentExperence} <span>exp</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurAgents
