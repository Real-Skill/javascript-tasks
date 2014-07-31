/**
 * Created by itc on 2014-08-13.
 */
describe('day2', function () {
    'use strict';
    var answer = window.day2;


    iit('Napisz funkcje ktora oblicza roznice dwoch szescianow a oraz b. wyswietl wynik w konsoli', function () {
        expect(answer.diffqube(2, 3).toEqual(-19));
    });


    iit('Napisac funcje ktora przyjmuje wzrost osoby(od 150 cm do 220) i przydziela osoby do odpowiedniej kategorii', function () {
        expect(answer.przydz(160).toEqual("Jestes niskiego wzrostu"));

    });

    iit('Zadeklarowac dowolna macierz cyfr i pomnozyc kazdy el. przed 3.', function () {
        expect(answer.fx([3, 6, 1]).toEqual([9, 18, 3]));
    });


    iit('Napisac funkcje ktora skleja stringi w poniższej podmacierzy', function () {
        expect(answer.names(["Jan", "Kowalski"]).toEqual(["Jan Kowalski"]));
    });


    iit('Zadeklaruj tablice 2 funkcji.1 funkcja mnozy argument x2 druga funkcja przeksztalca argument na silnie', function () {
        expect(answer.f1(5).toEqual(10));
    });


    iit('Factorial ', function () {
        expect(answer.f2(6).toEqual('6!'));
    });

});



