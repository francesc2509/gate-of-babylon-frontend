import React from 'react';

import './Social.scss'

const Social: React.FunctionComponent<{}> = (props) => {
    return (
        <div className="Social">
            <article className="github">
                <a href="#">
                    <span className="link-label">GitHub</span>
                    <i className="fab fa-github"></i>
                </a>
            </article>
            <article className="instagram">
                <a href="#">
                    <span className="link-label">Instagram</span>
                    <i className="fab fa-instagram"></i>
                </a>
            </article>
            <article className="kakao">
                <a href="#">
                    <span className="link-label">Kakao TALK</span>
                    <i className="fab fa-kakaotalk"></i>
                </a>
            </article>
            <article className="linkedin">
                <a href="#">
                    <span className="link-label">Linkedin</span>
                    <i className="fab fa-linkedin"></i>
                </a>
            </article>
            <article className="youtube">
                <a href="#" >
                    <span className="link-label">Youtube</span>
                    <i className="fab fa-youtube"></i>
                </a>
            </article>
        </div>
    );
};

export default Social;