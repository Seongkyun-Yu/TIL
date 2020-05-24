import axios from 'axios';

const clientID = '5j6rcq24gj';
const clientSecret = 'mGyxouPLYh6voMOOqMwIyxbE19CoEAl4mw5BPJlb';

const mapApi = {
  getLoc: (lati, longi) =>
    axios.get(
      `/map-reversegeocode/v2/gc?request=coordsToaddr&coords=${longi},${lati}&sourcecrs=epsg:4326&orders=addr&output=json`,
      {
        headers: {
          'X-NCP-APIGW-API-KEY-ID': clientID,
          'X-NCP-APIGW-API-KEY': clientSecret,
        },
      },
    ),
};

export { mapApi };
