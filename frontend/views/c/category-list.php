<?php

use afzalroq\cms\entities\front\Options;
use kartik\helpers\Html;
use yii\helpers\StringHelper;
use yii\widgets\LinkPager;

?>
<section >
    <div class="section_inner">
        <div class="section_rub">
            <div class="container" style="padding:0;">
                <div class="row slider-pub">
                    <div class="col-sm-9" style="padding-right: 23px;">
                        <div class="inner_center">
                            <div class="inner_center-text">
                                <?= $option['name']; ?>
                            </div>
                        </div>
                        <?php foreach ($articles as $article): ?>
                            <div class="card filter-elem mt-4  <?= $article->option->option->slug ?> ">
                                <div class="card-horizontal card-photo1">
                                    <div class="img-square-wrapper">
                                        <a href="<?= $article->link ?>">
                                            <img class="image_size " src="<?= $article->getGalleryPhoto('300', '180', 'zoomCrop', 'transparent', 'center', 'center'); ?>" alt="Card image cap">
                                        </a>
                                        <?php if ($article->option->option->slug == 'videos') : ?>
                                            <i class="icons_video fas fa-video"></i>
                                        <?php elseif ($article->option->option->slug == 'audios') : ?>
                                            <i class="icons_video fas fa-volume-up"></i>
                                        <?php endif; ?>
                                    </div>
                                    <div class="card-body card_body_man">
                                        <?php if ($article->option->option->slug == 'audios') : ?>
                                            <div class="row">
                                                <div class="col-lg-3 audio_title">
                                                    <a class="card_name" href="#"><?= $article->option->optionFront->name ?></a>
                                                </div>
                                                <div class="p-0 col-lg-8 mt-1">
                                                    <p class="card_intro"><?= Html::decode(StringHelper::truncate(strip_tags($article->getText1()), 30, '...')) ?></p>
                                                </div>
                                            </div>
                                            <div class="text_audio">
                                                <div style="font-weight: 600;">
                                                    <a href="<?= $article->link ?>">
                                                        <p class="card_intro-text"><?= isset($article->options['author']) ? Options::findOne(['id', $article->options['author']])->getName() : " " ?></p>
                                                        <audio controls autoplay muted class="audio_player">
                                                            <source src="<?= $article->getFile1() ?>" type="audio/ogg">
                                                            <source src="<?= $article->getFile1() ?>" type="audio/mpeg">
                                                        </audio>
                                                    </a>
                                                    <div class="pt-1"><?= Html::decode(StringHelper::truncate(strip_tags($article->getText2()), 67, '...')) ?></div>
                                                </div>
                                            </div>
                                        <?php else : ?>
                                            <div class="card_inner2">
                                                <div class="">
                                                    <a class="card_name" href="#"><?= $article->option->optionFront->name ?></a>
                                                </div>
                                                <div class="">
                                                    <p class="card_inrto pl-3"><?php if (isset($article->options['tags'])) {
                                                            foreach ($article->options['tags'] as $key => $teg) {
                                                                if ($key > 0) {
                                                                    echo " , ";
                                                                }
                                                                echo Options::findOne(['id', $teg])->getName();
                                                            }
                                                        } ?>
                                                </div>
                                            </div>
                                            <h5 class="card-text">
                                                <a href="<?= $article->link ?>">
                                                    <?= $article->getText1() ?>
                                                </a>
                                            </h5>
                                            <p class="card_intro-text"><?= isset($article->options['author']) ? Options::findOne(['id', $article->options['author']])->getName() : '' ?></p>
                                            <p class="m-0 card_text-button"><?= Html::decode(StringHelper::truncate(strip_tags($article->getText2()), 120, '...')); ?></p>
                                        <?php endif; ?>
                                        <div class="icon_get">
                                            <i class="fas fa-eye date"></i><span> <?= $article->views_count ?></span>
                                            <div class="card_footer"><i class="far fa-calendar"></i><span> 23.07.2002</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>

                        <ul class="pagination pagination-md justify-content-center ">

                            <?= LinkPager::widget([
                                'pagination' => $pages,
                                'options' => [
                                    'class' => 'pagination'
                                ],
                                'nextPageLabel' => 'Next',
                                'linkOptions' => ['class' => 'page-link'],
                                'firstPageCssClass' => 'page-link',
                                'lastPageCssClass' => 'page-link',
                                'prevPageLabel' => 'Previous',
                                'disabledListItemSubTagOptions' => ['tag' => 'a'],
                                'disabledPageCssClass' => '',
                                'prevPageCssClass' => 'text-light',
                                'nextPageCssClass' => 'text-light',
                            ]); ?>
                        </ul>
                    </div>
                    <?= $this->render('/layouts/aside.php') ?>
                </div>

            </div>
        </div>
    </div>
</section>
