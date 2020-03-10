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