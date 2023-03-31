import {BsThreeDots} from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";
import {BsChat} from "react-icons/bs";
import {HiOutlinePaperAirplane} from "react-icons/hi";
import {BsBookmark} from "react-icons/bs";
import {GrEmoji} from "react-icons/gr";

const Post = ({id,username,userImg,imgUrl,caption}) => {
  return (
    <div className="bg-white my-7 border rounded-sm shadow-sm">
        {/* -----------Heading----------- */}
        <div className="flex items-center p-5">
          <img src={userImg} className="rounded-full h-14 w-14 object-cover border p-1 mr-3"/>
          <p className="flex-1 font-bold">{username}</p>
          <BsThreeDots className="h-5"/>
        </div>

        {/* -----------IMG--------------- */}
       <img src={imgUrl} className="object-cover w-full" /> 

        {/* -----------Buttons----------- */}
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <AiOutlineHeart className="h-8 w-8 p-1 hover:scale-125 cursor-pointer transition-all duration-150 ease-out "/>
            <BsChat className="h-8 w-8 p-1 hover:scale-125 cursor-pointer transition-all duration-150 ease-out "/>
            <HiOutlinePaperAirplane className="h-8 w-8 p-1 hover:scale-125 cursor-pointer transition-all duration-150 ease-out "/>
          </div>

          <BsBookmark className="h-8 w-8 p-1 hover:scale-125 cursor-pointer transition-all duration-150 ease-out"/>
        </div>
        {/* -----------Caption----------- */}
        <div>
          <p className="p-5 truncate">
            <span className="font-medium mr-1">{username} </span>{caption}
          </p>
        </div>
        
        {/* -----------comments---------- */}
        <form className="flex items-center p-4">
          <GrEmoji className="h-6 w-6 mr-1 cursor-pointer hover:scale-125 transition-all duration-150 ease-out"/>
          <input type="text" 
          placeholder="Add a comment."
          className="border-none flex-1 focus:right-0 outline-none focus:ring-0"/>
          <button className="font-semibold text-blue-400">Post</button>
        </form>

        {/* -----------InputBox---------- */}
    </div>
  )
}

export default Post