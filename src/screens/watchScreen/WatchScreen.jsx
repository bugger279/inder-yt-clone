import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Comments from '../../components/comments/Comments';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';
import VideoMetaData from '../../components/videoMetaData/VideoMetaData';
import './watchScreen.scss';

const WatchScreen = () => {
    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen__player">
                    <iframe 
                        src="https://www.youtube.com/embed/tgbNymZ7vqY" 
                        title="A video" 
                        allowFullScreen={true} 
                        width="100%" 
                        height="100%" 
                        frameBorder="0"></iframe>
                </div>
                <VideoMetaData />
                <Comments />
            </Col>
            <Col lg={4}>
                {
                    [...Array(20)].map((data, i) => <VideoHorizontal key={i} />)
                }
            </Col>
        </Row>
    )
}

export default WatchScreen
