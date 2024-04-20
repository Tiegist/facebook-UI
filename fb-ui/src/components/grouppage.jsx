import react from 'react'
import { IoIosSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { PiBrowsersFill } from "react-icons/pi";
import { IoMdNotifications } from "react-icons/io";
import { BsInboxFill } from "react-icons/bs";
import { SiBuymeacoffee } from "react-icons/si";
import { MdSell } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { TbHomeDollar } from  "react-icons/tb";
import { MdNavigateNext } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { GiSleevelessJacket } from "react-icons/gi";



function Grouppage(){
return(
    <div>
  
    <div className='thewholeconatainer'>
<div className='page2leftcontainer'>
    
    <div className='settingclass'>
        <div className='marketplace'><h3>Marketlace</h3></div>
        <div className='setttingicon'><IoIosSettings className='settingsubicon'/></div>
    </div>
    <div className='serchiconnclass'>
        <CiSearch className='iconofsearch'/>
        <input className='inputbox' type='text' placeholder='search Marketplace'></input>
    </div>
    
    <div className='browseallclass'>
        <PiBrowsersFill className='browseallicon'/>
        <input className='browseinput' type='text' placeholder='Browse all Marketplace'></input>
    </div>
    
    <div className='notificationclass'>
    <IoMdNotifications className='notifyyicon'/>
    <p>Notifications</p>
    </div>
    
    <div className='inboxclass'>
    <BsInboxFill className='inboxicon'/>
    <p>Inbox</p>
    </div>
    
    <div className='buyingclass'>
    <SiBuymeacoffee className='buingicon'/>
    <p>Buying</p>
    <MdNavigateNext className='nexticonnn'/>
    </div>
    
    <div className='sellingclass'>
    <MdSell className='sellignicon'/>
    <p>selling</p>
    <MdNavigateNext className='nexticonn'/>
    </div>
    <div className='createclass'>
    <button className='createbtn'>+ create new listing</button>
    </div>
    <hr></hr>
    
    <div className='filterclass'><h4>Filters</h4></div>
    <div className='locatonclass'><p>Kombolcha . Within 65 Kilometers</p></div>
    <hr></hr>
    <div className='catagoriesclass'>
        <h4 className='catagories'>categories</h4>
        <div className='vehicleclass'>
        <FaCar className='vehiclesicon'/>
    <p>vehicles</p>
        </div>
    
        <div className='properyrentclass'>
        <TbHomeDollar className='propertyicon'/>
    <p>property rentals</p>
        </div>
    
        <div className='apparelclass'>
        <GiSleevelessJacket className='apparelicon'/>
    <p>apparel</p>
        </div>
    </div>
    
    </div>

    <div className='containertwo'>
        <div className='thefirstcard'>
            <div className='newforyou'>
            <p>New For You</p>
            </div>
            <div className='therestofcard'>
            <div className='firstclass'>
            <div className='cardfirstpart'><img className='imgone' src='\bridge-by-the-sea.jpeg'></img></div>
            <div className='smalldiscription'><p>10+ items were just added to you buy and sell groups.</p>
            <div className='buttons'>
            <div className='litleblue'></div>
            <div className='wdiv'> <p className='w'>6w</p></div>
           
            </div>
            </div>
           
            </div>

            <div className='secondclass'>
            <div className='cardsecondpart'><img className='imgtwo' src='\waterfall.avif'></img></div>
            <div className='smalldiscription'><p>40+ items were just added to you buy and sell groups.</p>
            <div className='buttons'>
            <div className='litleblue'></div>
            <div className='wdiv'> <p className='w'>1w</p></div>
            </div>
            </div>
           
            </div>
            </div>
            
            
        </div>
        <div className='thesecondcard'>
                <div className='todayspicks'><p>Today's picks</p></div>
                <div className='location'>
                    <IoLocationSharp className='locatonicon'/>
                    <p>kalu . 65 km</p>
                </div>
            </div>
            <div className='thethiredcards'>
                <div className='card1'>
                    <img className='firstcardimg' src='\walk-space-countryside2.avif'></img>
                    <h5>Br3,500</h5>
                    <p className='p11'>disaar hair growth hidden informaion</p>
                    <p className='p12'>dessie</p>
                </div>

                <div className='card2'>
                    <img className='secondcardimg' src='\waterfall.avif'></img>
                    <h5>Br2,800</h5>
                    <p className='p21'>romantic</p>
                    <p className='p22'>dessie</p>
                </div>

                <div className='card3'>
                    <img className='thirdcardimg' src='\bridge-with-leaves.jpeg'></img>
                    <h5>Br10</h5>
                    <input type='checkbox' checked className='firstcheck' name='firstcheck' ></input>
                    <label for='firstcheck' className='firstcheck'>bale 1 megnita 75 kare</label>
                    <input type='checkbox' checked className='secondcheck' name='secondcheck'></input>
                    <label for='secondcheck' className='secondcheck'>bale 2 megnita 85 kare</label>
                   
                    <p className='p32'>dessie</p>
                </div>

                <div className='card4'>
                    <img className='fourthcardimg' src='\mountain-with-sea.avif'></img>
                    <h5>Br3,500</h5>
                    <p className='p41'>ye kimem maskemecha</p>
                    <p className='p42'>dessie</p>
                </div>
            </div>
    </div>
   
    </div>

    </div>
   

)
}
export default Grouppage;