import React from 'react';

import './SocialItem.scss';

interface SocialItemProps {
    name: string;
    url: string;
    label?: string;
}

const SocialItem: React.FunctionComponent<SocialItemProps> = (props) => {
    const { name, label, url } = props;

    return (
        <article className={`Social-item ${name}`}>
            <a href={url}>
                {/* <span className="link-label">GitHub</span> */}
                <i className={`fab fa-${name}`}></i>
            </a>
        </article>
    );
};

export default SocialItem;