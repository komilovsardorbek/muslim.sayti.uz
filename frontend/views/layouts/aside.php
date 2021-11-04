<?php

use afzalroq\cms\entities\front\Items;

$advertisements = Items::getAll('advertising');
$photoGallery = Items::getAll('photo-gallery');
?>
<aside class=" col-lg-3  left-sidebar ">
    <div class="icons_section">
        <div class="icons_section-inner"><?= Yii::t('app', 'Subscribe') ?>
            <div class="row icons-flex" id="icons_img">
                <?= $this->render('./socials.php') ?>
            </div>
        </div>
    </div>
    <div class="tiny_slider p-0">
        <div style="padding-bottom:15px" class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1"
             uk-slider="center: true">
            <ul class="uk-slider-items uk-grid">
                <?php foreach ($advertisements as $item): ?>
                    <?php if (empty($item->getText2()) and empty($item->getText3())): ?>
                        <li class="uk-width-4-5">
                            <div class="uk-panel">
                                <a href=""><img style="width: 100%" src="<?= $item->getPhoto1('211', '211', 'zoomCrop', 'transparent'); ?>" alt=""></a>
                                <div class="uk-position-center uk-panel"><h1 class="position-number"></h1></div>
                            </div>
                        </li>
                    <?php else: ?>
                        <li class="uk-width-4-5">
                            <div class="uk-panel">
                                <div class="card doublecard" id="card_intro">
                                    <a href="">
                                        <img class="card-img-top" src="<?= $item->getPhoto1('211', '148', 'zoomCrop', 'transparent'); ?>" alt=""></a>
                                    <div class="card-body p-0" id="card-body">
                                        <p class="rek-title"><a href=""><?= $item->getText2() ?></a></p>
                                        <p class="rek_auto"><a href=""><?= $item->getText3() ?></a></p>
                                        <p class="rek_text"><a href=""><?= $item->getText4() ?></a></p>
                                    </div>
                                </div>
                                <div class="uk-position-center uk-panel"><h1></h1></div>
                            </div>
                        </li>
                    <?php endif; ?>
                <?php endforeach; ?>
            </ul>
            <a class="uk-position-center-left uk-position-small " href="#" uk-slidenav-previous
               uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slider-item="next"></a>
        </div>
    </div>
    <div class="destop_reklama">
        <?php foreach ($advertisements as $item): ?>
            <?php if (empty($item->getText2()) and empty($item->getText3())): ?>
                <a href="<?= $item->getText1() ?>"> <img style="width: 100%" src="<?= $item->getPhoto1('251', '251', 'zoomCrop', 'transparent'); ?>" alt=""></a>
            <?php else: ?>

                <div class="card doublecard" id="card_intro">
                    <a href="<?= $item->getText1() ?>">
                        <img class="card-img-top" src="<?= $item->getPhoto1('251', '175', 'zoomCrop', 'transparent'); ?>" alt=""></a>
                    <div class="card-body p-0" id="card-body">
                        <p class="rek-title"><a href=""><?= $item->getText2() ?></a></p>
                        <p class="rek_auto"><a href=""><?= $item->getText3() ?></a></p>
                        <p class="rek_text"><a href=""><?= $item->getText4() ?></a></p>
                    </div>
                </div>
            <?php endif; ?>
        <?php endforeach; ?>
    </div>
</aside>
