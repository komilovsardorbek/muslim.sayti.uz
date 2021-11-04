<?php

use backend\models\Regions;
use kartik\time\TimePicker;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\jui\DatePicker;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model backend\models\NamazTime */
/* @var $form yii\widgets\ActiveForm */
?>
<style>
    .ui-widget.ui-widget-content {
        z-index: 20 !important;
    }
</style>


<div class="namaz-time-form">

    <div class="box box-default">

        <?php $form = ActiveForm::begin(); ?>
        <div class="box-body">
            <div class="col-md-3">
                <?=
                $form->field($model, 'date')->widget(DatePicker::class, [
                    'dateFormat' => 'd.MM.yyyy',
                    'language' => 'ru',
                    'clientOptions' => [
                        'changeYear' => true,
                        'changeMonth' => true,
                    ],
                    'options' => ['class' => 'form-control']
                ])->label('Vaqt:')
                ?>
            </div>
            <div class="col-md-3">
                <?= $form->field($model, 'region_id')->dropDownList(ArrayHelper::map(Regions::find()->all(), 'id', 'name'), ['prompt' => '---'])->label('Hudud:'); ?>
            </div>
        </div>
        <div class="box-body">
            <div class="col-md-4">
                <?= $form->field($model, 'fajr')->widget(TimePicker::className(),
                    [
                        'readonly' => true,
                        'pluginOptions' => [
                            'minuteStep' => 5,
                            'showMeridian' => false,
                            'defaultTime' => date('H:i', strtotime('0 hour')),
                        ],
                        'options' => [
                            'class' => 'form-control',
                        ],
                    ])->label('Bomdod:'); ?>
            </div>
            <div class="col-md-4">
                <?= $form->field($model, 'sunrise')->widget(TimePicker::className(),
                    [
                        'readonly' => true,
                        'pluginOptions' => [
                            'minuteStep' => 5,
                            'showMeridian' => false,
                            'defaultTime' => date('H:i', strtotime('0 hour')),
                        ],
                        'options' => [
                            'class' => 'form-control',
                        ],
                    ])->label('Quyosh:'); ?>
            </div>
            <div class="col-md-4">
                <?= $form->field($model, 'dhuhr')->widget(TimePicker::className(),
                    [
                        'readonly' => true,
                        'pluginOptions' => [
                            'minuteStep' => 5,
                            'showMeridian' => false,
                            'defaultTime' => date('H:i', strtotime('0 hour')),
                        ],
                        'options' => [
                            'class' => 'form-control',
                        ],
                    ])->label('Peshin:'); ?>
            </div>
        </div>
        <div class="box-body">
            <div class="col-md-4">
                <?= $form->field($model, 'asr')->widget(TimePicker::className(),
                    [
                        'readonly' => true,
                        'pluginOptions' => [
                            'minuteStep' => 5,
                            'showMeridian' => false,
                            'defaultTime' => date('H:i', strtotime('0 hour')),
                        ],
                        'options' => [
                            'class' => 'form-control',
                        ],
                    ])->label('Asr:'); ?>
            </div>
            <div class="col-md-4">
                <?= $form->field($model, 'maghrib')->widget(TimePicker::className(),
                    [
                        'readonly' => true,
                        'pluginOptions' => [
                            'minuteStep' => 5,
                            'showMeridian' => false,
                            'defaultTime' => date('H:i', strtotime('0 hour')),
                        ],
                        'options' => [
                            'class' => 'form-control',
                        ],
                    ])->label('Shom:'); ?>
            </div>
            <div class="col-md-4">
                <?= $form->field($model, 'isha')->widget(TimePicker::className(),
                    [
                        'readonly' => true,
                        'pluginOptions' => [
                            'minuteStep' => 5,
                            'showMeridian' => false,
                            'defaultTime' => date('H:i', strtotime('0 hour')),
                        ],
                        'options' => [
                            'class' => 'form-control',
                        ],
                    ])->label('Xufton:'); ?>
            </div>
        </div>
        <div class="box-body">
            <div class="form-group">
                <?= Html::submitButton('Saqlash', ['class' => 'btn btn-success']) ?>
            </div>
        </div>

        <?php ActiveForm::end(); ?>
    </div>
</div>
