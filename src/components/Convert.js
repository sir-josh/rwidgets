import React, { useEffect } from 'react';
import axios from 'axios';
const APIKEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({language, text}) => {
    useEffect(() => {
        axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params:{
                q: text,
                target: language.value,
                key: APIKEY
            }
        });
    }, [language, text]);

  return (
    <div>Convert Text Here</div>
  );
}

export default Convert;