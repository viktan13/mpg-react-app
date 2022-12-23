import React from 'react';
import './Animation.css'

const Animation = (props) => {
    return (
        <div>
            <div className={props.className}>
                <img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/automobile_1f697.png"
                     srcSet="https://emojipedia-us.s3.amazonaws.com/source/skype/289/automobile_1f697.png 2x"
                     alt="Automobile on Skype Emoticons 1.2" width="160" height="160" style={{marginBottom: "-202px"}}/>
            </div>
            <img alt="Straight road with markup from start map pin to finish flag sign. Easy way, fast delivery, short path, ideal plan, simple life concept - csp103715290" data-ratio="5.001643836" src="https://cdn.w600.comps.canstockphoto.com/straight-road-with-markup-from-start-map-illustration_csp103715290.jpg" title="Straight road with markup from start map pin to finish flag sign. Easy way, fast delivery, short path, ideal plan, simple life concept Vector - stock illustration, royalty free illustrations, stock clip art icon, stock clipart icons, logo, line art, EPS picture, pictures, graphic, graphics, drawing, drawings, vector image, artwork, EPS vector art" style={{width: "1100px"}}/>
        </div>
);
};

export default Animation;