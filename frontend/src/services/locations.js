function get_api_url() {
  try {
    return `${window._env_.API_URL}`
  } catch (err) {
    return 'http://localhost:5000'
  }
}

function get_api_token() {
  try {
    return `${window._env_.API_TOKEN}`
  } catch (err) {
    return 'dev_token!' // safe! real token overwritten via secrets
  }
}


async function getLastUpdate() {
  const api_url = get_api_url()
  const url_endpoint = `${api_url}/lastUpdate`
  const response = await fetch( url_endpoint, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: get_api_token()
    }
  })
  const data_json = await response.json()
  return data_json;
}


async function getAll() {
  const api_url = get_api_url()
  const url_endpoint = `${api_url}/locations`
  const response = await fetch( url_endpoint, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: get_api_token()
    }
  })
  const data_json = await response.json()
  return data_json;
}


async function getNearby(location, distance, limit=10) {
  // prepare request
  const api_url = get_api_url()
  const url_endpoint = `${api_url}/locationsNearby`
  
  const request_body = {
    location: location,
    distance: distance,
    limit: limit
  }

  const request_settings = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: get_api_token()
    },
    body: JSON.stringify(request_body)
  };

  // run request
  try {
      const fetchResponse = await fetch(url_endpoint, request_settings);
      const data = await fetchResponse.json();
      return data;
  } catch (e) {
      console.log('Error processing POST request', e)
  }
}


function getAll_test_v2() {
  const data = {
    locations: [
      {"id":"58c54f1d-db47-4b9f-8320-78d834785493","name":"Аптека №202 Доброго дня","address":"м.Вінниця, вул.Зодчих, 2, Вінницька обл, Україна","contact":null,"type":"pharmacy","latitude":49.2201774,"longitude":28.4510015,"google_place_id":null,"google_latitude":null,"google_longitude":null,"google_name":null,"google_address":null,"google_formatted_phone_number":null,"google_international_phone_number":null,"google_map_url":null,"google_url":null}, 
      {"id":"f554858e-ae58-465c-aa37-3a7100c311f3","name":"Аптека №201 Доброго дня","address":"м.Вінниця, вул.Київська, 27, Вінницька обл, Україна","contact":null,"type":"pharmacy","latitude":49.2426468,"longitude":28.4781109,"google_place_id":"ChIJTRzk9V1bLUcRLK6qeGfQq_8","google_latitude":49.2426468,"google_longitude":28.4781109,"google_name":"Dobroho Dnya","google_address":"27, Kyivs'ka St, Vinnytsia, Vinnyts'ka oblast, Ukraine, 21000","google_formatted_phone_number":"0800 500 129","google_international_phone_number":"+380 800 500 129","google_map_url":"https://maps.google.com/?cid=18423047843513806380","google_url":"https://www.add.ua/internet-apteki-ukraina/internet-apteka-vinnitsa/vinnytsia-kievskaya-27"}, 
      {"id":"ccd41e94-2237-4c03-8751-fa2e09bcd542","name":"Аптека №259","address":"м.Вінниця, вул.Соборна, 26, прим.8, Вінницька обл, Україна","contact":null,"type":"pharmacy","latitude":49.2327856,"longitude":28.4714982,"google_place_id":"ChIJ__-vz3pbLUcRFYTPjYxu_-8","google_latitude":49.2327856,"google_longitude":28.4714982,"google_name":"1 Соціальна Аптека","google_address":"Soborna St, 26, Vinnytsia, Vinnyts'ka oblast, Ukraine, 21050","google_formatted_phone_number":"0800 218 170","google_international_phone_number":"+380 800 218 170","google_map_url":"https://maps.google.com/?cid=17293662644079658005","google_url":"https://1sa.com.ua/stores/psa-soborna-26-vinnicja.html"}, 
      {"id":"7e6d6270-68a2-43be-a4c6-6f78503caf41","name":"Аптека №115 Доброго дня","address":"м.Вінниця, пр-т Юності, 20/73, Вінницька обл, Україна","contact":null,"type":"pharmacy","latitude":49.2253367,"longitude":28.4111335,"google_place_id":"ChIJ2_wRkT9bLUcRvDMZBYi1B3o","google_latitude":49.2253367,"google_longitude":28.4111335,"google_name":"Good day","google_address":"Yunosti Ave, 20/73, Vinnytsia, Vinnyts'ka oblast, Ukraine, 21030","google_formatted_phone_number":"0800 500 129","google_international_phone_number":"+380 800 500 129","google_map_url":"https://maps.google.com/?cid=8793196393269900220","google_url":"https://www.add.ua/internet-apteki-ukraina/internet-apteka-vinnitsa/vinnitsa-pr-kt-youth-20-73"}, 
      {"id":"f799b07b-5697-4c99-afc5-8eeead393e0e","name":"Аптека №35","address":"м.Жмеринка, вул.Пушкіна, 1, Вінницька обл, Україна","contact":null,"type":"pharmacy","latitude":49.2314455,"longitude":28.4680358,"google_place_id":null,"google_latitude":null,"google_longitude":null,"google_name":null,"google_address":null,"google_formatted_phone_number":null,"google_international_phone_number":null,"google_map_url":null,"google_url":null}
    ]
  }
  return data
}

const exportedObject = {
  getLastUpdate,
  getAll,
  getNearby,
  getAll_test_v2
};

export default exportedObject;
