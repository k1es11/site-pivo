<script setup> 
</script>

<template>
<div class='header'>
    <div class='bg-white w-4/5 m-auto h-screen rounded-xl shadow-xl mt-14'>
        <div class='header-line'>
            <div class='header-logo'>
                <img src="/logo2.png" alt="" width="150">
            </div>

            <div class='cart'>
                <a href="#">
                    <img class='cart-img' src="/beer.png" alt="" width="40">
                </a>
            </div>


            <div class='nav-item'>
                <a class='nav-item' href="@" >ГЛАВНАЯ</a>
                <a class='nav-item' href="@">УСЛУГИ</a>
                <a class='nav-item' href="@">ПИВНОЙ ЗООПАРК</a>
                <a class='nav-item' href="@">О НАС</a>
            </div>

                                                                                        
            <button class="btn1" @click="recommendBeer" >ПОДБОР ПИВА</button>

            <div class='left-text'>
                ХМЕЛЬ, СОЛОД <br> И ВСЁ ХОРОШЕЕ 
            </div>

        </div>
    </div>
</div>

<div class='pivo_right'>
                <a href="#">
                    <img class='pivo_right' src="/pivo_right_obr.png" alt="" width="200">
                </a>
</div>





<div class="cards">
  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное <br><br> Крепость - 5,2% <br><br>   Плотность - 11-14% <br> <br> Горечь - 23 IBU </span>
            
    </div>
    <div class="card__top">
        <a href="#" class="card__image">
            <img src="/oatmeal_stout1.avif" alt="Oatmeal Stout">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount">Oatmeal Stout</div>
            <div class="card__price card__price--common"> &nbsp 222₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Oatmeal Stout')" type="radio" id="star1-5" name="rating" value="5">
	        <label for="star1-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Oatmeal Stout')" type="radio" id="star1-4" name="rating" value="4">
	        <label for="star1-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Oatmeal Stout')" type="radio" id="star1-3" name="rating" value="3">
	        <label for="star1-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Oatmeal Stout')" type="radio" id="star1-2" name="rating" value="2">
	        <label for="star1-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Oatmeal Stout')" type="radio" id="star1-1" name="rating" value="1">
	        <label for="star1-1" title="Пролил бы на пол"></label>
        </div>

        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>

    </div>

  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное <br><br> Крепость - 4,8-6% <br><br>  Плотность - 1.050 <br> <br> Горечь - 20-30 IBU </span>
    </div>
    <div class="card__top">
    
        <a href="#" class="card__image">
            <img src="/rauchbier.png" alt="Rauchbier">
        </a>
    </div>

    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount">Rauchbier</div>
            <div class="card__price card__price--common"> &nbsp 189₽</div>
            
        </div>

        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Rauchbier')" type="radio" id="star2-5" name="r" value="5">
	        <label for="star2-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Rauchbier')" type="radio" id="star2-4" name="r" value="4">
	        <label for="star2-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Rauchbier')" type="radio" id="star2-3" name="r" value="3">
	        <label for="star2-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Rauchbier')" type="radio" id="star2-2" name="r" value="2">
	        <label for="star2-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Rauchbier')" type="radio" id="star2-1" name="r" value="1">
	        <label for="star2-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


 <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное <br><br> Крепость - 4,8-6,5% <br><br>  Плотность - 1.050 <br> <br> Горечь - 25-50 IBU </span>
    </div>
    <div class="card__top">
        <a href="#" class="card__image">
            <img src="/american_porter.png" alt="American Porterr">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount">American Porter</div>
            <div class="card__price card__price--common"> &nbsp 209₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Porter')" type="radio" id="star3-5" name="ra" value="5">
	        <label for="star3-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Porter')" type="radio" id="star3-4" name="ra" value="4">
	        <label for="star3-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Porter')" type="radio" id="star3-3" name="ra" value="3">
	        <label for="star3-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Porter')" type="radio" id="star3-2" name="ra" value="2">
	        <label for="star3-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Porter')" type="radio" id="star3-1" name="ra" value="1">
	        <label for="star3-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное/светлое <br><br> Крепость - 5,5-7,5% <br><br>  Плотность - 1.056 <br> <br> Горечь - 40-70 IBU </span>
    </div>
    <div class="card__top">
        <a href="#" class="card__image">
            <img src="/american_IPA.png" alt="American IPA">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount">American IPA</div>
            <div class="card__price card__price--common"> &nbsp 250₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American IPA')" type="radio" id="star4-5" name="ip" value="5">
	        <label for="star4-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American IPA')" type="radio" id="star4-4" name="ip" value="4">
	        <label for="star4-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American IPA')" type="radio" id="star4-3" name="ip" value="3">
	        <label for="star4-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American IPA')" type="radio" id="star4-2" name="ip" value="2">
	        <label for="star4-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American IPA')" type="radio" id="star4-1" name="ip" value="1">
	        <label for="star4-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное <br><br> Крепость - 5-7% <br><br>  Плотность - 1.050 <br> <br> Горечь - 35-75 IBU </span>
    </div>
    <div class="card__top">
        <a href="#" class="card__image">
            <img src="/american_stout.png" alt="American Stout">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> American Stout</div>
            <div class="card__price card__price--common"> &nbsp 230₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Stout')" type="radio" id="star5-5" name="am" value="5">
	        <label for="star5-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Stout')" type="radio" id="star5-4" name="am" value="4">
	        <label for="star5-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Stout')" type="radio" id="star5-3" name="am" value="3">
	        <label for="star5-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Stout')" type="radio" id="star5-2" name="am" value="2">
	        <label for="star5-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Stout')" type="radio" id="star5-1" name="am" value="1">
	        <label for="star5-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное <br><br> Крепость - 6,3-10% <br><br>  Плотность - 1.062 <br> <br> Горечь - 50-100 IBU </span>
    </div>
    <div class="card__top">
        <a href="#" class="card__image">
            <img src="/american_strong_ale.png" alt="American Strong Ale">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> American Strong Ale</div>
            <div class="card__price card__price--common"> &nbsp 190₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Strong Ale')" type="radio" id="star6-5" name="st" value="5">
	        <label for="star6-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Strong Ale')" type="radio" id="star6-4" name="st" value="4">
	        <label for="star6-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Strong Ale')" type="radio" id="star6-3" name="st" value="3">
	        <label for="star6-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Strong Ale')" type="radio" id="star6-2" name="st" value="2">
	        <label for="star6-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Strong Ale')" type="radio" id="star6-1" name="st" value="1">
	        <label for="star6-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - светлое <br><br> Крепость - 4,8-5,5% <br><br>  Плотность - 1.048 <br> <br> Горечь - 20-30 IBU </span>
    </div>
    <div class="card__top">
        <a href="#" class="card__image">
            <img src="/belgian_pale_ale.png" alt="Belgain Pale Ale">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Belgain Pale Ale</div>
            <div class="card__price card__price--common"> &nbsp 154₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Belgain Pale Ale')" type="radio" id="star7-5" name="be" value="5">
	        <label for="star7-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Belgain Pale Ale')" type="radio" id="star7-4" name="be" value="4">
	        <label for="star7-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Belgain Pale Ale')" type="radio" id="star7-3" name="be" value="3">
	        <label for="star7-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Belgain Pale Ale')" type="radio" id="star7-2" name="be" value="2">
	        <label for="star7-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Belgain Pale Ale')" type="radio" id="star7-1" name="be" value="1">
	        <label for="star7-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное <br><br> Крепость - 4,0-5,4% <br><br>  Плотность - 1.040 <br> <br> Горечь - 18-35 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/english_porter.avif" alt="English Porter">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> English Porter</div>
            <div class="card__price card__price--common"> &nbsp 129₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'English Porter')" type="radio" id="star8-5" name="en" value="5">
	        <label for="star8-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'English Porter')" type="radio" id="star8-4" name="en" value="4">
	        <label for="star8-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'English Porter')" type="radio" id="star8-3" name="en" value="3">
	        <label for="star8-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'English Porter')" type="radio" id="star8-2" name="en" value="2">
	        <label for="star8-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'English Porter')" type="radio" id="star8-1" name="en" value="1">
	        <label for="star8-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное <br><br> Крепость - 8,0-12,0% <br><br>  Плотность - 1.080 <br> <br> Горечь - 50-100 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/american_barleywine.jpg" alt="American Barleywine">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> American Barleywine</div>
            <div class="card__price card__price--common"> &nbsp 300₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Barleywine')" type="radio" id="star9-5" name="ba" value="5">
	        <label for="star9-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Barleywine')" type="radio" id="star9-4" name="ba" value="4">
	        <label for="star9-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Barleywine')" type="radio" id="star9-3" name="ba" value="3">
	        <label for="star9-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Barleywine')" type="radio" id="star9-2" name="ba" value="2">
	        <label for="star9-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Barleywine')" type="radio" id="star9-1" name="ba" value="1">
	        <label for="star9-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное/светлое <br><br> Крепость - 7,0-10,0% <br><br>  Плотность - 1.072 <br> <br> Горечь - 16-26 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/doppelbock.png" alt="Doppelbock">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Doppelbock</div>
            <div class="card__price card__price--common"> &nbsp 390₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Doppelbock')" type="radio" id="star10-5" name="do" value="5">
	        <label for="star10-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Doppelbock')" type="radio" id="star10-4" name="do" value="4">
	        <label for="star10-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Doppelbock')" type="radio" id="star10-3" name="do" value="3">
	        <label for="star10-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Doppelbock')" type="radio" id="star10-2" name="do" value="2">
	        <label for="star10-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Doppelbock')" type="radio" id="star10-1" name="do" value="1">
	        <label for="star10-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное/светлое <br><br> Крепость - 6,5-9,0% <br><br>  Плотность - 1.064 <br> <br> Горечь - 15-30 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/weizenbock.png" alt="Weizenbock">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Weizenbock</div>
            <div class="card__price card__price--common"> &nbsp 310₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Weizenbock')" type="radio" id="star11-5" name="wei" value="5">
	        <label for="star11-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Weizenbock')" type="radio" id="star11-4" name="wei" value="4">
	        <label for="star11-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Weizenbock')" type="radio" id="star11-3" name="wei" value="3">
	        <label for="star11-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Weizenbock')" type="radio" id="star11-2" name="wei" value="2">
	        <label for="star11-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Weizenbock')" type="radio" id="star11-1" name="wei" value="1">
	        <label for="star11-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное/светлое <br><br> Крепость - 4,3-5,5% <br><br>  Плотность - 1.044 <br> <br> Горечь - 25-50 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/altbier.png" alt="Altbier">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Altbier</div>
            <div class="card__price card__price--common"> &nbsp 172₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Altbier')" type="radio" id="star12-5" name="alt" value="5">
	        <label for="star12-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Altbier')" type="radio" id="star12-4" name="alt" value="4">
	        <label for="star12-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Altbier')" type="radio" id="star12-3" name="alt" value="3">
	        <label for="star12-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Altbier')" type="radio" id="star12-2" name="alt" value="2">
	        <label for="star12-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Altbier')" type="radio" id="star12-1" name="alt" value="1">
	        <label for="star12-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - светлое <br><br> Крепость - 4,4-5,2% <br><br>  Плотность - 1.044 <br> <br> Горечь - 18-30 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/kölsch.png" alt="Kölsch">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Kölsch</div>
            <div class="card__price card__price--common"> &nbsp 238₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Kölsch')" type="radio" id="star13-5" name="ko" value="5">
	        <label for="star13-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Kölsch')" type="radio" id="star13-4" name="ko" value="4">
	        <label for="star13-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Kölsch')" type="radio" id="star13-3" name="ko" value="3">
	        <label for="star13-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Kölsch')" type="radio" id="star13-2" name="ko" value="2">
	        <label for="star13-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Kölsch')" type="radio" id="star13-1" name="ko" value="1">
	        <label for="star13-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное <br><br> Крепость - 4,4-5,4% <br><br>  Плотность - 1.046 <br> <br> Горечь - 20-30 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/schwarzbier.png" alt="Schwarzbier">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Schwarzbier</div>
            <div class="card__price card__price--common"> &nbsp 179₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Schwarzbier')" type="radio" id="star14-5" name="sc" value="5">
	        <label for="star14-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Schwarzbier')" type="radio" id="star14-4" name="sc" value="4">
	        <label for="star14-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Schwarzbier')" type="radio" id="star14-3" name="sc" value="3">
	        <label for="star14-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Schwarzbier')" type="radio" id="star14-2" name="sc" value="2">
	        <label for="star14-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Schwarzbier')" type="radio" id="star14-1" name="sc" value="1">
	        <label for="star14-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - светлое <br><br> Крепость - 4,7-5,5% <br><br>  Плотность - 1.048 <br> <br> Горечь - 18-30 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/vienna_lager.png" alt="Vienna Lager">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Vienna Lager</div>
            <div class="card__price card__price--common"> &nbsp 244₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Vienna Lager')" type="radio" id="star15-5" name="vi" value="5">
	        <label for="star15-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Vienna Lager')" type="radio" id="star15-4" name="vi" value="4">
	        <label for="star15-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Vienna Lager')" type="radio" id="star15-3" name="vi" value="3">
	        <label for="star15-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Vienna Lager')" type="radio" id="star15-2" name="vi" value="2">
	        <label for="star15-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Vienna Lager')" type="radio" id="star15-1" name="vi" value="1">
	        <label for="star15-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - светлое <br><br> Крепость - 4,5-5,5% <br><br>  Плотность - 1.044 <br> <br> Горечь - 8-20 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/witbier.png" alt="Witbier">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Witbier</div>
            <div class="card__price card__price--common"> &nbsp 160₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Witbier')" type="radio" id="star16-5" name="wit" value="5">
	        <label for="star16-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Witbier')" type="radio" id="star16-4" name="wit" value="4">
	        <label for="tar16-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Witbier')" type="radio" id="star16-3" name="wit" value="3">
	        <label for="star16-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Witbier')" type="radio" id="star16-2" name="wit" value="2">
	        <label for="star16-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Witbier')" type="radio" id="star16-1" name="wit" value="1">
	        <label for="star16-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - светлое <br><br> Крепость - 8,0-12,0% <br><br>  Плотность - 1.080 <br> <br> Горечь - 35-70 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/english_barleywine.png" alt="English Barleywine">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount">English Barleywine</div>
            <div class="card__price card__price--common"> &nbsp 557₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Witbier')" type="radio" id="star17-5" name="wit" value="5">
	        <label for="star17-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Witbier')" type="radio" id="star17-4" name="wit" value="4">
	        <label for="star17-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Witbier')" type="radio" id="star17-3" name="wit" value="3">
	        <label for="star17-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Witbier')" type="radio" id="star17-2" name="wit" value="2">
	        <label for="star17-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Witbier')" type="radio" id="star17-1" name="wit" value="1">
	        <label for="star17-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное <br><br> Крепость - 4,3-6,2% <br><br>  Плотность - 1.045 <br> <br> Горечь - 20-30 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/american_brown_ale.png" alt="American Brown Ale">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> American Brown Ale</div>
            <div class="card__price card__price--common"> &nbsp 219₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Brown Ale')" type="radio" id="star18-5" name="brw" value="5">
	        <label for="star18-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Brown Ale')" type="radio" id="star18-4" name="brw" value="4">
	        <label for="star18-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Brown Ale')" type="radio" id="star18-3" name="brw" value="3">
	        <label for="star18-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Brown Ale')" type="radio" id="star18-2" name="brw" value="2">
	        <label for="star18-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'American Brown Ale')" type="radio" id="star18-1" name="brw" value="1">
	        <label for="star18-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное <br><br> Крепость - 4,8-6,6% <br><br>  Плотность - 1.044 <br> <br> Горечь - 5-18 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/flanders_red_ale.png" alt="Flanders Red Ale">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Flanders Red Ale</div>
            <div class="card__price card__price--common"> &nbsp 380₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Flanders Red Ale')" type="radio" id="star19-5" name="fla" value="5">
	        <label for="star19-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Flanders Red Ale')" type="radio" id="star19-4" name="fla" value="4">
	        <label for="star19-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Flanders Red Ale')" type="radio" id="star19-3" name="fla" value="3">
	        <label for="star19-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Flanders Red Ale')" type="radio" id="star19-2" name="fla" value="2">
	        <label for="star19-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Flanders Red Ale')" type="radio" id="star19-1" name="fla" value="1">
	        <label for="star19-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное/светлое <br><br> Крепость - 4,5-6,0% <br><br>  Плотность - 1.046 <br> <br> Горечь - 10-20 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/roggenbier.png" alt="Roggenbier">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Roggenbier</div>
            <div class="card__price card__price--common"> &nbsp 290₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Roggenbier')" type="radio" id="star20-5" name="rog" value="5">
	        <label for="star20-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Roggenbier')" type="radio" id="star20-4" name="rog" value="4">
	        <label for="star20-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Roggenbier')" type="radio" id="star20-3" name="rog" value="3">
	        <label for="star20-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Roggenbier')" type="radio" id="star20-2" name="rog" value="2">
	        <label for="star20-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Roggenbier')" type="radio" id="star20-1" name="rog" value="1">
	        <label for="star20-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное/светлое <br><br> Крепость - 6,0-8,5% <br><br>  Плотность - 1.060 <br> <br> Горечь - 18-28 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/bière_de_garde.png" alt="Bière de Garde">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Bière de Garde</div>
            <div class="card__price card__price--common"> &nbsp 299₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Bière de Garde')" type="radio" id="star21-5" name="Bi" value="5">
	        <label for="star21-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Bière de Garde')" type="radio" id="star21-4" name="Bi" value="4">
	        <label for="star21-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Bière de Garde')" type="radio" id="star21-3" name="Bi" value="3">
	        <label for="star21-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Bière de Garde')" type="radio" id="star21-2" name="Bi" value="2">
	        <label for="star21-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Bière de Garde')" type="radio" id="star21-1" name="Bi" value="1">
	        <label for="star21-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное <br><br> Крепость - 3,8-5,0% <br><br>  Плотность - 1.036 <br> <br> Горечь - 18-28 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/irish_red_ale.png" alt="Irish Red Ale">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Irish Red Ale</div>
            <div class="card__price card__price--common"> &nbsp 145₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Irish Red Ale')" type="radio" id="star22-5" name="ir" value="5">
	        <label for="star22-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Irish Red Ale')" type="radio" id="star22-4" name="ir" value="4">
	        <label for="star22-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Irish Red Ale')" type="radio" id="star22-3" name="ir" value="3">
	        <label for="star22-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Irish Red Ale')" type="radio" id="star22-2" name="ir" value="2">
	        <label for="star22-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Irish Red Ale')" type="radio" id="star22-1" name="ir" value="1">
	        <label for="star22-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - светлое <br><br> Крепость - 4,2-5,6% <br><br>  Плотность - 1.042 <br> <br> Горечь - 8-20 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/cream_ale.png" alt="Cream Ale">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Cream Ale</div>
            <div class="card__price card__price--common"> &nbsp 202₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Cream Ale')" type="radio" id="star23-5" name="cre" value="5">
	        <label for="star23-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Cream Ale')" type="radio" id="star23-4" name="cre" value="4">
	        <label for="star23-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Cream Ale')" type="radio" id="star23-3" name="cre" value="3">
	        <label for="star23-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Cream Ale')" type="radio" id="star23-2" name="cre" value="2">
	        <label for="star23-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Cream Ale')" type="radio" id="star23-1" name="cre" value="1">
	        <label for="star23-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное <br><br> Крепость - 8,0-12,0% <br><br>  Плотность - 1.080 <br> <br> Горечь - 30-60 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/wheatwine.png" alt="Wheatwine">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Wheatwine</div>
            <div class="card__price card__price--common"> &nbsp 205₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Wheatwine')" type="radio" id="star24-5" name="wh" value="5">
	        <label for="star24-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Wheatwine')" type="radio" id="star24-4" name="wh" value="4">
	        <label for="star24-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Wheatwine')" type="radio" id="star24-3" name="wh" value="3">
	        <label for="star24-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Wheatwine')" type="radio" id="star24-2" name="wh" value="2">
	        <label for="star24-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Wheatwine')" type="radio" id="star24-1" name="wh" value="1">
	        <label for="star24-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное <br><br> Крепость - 6,5-9,5% <br><br>  Плотность - 1.060 <br> <br> Горечь - 20-40 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/baltic_porter.png" alt="Baltic Porter">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Baltic Porter</div>
            <div class="card__price card__price--common"> &nbsp 175₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Baltic Porter')" type="radio" id="star25-5" name="bal" value="5">
	        <label for="star25-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Baltic Porter')" type="radio" id="star25-4" name="bal" value="4">
	        <label for="star25-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Baltic Porter')" type="radio" id="star25-3" name="bal" value="3">
	        <label for="star25-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Baltic Porter')" type="radio" id="star25-2" name="bal" value="2">
	        <label for="star25-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Baltic Porter')" type="radio" id="star25-1" name="bal" value="1">
	        <label for="star25-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>


  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное <br><br> Крепость - 5,5-9,0% <br><br>  Плотность - 1.055 <br> <br> Горечь - 30-60 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/old_ale.png" alt="Old Ale">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Old Ale</div>
            <div class="card__price card__price--common"> &nbsp 159₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Old Ale')" type="radio" id="star26-5" name="ol" value="5">
	        <label for="star26-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Old Ale')" type="radio" id="star26-4" name="ol" value="4">
	        <label for="star26-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Old Ale')" type="radio" id="star26-3" name="ol" value="3">
	        <label for="star26-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Old Ale')" type="radio" id="star26-2" name="ol" value="2">
	        <label for="star26-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Old Ale')" type="radio" id="star26-1" name="ol" value="1">
	        <label for="star26-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>

  <div class="card">
    <div class="tooltip"> 
            <img src="/info3.png" alt="" width="35">

            <span class="tooltiptext">Пиво - тёмное <br><br> Крепость - 9,0-14,0% <br><br>  Плотность - 1.078 <br> <br> Горечь - 25-35 IBU </span>
    </div>
 <div class="card__top">
        <a href="#" class="card__image">
            <img src="/eisbock.png" alt="Eisbock">
        </a>
    </div>
    <div class="card__bottom">
        <div class="card__prices">

            <div class="card__price card__price--discount"> Eisbock</div>
            <div class="card__price card__price--common"> &nbsp 199₽</div>
            
        </div>
        <div class="rating-area">
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Eisbock ')" type="radio" id="star27-5" name="eis" value="5">
	        <label for="star27-5" title="Шедевр пивоварения"></label>	
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Eisbock ')" type="radio" id="star27-4" name="eis" value="4">
	        <label for="star27-4" title="Вполне сгодится"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Eisbock ')" type="radio" id="star27-3" name="eis" value="3">
	        <label for="star27-3" title="Ни рыба, ни мясо"></label>  
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Eisbock ')" type="radio" id="star27-2" name="eis" value="2">
	        <label for="star27-2" title="Пиво для врагов"></label>    
	        <input v-bind:value="beerRating" @change="updateRating($event, 'Eisbock ')" type="radio" id="star27-1" name="eis" value="1">
	        <label for="star27-1" title="Пролил бы на пол"></label>
        </div>
        <a href="#" class="card__title">

        </a>
        <button class="card__add">В фавориты</button>
    </div>
  </div>
