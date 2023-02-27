import React,{useState} from 'react';
import Picker from '@emoji-mart/react';
import { data } from '@emoji-mart/data';

const Emoji = () => {
  
    const [isPickerVisible, setPickerVisible] =useState(false);
    const [currentEmoji, setCurrentEmoji] =useState(null)

    return (

        <div className="d-flex flex-column align-items-center">
            <h1>{currentEmoji || 'select emoji'}Emojis</h1>
            <button
                className='btn btn-priary'
                onClick={()=>isPickerVisible(!isPickerVisible)}
            >
                open emoji picker
            </button>
            <div className={isPickerVisible ? 'd-block' : 'd-none'}>
                <Picker data={data} previewPosition="none" onEmojiSelected={(e)=>{setCurrentEmoji(e.native); setPickerVisible=(!isPickerVisible)}}/>
            </div>
        </div> 
    )
}


export default Emoji