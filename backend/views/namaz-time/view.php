<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model backend\models\NamazTime */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Namoz vaqtlari', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="namaz-time-view">

    <p>
        <?= Html::a('O`zgartirish', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('O`chirish', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            [
                'attribute' => 'date',
                'format' => 'date',
                'label' => Yii::t('app', 'Vaqt'),
            ],
            [
                'attribute' => 'system_date',
                'label' => Yii::t('app', 'Tizim vaqti'),
            ],
            [
                'attribute' => 'region.name',
                'label' => Yii::t('app', 'Hudud'),
            ],
            [
                'attribute' => 'fajr',
                'format' => 'time',
                'label' => Yii::t('app', 'Bomdod'),
            ],
            [
                'attribute' => 'sunrise',
                'format' => 'time',
                'label' => Yii::t('app', 'Quyosh'),
            ],
            [
                'attribute' => 'dhuhr',
                'format' => 'time',
                'label' => Yii::t('app', 'Peshin'),
            ],
            [
                'attribute' => 'asr',
                'format' => 'time',
                'label' => Yii::t('app', 'Asr'),
            ],
            [
                'attribute' => 'maghrib',
                'format' => 'time',
                'label' => Yii::t('app', 'Shom'),
            ],
            [
                'attribute' => 'isha',
                'format' => 'time',
                'label' => Yii::t('app', 'Xufton'),
            ],
        ],
    ]) ?>

</div>
