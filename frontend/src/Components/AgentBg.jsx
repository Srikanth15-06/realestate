import React from 'react'

const AgentBg = () => {
  return (
    <div>
       <div className="relative h-[35em] bg-cover bg-center bg-[url('https://img.freepik.com/premium-photo/portrait-serious-indian-businessman-standing-with-arms-crossed-office_979520-66025.jpg')]">
                <div className="h-[35em] absolute inset-0 bg-[linear-gradient(to_bottom,transparent_1%,transparent_55%,white_100%)]">
                    <div className="h-full flex justify-center text-white items-center text-[3em] font-bold">Our Agents</div>
                </div>
            </div>
    </div>
  )
}

export default AgentBg
