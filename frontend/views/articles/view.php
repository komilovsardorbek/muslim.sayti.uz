<?php

use ereminmdev\yii2\infinite_scroll\InfiniteScroll;
use yii\widgets\ListView;
use afzalroq\cms\entities\unit\Unit;
use afzalroq\cms\entities\front\Options;

$item->registerMetaTags();
$author = Options::findOne(['id' => $item->options['author']]);
?>
<section2 style=" margin-top: 3px;">
    <div class="section_inner">
        <div class="container">
            <div class="row ">
                <div class="col-sm-8 mt-4">
                    <div class="post_card">
                        <div class="post_name">
                            Maqolalar / <span style="color:#00A3FF;"><?= $item->getText1() ?></span>
                        </div>
                        <div class="post_title">
                            <h3 ><?= $item->getText1() ?></h3>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <i class="fa fa-eye"></i> <?= $item->views_count ?>
                            </div>
                            <div class="col-9">
                                <?= Yii::$app->formatter->asDateTime($item->created_at, 'php:j F , Y') ?>
                            </div>
                        </div>
                        <img src="<?= $item->getPhoto1('100', '100', 'zoomCrop', 'transparent', 'center', 'top'); ?>" alt="ge cap">
                        <?php if ($item->option->option->slug == 'audios') : ?>
                            <div class="text_audio pt-5 text-center">
                                <audio controls autoplay muted class="audio_player">
                                    <source src="<?= $item->getFile2() ?>" type="audio/ogg">
                                    <source src="<?= $item->getFile2() ?>" type="audio/mpeg">
                                </audio>
                            </div>
                        <?php endif; ?>
                        <?php if ($item->option->option->slug == 'videos') : ?>
                            <div class="text_audio pt-5 text-center">
                                <iframe width="560" height="315" src="<?= $item->getText5() ?>" frameborder="0" allowfullscreen></iframe>
                            </div>
                        <?php endif; ?>
                        <?php  if(isset($item->options['basmala'])):  ?>
                        <h3><?= Unit::get('basmala'); ?></h3>
                        <?php endif ?>
                        <div class="page_text"><?= $item->getText2() ?></div>

                        <div class="autor mt-3">
                            <div class="row">
                                <div class="col-6 border_left">
                                    <img class="img_shayx" src="<?= $author->getPhoto1() ?>"
                                         alt="#logo">
                                    <div class="py-1"><?= Yii::t('app', 'Author') ?></div>
                                    <div class="bold_word"><?= $author->getName() ?></div>
                                </div>
                                <div class="nextafter"></div>
                                <div class="col-6 padding_botton">
                                    <img class="img_shayx1" src="/img/LOGO-MUSLIM-01 1.png" alt="#logo">
                                    <div class="py-1"><?= Yii::t('app', 'Source') ?></div>
                                    <div class="bold_word">Muslim.uz</div>
                                </div>
                            </div>
                        </div>
                    </div>
                            <?= dd($articles); ?>
                    <div class="inner_center">
                        <div class="inner_center-text">
                            <?= Yii::t('app', 'Other') ?> <?= $item->entity->name ?>
                        </div>
                    </div>
                    <?php  if (!empty($articles)): ?>
                        <?= ListView::widget([
                            'dataProvider' => $articles,
                            'itemOptions' => ['class' => 'item'],
                            'summary'=>'',
                            'itemView' => function ($model) {
                                return $this->render('_articles', ['article' => $model]);
                            },
                            'pager' => ['class' => InfiniteScroll::class]
                        ]);?>

                    <?php else: ?>
                        <h4 class="text-center mb-4"><?= Yii::t('app', 'There is no') ?>  <?= $item->entity->name ?></h4>
                    <?php endif; ?>
                </div>

                <?= $this->render('/layouts/aside.php') ?>
            </div>
        </div>
    </div>

</section2>