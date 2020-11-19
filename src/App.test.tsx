import React from 'react';
import { getByTestId, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Filters from './components/Filters';
import CarsList from './components/CarsList';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

afterEach(cleanup);

test('Filters match snapshot', () => {
    const tree = renderer.create(<Filters updateFilters={() => {}}></Filters>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Car list match snapshot', () => {
  const tree = renderer.create(<CarsList cars={[{
    stockNumber: '100w',
    manufacturerName:'tesla',
    modelName:	'model s',
    mileage: {
      number: 1,
      unit: 'km'
    },
    fuelType:	'petrol',
    color:	'white',
    pictureUrl:	'www.example.com'
  }]}></CarsList>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Footer match snapshot', () => {
  const tree = renderer.create(<Footer></Footer>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('NavBar match snapshot', () => {
  const tree = renderer.create(<Navbar></Navbar>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Pagniation match snapshot', () => {
  const tree = renderer.create(<Pagination  currentPage={1}
    totalPages={10}></Pagination>).toJSON();
  expect(tree).toMatchSnapshot();
});



