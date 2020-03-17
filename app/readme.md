# Navbar get started


## how to use 

##### For header nav
```html 
<div class="inner-header">
    <div class="container">
        <div class="navbar__header">
             <div class="navbar__header__container--left">
                    <div class="navbar__header__container__links">
                        <a href="#">Support</a>
                        <a href="#">Contact us</a>
                    </div>
                </div>
            </div>
    </div>
</div>

```


##### For center nav
```html 
    <div class="center-header">
        <div class="container">
            <div class="navbar">
                <div class="navbar__logo">
                    <img src="img/header/logo.svg" alt="">
                </div>

                <div class="navbar__left">
                    <div class="navbar__left__currency">
                        <span class="navbar__left__currency--green responsivespan">Currency</span>
                        <p class="navbar__left__currency__selected">USD $</p>
                </div>
                <div class="navbar__left__language">
                        <span class="navbar__left__currency--green responsivespan">Language</span>
                        <p class="navbar__left__language__selected">English</p>
                </div>
                <div class="navbar__left__buttons">
                        <button class="navbar__left__buttons--bgwhite btn">Login</button>
                        <button class="navbar__left__buttons--bggreen btn">Register</button>
                </div>
                <div id="dropLogBtn" class="if-logged ">
                    <div id="loggedContainer" class="loggedContainer">
                            <button class="logbutton btn">Login</button>
                            <button class="regbutton btn">Register</button>
                    </div>
                </div>
                <div id="responsivenavIcon" class="responsivenavIcon">
                        <p class="line"></p>
                        <p class="line"></p>
                        <p class="line"></p>
                </div>
            </div>
        </div>
    </div>
</div>

```


##### For Bottom nav
```html 
   <div id="bottomHeader" class="bottom-header">
        <div class="container">
            <div class="navbar">
                <div id="navbarMenu" class="navbar__menu">
                    <a class="navbar__menu__item active" href="#">Home</a>
                    <a class="navbar__menu__item" href="#">About</a>
                    <a class="navbar__menu__item" href="#">Guides & Drivers</a>
                    <a class="navbar__menu__item" href="#">Accomodation</a>
                    <a class="navbar__menu__item" href="#">Attractive Places</a>
                    <a class="navbar__menu__item" href="#">Offers</a>
                </div>

            </div>
        </div>
    </div>

```

## NOTE
For responsivity you must use 3 of them


# Driver Slider

```html
    <section id="swiper_most_popular_drivers">
        <!-- Most Popular Drivers -->
        <div class="container">
            <div class="swiper_most_popular_drivers_top">
                <h6>Most Popular Drivers</h6>
                <a href="">View all</a>
            </div>
            <div class="swiper_most_popular_drivers_bottom">
                <div class="swiper_most_popular_drivers_bottom_center">
                    <!-- Swiper most_popular_drivers -->
                    <div class="swiper-container">
                        <div class="swiper-wrapper">

                            <div class="swiper-slide">
                                <a href="driver_details.html">
                                    <div class="most_popular_drivers_bottom_item">
                                        <img class="driver-img" src="./img/swiper_most_popular_drivers/rectangle1.jpg" alt="">
                                        <p class="most_popular_drivers_name">Jana Strassmann</p>
                                        <div class="most_popular_drivers_bottom_item_ratings">
                                            <img src="./img/swiper_most_popular_drivers/star-copy.svg" alt="">
                                            <p>4.8</p>
                                            <span>(224 ratings)</span>
                                        </div>
                                        <p>Mercedes-Benz Vito</p>
                                        <div class="most_popular_drivers_bottom_item_rides">
                                            <p>198 rides</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="driver_details.html">
                                    <div class="most_popular_drivers_bottom_item">
                                        <img class="driver-img" src="./img/swiper_most_popular_drivers/rectangle2.jpg" alt="">
                                        <p class="most_popular_drivers_name">Dusana Semenov</p>
                                        <div class="most_popular_drivers_bottom_item_ratings">
                                            <img src="./img/swiper_most_popular_drivers/star-copy.svg" alt="">
                                            <p>4.8</p>
                                            <span>(224 ratings)</span>
                                        </div>
                                        <p>Hyundai H3</p>
                                        <div class="most_popular_drivers_bottom_item_rides">
                                            <p>134 rides</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="driver_details.html">
                                    <div class="most_popular_drivers_bottom_item">
                                        <img class="driver-img" src="./img/swiper_most_popular_drivers/rectangle3.jpg" alt="">
                                        <p class="most_popular_drivers_name">Qiu Xun</p>
                                        <div class="most_popular_drivers_bottom_item_ratings">
                                            <img src="./img/swiper_most_popular_drivers/star-copy.svg" alt="">
                                            <p>4.8</p>
                                            <span>(224 ratings)</span>
                                        </div>
                                        <p>Hyundai Elantra</p>
                                        <div class="most_popular_drivers_bottom_item_rides">
                                            <p>101 rides</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="driver_details.html">
                                    <div class="most_popular_drivers_bottom_item">
                                        <img class="driver-img" src="./img/swiper_most_popular_drivers/rectangle4.jpg" alt="">
                                        <p class="most_popular_drivers_name">Amelia Cabal</p>
                                        <div class="most_popular_drivers_bottom_item_ratings">
                                            <img src="./img/swiper_most_popular_drivers/star-copy.svg" alt="">
                                            <p>4.8</p>
                                            <span>(224 ratings)</span>
                                        </div>
                                        <p>Mercedes C350</p>
                                        <div class="most_popular_drivers_bottom_item_rides">
                                            <p>198 rides</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                        <!-- Add Arrows -->
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>

    </section>
```


# Partners 

```html 