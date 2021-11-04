<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model backend\models\NamazTime */

$this->title = 'Namoz vaqtini o`zgartirish: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Namaz Times', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="namaz-time-update">


    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
