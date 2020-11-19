import React from 'react';
import { ICar } from '../interfaces/ICar';
import { Container, Row } from 'react-bootstrap';

const CarsList = (props: any) => {

    let renderCars = () => {
        let { cars } = props;

        cars = cars.map((car: ICar, idx: number) =>
            <div key={idx} className="carCard">
                <div className="img">
                    <img src={car.pictureUrl} alt="car_image" />
                </div>
                <div className="body">
                    <h4>
                        {car.manufacturerName + ' ' + car.modelName}
                    </h4>
                    <p>Stock # {car.stockNumber + ' - ' + car.mileage.number + ' ' + car.mileage.unit + ' - ' + car.fuelType + ' - ' + car.color}</p>
                    <a href={`/detail/${car.stockNumber}`}>
                        View Details
                    </a>
                </div>
            </div>

        );

        return cars
    }

    return (
        <Container>
            <div>
                <h4 className="contentHeading">Available Cars</h4>
                    <p>Showing {props.cars.length} of {props.totalCars} Results </p>
            </div>
            <br />
            <Row>
                {renderCars()}
            </Row>
        </Container>
    )
}

export default CarsList;