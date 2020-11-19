import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';

const MainLayout = (props: any) => {

    return (
        <div>
            <Navbar />
            <Container style={{minHeight: '700px'}}>
                {props.children}
            </Container>
            <Footer />
        </div>

    )
}

export default MainLayout;