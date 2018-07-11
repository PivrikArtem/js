const constr = require('./app');
const coordinates = require('./map');
var assert = require('assert');


describe('map', function () {
    describe('maxPoint()', function () {

        it('when we do not have points, we do not have max points', function () {

            const map = new constr.Map();

            var maxPoint = map.maxPoint();

            assert.equal(maxPoint, "we don't have points");
        });

        it('when we have only one point when this point should be max min est cost ', function () {

            const map = new constr.Map([
                {
                    city: 'single point',
                    lat: 36.17,
                    long: -86.78
                }
            ]);


            var maxPoint = map.maxPoint();


            assert.equal(maxPoint.e, 'single point');
            assert.equal(maxPoint.w, 'single point');
            assert.equal(maxPoint.n, 'single point');
            assert.equal(maxPoint.s, 'single point');
        });

        it('when we have two points, when west point should be more west point and east should be more east point ',
         function () {


            const map = new constr.Map([
                {
                    city: 'Minsk',
                    lat: 53.90,
                    long: 27.57
                },
                {
                    city: 'Pekin',
                    lat: 39.91,
                    long: 116.40
                }
            ]);

            var maxPoint = map.maxPoint();

            assert.equal(maxPoint.e, 'Pekin');
            assert.equal(maxPoint.w, 'Minsk');
        });

        it('when we have three points, when south point should be more south point and north point should be more north point', function () {


            const map = new constr.Map([
                {
                    city: 'Vitebsk',
                    lat: 55.19,
                    long: 30.21
                },
                {
                    city: 'Brest',
                    lat: 52.10,
                    long: 23.69
                },
                {
                    city: 'Caracas',
                    lat: 10.49,
                    long: -66.88
                }
            ]);

            var maxPoint = map.maxPoint();

            assert.equal(maxPoint.n, 'Vitebsk');
            assert.equal(maxPoint.s, 'Caracas');
        });

        it('when we have three points with the same latitudes, when we choose first point', function () {


            const map = new constr.Map([
                {
                    city: 'First',
                    lat: 20.0,
                    long: 66.21
                },
                {
                    city: 'Second',
                    lat: 20.0,
                    long: 33.69
                },
                {
                    city: 'Third',
                    lat: 20.0,
                    long: -55.90
                }
            ]);

            var maxPoint = map.maxPoint();

            assert.equal(maxPoint.n, 'First');
            assert.equal(maxPoint.s, 'First');
        });

    });

    describe('nameOfNearCity()', function () {

        it('when we do not have points, we do not have the nearest city ', function () {

            const map = new constr.Map();

            var nameOfNearCity = map.nameOfNearCity();

            assert.equal(nameOfNearCity, "we don't have points");
        });

        it('when we have only one point, that city in this point sould be a nearest City', function () {

            const map = new constr.Map([
                {
                    city: 'single point',
                    lat: 36.17,
                    long: -86.78
                }
            ]);
            
            const latPoint = 0.0;
            const longPiont = 0.0;

            var nameOfNearCity = map.nameOfNearCity(latPoint, longPiont);

            assert.equal(nameOfNearCity, 'single point');
        });

        it('when we have two points, city with the nearest distance to the point sould be a nearest City', function () {

            const map = new constr.Map([
                {
                    city: 'First',
                    lat: 80.0,
                    long: 80.0
                },
                {
                    city: 'Second',
                    lat: 10.0,
                    long: 10.0
                },
            ]);
            const latPoint = 0.0;
            const longPiont = 0.0;

            var nameOfNearCity = map.nameOfNearCity(latPoint, longPiont);

            assert.equal(nameOfNearCity, 'Second');
        });

        it('when we have three point with equal distances, city with first point sould be a near City', function () {

            const map = new constr.Map([
                {
                    city: 'First',
                    lat: 20.0,
                    long: 0.0
                },
                {
                    city: 'Second',
                    lat: -20.0,
                    long: 0.0
                },
                {
                    city: 'Third',
                    lat: 0.0,
                    long: 20.0
                }
            ]);
            const latPoint = 0.0;
            const longPiont = 0.0;

            var nameOfNearCity = map.nameOfNearCity(latPoint, longPiont);

            assert.equal(nameOfNearCity, 'First');
        });

    });

    describe('abbreviationsOfCities()', function () {

        it('when we do not have points, we do not have abbreviations', function () {

            const map = new constr.Map();

            var abbreviationsOfCities = map.abbreviationsOfCities();

            assert.equal(abbreviationsOfCities, "we don't have abbreviations");
        });

        it('when we have only one point, abbreviation to stat this point sould be the desired abbreviation', function () {

            const map = new constr.Map([
                {
                    city: 'New York, NY',
                    lat: 40.71,
                    long: -74.00
                }
            ]);

            var abbreviationsOfCities = map.abbreviationsOfCities();

            assert.equal(abbreviationsOfCities, 'NY');
        });

        it('when we have two points whith the same abbreviation to stats, this abbreviation to stats, sould be the only required abbreviation', function () {

            const map = new constr.Map([
                {
                    city: 'Nashville, TN',
                    lat: 36.17,
                    long: -86.78
                },
                {
                    city: 'Memphis, TN',
                    lat: 35.15,
                    long: -90.05
                }
            ]);

            var abbreviationsOfCities = map.abbreviationsOfCities();

            assert.equal(abbreviationsOfCities, 'TN');
        });

        it('when we have three points whith the abbreviations to stats, this abbreviations to stats, sould be the required abbreviations', function () {

            const map = new constr.Map([
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
                }
            ]);

            var abbreviationsOfCities = map.abbreviationsOfCities();

            assert.equal(abbreviationsOfCities, 'TN NY GA');
        });
    });
});


