<?php

use kartik\date\DatePicker;
use yii\helpers\Url;

?>
<section>
    <div class="header_calendar" style="background-color: #EEE; border: 1px solid #ccc">
        <div class="container ">
            <h3>Namoz vaqtlari</h3>
            <nav class="navbar navbar-expand-lg ">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class=" col-9">
                        <ul class="navbar-nav mr-auto">
                            <?php foreach ($regions as $region): ?>
                                <li class="nav-item">
                                    <a class="region__pad" href="<?= Url::to(['/site/times', 'id' => $region->id]) ?>"><?= $region->name ?></a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <div class="col-3">
                        <?php
                        echo DatePicker::widget([
                            'name' => 'from_date',
                            'value' => '2021',
                            'pluginOptions' => [
                                'autoclose' => true,
                                'minViewMode' => 'months',
                                'format' => 'mm-yyyy'
                            ],
                            'options' => [
                                'data-url' => Url::to(['/site/times']),
                                'onchange' => '
                                    $.post($(this).attr("data-url"),{date: $(this).val()}, function(data){
                                        $(".table_time").html(data);
                                    })
                                '
                            ]
                        ]);
                        ?>
                    </div>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                    <span><i class="fas fa-arrow-circle-down icons_down "></i></span>
                </button>
            </nav>
        </div>
    </div>
    <div class="table_time" style="min-height:400px;margin-top:30px;">
        <?=$this->render('table', ['times' => $times])?>
    </div>
</section>
