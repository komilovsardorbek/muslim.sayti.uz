<?php

use yii\grid\GridView;
use yii\helpers\Html;

$this->title = Yii::t('app', 'Contacts');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="contacts-index">

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],
            [
                'attribute' =>  Yii::t('app', 'full_name'),
                'format' => 'raw',
                'value' => function ($model) {
                    return Html::decode(Html::decode($model->full_name));
                }
            ],
            [
                'attribute' =>  Yii::t('app', 'email_phone'),
                'format' => 'raw',
                'value' => function ($model) {
                    return Html::decode(Html::decode($model->email_phone));
                }
            ],
            [
                'attribute' => Yii::t('app', 'message'),
                'format' => 'ntext',
                'value' => function ($model) {
                    return Html::decode(Html::decode($model->message));
                }
            ],
            'created_at:datetime',
        ],
    ]) ?>

</div>
