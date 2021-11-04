<?php

use ereminmdev\yii2\infinite_scroll\InfiniteScroll;
use nirvana\infinitescroll\InfiniteScrollPager;
use yii\helpers\StringHelper;
use yii\widgets\ListView;

?>

<section>
    <div class="section_inner">
        <div class="container">
            <div class="row slider-pub">
                <div class="style_card col-lg-9 col-12 " id="scroll_ajax">
                    <div class="row">
                        <h3> So`rov natijasi: <?= $q ?></h3>
                    </div>
                    <div class="icons_display sticky">
                        <div class="icons_fons d-flex justify-content-around align-items-center">
                            <div class="filter-btn">
                                <span class="alldesigne"><?= Yii::t('app','All') ?> </span>
                            </div>
                            <div data-target="news" class="filter-btn">
                                <i class="fas fa-newspaper"></i>
                                <span class="filter-btn_inner"><?= Yii::t('app','News') ?></span>
                            </div>
                            <div data-target="articles" class="filter-btn">
                                <i class="fab fa-atlassian"></i>
                                <span class="filter-btn_inner"><?= Yii::t('app','Articles') ?></span>
                            </div>
                            <div data-target="videos" class="filter-btn">
                                <i class="fas fa-video"></i>
                                <span class="filter-btn_inner"><?= Yii::t('app','Videos') ?></span>
                            </div>
                            <div data-target="audios" class="filter-btn">
                                <i class="fas fa-audio-description"></i>
                                <span class="filter-btn_inner"><?= Yii::t('app','Audio') ?></span>
                            </div>
                            <div data-target="books" class="filter-btn">
                                <i class="fas fa-book-open"></i>
                                <span class="filter-btn_inner"><?= Yii::t('app','Books') ?></span>
                            </div>
                        </div>
                    </div>

                    <div  class="" id="filter-container">
                        <?= ListView::widget([
                            'dataProvider' => $articles,
                            'itemOptions' => ['class' => 'item'],
                            'summary' => '',
                            'itemView' => function ($model) {
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

</section>

