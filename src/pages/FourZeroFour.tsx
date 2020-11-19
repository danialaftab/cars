import React from 'react';
import { Link } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';

const FourZeroFour = (props: any) => {

    return (
        <div>
           <MainLayout>
              <h2>404 - Not found</h2>
              <p>Sorry the page you are looking for does not exist</p>
              <p>you can always go to the <Link to="/">Homepage</Link></p>
           </MainLayout>
        </div>

    )
}

export default FourZeroFour;