<?php

namespace backend\models;

use common\models\DateConvertor;
use yii\behaviors\AttributeBehavior;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "namaz_time".
 *
 * @property int $id
 * @property int $date
 * @property int $region_id
 * @property int $system_date
 * @property int|null $fajr
 * @property int|null $sunrise
 * @property int|null $dhuhr
 * @property int|null $asr
 * @property int|null $maghrib
 * @property int|null $isha
 *
 * @property Regions $region
 */
class NamazTime extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'namaz_time';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['date', 'region_id'], 'required'],
            [['region_id', 'system_date'], 'integer'],
            [['date', 'region_id'], 'unique', 'targetAttribute' => ['date', 'region_id']],
            [['region_id'], 'exist', 'skipOnError' => true, 'targetClass' => Regions::class, 'targetAttribute' => ['region_id' => 'id']],
            [['date', 'fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'], 'string', 'max' => 10],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public
    function attributeLabels()
    {
        return [
            'id' => 'ID',
            'date' => 'Date',
            'region_id' => 'Region ID',
            'system_date' => 'System Date',
            'fajr' => 'Fajr',
            'sunrise' => 'Sunrise',
            'dhuhr' => 'Dhuhr',
            'asr' => 'Asr',
            'maghrib' => 'Maghrib',
            'isha' => 'Isha',
        ];
    }

    /**
     * Gets query for [[Region]].
     *
     * @return \yii\db\ActiveQuery
     */
    public
    function getRegion()
    {
        return $this->hasOne(Regions::className(), ['id' => 'region_id']);
    }

    public function behaviors()
    {
        return [
            [
                'class' => AttributeBehavior::class,
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_UPDATE => ['date'],
                    ActiveRecord::EVENT_BEFORE_INSERT => ['date'],
                ],
                'value' => function ($event) {
                    return (int)strtotime($this->date);
                },
            ],
            [
                'class' => AttributeBehavior::class,
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_UPDATE => ['fajr'],
                    ActiveRecord::EVENT_BEFORE_INSERT => ['fajr'],
                ],
                'value' => function ($event) {
                    return (int)strtotime($this->fajr);
                },
            ],
            [
                'class' => AttributeBehavior::class,
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_UPDATE => ['sunrise'],
                    ActiveRecord::EVENT_BEFORE_INSERT => ['sunrise'],
                ],
                'value' => function ($event) {
                    return (int)strtotime($this->sunrise);
                },
            ],
            [
                'class' => AttributeBehavior::class,
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_UPDATE => ['dhuhr'],
                    ActiveRecord::EVENT_BEFORE_INSERT => ['dhuhr'],
                ],
                'value' => function ($event) {
                    return (int)strtotime($this->dhuhr);
                },
            ],
            [
                'class' => AttributeBehavior::class,
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_UPDATE => ['asr'],
                    ActiveRecord::EVENT_BEFORE_INSERT => ['asr'],
                ],
                'value' => function ($event) {
                    return (int)strtotime($this->asr);
                },
            ],
            [
                'class' => AttributeBehavior::class,
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_UPDATE => ['maghrib'],
                    ActiveRecord::EVENT_BEFORE_INSERT => ['maghrib'],
                ],
                'value' => function ($event) {
                    return (int)strtotime($this->maghrib);
                },
            ],
            [
                'class' => AttributeBehavior::class,
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_UPDATE => ['isha'],
                    ActiveRecord::EVENT_BEFORE_INSERT => ['isha'],
                ],
                'value' => function ($event) {
                    return (int)strtotime($this->isha);
                },
            ],
            [
                'class' => AttributeBehavior::class,
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_UPDATE => ['system_date'],
                    ActiveRecord::EVENT_BEFORE_INSERT => ['system_date'],
                ],
                'value' => function ($event) {
                    return DateConvertor::dateToSystemDate($this->date);
                },
            ],
        ];
    }
}
