import React from 'react'
import { createContext } from 'react'

import { OurAgentData } from '../Data/OurAgentData.js';
import {reviews} from '../Data/ReviewData.js'
import {whatWeOfferData} from "../Data/WhatWeOfferData.js"
import {blogData} from "../Data/BlogData.js"
export const context = createContext();

const OurAgentProvider = ({children}) => {
  return (
    <context.Provider value={{OurAgentData,reviews,whatWeOfferData,blogData }}>
      {children}
    </context.Provider>
  )
}

export default OurAgentProvider
