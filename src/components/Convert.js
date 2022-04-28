import React, { useEffect, useState } from 'react';
import axios from 'axios';
const APIKEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
      const textTimeOut = setTimeout(()=>{
        setDebouncedText(text)
      },500);
    
      return () => {
        clearTimeout(textTimeOut)
      }
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data:{ data }} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params:{
                    q: debouncedText,
                    target: language.value,
                    key: APIKEY
                }
            });

            setTranslated(data.translations[0].translatedText);
        }
        
        doTranslation();

    }, [language, debouncedText]);

    return (
        <div>
            <h3>{translated}</h3>
        </div>
    );
}

export default Convert;