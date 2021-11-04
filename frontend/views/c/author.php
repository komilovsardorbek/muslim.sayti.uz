<?php

use afzalroq\cms\entities\unit\Unit;
use ereminmdev\yii2\infinite_scroll\InfiniteScroll;
use yii\helpers\Html;
use yii\widgets\ListView;

?>

<section>
    <div class="section_inner">
        <div class="section_rub">
            <div class="container" style="padding:0;">
                <div class="row slider-pub">
                    <div class="col-sm-9" style="padding-right: 23px;">
                        <div class="post_card">
                            <div class="autor">
                                <div class="row">
                                    <div class="col-12 border_left">
                                        <img class="img_shayx" src="<?= $author->getPhoto1('640', '480', 'zoomCrop', 'transparent','center','center') ?>"
                                             alt="#logo">
                                        <div style="padding-left:20px;">
                                            <div class="py-1"><?= Yii::t('app', 'Author') ?></div>
                                            <div class="bold_word"><a href="<?= $author->link ?>"><?= $author->getName() ?></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="icons_page-one">
                                <div class="row">
                                    <div class="col-12 d-flex icons_page-two">
                                        <div class="text-icon-bold"><?=  Yii::t('app','SHARE:') ?> </div>
                                        <span style="padding-left: 15px; ">
                                            <a href="https://t.me/share/url?url=<?= Yii::$app->getUrlManager()->createAbsoluteUrl($author->link) ?>&text=<?= $this->title ?>"
                                               class="fab fa-telegram-plane" style="color:#0088cc; font-size:20px" title="telegram" target="_blank" rel="nofollow"></a>
                                            <a href="https://twitter.com/share?url=<?= Yii::$app->getUrlManager()->createAbsoluteUrl($author->link) ?>&text=<?= $this->title ?>&hashtags=<?= $this->title ?>_muslim_uz"
                                               class="fab fa-twitter px-2" style="color:#1DA1F2; font-size:20px" title="twitter" target="_blank" rel="nofollow"></a>
                                            <a href="http://www.facebook.com/sharer.php?u=<?= Yii::$app->getUrlManager()->createAbsoluteUrl($author->link) ?>"
                                               class="fab fa-facebook-square px-2" style="color:#4267B2; font-size:20px" title="facebook" target="_blank" rel="nofollow"></a>
                                            <a href="<?= Unit::get('instagram') ?>"><i style="#c938aa; font-size:20px" class="fab fa-instagram px-2"></i></a>
                                            <a href="<?= Unit::get('youtube') ?>"><i style="color:#FF0000; font-size:20px" class="fab fa-youtube px-2"></i></a>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div class="page_text"><?= Html::decode($author->getContent()) ?></div>
                        </div>
                        <div class="inner_center">
                            <div class="inner_center-text">
                                <?= Yii::t('app', 'Author\'s articles') ?>
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