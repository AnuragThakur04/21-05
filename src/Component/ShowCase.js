import React from 'react'
import './ShowCase.css'

function ShowCase() {

    const img = [
        {
            img:"https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/instagram/ig7.jpg"
        },
        {
            img: "	https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/ig8_.png"
        },
        {
            img: "	https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/ig9.png"
        },
        {
            img: "	https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/ig10.png"
        }
    ]

  return (
    <div className="showcase">
        <div className="showcaseContent">
        <h1>#CHINESE</h1>
           <div className="image">
                  {img.map((item) => (
                      <img src={item.img} alt='' />
                  ))}
           </div>
        </div>
    </div>
  )
}

export default ShowCase