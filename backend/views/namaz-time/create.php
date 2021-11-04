<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model backend\models\NamazTime */

$this->title = 'Namoz vaqti yaratish';
$this->params['breadcrumbs'][] = ['label' => 'Namoz vaqtlari', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="namaz-time-create">


    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
