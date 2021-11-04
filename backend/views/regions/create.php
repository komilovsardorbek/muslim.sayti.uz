<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model shop\entities\Regions */

$this->title = 'Hudud yaratish';
$this->params['breadcrumbs'][] = ['label' => 'Hududlar', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="regions-create">


    <?= $this->render('_form', [
        'model' => $model,
        'parents' => $parents,

    ]) ?>

</div>
