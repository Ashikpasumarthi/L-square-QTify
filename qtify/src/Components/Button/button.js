// import { View, Text } from 'react-native'
import React from 'react'
import Button from '@mui/material/Button';
import styles from './Button.module.css';
export default function FeedbackButton() {
    const label = "give feedback";
    const words = label.split(" "); 
    const capitalizedWords = words.map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    console.log(capitalizedWords); 

    
    const formattedLabel = capitalizedWords.join(" "); 

    // console.log(formattedLabel); 
    return (
        <>
            <Button className={ styles.feedbackButton }><span>{ formattedLabel }</span></Button>
        </>
    )
}