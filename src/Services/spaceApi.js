const API_URL = "https://api.spacexdata.com/v4/";

export async function GetAllLaunches(){
    try {
        const response = await fetch(API_URL + "launches");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function GetLauncheByFlightNumber(flightNumber){
    try {
        const response = await fetch(API_URL + "launches/"+flightNumber);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


export async function GetAllRockets(){
    try {
        const response = await fetch(API_URL + "rockets");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function GetAllStarlinks(){
    try {
        const response = await fetch(API_URL + "starlink");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


export async function GetAllCrews(){
    try {
        const response = await fetch(API_URL + "crew");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}