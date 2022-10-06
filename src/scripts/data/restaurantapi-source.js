import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApiSource {
  static async restoCatalogue() {
    const response = await fetch(API_ENDPOINT.RESTO_CATALOGUE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    // eslint-disable-next-line new-cap
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantApiSource;
