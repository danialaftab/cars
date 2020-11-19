import React, { useState, useEffect } from 'react';
import { getColors, getManufacturers } from '../Api';
import { Form, Button, Spinner } from 'react-bootstrap';

type UpdateFilterType = (manufacturer: string, color: string) => any

const Filters = (props: { updateFilters : UpdateFilterType}) => {
    const [colors, setColors] = useState([]);
    const [manufacturers, setManufacturers] = useState([]);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedManufacturer, setSelectedManufacturer] = useState('');
    const [isColorsLoading, setIsColorsLoading] = useState(false);
    const [isManufacturerLoading, setIsManufacturerLoading] = useState(false);


    useEffect(() => {
        async function fetchColors() {
            setIsColorsLoading(true);
            let col = await getColors();
            setIsColorsLoading(false);
            setColors(col.colors);
        }

        async function fetchManufacturers() {
            setIsManufacturerLoading(true);
            let manu = await getManufacturers();
            setIsManufacturerLoading(false);
            manu = manu.manufacturers.map((manufacturer: any) => manufacturer.name)
            setManufacturers(manu)
        }

        fetchColors()
        fetchManufacturers()
    }, [])


    return (
        <div className="filterBox" data-testid="filters">
            <Form>
                <Form.Group>
                    <Form.Label>Color</Form.Label>
                    <br />
                    {isColorsLoading && <Spinner animation="border" />}
                    {!isColorsLoading && <Form.Control as="select" onChange={(e) => setSelectedColor(e.target.value)}>
                        <option value=' '>All car colors</option>
                        {colors.map(color => <option>{color}</option>)}
                    </Form.Control>}

                    <Form.Label>Manufacturer</Form.Label>
                    <br />
                    {isManufacturerLoading && <Spinner animation="border" />}
                    {!isManufacturerLoading && <Form.Control as="select" onChange={(e) => setSelectedManufacturer(e.target.value)}>
                        <option value=' '>All manufacturers</option>
                        {manufacturers.map(manufacturer => <option>{manufacturer}</option>)}
                    </Form.Control>}

                    <br/>   
                    <Button onClick={(e) => { e.preventDefault(); props.updateFilters(selectedManufacturer, selectedColor) }} variant="primary" type="submit">
                        Filter
                </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Filters;