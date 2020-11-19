import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CarsList from '../components/CarsList';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import MainLayout from '../layouts/MainLayout';
import { getCars } from '../Api';

class CarsPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            cars: [],
            currentPage: 1,
            totalPages: 1,
            colorFilter: '',
            manufacturerFilter: '',
            totalCarsCount: 0
        }
    }

    async componentDidMount() {
        let res = await getCars(1);
        this.setState({
            cars: res.cars,
            totalPages: res.totalPageCount,
            totalCarsCount: res.totalCarsCount
        })
    }

    openPage = async (page: number) => {
        let { colorFilter, manufacturerFilter } = this.state

        let res = await getCars(page, colorFilter, manufacturerFilter);
        this.setState({
            cars: res.cars,
            totalPages: res.totalPageCount,
            totalCarsCount: res.totalCarsCount,
            currentPage: page
        })
    }

    updateFilters = async (manufacturer: string, color: string) => {
        let res = await getCars(1, color, manufacturer);
        this.setState({
            cars: res.cars,
            totalPages: res.totalPageCount,
            currentPage: 1,
            colorFilter: color,
            manufacturerFilter: manufacturer,
            totalCarsCount: res.totalCarsCount
        })
    }

    render() {
        let { cars, currentPage, totalPages, totalCarsCount } = this.state;

        return (
            <MainLayout>
                <Row>
                    <Col xs="12" md="3" lg="3">
                        <Filters updateFilters={this.updateFilters} />
                    </Col>
                    <Col xs="12" md="9" lg="9">
                        <CarsList cars={cars} totalCars={totalCarsCount} />
                        <br/>
                        <Pagination
                        openPage={this.openPage}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                    </Col>
                </Row>
            </MainLayout>
        )
    }
}

export default CarsPage;