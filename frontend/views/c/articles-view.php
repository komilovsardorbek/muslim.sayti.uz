<?php

use afzalroq\cms\entities\front\Options;
use afzalroq\cms\entities\unit\Unit;
use ereminmdev\yii2\infinite_scroll\InfiniteScroll;
use yii\helpers\Html;
use yii\widgets\ListView;


$item->registerMetaTags();
$author = !empty($item->options['author']) ? Options::findOne(['id' => $item->options['author']]) : '';
if (($item->entity->text_1 > 0 && empty($item->getText1()))) {
    return Yii::$app->response->redirect(['/site/index']);
}
?>
<div class="header_section-two" style="background: #f1f1f1;">
    <div class="container -relative">
        <div class="articles_top" style="padding:15px 0;">
            <div class="articles_inner">
                <?php foreach (array_splice($tags, -10) as $tag): ?>
                    <div class="articles_top-inner">
                        <a href="<?= $tag->link ?>"><?= $tag['name'] ?></a>
                    </div>
                <?php endforeach; ?>
                <?php if (!empty($tags)): ?>
                    <div class="articles_top-inner icons_ar" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <i class="articles-icons fas fa-chevron-up"></i>
                    </div>
                <?php endif; ?>
            </div>
        </div>
        <?php if (!empty($tags)): ?>
            <div class="collapse" id="collapseExample">
                <div class="card" style="border: none; background: none">
                    <div class="articles_card">
                        <div class="articles_inner">

                            <?php foreach ($tags as $tag): ?>
                                <div class="articles_top-inner">
                                    <a href="<?= $tag->link ?>"><?= $tag['name'] ?></a>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif; ?>
        <div id="imgchange" style="padding:10px 0;">
            <?php foreach ($banners as $banner): ?>
                <div>
                    <div class="px-4">
                        <a href="<?= $banner->getText1() ?>">
                            <img style="height: 56px; width: 234px;"
                                 src="<?= $banner->getPhoto1('310', '80', 'scaleResize', 'transparent'); ?>" alt=""
                                 class="img-fluid">
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>
</div>


<section>
    <div class="section_inner">
        <div class="section_rub">
            <div class="container">
                <div class="row slider-pub">
                    <div class="col-sm-9" style="padding-right: 23px;">
                        <div class="post_card">
                            <div class="post_name ">
                                <?= $optionType ? $optionType->getName() : '' ?> / <span style="color:#00A3FF;"><?= $item->getText1() ?></span>
                            </div>
                            <div class="post_title">
                                <h3 class="post_cn"><?= $item->getText1() ?></h3>
                            </div>
                            <div class="counter-inner date">
                                 <span class="counter-inner pr-4">
                                     <i class="fa fa-eye"> <?= $item->views_count ?></i>
                                 </span>
                                <?php
                                $minTime = $item->date_0;
                                foreach ([0, 1, 2, 3, 4] as $key => $value) {
                                    if (($minTime > $item->{"date_" . $key}) and ($item->{"date_" . $key} != null)) {
                                        $minTime = $item->{"date_" . $key};
                                    }
                                } ?>
                                <?= Yii::$app->formatter->asDateTime($minTime, 'php:j F , Y') ?>
                            </div>
                            <img class="inner_mages_top" src="<?= $item->getGalleryPhoto('760', '362', 'zoomCrop', 'transparent', 'center', 'center') ?>" alt="ge cap">
                            <?= isset($item->options['basmala']) ? "<div class='page_text'>" . (Unit::get('basmala')) . "</div>" : "" ?>
                            <?php if ($item->option->option->slug == 'audios') : ?>
                                <div class="text_audio pt-5 text-left">
                                    <audio controls muted class="audio_player">
                                        <source src="<?= $item->getFile1() ?>" type="audio/mp3">
                                        <source src="<?= $item->getFile1() ?>" type="audio/mpeg">
                                    </audio>
                                </div>
                            <?php endif; ?>
                            <div class="page_text"><?= Html::decode($item->getText2()) ?></div>
                            <?php if (!empty($item->options['author'])): ?>
                                <div class="autor mt-3">
                                    <div class="row">
                                        <div class="col-12 border_left">
                                            <img class="img_shayx" src="<?= $author->getPhoto1('640', '480', 'zoomCrop', 'transparent', 'center', 'center') ?>"
                                                 alt="#logo">
                                            <div style="padding-left:20px;">
                                                <div class="py-1"><?= Yii::t('app', 'Author') ?></div>
                                                <div class="bold_word"><a href="<?= $author->link ?>"><?= $author->getName() ?></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?php endif; ?>
                        </div>
                        <div class="inner_center">
                            <div class="inner_center-text">
                                <div class="social_maqola">
                                    <div style="text-align:center; color:#0C8744;">
                                        <h5><?= Yii::t('app','SHARE INFORMATION ON SOCIAL NETWORKS') ?></h5>
                                    </div>
                                    <div class="social">
                                        <div class="social__item">
                                            <a href="http://www.facebook.com/sharer.php?u=<?= Yii::$app->getUrlManager()->createAbsoluteUrl($item->link) ?>"><i class="fab fa-vk"></i></a>
                                        </div>
                                        <div class="social__item">
                                            <a href="https://t.me/share/url?url=<?= Yii::$app->getUrlManager()->createAbsoluteUrl($item->link) ?>&text=<?= $this->title ?>"><i
                                                        class="fab fa-telegram-plane"></i></a>
                                        </div>
                                        <div class="social__item">
                                            <a href="#"><i class="fab fa-google"></i></a>
                                        </div>
                                        <div class="social__item">
                                            <a href="<?= Unit::get('instagram') ?>"><i class="fab fa-instagram"></i></a>
                                        </div>
                                        <div class="social__item">
                                            <a href="#"><i class="fab fa-skype"></i></a>
                                        </div>
                                        <div class="social__item">
                                            <a href="https://twitter.com/share?url=<?= Yii::$app->getUrlManager()->createAbsoluteUrl($item->link) ?>&text=<?= $this->title ?>&hashtags=<?= $this->title ?>muslim.uz""><i
                                                    class="fab fa-twitter"></i></a>
                                        </div>
                                        <div class="social__item">
                                            <a href="<?= Unit::get('youtube') ?>"><i class="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="inner_center">
                            <div class="inner_center-text">
                                <?= Yii::t('app', 'Other') ?> <?= $item->entity->name ?>
                            </div>
                        </div>
                        <?php if (!empty($articles)): ?>
                            <?= ListView::widget([
                                'dataProvider' => $articles,
                                'itemOptions' => ['class' => 'item'],
                                'summary' => '',
                                'itemView' => function ($model) {

                                    return $this->render('/site/_article', ['article' => $model]);
                                },
                                'pager' => ['class' => InfiniteScroll::class]
                            ]); ?>

                        <?php else: ?>
                            <h4 class="text-center mb-4"><?= Yii::t('app', 'There is no') ?>  <?= $item->entity->name ?></h4>
                        <?php endif; ?>
                    </div>

                    <?= $this->render('/layouts/aside.php') ?>
                </div>
            </div>
        </div>
    </div>
</section>
