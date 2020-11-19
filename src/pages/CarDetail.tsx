import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { useParams, useHistory } from 'react-router-dom';
import { getCarDetail } from '../Api';
import {LOCAL_STORAGE_KEY_NAME} from '../Constants';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { ICar } from '../interfaces/ICar';
import { IMilage } from '../interfaces/IMilage';

const CarDetail = (props: any) => {
    let milage: IMilage = {
        number: 0,
        unit: ''
    }

    const [carDetail, setCarDetail] = useState({
        modelName: '',
        manufacturerName: '',
        stockNumber: 0,
        mileage: milage,
        fuelType: '',
        color: '',
        pictureUrl: ''
    });

    const [isPartOfFavorite, setIsPartOfFavorite] = useState(false)

    let params: any = useParams();
    let history = useHistory();


    useEffect(() => {
        async function getCar() {
            try {
                let response = await getCarDetail(params.stockNumber);
                let carDetail: ICar = response.car;
                setCarDetail(carDetail);
                setIsPartOfFavorite(isFavorite(carDetail));
            } catch (err) {
                console.error("error :", err);
                history.push("/404");
            }
        }

        let isFavorite = (carDetail:ICar) => {
            let favs = localStorage.getItem(LOCAL_STORAGE_KEY_NAME);
            if(favs){
                let cars: ICar[] = JSON.parse(favs);
                let idx = cars.findIndex(car => car.stockNumber === carDetail.stockNumber)
                return ( idx >= 0);
            } 
    
            return false;
        }

        getCar();
    }, [])

    let saveToFavorites = () => {
        let favs = localStorage.getItem(LOCAL_STORAGE_KEY_NAME);
        
        if(favs){
            let cars: ICar[] = JSON.parse(favs);
            let idx = cars.findIndex(car => car.stockNumber === carDetail.stockNumber)
            if(idx < 0){
                cars.push(carDetail)
                setIsPartOfFavorite(true);
            } else{
                cars.splice(idx, 1)
                setIsPartOfFavorite(false);
            }

            localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(cars))

        } else { 
            localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify([carDetail]))
        }
    }


    return (
        <MainLayout>
            <Jumbotron><img src={carDetail.pictureUrl} alt='car_img'></img></Jumbotron>
            <Row>
                <Col xs="12" md="6" lg="6">
                    <h2>{carDetail.manufacturerName + ' ' + carDetail.modelName}</h2>
                    <p>Stock # {carDetail.stockNumber + ' - ' + carDetail.mileage.number + ' ' + carDetail.mileage.unit + ' - ' + carDetail.fuelType + ' - ' + carDetail.color}</p>
                </Col>
                <Col xs="12" md="6" lg="6">
                    {!isPartOfFavorite && <div className="favoriteBox">
                        <p>If you like this car, click the button and save it in your collection of favorite items</p>
                        <Button onClick={saveToFavorites}>Save</Button>
                    </div>}
                    {isPartOfFavorite && <div className="favoriteBox">
                        <p>If you do not like this car, click the button and remove it from your collection of favorite items</p>
                        <Button onClick={saveToFavorites}>Remove</Button>
                    </div>}
                </Col>
            </Row>
        </MainLayout>
    )
}

export default CarDetail;