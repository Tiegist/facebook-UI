
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoHome } from "react-icons/io5"
import { FaVideo } from "react-icons/fa6";
import { TfiVideoClapper } from "react-icons/tfi";
import { BiSolidSlideshow } from "react-icons/bi";
import { MdExplore } from "react-icons/md";
import { BsFillSave2Fill } from "react-icons/bs";
import { PiShareFat } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { BiLike } from "react-icons/bi";


function Vediopage(){
return(
    <div className="vediopagecontainerdiv">

 <div className="vediopagecontainer">
            <div className="leftvediopart">
             <h3>Vedio</h3>
             <div className="searchiconandinput">
             <CiSearch  className="vediosearch"/>
             <input type="text" placeholder="search vedios" className="vedioinputpart"></input>
             </div>
            <div className="vediosleftnav">
            <div className="homediv1">
                <IoHome  className="vedioparticon"/>
                <p className="livepartnote">Home</p>
                </div>
                <div className="homediv2">
                <FaVideo  className="vedioparticon"/>
                <p className="livepartnote">Live</p>
                </div>
                <div className="homediv3">
                <TfiVideoClapper  className="vedioparticon"/>
                <p className="livepartnote">Reels</p>
                </div>
                <div className="homediv4">
                <BiSolidSlideshow  className="vedioparticon"/>
                <p className="livepartnote">Shows</p>
                </div>
                <div className="homediv5">
                <MdExplore  className="vedioparticon"/>
                <p className="livepartnote">Explore</p>
                </div>
                <div className="homediv6">
                <BsFillSave2Fill  className="vedioparticon"/>
                <p className="livepartnote">Saved vedios</p>
                </div>
              
                

            </div>
            </div>
            <div className="rightpartvediocontaiener">
            <div className="rightvediopart">
                <div className="vedioprofilecontainer">
                    <div className="leftvediopp">
                    <img className="vediopartprofile" src="\waterfall.avif"></img>
                    </div>
                    <div className="rightvediopp">
                        <div className="rightvediopptop">
                        <p>Ema clark</p>
                        <button className="ppfollow">Follow</button>
                        </div>
                        <div className="rightvedioppbottom">
                            <p>4 march 2022 .</p>
                        </div>
                       
                    </div>
                    
                </div>
                <h2 className='whre'>where do you want to go in the world?</h2>
                <video controls='autoplay' className='usersvediopart' src='\public\Nature_WhatsApp_Status_Video_30_Seconds__Nature_Love_Song_Background_2022_4k(18).mp4'></video>
                <div className="veiobottoms">
                    <div className="vediobottomsone">
                        <BiLike className='iconsbottomthree'/>
                        <p>Like</p>
                    </div>
                    <div className="vediobottomsone">
                        <PiShareFat className='iconsbottomone'/>
                        <p>share</p>
                    </div>
                    <div className="vediobottomsone">
                        <FaRegComment className='iconsbottomtwo'/>
                        <p>comment</p>
                    </div>
                    
                   
                    
                    <p className='lastcomment'>mini bonaparte, kendrik Love and 10k others . 4.4k comments . 4.3M views</p>
                </div>
               
                
            </div>
<br></br>
            <div className="rightvediopart">
                <div className="vedioprofilecontainer">
                    <div className="leftvediopp">
                    <img className="vediopartprofile" src="\walk-space-countryside2.avif" ></img>
                    </div>
                    <div className="rightvediopp">
                        <div className="rightvediopptop">
                        <p>Lara Fraser</p>
                        <button className="ppfollow">Follow</button>
                        </div>
                        <div className="rightvedioppbottom">
                            <p>4 December 2022 .</p>
                        </div>
                       
                    </div>
                
                </div>
                <h2 className='whre'>the beuty of nature </h2>
                <video controls='autoplay' className='usersvediopart' src='\vedio.mp4'></video>
                <div className="veiobottoms">
                    <div className="vediobottomsone">
                        <BiLike className='iconsbottomthree'/>
                        <p>Like</p>
                    </div>
                    <div className="vediobottomsone">
                        <PiShareFat className='iconsbottomone'/>
                        <p>share</p>
                    </div>
                    <div className="vediobottomsone">
                        <FaRegComment className='iconsbottomtwo'/>
                        <p>comment</p>
                    </div>
                    
                   
                    
                    <p className='lastcomment'>mini bonaparte, kendrik Love and 10k others . 4.4k comments . 4.3M views</p>
                </div>
               
                
            </div>
            </div>
        
        </div>
  
    </div>
   
);
}
export default Vediopage;