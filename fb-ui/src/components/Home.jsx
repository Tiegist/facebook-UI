
import react from 'react'
import { FaUserFriends } from "react-icons/fa";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { RiMemoriesLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { FaFlag } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { ImStatsBars } from "react-icons/im";
import { MdNavigateNext } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { PiShareFat } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { BiLike } from "react-icons/bi";

function Home(){
return(
        <div className='firstpagecontainer'>
   
        <div className='container'>
<div className='leftnavi'>
<div className='leftnavileft'>

<div className='profilepic'>
<img  className='profile' src='\img25.jpg' alt='profile picture'></img>
<div className='tiegistnote'><p>Tiegist Girma</p></div>
</div>
<div className='friendsiconn'><a href='google.com'>
<FaUserFriends  className='friends'/></a>
<div className='friendsnote'><p>friends</p></div>
</div>

<div className='feediconn'><a href='google.com'>
<FaPersonBreastfeeding className='feed'/></a>
<div className='feedsnote'><p>feeds</p></div>
</div>

<div className='groupiconn'><a href='google.com'>
<MdGroups className='groups'/></a>
<div className='groupsnote'><p>groups</p></div>
</div>

<div className='landmark'><a href='google.com'>
<CiShop className='marketplacee'/></a>
<div className='marketplacenote'><p>marketplace</p></div>
</div>

<div className='vedioiconn'><a href='google.com'>
<FaYoutube className='vedi'/></a>
<div className='vediodenote'><p>vedio</p></div>
</div>

<div className='memoryiconn'><a href='google.com'>
<RiMemoriesLine className='memories'/></a>
<div className='memoriesnote'><p>memories</p></div>
</div>

<div className='savediconn'><a href='google.com'>
<CiBookmark className='saved'/></a>
<div className='savednote'><p>saved</p></div>
</div>

<div className='pagesiconn'><a href='google.com'>
<FaFlag className='pages'/></a>
<div className='pagesnote'><p>pages</p></div>
</div>

<div className='eventsiconn'><a href='google.com'>
<FaCalendarCheck className='events'/></a>
<div className='eventsnote'><p>events</p></div>
</div>

<div className='addmanagericonn'><a href='google.com'>
<ImStatsBars className='adsmanager'/></a>
<div className='adsnote'><p>ads manager</p></div>
</div>

<div className='seemoreiconn'><a href='google.com'>
<MdNavigateNext className='seemore'/></a>
<div className='seemorenote'><p>seemore</p></div>
</div>

</div>

</div>
<div className='middle'>
        <div className='cardcontainer'>
        <div className='firstcard'>
        <FiPlus className='plusbtn'/>
        <img className='firstcardimage' src='\img21.jpg' alt='personalcard'></img>
        <p>create story</p>
        
        </div>

        <div className='secondcard'>
       
        <img className='subseccardimage' src='\bridge-with-leaves.jpeg'alt='personalcard'></img>
        <p>user name</p>
         <img className='secondcardimage' src='\tree-alone.avif' alt='personalcard'></img>
        </div>
        <div className='thirdcard'>
        <img className='picofcardthree' src='\img22.jpg'></img>
        <p className='descrptonofcard'>A Trigger is a special kind of stored procedure that executes to automate control of your several databases.</p>
        <p className='player'>fabrizo romano</p>
                <img className='ppthree' src='\walk-space-countryside2.avif' alt='image'></img>
        </div>
        <div className='fourthcard'>
                <a href='www.google.com'><MdNavigateNext className='nexticon' /></a>
        <p className='name'>sara simegn</p>
                <img className='ppfourth' src='\img25.jpg' alt='image'></img>
                <img className='picofcardfourth' src='\waterfall.avif'></img>
        </div>
        
        </div>
        
        <div className='inputt'>
       <img className='prof' src='\img13.jpg' alt='profile'></img>
       <input type='text' placeholder='whats on your mind, Tiegist?' className='inputtype' ></input>
       <hr></hr>
       <div className='emojis'>
       <div className='liveicon'><a href='www.google.com'>
        <RiLiveLine className='livevedio'/></a>
       <p>live vedio</p>
       </div>

       <div className='photoicon'><a href='www.google.com'>
        <IoMdPhotos  className='mdphoto'/></a>
       <p>photo/vedio</p>
       </div>

       <div className='emojiicon'><a href='www.google.com'>
        <MdOutlineEmojiEmotions className='lineemojis'/></a>
       <p>feelng/activity</p>
       </div>

       </div>
       
        </div>
        <div className='comment'>
                <div className='top'>
                <div className='img'>
                <img className='commenter' src='\img20.jpg'></img>
                </div>
        
                <div className='notes'>
                <h5>Marher Kirubel</h5>
                <p>yesterday at 1:25 PM.</p>
                </div>

                <div className='icons'>
                        <a href='www.goole.com'><BsThreeDots className='threedots' /></a>
                        <button className='xbtn'>x</button>
                </div>
                </div>
                
                <h4>Back for more!</h4>
                
                <hr></hr>
                <img className='post' src='\img27.jpg'></img>
                <div className="middleiconcontainer">
                <div className="homeli-sh-co-icon">
                        <BiLike className='iconsbottomthree'/>
                        <p>Like</p>
                    </div>
                    <div className="homeli-sh-co-icon">
                        <PiShareFat className='iconsbottomone'/>
                        <p>share</p>
                    </div>
                    <div className="homeli-sh-co-icon">
                        <FaRegComment className='iconsbottomtwo'/>
                        <p>comment</p>
                    </div>
                </div>
                
        </div>

        <div className='comment2'>
                <div className='top'>
                <div className='img'>
                <img className='commenter' src='\bridge-with-leaves.jpeg'></img>
                </div>
        
                <div className='notes2'>
                <h5>Tiegist Girma</h5>
                <p>two weeks ago</p>
                </div>

                <div className='icons'>
                        <a href='www.goole.com'><BsThreeDots className='threedots' /></a>
                        <button className='xbtn'>x</button>
                </div>
                </div>
                
                <h4>Back for more!</h4>
                
                <hr></hr>
                <img className='post' src='\black-frame.avif'></img>
                
                <div className="middleiconcontainer">
                <div className="homeli-sh-co-icon">
                        <BiLike className='iconsbottomthree'/>
                        <p>Like</p>
                    </div>
                    <div className="homeli-sh-co-icon">
                        <PiShareFat className='iconsbottomone'/>
                        <p>share</p>
                    </div>
                    <div className="homeli-sh-co-icon">
                        <FaRegComment className='iconsbottomtwo'/>
                        <p>comment</p>
                    </div>
                </div>
        </div>

        <div className='comment3'>
                <div className='top3'>
                <div className='img'>
                <img className='commenter' src='\black-frame.avif'></img>
                </div>
        
                <div className='notes3'>
                <h5>Girma Hassen</h5>
                <p>yesterday at 8:05 AM.</p>
                </div>

                <div className='icons'>
                        <a href='www.goole.com'><BsThreeDots className='threedots' /></a>
                        <button className='xbtn'>x</button>
                </div>
                </div>
                
                <h4>Back for more!</h4>
                
                <hr></hr>
                <img className='post' src='\mountain-with-sea.avif'></img>
                
                <div className="middleiconcontainer">
                <div className="homeli-sh-co-icon">
                        <BiLike className='iconsbottomthree'/>
                        <p>Like</p>
                    </div>
                    <div className="homeli-sh-co-icon">
                        <PiShareFat className='iconsbottomone'/>
                        <p>share</p>
                    </div>
                    <div className="homeli-sh-co-icon">
                        <FaRegComment className='iconsbottomtwo'/>
                        <p>comment</p>
                    </div>
                </div>
        </div>


        <div className='comment4'>
                <div className='top4'>
                <div className='img'>
                <img className='commenter' src='\wire-digital-technology.avif'></img>
                </div>
        
                <div className='notes4'>
                <h5>Birhane Ayalew</h5>
                <p>one minute ago</p>
                </div>

                <div className='icons'>
                        <a href='www.goole.com'><BsThreeDots className='threedots' /></a>
                        <button className='xbtn'>x</button>
                </div>
                </div>
                
                <h4>Back for more!</h4>
                
                <hr></hr>
                <img className='post' src='\tree-alone.avif'></img>
                

                <div className="middleiconcontainer">
                <div className="homeli-sh-co-icon">
                        <BiLike className='iconsbottomthree'/>
                        <p>Like</p>
                    </div>
                    <div className="homeli-sh-co-icon">
                        <PiShareFat className='iconsbottomone'/>
                        <p>share</p>
                    </div>
                    <div className="homeli-sh-co-icon">
                        <FaRegComment className='iconsbottomtwo'/>
                        <p>comment</p>
                    </div>
                </div>
        </div>
        
        
   
</div>

<div className='last'>
        
        <div className='thirdthing'>
              <div className='topping'>
                <div className='contacts'><p>contacts</p></div>
                <div className='searchiconn'><a href='www.google.com'><BsThreeDots className='threedot'/></a>
                <a href='www.google.come'><CiSearch className='searchtool'/></a>
                </div>
              </div>
              <div className='account'>
                <div className='kidu'><img className='image24' src='\img20.jpg'></img>
                <div className='firstdot'></div>
                </div>
                <div className='name1'><p>Hibst mengstie</p></div>
              </div>

              <div className='account'>
                <div className='ali'><img className='image25' src='\img21.jpg'></img>
                <div className='firstdot'></div>
                </div>
                <div className='name2'><p>jon atal</p></div>
              </div>

              <div className='account'>
                <div className='kidu'><img className='image24' src='\img20.jpg'></img>
                <div className='abuki'>
               
                </div>
                <div className='name3'><p>na hom bi</p></div>
              </div>
            </div>

            <div className='account'>
                <div className='kidu'><img className='image24' src='\bridge-by-the-sea.jpeg'></img>
               
                </div>
                <div className='name4'><p>gach lalboy</p></div>
              </div>

              <div className='account'>
                <div className='ali'><img className='image25' src='\black-frame.avif'></img>
             
                </div>
                <div className='name5'><p>estifanos mesganaw</p></div>
              </div>

              <div className='account'>
                <div className='kidu'><img className='image24' src='\cutebackground.jpg'></img>
                <div className='abuki'>
               
                </div>
                <div className='name6'><p>dani boy</p></div>
              </div>
                
             </div>

             <div className='account'>
                <div className='kidu'><img className='image24' src='\walk-space-countryside.avif'></img>
               
                </div>
                <div className='name7'><p>hop hop</p></div>
              </div>

              
              <div className='account'>
                <div className='ali'><img className='image25' src='\waterfall.avif'></img>
               
                </div>
                <div className='name8'><p>skat natty</p></div>
              </div>

              
              <div className='account'>
                <div className='kidu'><img className='image24' src='\bridge-by-the-sea.jpeg'></img>
                <div className='abuki'>
                
                </div>
                <div className='name9'><p>abuki z kop</p></div>
              </div>
               </div>

               <div className='account'>
                <div className='kidu'><img className='image24' src='\img20.jpg'></img>
               
                </div>
                <div className='name10'><p>um hkm jr</p></div>
              </div>

              <div className='account'>
                <div className='ali'><img className='image25' src='\tree-alone.avif'></img>
                
                </div>
                <div className='name11'><p>temu lela</p></div>
              </div>

              
              <div className='account'>
                <div className='kidu'><img className='image24' src='\tree-alone.avif'></img>
                <div className='abuki'>
                
                </div>
                <div className='name12'><p>messi alemye </p></div>
              </div>
              </div>

</div>

</div>

        
</div>
        <div className='footer'>
        <p>privacy .Terms . Advertising . Ad Choices .Cookies .More .Meta &copy; 2024</p>
</div>
        
</div>
);
}
export default Home;