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



