<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\helpers\Url;

/* @var $this yii\web\View */
/* @var $searchModel backend\forms\RegionsSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Hududlar';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="regions-index">

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Hudud qo`shish', ['create'], ['class' => 'btn btn-success']) ?>
    </p>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
//            ['class' => 'yii\grid\SerialColumn'],

            'id',
            [
                'attribute' => 'name',
                'value' => function ($model) {
                    return Html::a($model->name, Url::to(['/regions/view','id' => $model->id]));
                },
                'format' => 'raw'
            ],
//            'name',
            [
                'attribute' => 'parent_id',
                'value' => function ($item) {
                    return $item->checkRegion();
                }
            ],

//            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>
