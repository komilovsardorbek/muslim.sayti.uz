<?php

use afzalroq\cms\entities\front\Items;
use afzalroq\cms\entities\front\Menu;
use frontend\widgets\LanguagesWidget;
use yii\helpers\Url;

$menuTree = Menu::getMenu('main');
?>
<div class="off_canvars_overlay">
</div>
<div class="offcanvas_menu">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="offcanvas_menu_wrapper">
                    <div class="canvas_close">
                        <a href="javascript:void(0)"><i class="fa fa-times"></i></a>
                    </div>
                    <div id="menu" class="text-left ">
                        <ul class="offcanvas_main_menu">
                            <li class="menu-item-has-children active">
                                <a href="/c/iyman"><img class="header_button_svg" src="/img/imgmobile/iymonmobile.svg" alt=""><?= Yii::t('app','Iman') ?></a>
                            </li>
                            <li class="menu-item-has-children active">
                                <a href="/c/prayer"><img class="header_button_svg" src="/img/imgmobile/namozmobile.svg" alt=""><?= Yii::t('app','Prayer') ?></a>

                            </li>
                            <li class="menu-item-has-children active">
                                <a href="/c/fasting"><img class="header_button_svg" src="/img/imgmobile/rozamobile.svg" alt=""><?= Yii::t('app','Fasting') ?></a>
                            </li>
                            <li class="menu-item-has-children active">
                                <a href="/c/zakot"><img class="header_button_svg" src="/img/imgmobile/zakotmobile.svg" alt=""><?= Yii::t('app','Zakot') ?></a>
                            </li>
                            <li class="menu-item-has-children active">
                                <a href="/c/haj"><img class="header_button_svg" src="/img/imgmobile/hajmobile.svg" alt=""><?= Yii::t('app','Haj') ?></a>
                            </li>
                            <li class="menu-item-has-children active">
                                <a href="/c/quran"><img class="header_button_svg" src="/img/imgmobile/quronmobile.svg" alt=""><?= Yii::t('app','Qur`an') ?></a>
                            </li>
                            <li class="menu-item-has-children active">
                                <a href="#"><i class="fas fa-glasses"></i> <?= Yii::t('app','Special facilities') ?></a>
                            </li>
                        </ul>
                    </div>
                    <div class="offcanvas_footer">
                        <div class="header_button_social_mobile">
                            <div class="media-buttons">
                                <a data-toggle="modal" data-target="#exampleModal" class="media-buttons__item ">
                                    <i class="far fa-play-circle"></i>
                                    <span> Radio </span>
                                </a>
                                <a data-toggle="modal" data-target="#exampleModal" class="media-buttons__item ">
                                    <i class="fas fa-tv"></i>
                                    <span> TV </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
     aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                    <div class="new-muslim-title">Muslim<span class="new-TV">TV</span></div>
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="new_wrapper">Tez kunda Muslim<span style="color: red">Tv</span>...</div>
            </div>
        </div>
    </div>
