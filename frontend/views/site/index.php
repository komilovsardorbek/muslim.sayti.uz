<?php

use ereminmdev\yii2\infinite_scroll\InfiniteScroll;
use nirvana\infinitescroll\InfiniteScrollPager;
use yii\helpers\StringHelper;
use yii\widgets\ListView;

//dd($sliderItems);
//dd($banners);
//dd($news);
//dd($banners);
//dd($articles);
?>
<section class="slider_top">
    <div class="slider_top-inner">
        <div class="container">
            <div class="row slider-pub">
                <div class="slider_menu col-lg-8">
                    <div id="carouselExampleIndicators" class="carousel slide align-items-center" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <?php  foreach ($sliderItems as $key => $item) :?>
                            <li data-target="#carouselExampleIndicators" data-slide-to="<?= $key ?>" class="<?php if ($key === 0) echo 'active' ?>"></li>
                            <?php endforeach; ?>
                        </ol>
                        <div class="carousel-inner">
                            <?php foreach ($sliderItems as $i => $item) : $i++; ?>
                                <div class="carousel-item <?php if ($i == 1) echo 'active' ?>">
                                    <a href="<?= $item->link ?>">
                                        <img class="d-block w-100"
                                             src="<?= $item->getGalleryPhoto('730', '462', 'zoomCrop', 'transparent', 'center', 'center'); ?>" alt="First slide">
                                    </a>
                                    <div class="black-title">
                                        <?= StringHelper::truncate(strip_tags($item->getText1()), 200, '...') ?>
                                    </div>
                                    <button class="sub-title">Maqolalar<span
                                                class="sup_title"><?= Yii::$app->formatter->asDateTime($item->getDate(), 'php:G:i / d.m.Y') ?></span>
                                    </button>
                                </div>
                            <?php endforeach; ?>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                           data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only"> <?= Yii::t('app', 'Previous') ?></span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                           data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only"><?= Yii::t('app', 'Next') ?></span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4  header_slider-s">
                    <div class="card-image">
                        <div class="card_inner ">
                            <?php foreach ($news as $item) : ?>
                                <div id="card_top" class="card twocard ">
                                    <div class="card-horizontal ">
                                        <div class="img-square-wrapper">
                                            <a href="<?= $item->link ?>">
                                                <img class="card-photo" src="<?= $item->getGalleryPhoto('139', '84', 'zoomCrop', 'transparent', 'center', 'center') ?>" alt="ge cap">
                                            </a>
                                        </div>
                                        <div class="card-body card-body-redizayn">
                                            <p class="card-text-two">
                                                <a href="<?= $item->link ?>">
                                                    <?= StringHelper::truncate(strip_tags($item->getText1()), 30, '...') ?>
                                                </a>
                                            </p>
                                            <div id="icons_inner"><i id="icons_inner" class="far fa-calendar-alt"></i>
                                                <?= Yii::$app->formatter->asDateTime($item->getDate(), 'php:G:i / d.m.Y') ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <div class="container">
        <div id="imgchange">
            <?php foreach ($banners as $banner): ?>
                <div class="">
                    <div class="px-4">
                        <a href="<?= $banner->getText1() ?>">
                            <img src="<?= $banner->getPhoto1('234', '80', 'scaleResize', 'transparent'); ?>" alt=""
                                 class="img-fluid">
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="tiny_slider" style="padding-bottom: 15px;">
            <div class="uk_style uk-position-relative uk-visible-toggle uk-light" tabindex="-1"
                 uk-slider="center: true">
                <ul class="uk-slider-items uk-grid">
                    <?php foreach ($banners as $banner): ?>
                    <li class="uk-width-4-5">
                        <div class="uk-panel">
                            <a href=""><img  style="width: 100%" src="<?= $banner->getPhoto1('211', '50', 'scaleResize', 'transparent'); ?>" alt=""></a>
                        </div>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </div>
</section>
<div class="brand_area-top">
    <div class="brand-area" style="background-color: #f1f1f1;">
        <div class="container">
            <div class="row brand-active">
                <div class="col-lg-3 ">
                    <div class="brand-item" style="background-color:#333333;">
                        <div style="color: #ffffff;"><?= Yii::t('app', 'All') ?></div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="brand-item">
                        <div><i class="fas fa-newspaper"></i> <?= Yii::t('app', 'News') ?></div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="brand-item ">
                        <div><i class="fab fa-atlassian"></i> <?= Yii::t('app', 'Articles') ?></div>
                    </div>
                </div>
                <div data-target="videos" class="col-lg-3">
                    <div class="brand-item">
                        <div><i class="fas fa-video"></i> <?= Yii::t('app', 'Videos') ?></div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div  class="brand-item">
                        <div><i class="fas fa-audio-description"></i> <?= Yii::t('app', 'Audio') ?></div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="brand-item">
                        <div><i class="fas fa-book-open"></i> <?= Yii::t('app', 'Books') ?></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<section>
    <div class="section_inner">
        <div class="section-inner_rub">
            <div class="container">
                <div class="row slider-pub" style="padding-right:15px;">
                    <div class="style_card col-lg-9 col-12 " id="scroll_ajax">
                        <div class="icons_display sticky">
                            <div class="icons_fons">
                                <div class="filter-btn">
                                    <span class="alldesigne"><?= Yii::t('app', 'All') ?></span>
                                </div>
                                <div data-target="news" class="filter-btn">
                                    <i class="fas fa-newspaper"></i>
                                    <span class="filter-btn_inner"><?= Yii::t('app', 'News') ?></span>
                                </div>
                                <div data-target="articles" class="filter-btn">
                                    <i class="fab fa-atlassian"></i>
                                    <span class="filter-btn_inner"><?= Yii::t('app', 'Articles') ?></span>
                                </div>
                                <div data-target="videos" class="filter-btn">
                                    <i class="fas fa-video"></i>
                                    <span class="filter-btn_inner"><?= Yii::t('app', 'Videos') ?></span>
                                </div>
                                <div data-target="audios" class="filter-btn">
                                    <i class="fas fa-audio-description"></i>
                                    <span class="filter-btn_inner"><?= Yii::t('app', 'Audio') ?></span>
                                </div>
                                <div data-target="books" class="filter-btn">
                                    <i class="fas fa-book-open"></i>
                                    <span class="filter-btn_inner"><?= Yii::t('app', 'Books') ?></span>
                                </div>
                            </div>
                        </div>
                        <div id="filter-container">
                            <?= ListView::widget([
                                'dataProvider' => $articles,
                                'itemOptions' => ['class' => 'item'],
                                'summary' => '',
                                'itemView' => function ($model, $i, $index) {
                                    return $this->render('_article', ['article' => $model]);
                                },
                                'pager' => ['class' => InfiniteScroll::class]
                            ]); ?>
                        </div>

                        <div class="loading">
                            <div class="ball"></div>
                            <div class="ball"></div>
                            <div class="ball"></div>
                            <div class="ball"></div>
                        </div>
                    </div>

                    <?= $this->render('/layouts/aside.php') ?>
                </div>

            </div>
</section>
