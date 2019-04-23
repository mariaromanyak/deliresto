<template>

    <div class="wrapper">
        <div class="top-part">
            <div class="top-part__input">
                <a href="#"><img src="./assets/logo2.png" alt="logo"></a>
                <input type="text" class="input placement-input" name="" value="">
                <a href="#"><ion-icon name="close" class="close"></ion-icon></a>
            </div>
            <div class="top-part__input">
                <div class="icons">
                    <a href="#" class="arrow"><img src="./assets/arrows.png" alt=""></a>
                    <a href="#"><img src="./assets/pin.png" alt=""></a>
                </div>
                <input type="text" class="input placement-input" name="" value="">
                <a href="#"><ion-icon name="close" class="close"></ion-icon></a>
            </div>
        </div>
        <div class="middle-part">
            <div class="middle-part__item">
                <img src="./assets/moto.png" alt=""> <br />
                <a href="#">Documents <br /> & small parcel</a>
            </div>
            <div class="middle-part__item">
                <img src="./assets/car.png" alt=""> <br />
                <a href="#">Medium or multiple <br /> small parcels</a>
            </div>
            <div class="middle-part__item">
                <img src="./assets/truck-s.png" alt=""> <br />
                <a href="#">Large parcel(s)</a>
            </div>
            <div class="middle-part__item">
                <img src="./assets/truck-l.png" alt=""> <br />
                <a href="#">Pallet(s)</a>
            </div>
            <div class="middle-part__item">
                <img src="./assets/frozen.png" alt=""> <br />
                <a href="#">Frozen or chilled <br /> pallet(s)</a>
            </div>
            <div class="middle-part__item">
                <img src="./assets/heavy.png" alt=""> <br />
                <a href="#">Heavy transport</a>
            </div>
        </div>
        <div class="bottom-part">
            <p>Date & Heure d'enlèvement</p>
            <div class="bottom-part__date">
                <a href="#">A partir de maintenant</a>
                or
                <input type="text" class="input date-input" name="" value="">
                <a href="#">VALIDER ET VOIP LE RECATULATIF</a>
            </div>
        </div>
        <div id="map"></div>
    </div>


</template>



<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  font-family: "Montserrat", sans-serif;
  background: url("./assets/bg.png");
  background-size: cover;
  color: #2c2c2c;
  font-size: 1em;
  padding: 0;
  margin: 0;
  display: grid;
  place-items: center;
  height: 100vh; }

a {
  text-decoration: none;
  all: unset;
  cursor: pointer;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease; }

.close {
  font-size: 1.6em;
  color: #515150; }

.input {
  font-size: 1em;
  font-family: "Montserrat", sans-serif;
  border: none;
  outline: none; }

.top-part {
  background-color: #e9e6e6;
  padding: 25px;
  -webkit-box-shadow: 0 1px rgba(0, 0, 0, 0.4);
  box-shadow: 0 1px rgba(0, 0, 0, 0.4);
  border-radius: 10px 10px 0 0; }

.wrapper {
  padding: 25px; }

.top-part__input {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; }
  .top-part__input:first-child {
    margin-bottom: 15px; }
  .top-part__input .arrow {
    margin: 0 10px; }

.icons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; }

.placement-input {
  height: 48px;
  width: 75%;
  border-radius: 28px;
  padding: 0 25px;
  margin-right: 10px; }

.middle-part {
  background-color: rgba(233, 230, 230, 0.8);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap; }

.middle-part__item {
  text-align: center;
  width: 10%;
  padding: 10px;
  border: 1.5px solid #ea146a;
  border-radius: 16px;
  margin: 20px 10px;
  font-size: 0.8em; }
  .middle-part__item a {
    margin: 0;
    font-weight: 600;
    color: #ea146a; }
    .middle-part__item a:hover {
      color: #9d1551; }
  .middle-part__item:first-child {
    margin-left: 30px; }
  .middle-part__item:last-child {
    margin-right: 30px; }

.bottom-part {
  background-color: #f2efef;
  padding: 22px; }
  .bottom-part p {
    margin-top: 0;
    padding-left: 5px; }
  .bottom-part a {
    color: #f2efef;
    font-weight: bolder;
    font-size: 0.8em;
    background-color: #ca1b68;
    padding: 15px 30px;
    border-radius: 2em; }
    .bottom-part a:hover {
      background-color: #9d1551; }

.bottom-part__date {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between; }

.date-input {
  padding: 15px 10px;
  border-radius: 4px;
  border: 1px solid #dddddd;
  font-size: 0.8em;
  color: #66615b;
  width: 20%; }

#map {
  width: 100%;
  height: 400px;
  border-radius: 0 0 10px 10px; }

/* =================================
           MEDIA QUERIES
==================================== */
@media (max-width: 615px) {
  .bottom-part__date {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column; }
    .bottom-part__date a {
      margin: 30px 0; }
  .date-input {
    margin-top: 20px;
    width: 60%; } }

</style>
