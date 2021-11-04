<?php

/* @var $this yii\web\View */
/* @var $name string */
/* @var $message string */
/* @var $exception Exception */

use yii\helpers\Html;

$this->title = $name;
?>
<section2 style=" margin-top: 3px;">
    <div class="section_inner">
        <div class="container">
            <div class="row ">
                <div class="col-12">
                    <div class="site-error">
                        <?= nl2br(Html::encode($message)) ?> 
                        <img style="width:100%;" src="/img/404.png" alt="#404">
                        <p>
                        <?= Yii::t('app','If you think this is a server error, please contact us. Thank you.'); ?>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section2>