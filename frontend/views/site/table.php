<div class="container">
    <div style="overflow: auto">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th scope="col"><span class="time-month">Kun</span></th>
                <th scope="col"><span class="time-month">Hafta kun</span></th>
                <th scope="col">Bomdod</th>
                <th scope="col">Quyosh</th>
                <th scope="col">Peshin</th>
                <th scope="col">Asr</th>
                <th scope="col">Shom</th>
                <th scope="col">Xufton</th>
            </tr>
            </thead>
            <tbody>
            <?php foreach ($times as $time): ?>
                <tr>
                    <th scope="row"><?= date('Y-m-d', $time->date) ?></th>
                    <td><span class="time-month"><?= Yii::t('app', getdate(date($time->date))['weekday']) ?></span></td>
                    <td><?= Yii::$app->formatter->asTime($time->fajr, 'HH:mm') ?></td>
                    <td><?= Yii::$app->formatter->asTime($time->sunrise, 'HH:mm') ?></td>
                    <td><?= Yii::$app->formatter->asTime($time->dhuhr, 'HH:mm') ?></td>
                    <td><?= Yii::$app->formatter->asTime($time->asr, 'HH:mm') ?></td>
                    <td><?= Yii::$app->formatter->asTime($time->maghrib, 'HH:mm') ?></td>
                    <td><?= Yii::$app->formatter->asTime($time->isha, 'HH:mm') ?></td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <button class="suxur">Suxur*</button>
    <span> -Suxurda tong otguncha ovqatlanishning tugash vaqti. Suxur bomdod vaqtidan 10 daqiqa oldin to'ldirilishi kerak.</span>
    <br> <br>
    <button class="suxur">Iftar*</button>
    <span>-Vaqtni buzish. Xurmo va suv bilan suhbatlashish maqsadga muvofiqdir.</span>
</div>
<br>