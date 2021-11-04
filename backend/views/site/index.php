<?php

use afzalroq\cms\entities\unit\Categories;
use afzalroq\cms\entities\unit\Unit;
use backend\models\Count;
use yii\helpers\Url;

$this->title = Yii::t('app', 'Admin panel')

?>
<br>
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <a href="<?= Url::to(['/cms/items/create', 'slug' => 'posts']) ?>">
                <div class="info-box">
                    <span class="info-box-icon bg-green"><i class="fa fa-plus"></i></span>
                    <div class="info-box-content"><h1>&nbsp;Yangi qo`shish</h1></div>
                </div>
            </a>
        </div>
        <div class="col-lg-3">
            <div class="info-box">
                <span class="info-box-icon bg-red"><i class="fa fa-newspaper-o"></i></span>
                <div class="info-box-content">
                    <a href="<?= Url::to(['/cms/items/index?slug=posts']) ?>">
                        <h4>Maqolalar
                            <mark><?=  Count::countItem('posts') ?></mark>
                        </h4>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="info-box">
                <span class="info-box-icon bg-green"><i class="fa fa-life-bouy"></i></span>
                <div class="info-box-content">
                    <a href="<?= Url::to(['/cms/items/index?slug=banner']) ?>">
                        <h4>Bannerlar
                            <mark><?= Count::countItem('banner') ?></mark>
                        </h4>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="info-box">
                <span class="info-box-icon bg-yellow"><i class="fa fa-chain"></i></span>
                <div class="info-box-content">
                    <a href="<?= Url::to(['/cms/items/index?slug=advertising']) ?>">
                        <h4>Reklamalar
                            <mark><?= Count::countItem('advertising') ?></mark>
                        </h4>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="info-box">
                <span class="info-box-icon bg-blue"><i class="fa fa-twitter"></i></span>
                <div class="info-box-content">
                    <a href="<?= Url::to(['/cms/unit-categories/unit?slug=socials']) ?>">
                        <h4>Ijtimoiy <br> tarmoqlar
                            <mark><?= Unit::find()->where(['category_id' => Categories::findOne(['slug' => 'socials'])->id])->count() ?></mark>
                        </h4>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="info-box">
                <span class="info-box-icon bg-blue"><i class="fa fa-twitter"></i></span>
                <div class="info-box-content">
                    <a href="<?= Url::to(['/regions']) ?>">
                        <h4>Hududlar
                            <mark><?= Unit::find()->where(['category_id' => Categories::findOne(['slug' => 'socials'])->id])->count() ?></mark>
                        </h4>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="info-box">
                <span class="info-box-icon bg-blue"><i class="fa fa-twitter"></i></span>
                <div class="info-box-content">
                    <a href="<?= Url::to(['/namaz-time']) ?>">
                        <h4>Namoz vaqtlari
                            <mark><?= Unit::find()->where(['category_id' => Categories::findOne(['slug' => 'socials'])->id])->count() ?></mark>
                        </h4>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
