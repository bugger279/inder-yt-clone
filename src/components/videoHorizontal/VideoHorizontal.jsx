import React from 'react'
import moment from 'moment';
import { AiFillEye } from 'react-icons/ai'
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './_videoHorizontal.scss'
import { Col, Row } from 'react-bootstrap';

const VideoHorizontal = () => {
    const seconds = moment.duration(1000).asSeconds();
    const _duration = moment.utc(seconds * 1000).format('mm:ss');

    return (
        <Row className="videoHorizontal m-1 py-2 align-items-center">
            <Col className="videoHorizontal__left" xs={6} md={4}>
                <LazyLoadImage
                    src={"https://i.ytimg.com/vi/35lXWvCuM8o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkb8PbPZ7j5LjwYL5pp5Y9yjD_YQ"}
                    effect="blur"
                    alt={"title"}
                    className="videoHorizontal__thumbnail"
                    wrapperClassName="videoHorizontal__thumbnail-wrapper"
                />
                <span className="video__top__duration">{_duration}</span>
            </Col>
            <Col className="videoHorizontal__right p-0" xs={6} md={8}>
                <p className="videoHorizontal__title mb-1">
                    Be a Full Stack developer in 2 Hours
                </p>
                <div className="videoHorizontal__details">
                    <AiFillEye /> {numeral(918287).format('0.a')} Views • {moment('2021-05-05').fromNow()}
                </div>
                <div className="videoHorizontal__channel d-flex my-1 align-items-center">
                {/* <LazyLoadImage
                    src={"https://www.w3schools.com/howto/img_avatar.png"}
                    effect="blur"
                    alt={"title"}
                /> */}
                <p>Inder Sav Channel</p>
                </div>
            </Col>
        </Row>
    )
}

export default VideoHorizontal
