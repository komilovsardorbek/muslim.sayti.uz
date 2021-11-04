<?php

namespace common\models;


use Yii;
use yii\db\ActiveRecord;
use himiklab\yii2\recaptcha\ReCaptchaValidator2;



/**
 * This is the model class for table "contacts".
 *
 * @property int $id
 * @property string $full_name
 * @property string $email_phone
 * @property string $message
 * @property int $created_at [int(11)]
 */
class Feedback extends ActiveRecord
{
    public $reCaptcha;

    public static function tableName()
    {
        return 'feedback';
    }

    public function rules()
    {
        return [
            [['full_name', 'email_phone'], 'required', 'message' => Yii::t('app', '{attribute} cannot be blank.')],
            [['full_name', 'email_phone'], 'string', 'max' => 50],
            [['message'], 'string', 'max' => 500],
            [['reCaptcha'], ReCaptchaValidator2::class, 'uncheckedMessage' => Yii::t('app', 'Please confirm that you are not a bot.')],
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'full_name' => Yii::t('app', 'Name'),
            'email_phone' => Yii::t('app', 'Email or phone'),
            'message' => Yii::t('app', 'Message'),
            'created_at' => 'Qo`shilgan vaqti',
            'reCaptcha' => Yii::t('app', 'reCaptcha'),
        ];
    }

    public function behaviors()
    {
        return [
            'timestamp' => [
                'class' => 'yii\behaviors\TimestampBehavior',
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_INSERT => ['created_at'],
                ],
            ],
        ];
    }

    public function afterSave($insert, $changedAttributes)
    {
        if ($insert) {
            $text = "Murojaat qoldirildi! \n" .
                "FIO: " . $this->full_name . "\n" .
                "Telefon: " . $this->email_phone . "\n" .
                "Xabar: " . $this->message . "\n";
            (new Telegram($text))->sendMessage();
        }
        parent::afterSave($insert, $changedAttributes);
    }
}
