<?php

use yii\helpers\Html;
use yii\grid\GridView;
use kartik\date\DatePicker;
use yii\widgets\Pjax;
/* @var $this yii\web\View */
/* @var $searchModel backend\models\NamazTimeSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Namoz vaqtlari';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="namaz-time-index">

    <p>
        <?= Html::a('Namoz vaqti qo`shish', ['create'], ['class' => 'btn btn-success']) ?>
        <?= Html::a('Import', ['import'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php Pjax::begin(); ?>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

//            'id',
            [
                'attribute' => 'date',
                'filter' => DatePicker::widget([
                    'model' => $searchModel,
                    'attribute' => 'date',
                    'type' => DatePicker::TYPE_COMPONENT_PREPEND,
                    'pluginOptions' => [
                        'todayHighlight' => true,
                        'autoclose' => true,
                        'format' => 'yyyy-mm-dd',
                    ],
                ]),
                'format' => 'date',
                'label' => Yii::t('app', 'Vaqt'),

            ],
            [
                'attribute' => 'system_date',
                'label' => Yii::t('app', 'Tizim vaqti'),
            ],
            [
                'attribute' => 'regionName',
                'format' => 'raw',
                'label' => Yii::t('app', 'Hudud'),
                'value' => 'region.name',
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

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>

    <?php Pjax::end(); ?>

</div>
