<?php

use afzalroq\cms\entities\unit\Unit;

/* @var $this yii\web\View */
/* @var $model backend\models\NamazTime */

$this->title = 'Namoz vaqtini import qilish';
$this->params['breadcrumbs'][] = ['label' => 'Namoz Vaqti', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<a href="<?= Unit::get('sampleexcel') ?>" class="btn btn-success"> Namuna </a>

<div class="namaz-time-create">


    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
