import moment from 'moment';
import React from 'react'
import './_videoMetaData.scss';
import numeral from 'numeral';
import {MdThumbUp, MdThumbDown} from 'react-icons/md';
import ShowMoreText from 'react-show-more-text'

const VideoMetaData = () => {
    return (
        <div className="videoMetaData py-2">
            <div className="videoMetaData__top">
                <h5>Video Title</h5>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <span>
                        {numeral(1000).format('0.a')} Views&nbsp;•&nbsp;
                        {moment('2021-02-08').fromNow()}
                    </span>
                    <div>
                        <span className="mr-3">
                            <MdThumbUp size={25} /> {numeral(1000).format('0.a')}
                        </span>
                        <span className="mr-3">
                            <MdThumbDown size={25} /> {numeral(1000).format('0.a')}
                        </span>
                    </div>
                </div>
            </div>
            <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
                <div className="d-flex">
                    <img src={"https://www.w3schools.com/howto/img_avatar.png"} alt='avatar' className="rounded-circle mr-3" />
                    <div className="d-flex flex-column">
                        <span>Inder Coder</span>
                        <span>{numeral(1000).format('0.a')} Subscribers</span>
                    </div>
                </div>
                <button className="btn btn-border-0 m-2 p-2">SUBSCRIBE</button>
            </div>
            <div className="videoMetaData__description">
                <ShowMoreText lines={3} more="SHOW MORE" less="SHOW LESS" anchorClass="showMoreText" expanded={false}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quam temporibus odit obcaecati blanditiis, et animi. Quisquam maiores facere alias explicabo officia, libero odio cumque eos architecto dolor. Beatae, illo. Assumenda quae aliquam inventore quo ullam dolores ex, voluptate molestiae. Fugiat tenetur numquam minus assumenda aperiam obcaecati aliquam quae eligendi, dolorem at in esse ex, sunt ipsa maxime. Vero, sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quam temporibus odit obcaecati blanditiis, et animi. Quisquam maiores facere alias explicabo officia, libero odio cumque eos architecto dolor. Beatae, illo. Assumenda quae aliquam inventore quo ullam dolores ex, voluptate molestiae. Fugiat tenetur numquam minus assumenda aperiam obcaecati aliquam quae eligendi, dolorem at in esse ex, sunt ipsa maxime. Vero, sapiente.
                </ShowMoreText>
            </div>
        </div>
    )
}

export default VideoMetaData
