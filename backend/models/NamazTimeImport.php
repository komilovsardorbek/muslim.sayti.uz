<?php

namespace backend\models;

use PhpOffice\PhpSpreadsheet\IOFactory;
use Yii;
use yii\base\Model;
use yii\web\UploadedFile;


class NamazTimeImport extends Model
{
    public $namazTimeFile;
    public $region_id;

    public function rules()
    {
        return [
            [['region_id'], 'exist', 'skipOnError' => true, 'targetClass' => Regions::class, 'targetAttribute' => ['region_id' => 'id']],
            [['region_id'], 'integer'],
            [['namazTimeFile'], 'file', 'skipOnEmpty' => false, 'extensions' => 'xlsx'],
            [['namazTimeFile'], 'required'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'namazTimeFile' => 'Namoz vaqtlari faylini kiriting',
        ];
    }

    public function saveFile()
    {
        if (!$this->namazTimeFile->saveAs($this->getPath())) {
            return false;
        }
        return true;
    }

    public function getPath()
    {
        return Yii::getAlias('@storageRoot') . '/data/importexcell/namaztime.' . $this->namazTimeFile->extension;

//        return '@storage/data/importexcell/' . 'namaztime' . '.' . $this->namazTimeFile->extension;
    }

    public function beforeValidate()
    {
        if (parent::beforeValidate()) {
            $this->namazTimeFile = UploadedFile::getInstance($this, 'namazTimeFile');
            return true;
        }
        return false;
    }

    public function getRegion()
    {
        return $this->hasOne(Regions::className(), ['id' => 'region_id']);
    }
}
