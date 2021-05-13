import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comments from '../../components/comments/Comments';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';
import VideoMetaData from '../../components/videoMetaData/VideoMetaData';
import { getRelatedVideos, getVideoById } from '../../redux/actions/videos.action';
import './watchScreen.scss';

const WatchScreen = () => {
    const { id } = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getVideoById(id));
        dispatch(getRelatedVideos(id));
    }, [dispatch, id]);

    const { loading, video } = useSelector(state => state.selectedVideo);
    const { loading: selectedVideoLoading, videos } = useSelector(state => state.relatedVideo);
    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen__player">
                    <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        title={video?.snippet?.title}
                        allowFullScreen={true}
                        width="100%"
                        height="100%"
                        frameBorder="0"></iframe>
                </div>
                {!loading ? <VideoMetaData video={video} videoId={id} /> : <h6>Loading...</h6>}
                <Comments videoId={id} totalComments={video?.statistics?.commentCount} />
            </Col>
            <Col lg={4}>
                {
                    !selectedVideoLoading ? videos?.filter(video => video.snippet).map((video) => <VideoHorizontal video={video} key={video.id.videoId} />)
                    :
                    <SkeletonTheme color="#343a40" highlightColor='#3c4147'>
                        <Skeleton width="100%" height="130px" count={20}></Skeleton>
                    </SkeletonTheme>
                }
            </Col>
        </Row>
    )
}

export default WatchScreen
