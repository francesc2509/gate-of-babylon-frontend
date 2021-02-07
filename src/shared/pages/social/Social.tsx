import React from 'react';

import { SocialItem } from './components';

import './Social.scss'

const Social: React.FunctionComponent<{}> = (props) => {
    const socialItems = [
        {
            name: 'github',
            url: 'https://github.com/francesc2509'
        },
        {
            name: 'instagram',
            url: 'https://www.instagram.com/'
        },
        {
            name: 'kakaotalk',
            url: 'https://www.kakaocorp.com/service/KakaoTalk?lang=en'
        },
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/francesc2509/'
        },
        {
            name: 'youtube',
            url: 'https://www.youtube.com/?feature=youtu.be'
        }
    ].map((item) => {
        const { name, url } = item;

        return (
            <SocialItem name={name} url={url} key={name}/>
        );
    })

    return (
        <div className="Social">
           {socialItems}
        </div>
    );
};

export default Social;