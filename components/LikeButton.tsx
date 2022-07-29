import React, {useState, useEffect} from 'react'
import {MdFavorite} from 'react-icons/md'
import useAuthStore from '../store/authStore'


interface Iprops {
    handleLike: () => void;
    handleDislike: () => void;
    likes: any[]
}

function LikeButton({likes, handleLike, handleDislike} : Iprops) {
    const [alreadyLiked, setAlreadyLiked] = useState(false)
    const {userProfile} : any = useAuthStore()
    const filterLikes = likes?.filter(item => item._ref === userProfile?._id)
    useEffect(() => {
        if(filterLikes?.length > 0) {
            setAlreadyLiked(true)
        } else {
            setAlreadyLiked(false)
        }
    }, [likes, filterLikes])
  return ( 
    <div className='flex gap-6'>
        <div className='mt-4 flex flex-col justify-center items-center cursor-pointer'>
            {alreadyLiked 
                ?
                <div  onClick={handleDislike} className='bg-primary rounded-full p-2 md:p-3 text-[#F51997]'>
                    <MdFavorite  className='text-lg md:text-2x1'/> 
                </div>
                : 
                <div  onClick={handleLike} className='bg-primary rounded-full p-2 md:p-3'>
                    <MdFavorite  className='text-lg md:text-2x1'/> 
                </div>
            }
            <p className='text-md font-semibold'>{likes?.length | 0}</p>
        </div>
    </div>
  )
}

export default LikeButton