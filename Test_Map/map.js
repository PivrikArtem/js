class Map {

    constructor(cities) {
        this.cities = cities;
        this._maxPoints = null;
    }

    maxPoint() {
        if (!!this._maxPoints)
            return this._maxPoints;

        var northPoint = null;
        this.cities.forEach(item => {
            if (!northPoint || northPoint.lat < item.lat) {
                northPoint = item;
            }
        });
        var southPoint = null;
        this.cities.forEach(item => {
            if (!southPoint || southPoint.lat > item.lat) {
                southPoint = item;
            }
        });

        var westPoint = null;
        this.cities.forEach(item => {
            if (!westPoint || westPoint.long > item.long) {
                westPoint = item;
            }
        });

        var eastPoint = null;
        this.cities.forEach(item => {
            if (!eastPoint || eastPoint.long < item.long) {
                eastPoint = item;
            }
        });

        this._maxPoints = {
            n: northPoint.city,
            s: southPoint.city,
            w: westPoint.city,
            e: eastPoint.city
        };

        return this._maxPoints;

    }

    nameOfNearCity(latPoint, longPiont) {

        var nearCity = null;
        this.cities.forEach(item => {

            if (nearCity) {
                var distance1 = Math.sqrt(Math.pow(latPoint - nearCity.lat, 2) + Math.pow(longPiont - nearCity.long, 2));
                var distance2 = Math.sqrt(Math.pow(latPoint - item.lat, 2) + Math.pow(longPiont - item.long, 2));

            }
            if (!nearCity ||
                distance1 > distance2) {
                nearCity = item;
            }
        });
        return nearCity.city;
    }

    abbreviationsOfCities() {
        var abbrs = {}

        this.cities.forEach(item => {
            var state = item.city.substring(item.city.length - 2);
            if (!abbrs[state])
                abbrs[state] = state;
        })
        return Object.keys(abbrs).join(' ');
    }
}
var map = new Map([
    {
        city: 'Nashville, TN',
        lat: 36.17,
        long: -86.78
    },
    {
        city: 'New York, NY',
        lat: 40.71,
        long: -74.00
    },
    {
        city: 'Atlanta, GA',
        lat: 33.75,
        long: -84.39
    },
    {
        city: 'Denver, CO',
        lat: 39.74,
        long: -104.98
    },
    {
        city: 'Seattle, WA',
        lat: 47.61,
        long: -122.33
    },
    {
        city: 'Los Angeles, CA',
        lat: 34.05,
        long: -118.24
    },

    {
        city: 'Memphis, TN',
        lat: 35.15,
        long: -90.05
    },
]);

module.exports.map=map;