</div>
<header>
    <div class="header_test">
        <div class="container">
                <div class="old-site-wrapper">
                    <div class="site_test-inner"><?= Yii::t('app', 'The site is working in test mode!') ?></div>
                    <div class="location">
                        <div class="">
                            <div class="select">
                                <i class="icons_location fas fa-map-marker-alt"></i>
                                <a id="select" href="#">Hududni aniqlang</a>
                            </div>
                        </div>
                        <div class="old-site">
                            <a href="http://muslim.uz/">old.muslim.uz</a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <div class="header_top">
        <div class="header_top-inner">
            <div class="container">
                <div class="header-black">
                    <div class="header-black_inner icons_header"><img class="images_audio" src="/img/Vector.svg" alt="">
                        <?= Yii::t('app','There are <span id="{days}"></span> left until dawn') ?>
                        <div class="azzaner_intro">
                            <div class="azzaner">
                                <img class="azzaner_img" src="/img/shayx11.jpg" alt="">
                                <div class="azanner_card">
                                    <div class="azanner_name">
                                        Sardorbek Komilov
                                    </div>
                                    <div class="azanner_location">
                                        Toshkent Shahar Chilonzor
                                    </div>
                                    <div class="azanner-item" id="azanner1">
                                        <div class="select-btn">Выбрать</div>
                                        <div style="display: none" class="pause-btn">Пауза</div>
                                        <span class="active-btn">Выбранный</span>
                                        <div class="mute-btn">Отключить</div>
                                        <audio  style="display: none" class="audio-player" controls="" preload="none" data-file="tere-liye-unplugged-waprex-com-1-16537-54686">
                                            <source src="../media/Mishari.mp3"
                                                    type="audio/mpeg">
                                            <source src="../media/Mishari.mp3"
                                                    type="audio/ogg">
                                            Your browser does not support the <code>audio</code> element.
                                        </audio>
                                    </div>
                                </div>
                            </div>
                            <div class="azzaner">
                                <img  class="azzaner_img" src="/img/shayx11.jpg" alt="">
                                <div class="azanner_card">
                                    <div class="azanner_name">
                                        Sardorbek Komilov
                                    </div>
                                    <div class="azanner_location">
                                        Toshkent Shahar Chilonzor
                                    </div>
                                    <div class="azanner-item" id="azanner2">
                                        <div class="select-btn">Выбрать</div>
                                        <span class="active-btn">Выбранный</span>
                                        <div style="display: none" class="pause-btn">Пауза</div>
                                        <div class="mute-btn">Отключить</div>
                                        <audio style="display: none" class="audio-player" controls="" preload="none" data-file="2019-09-27-06-58-46-54685">
                                            <source src="../media/azon.mp3"
                                                    type="audio/mpeg">
                                            <source src="../media/azon.mp3"
                                                    type="audio/ogg">
                                            Your browser does not support the <code>audio</code> element.
                                        </audio>
                                    </div>
                                </div>
                            </div>
                            <div class="azzaner">
                                <img  class="azzaner_img" src="/img/shayx11.jpg" alt="">
                                <div class="azanner_card">
                                    <div class="azanner_name">
                                        Sardorbek Komilov
                                    </div>
                                    <div class="azanner_location">
                                        Toshkent Shahar Chilonzor
                                    </div>
                                    <div class="azanner-item" id="azanner3">
                                        <div class="select-btn">Выбрать</div>
                                        <span class="active-btn">Выбранный</span>
                                        <div style="display: none" class="pause-btn">Пауза</div>
                                        <div class="mute-btn">Отключить</div>
                                        <audio style="display: none" class="audio-player" controls="" preload="none" data-file="tere-liye-unplugged-waprex-com-1-16537-54686">
                                            <source src="../media/azon.mp3"
                                                    type="audio/mpeg">
                                            <source src="../media/azon.mp3"
                                                    type="audio/ogg">
                                            Your browser does not support the <code>audio</code> element.
                                        </audio>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div><span><a class="muxarram" href="#">Muxarram, 1442</a></span></div>
                    <div><a class="month_day" href="#"><?= Yii::$app->formatter->asDateTime(time(), 'dd-MM-yyyy') ?></a></div>

                    <div id="section2">
                        <div class="col-middle specialFeatured">
                            <a href="#" class="specialFeaturedBtn"><span><img src="/img/glasses.svg" alt=""></span> <?= Yii::t('app', 'Special facilities') ?>
                            </a>
                            <div class="specialFeaturedBlock">
                                <div class="specialFeaturedBlockWraps">
                                    <span>Ko'rinish:</span>
                                    <div class="typeView">
                                        <a href="javascript:void(0);" class="default">A</a>
                                        <a href="javascript:void(0);" class="blackWhite">A</a>
                                    </div>
                                    <span><?= Yii::t('app', 'Font size:') ?></span>
                                    <div class="typeSizeFonts">
                                        <ul>
                                            <li class="inc1">
                                                <input type="radio" id="inc1" name="selector">
                                                <label for="inc1">A</label>
                                                <div class="check"></div>
                                            </li>
                                            <li class="inc2">
                                                <input type="radio" id="inc2" name="selector">
                                                <label for="inc2">A</label>
                                                <div class="check"></div>
                                            </li>
                                            <li class="inc3">
                                                <input type="radio" id="inc3" name="selector">
                                                <label for="inc3">A</label>
                                                <div class="check"></div>
                                            </li>
                                            <li class="inc4">
                                                <input type="radio" id="inc4" name="selector">
                                                <label for="inc4">A</label>
                                                <div class="check"></div>
                                            </li>
                                            <li class="inc5">
                                                <input type="radio" id="inc5" name="selector">
                                                <label for="inc5">A</label>
                                                <div class="check"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="input_text">
                            <form action="<?= Url::to(['search/index']) ?>" method="get">
                                <input onclick="inputFunction()" id="input_text-inner" class="input_text-inner"
                                       type="text" placeholder="<?= Yii::t('app', 'Search') ?>" aria-label="Search"
                                       name="q">
                                <img class="search_input" src="/img/search.svg" alt="">
                            </form>
                        </div>
                        <div class="box">
                            <button type="button"><i class="box-input fas fa-sort-down"></i></button>
                            <select class="box_input" name="forma" onchange="location = this.value;">
                                <option value=""><?= \Yii::$app->params['cms']['languages'][\Yii::$app->params['l'][\Yii::$app->language]] ?> </option>
                                <?= LanguagesWidget::widget() ?>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header_center ">
        <div class="header_center-inner ">
            <div class="container ">
                <div class="header_intro">
                    <div class="image_logo">
                        <a href="/">
                            <img src="/img/logo.svg" alt="#logo">
                        </a>
                    </div>
                    <div id="prayer">
                    </div>
                    <div class="image-center_Bismillah"><img style="width:100%;" src="/images/basmala.png"
                                                             alt="#Bismillah"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="header_button">
        <div class="container">
            <div class="header_bottom-inner">
                <div class="header_bar toggle-btn canvas_open">
                    <i class="fas fa-bars"></i>
                </div>
                <div class="logo">
                    <a href="/">
                        <img src="/img/logo.svg" alt="#logo">
                    </a>
                </div>
                <div class="header_search">
                    <img src="/img/search.svg" alt="#search">
                </div>
                <div class="header_destob-botttom">
                    <ul>
                        <li><a href="/c/iyman"><img class="header_button_svg" src="/img/iymon.svg" alt=""><?= Yii::t('app','Iman') ?></a></li>
                        <li><a href="/c/prayer"><img class="header_button_svg" src="/img/namoz.svg" alt=""><?= Yii::t('app','Prayer') ?></a></li>
                        <li><a href="/c/fasting"><img class="header_button_svg" src="/img/roza.svg" alt=""><?= Yii::t('app','Fasting') ?></a></li>
                        <li><a href="/c/zakot"><img class="header_button_svg" src="/img/zakot.svg" alt=""><?= Yii::t('app','Zakat') ?></a></li>
                        <li><a href="/c/haj"><img class="header_button_svg" src="/img/haj.svg" alt=""><?= Yii::t('app','Haj') ?></a></li>
                        <li><a href="/c/quran"><img class="header_button_svg" src="/img/quron.svg" alt=""><?= Yii::t('app','Qur`an') ?></a></li>
                        <li><a href="/c/lessons"><img class="header_button_svg" src="/img/dars.svg" alt=""><?= Yii::t('app','Lessons') ?></a></li>
                        <li><a href="/site/contacts"><img class="header_button_svg" src="/img/call.svg" alt=""><?= Yii::t('app','Contact') ?></a></li>
                    </ul>
                </div>

                <div class="header_button_social">
                    <div class="media-buttons">
                        <a data-toggle="modal" data-target="#exampleModal" class="media-buttons__item ">
                            <i class="far fa-play-circle"></i>
                            <span> <?= Yii::t('app','Radio') ?> </span>
                        </a>
                        <a data-toggle="modal" data-target="#exampleModal" class="media-buttons__item ">
                            <i class="fas fa-tv"></i>
                            <span> <?= Yii::t('app','TV') ?>  </span>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    </div>
    <!-- Header mobile************************************** -->
    <div class="header_mobile-top">
        <div id="accordion1">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <div class="namaz_wrapper" data-toggle="collapse" data-target="#collapseOne"
                             aria-expanded="true" aria-controls="collapseOne">
                            <div class="namaz_name">
                                Namoz vaqti
                               <span class="namoz-mobile-icons"><i class="fas fa-sort-down"></i></span>
                            </div>
                            <div class="namaz_name">
                                Hijriy oy
                            </div>
                            <div class="namaz_name" >
                                Toshkent
                                <span class="namoz-mobile-icons"><i class="fas fa-sort-down"></i></span>
                            </div>
                        </div>
                    </h5>
                </div>
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion1">
                    <div class="card-body image_card" id="card_image">
                        <div class="namaz-nav-bar-mobile__footer">
                            <div class="namaz-nav-bar-mobile__footer-top">
                                <div class="namaz-nav-bar-mobile__date"> <?= Yii::$app->formatter->asDateTime(time(), 'php:j F , Y') ?></div>
                                <a href="" class="namaz-nav-bar-mobile__link">5 Muxarram, 1442</a>
                            </div>
                            <div id="mobilenamaz">
                                <div class="suxurmobile">Suxur*</div>
                                <div class="makruxmobile">Makrux*</div>
                                <div class="iftormobile">Iftor*</div>
                                <div class="taxadjudmobile">Taxadjud*</div>
                            </div>

                            <div class="namaz-nav-bar-mobile__qibla-block">
                                <div class="image-center_Bismillah"><img src="/img/basmala.png"
                                                                         alt="#Bismillah"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
</header>
