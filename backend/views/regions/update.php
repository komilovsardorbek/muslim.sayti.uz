<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model shop\entities\Regions */

$this->title = 'Hududni o`zgartirish: ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Hududlar', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'o`zgartirish';
?>
<div class="regions-update">


    <?= $this->render('_form', [
        'model' => $model,
        'parents' => $parents,
    ]) ?>

</div>
