import * as React from 'react'



const MyStuff = (props) => {

    const [displayBigBanner, setState] = React.useState(false);
    const enterMouseOnBanner = (val) =>{
        setState(false)
        val.target.className = 'bigBanner'
      setState(true)
    }
    const exitMouseFromBanner = (val) =>{
      val.target.className = 'smallBanner'
      setState(false)
    }
    
    type MyStuffItemData = {
        Title: string
    }
    
          return(
              <div className={props.className}>
                  <label>{props.heading}</label>
                  <div className='wrapper'>
                  {props.data && props.data.map((items: MyStuffItemData, index) => 
                     <div 
                     key={index} 
                     onMouseEnter={(el) => enterMouseOnBanner(el)} onMouseLeave={(el)=> exitMouseFromBanner(el)}
                     className='smallBanner'> 
                        <div className="bannerimg">

                        </div>
                        <div >
                        <p>{items.Title}</p>
                            {/* {displayBigBanner && 
                                <p>
                                    {items.Description}
                                </p>
                            } */}
                        </div>
                      </div>
                  )}
                  </div>
              </div>
          )
      }



export default MyStuff