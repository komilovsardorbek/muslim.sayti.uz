<?php

namespace backend\models;

use yii\db\ActiveRecord;

/**
 * This is the model class for table "regions".
 *
 * @property int $id
 * @property string $name
 * @property int $parent_id
 */
class Regions extends ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'regions';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['parent_id'], 'integer'],
            [['name'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Nomi',
            'parent_id' => 'O`zidan oldin turuvchi hudud',
        ];
    }

    public function checkRegion()
    {
        $regions = self::find()->all();
        if (!is_null($this->parent_id)) {
            foreach ($regions as $region) {
                if ($region->id === $this->parent_id) {
                    return $region->name;
                }
            }
        } else {
            return 'Uzbekiston';
        }
    }

}
