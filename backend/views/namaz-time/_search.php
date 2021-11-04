<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model backend\models\NamazTimeSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="namaz-time-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
        'options' => [
            'data-pjax' => 1
        ],
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'date') ?>

    <?= $form->field($model, 'region_id') ?>

    <?= $form->field($model, 'system_date') ?>

    <?= $form->field($model, 'fajr') ?>

    <?php // echo $form->field($model, 'sunrise') ?>

    <?php // echo $form->field($model, 'dhuhr') ?>

    <?php // echo $form->field($model, 'asr') ?>

    <?php // echo $form->field($model, 'maghrib') ?>

    <?php // echo $form->field($model, 'isha') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
