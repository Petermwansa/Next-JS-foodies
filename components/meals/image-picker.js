'use client'

import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image';

export default function ImagePicker({ label, name }) {

    const [pickedImage, setPickedImage] = useState();

    const imageInputRef = useRef();

    function handlePickClick() {
        imageInputRef.current.click()
    }

    function handleImageChange(e) {
        // here we target the file that is picked by the userwhich is the first one
        const file = e.target.files[0];

        if (!file) {
            setPickedImage(null);
            return 
        }

        // we then convert it into a data url so that it can be used as a source 
        const fileReader = new FileReader();

        // then we set the picked Image to the result of accessing filreader result 
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }

        fileReader.readAsDataURL(file)
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet</p>}
                    {pickedImage &&  <Image src={pickedImage} alt="The image selected by the user" fill />}
                </div>
                <input 
                    className={classes.input}
                    type='file' 
                    id='image' 
                    accept='image/png, image/jpeg' 
                    name={name}
                    // multiple 
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    required
                />
                <button 
                    className={classes.button} 
                    type='button'
                    onClick={handlePickClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    )
}