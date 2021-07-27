import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import DoughnutChart from '../Chart';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
    const location = useLocation();
    useEffect(() => {
        console.log(location.state.result);
    }, [location])

    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>Welcome home, {location.state?.dataResult?.email}</h1>
                        <div className="d-flex justify-content-center w-100">
                            <div className="d-flex" style={{ width: '400px' }}>
                                <DoughnutChart />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}