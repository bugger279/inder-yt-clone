import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { AiFillEye } from 'react-icons/ai'
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './_videoHorizontal.scss'
import { Col, Row } from 'react-bootstrap';
import request from '../../api';
import { useHistory } from 'react-router-dom';

const VideoHorizontal = ({video}) => {
    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);
    
    const {
        id,
        snippet: {
            publishedAt,
            channelId,
            title,
            description,
            channelTitle,
            thumbnails: { medium }
        }
    } = video;

    useEffect(() => {
        const get_video_details = async () => {
            const { data: { items } } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: id.videoId
                }
            })
            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount)
        }
        get_video_details()
    }, [id]);

    useEffect(() => {
        const get_channel_icon = async () => {
            const { data: { items } } = await request('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId
                }
            })
            setChannelIcon(items[0].snippet.thumbnails.default);
        }
        get_channel_icon()
    }, [channelId]);

    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format('mm:ss');
    const history = useHistory();
    const handleClick = () => {
        history.push(`/watch/${id.videoId}`)
    }

    return (
        <Row onClick={handleClick} className="videoHorizontal m-1 py-2 align-items-center">
            <Col className="videoHorizontal__left" xs={6} md={6}>
                <LazyLoadImage
                    src={medium.url}
                    effect="blur"
                    alt={title}
                    className="videoHorizontal__thumbnail"
                    wrapperClassName="videoHorizontal__thumbnail-wrapper"
                />
                <span className="videoHorizontal__duration">{_duration}</span>
            </Col>
            <Col className="videoHorizontal__right p-0" xs={6} md={6}>
                <p className="videoHorizontal__title mb-1">
                    {title}
                </p>
                <div className="videoHorizontal__details">
                    <AiFillEye /> {numeral(views).format('0.a')} Views • {moment(publishedAt).fromNow()}
                </div>
                <div className="videoHorizontal__channel d-flex my-1 align-items-center">
                {/* To show in Search screen */}
                {/* <LazyLoadImage
                    src={"https://www.w3schools.com/howto/img_avatar.png"}
                    effect="blur"
                    alt={"title"}
                /> */}
                <p>{channelTitle}</p>
                </div>
            </Col>
        </Row>
    )
}

export default VideoHorizontal
