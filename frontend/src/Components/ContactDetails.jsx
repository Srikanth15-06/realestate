import React from 'react'

const ContactDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <div className="flex justify-center  flex-col p-10 max-w-[32%]">
            <div className="h-20 flex justify-center"><img alt="image" src="https://w7.pngwing.com/pngs/137/787/png-transparent-location-icon-computer-icons-map-location-map-geolocation-symbol-svg-thumbnail.png" /></div>
            <div className="font-bold">Address:</div>
            <div className="gyb">H.No 157/A begumpet,<br></br> Hyderabad, 500016 </div>
        </div>
        <div className="flex justify-center flex-col p-10 max-w-[32%]">
            <div className="h-20 flex justify-center"><img alt="image" src="https://w7.pngwing.com/pngs/421/683/png-transparent-computer-icons-mobile-phones-telephone-email-home-business-phones-phone-icon-miscellaneous-angle-service-thumbnail.png" /></div>
            <div className="font-bold">Phone:</div>
            <div className="gyb">+91 95898 97798 </div>
            <div className="gyb">040 62 698 754 </div>
        </div>
        <div className="flex justify-center flex-col p-10 max-w-[32%]">
            <div className="h-20 flex justify-center"><img alt="image" src="https://w7.pngwing.com/pngs/919/512/png-transparent-paper-computer-icons-envelope-mail-envelope-mail-miscellaneous-angle-text-thumbnail.png" /></div>
            <div className="font-bold">Email:</div>
            <div className="gyb">info@sriXlope</div>
        </div>
        
      </div>
    </div>
  )
}

export default ContactDetails