</div>

<div class="recommendation">
  <div v-for="(recommendation, index) in recommendations" :key="index">
    <span><em> Style: </em> {{ recommendation[0] }}</span>, <em> Predicted Rating: </em> {{ recommendation[1].toFixed(2) }}
  </div>
</div>

</template>



<script>

import {Recommender} from "../recommendation_algorithm.js";
import Papa from 'papaparse';

  export default {
    data () {
      return {
        userRatings: {},
        recommendations: [],
        beerStyle: '',
        beerRating: '',
      }
    },
    methods: {
      updateRating(event, style) {
        this.beerRating = parseInt(event.target.id.split('-')[1])
        this.beerStyle = style
        this.userRatings[this.beerStyle] = this.beerRating
        console.log(this.userRatings)
      },
      parseCSV(fileContent) {
        const results = Papa.parse(fileContent, {
          header: true,
          dynamicTyping: true
        });
        return results.data;
      },
      processUserData(data) {
        const user_data = {};

        data.forEach(row => {
          const user = row['review_profilename'];
          const beer_style = row['Styles'];
          const rating = parseFloat(row['review_overall']);
          if (!user_data[user]) {
            user_data[user] = {};
          }
          user_data[user][beer_style] = rating;
        });

        return user_data;
      },
      recommendBeer() {
        const filePath = './src/result.csv';
        fetch(filePath)
            .then(response => response.text())
            .then(fileContent => {
              const data = this.parseCSV(fileContent);
              const user_data = this.processUserData(data);

              const recommender = new Recommender(user_data);
              recommender.computeDeviation();

              const userRatings = this.userRatings;
              this.recommendations = recommender.predictRating(userRatings, 27);
            })
            .catch(error => console.error('Error fetching file:', error));
        console.log(this.recommendations)
      }
    }
  }

</script>