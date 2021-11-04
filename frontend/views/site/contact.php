<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */

/* @var $model ContactForm */

use afzalroq\cms\entities\unit\Unit;
use frontend\models\ContactForm;
use yii\helpers\Html;
use himiklab\yii2\recaptcha\ReCaptcha2;
use yii\bootstrap\ActiveForm;

$this->title = 'Contact';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="conatct-page">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12">
                <div class="gym_slider_inner">
                    <div class="gym_heading">
                        <h4><?= Yii::t('app', 'Contact Information') ?></h4>
                        <i class="contact_icons fas fa-mosque"> .............</i>
                    </div>
                    <div class="gym_contact_list"><i class="icons_contact fas fa-map-marker-alt"></i>
                        <a style="padding-left: 10px" class="phone_number" href="">
                            <?= Unit::get('maps') ?>
                        </a>
                    </div>
                    <div class="gym_contact_list call_contact"><i class="icons_contact fas fa-building"></i>
                        <a style="padding-left: 10px" class="phone_number" href="#"><?= Unit::get('working-time') ?></a>
                    </div>
                    <div class="gym_contact_list quick_contact"><i class="icons_contact fas fa-envelope-open-text"></i>
                        <a style="padding-left:10px;" class="phone_number" href="#"><?= Unit::get('email1') ?></a>
                        <a class="phone_number" style="padding-left:10px;" href="#"><?= Unit::get('email1') ?></a>
                    </div>
                    <div class="gym_contact_list call_contact"><i class="icons_contact fas fa-fax"></i>
                        <a style="padding-left: 10px" class="phone_number" href="#"><?= Unit::get('fax') ?></a>
                    </div>
                    <div class="gym_contact_list call_contact"><i class="icons_contact fas fa-phone-alt"></i>
                        <a style="padding-left: 10px" class="phone_number" href="#"><?= Unit::get('tell-number1') ?></a>
                        <a style="padding-left: 10px" class="phone_number" href="#"><?= Unit::get('tell-number2') ?></a>
                    </div>


                </div>
            </div>

            <div class="col-xl-6 col-lg-6 col-md-12">
                <div class="gym_righthalf_dv">
                    <div class="gym_contactform_dv">
                        <h4><?= Yii::t('app', 'Contact us') ?></h4>
                        <!-- <form class="gym_inner_form"> -->
                        <?php $form = ActiveForm::begin(['options' => ['class' => 'gym_inner_form']]); ?>
                        <?= $form->errorSummary($model) ?>
                        <?php if (Yii::$app->session->hasFlash('feedbackSuccess')): ?>
                            <div class="alert alert-success alert-dismissible" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"><i
                                                class="fa fa-close"></i></span>
                                </button>
                                <?php echo Yii::$app->session->getFlash('feedbackSuccess'); ?>
                            </div>
                        <?php endif; ?>

                        <div class="row">
                            <div style="padding: 0" class="col-xl-12 col-lg-12 col-md-12">
                                <div class="gym_form_field ">
                                    <?= $form->field($model, 'full_name')->textInput(['maxlength' => 255, 'placeholder' => Yii::t('app', 'Enter your name here.'), 'class' => 'gym_field_inner require'])->label(false) ?>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div style="padding: 0" class="col-xl-12 col-lg-12 col-md-12">
                                <div class="gym_form_field ">
                                    <?= $form->field($model, 'email_phone')->textInput(['maxlength' => 255, 'placeholder' => Yii::t('app', 'Enter your phone or email here.'), 'class' => 'gym_field_inner require'])->label(false) ?>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div style="padding: 0" class="col-xl-12 col-lg-12 col-md-12">
                                <div class="gym_form_field ">
                                    <?= $form->field($model, 'message')->textarea(['rows' => '3', 'placeholder' => Yii::t('app', 'Enter your message here.'), 'class' => 'gym_field_inner require', 'id' => 'message'])->label(false) ?>
                                </div>
                                <div class="gym_form_field">
                                    <?= $form->field($model, 'reCaptcha')->widget(ReCaptcha2::class, [
                                        'options' => ['class' => 'form-control']
                                    ])->label(false) ?>
                                </div>
                                <div class="gym_form_field" style="padding: 0">
                                    <button type="submit" class="gym_btn btn_1 submitForm"><?= Yii::t('app', 'Submit') ?></button>
                                </div>
                            </div>
                        </div>
                        <?php ActiveForm::end(); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



