const getSpaceInfo = async () => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query: `
            {
  launchNext {
    launch_date_local
    rocket {
      rocket_name
    }
    launch_site {
      site_name_long
    }
  }
}`,
        variables: {},
        })
    }
    const rawResponse = await fetch('https://api.spacex.land/graphql/', requestOptions)
    const response = await rawResponse.json()
    console.log(response);

    document.querySelector('.launch-location').innerText = 'Date of next launch: ' + response.data.launchNext.launch_date_local;
    document.querySelector('.launch-date').innerText = 'Site name of next launch: ' + response.data.launchNext.launch_site.site_name_long;
    document.querySelector('.rocket-name').innerText = 'Name of rocket: ' + response.data.launchNext.rocket.rocket_name;
}

getSpaceInfo();

