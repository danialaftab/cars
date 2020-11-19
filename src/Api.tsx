const baseUrl = 'https://auto1-mock-server.herokuapp.com/api';

export const getCars = async (page: number, color?:string, manufacturer?:string) => {
    let url = baseUrl + `/cars?page=${page}`;
    url = (color && color !== '') ? url + `&color=${color}` : url;
    url = (manufacturer && manufacturer !== '') ? url + `&manufacturer=${manufacturer}` : url;

    const data = await (await fetch(url)).json()
    return data;
}

export const getColors = async () => {
    const url = baseUrl + `/colors`;
    const data = await (await fetch(url)).json()
    return data;
}

export const getManufacturers = async () => {
    const url = baseUrl + `/manufacturers`;
    const data = await (await fetch(url)).json()
    return data;
}

export const getCarDetail = async (stockNumber: number) : Promise<any> => {
    const url = baseUrl + `/cars/${stockNumber}`;
    let data = await fetch(url);
    data = (await data.json());

    return data;
}