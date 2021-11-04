<?php

use backend\models\Regions;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\Url;

/* @var $this yii\web\View */
/* @var $model backend\models\NamazTime */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="namaz-time-form">

    <?php $form = ActiveForm::begin(); ?>


    <?= $form->field($model, 'region_id')->dropDownList(ArrayHelper::map(Regions::find()->all(), 'id', 'name'), ['prompt' => '---'])->label('Hududni tanlang') ?>
    <?= $form->field($model, 'namazTimeFile')->fileInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save',['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
