<?php

namespace backend\controllers;

use afzalroq\cms\controllers\ItemsController;
use afzalroq\cms\entities\Entities;
use afzalroq\cms\entities\Items;
use Yii;
use yii\helpers\Json;

class PostController extends ItemsController
{
    public function getViewPath()
    {
        return Yii::getAlias('@vendor/afzalroq/yii2-cms/views/items');
    }

    public function actionCreate($slug)
    {
        $model = new Items($slug);

        if (Yii::$app->request->isAjax) {
            $model->load(Yii::$app->request->post());
            return Json::encode(\yii\widgets\ActiveForm::validate($model));
        }
        if ($model->load(Yii::$app->request->post())) {
            $operation = Yii::$app->request->post('save');
            if (in_array($operation, ['add-new', 'save-close', 'save'])) {

                if ($slug === 'posts') {
                    $text_finish = ""; $text_2_1 = $model->text_2_1;
                    if ($model->text_2_4 === ""){
                        while($text_2_1 != ""){
                        $teg_now =strpos($text_2_1,"<");
                        $teg_fin =strpos($text_2_1,">");
                        $teg = substr($text_2_1, $teg_now, $teg_fin-$teg_now+1);
                        $text_finish .= $teg;
                        $text_2_1 = substr($text_2_1, $teg_fin+1, strlen($text_2_1));
                        $text_fin =strpos($text_2_1,"<");
                        $text = substr($text_2_1, 0, $text_fin);
                        $text_finish .= $this->to_cyrillic($text);
                        $text_2_1 = str_replace($text, "",$text_2_1);
                        $tegs_now =strpos($text_2_1,"<");
                        $tegs_fin =strpos($text_2_1,">");
                        $tegs = substr($text_2_1, $tegs_now, $tegs_fin-$tegs_now+1);
                        $text_finish .= $tegs;
                        $text_2_1 = substr($text_2_1, $tegs_fin+1, strlen($text_2_1));
                        }
                        $model->text_2_4 = $text_finish;
                    }
                    if ($model->text_1_1 === ""){
                        $model->text_1_1 = $this->to_latin($model->text_1_4);
                    }
                    if ($model->text_2_1 === ""){
                        $model->text_2_1 = $this->to_latin($model->text_2_4);
                    }
                }

//                $model->save();
                if(!$model->save()){
                    dd($model->getErrors());
//                    throw new \Exception()
                }
                foreach ($model->files as $file) $model->addPhoto($file);
                Yii::$app->session->setFlash('success', Yii::t('cms', 'Saved'));
                if ($operation === 'add-new') return $this->redirect(['create', 'slug' => $slug]);
                if ($operation === 'save') return $this->redirect(['update', 'id' => $model->id, 'slug' => $slug]);
            }

            return $this->redirect(['index', 'slug' => $slug]);
        }
        return $this->render('create', [
            'model' => $model,
            'entity' => Entities::findOne(['slug' => $slug])
        ]);
    }
 
    public function actionUpdate($id, $slug)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post())) {
            $operation = Yii::$app->request->post('save');
            if (in_array($operation, ['add-new', 'save-close', 'save'])) {

                if ($slug === 'posts') {
//                    dd($model);
                    $text_finish = ""; $text_2_1 = $model->text_2_1;
                    if ($model->text_2_4 === ""){
                        while($text_2_1 != ""){
                        $teg_now =strpos($text_2_1,"<");
                        $teg_fin =strpos($text_2_1,">");
                        $teg = substr($text_2_1, $teg_now, $teg_fin-$teg_now+1);
                        $text_finish .= $teg;
                        $text_2_1 = substr($text_2_1, $teg_fin+1, strlen($text_2_1));
                        $text_fin =strpos($text_2_1,"<");
                        $text = substr($text_2_1, 0, $text_fin);
                        $text_finish .= $this->to_cyrillic($text);
                        $text_2_1 = str_replace($text, "",$text_2_1);
                        $tegs_now =strpos($text_2_1,"<");
                        $tegs_fin =strpos($text_2_1,">");
                        $tegs = substr($text_2_1, $tegs_now, $tegs_fin-$tegs_now+1);
                        $text_finish .= $tegs;
                        $text_2_1 = substr($text_2_1, $tegs_fin+1, strlen($text_2_1));
                        }
                        $model->text_2_4 = $text_finish;
                    }
                    if ($model->text_1_1 === ""){
                        $model->text_1_1 = $this->to_latin($model->text_1_4);
                    }
                    if ($model->text_1_4 === ""){
                        $model->text_1_4 = $this->to_cyrillic($model->text_1_1);
                    }
                    if ($model->text_3_4 === ""){
                        $model->text_3_4 = $this->to_cyrillic($model->text_3_1);
                    }
                    if ($model->text_2_1 === ""){
                        $model->text_2_1 = $this->to_latin($model->text_2_4);
                    }
                }


                $model->save();
                foreach ($model->files as $file) $model->addPhoto($file);
                Yii::$app->session->setFlash('success', Yii::t('cms', 'Saved'));
                if ($operation === 'add-new') return $this->redirect(['create', 'slug' => $slug]);
                if ($operation === 'save') return $this->redirect(['update', 'id' => $model->id, 'slug' => $slug]);
            }

            return $this->redirect(['index', 'slug' => $slug]);
        }

        return $this->render('update', [
            'model' => $model,
            'entity' => Entities::findOne(['slug' => $slug])
        ]);
    }

    function to_cyrillic($string):string
    {
        $gost = [
            "a" => "а", "b" => "б", "v" => "в", "g" => "г", "d" => "д", "e" => "е", "yo" => "ё",
            "j" => "ж", "z" => "з", "i" => "и", "y" => "й", "k" => "к",  "оʼ" => "ў", "q" => "қ",
            "l" => "л", "m" => "м", "n" => "н", "o" => "о", "p" => "п", "r" => "р", "s" => "с", "t" => "т",
            "f" => "ф", "h" => "ҳ", "c" => "ц", "o`" => "ў",
            "ch" => "ч", "sh" => "ш", "sch" => "щ", "ie" => "ы", "u" => "у", "ya" => "я", "A" => "А", "B" => "Б",
            "V" => "В", "G" => "Г", "D" => "Д", "E" => "Е", "Yo" => "Ё", "J" => "Ж", "Z" => "З", "I" => "И", "Y" => "Й",
            "K" => "К", "L" => "Л", "M" => "М", 'Q' => 'Қ',
            "N" => "Н", "O" => "О", "P" => "П",
            "R" => "Р", "S" => "С", "T" => "Т", "Yu" => "Ю", "F" => "Ф", "H" => "Х", "C" => "Ц", "Ch" => "Ч", "Sh" => "Ш",
            "Sch" => "Щ", "Ie" => "Ы", "U" => "У", "Ya" => "Я", "'" => "ь", "_'" => "Ь", "''" => "ъ", "_''" => "Ъ",
             '&nbsp;' => '&nbsp;',
        ];
        return strtr($string, $gost);

    }

    function to_latin($string):string
    {
        $gost = [
            "а" => "a", "б" => "b", "в" => "v", "г" => "g", "ғ" => "g`", "д" => "d",
            "е" => "e", "ое" => "oye", "ие" => "iye","уе" => "uye","ае" => "aye" , "ё" => "yo", "ж" => "j", "з" => "z", "и" => "i",
            "й" => "y", "к" => "k", "қ" => "q" , "л" => "l", "м" => "m", "н" => "n",
            "о" => "o", "п" => "p", "р" => "r", "с" => "s", "т" => "t",
            "у" => "u", "ў" => "o`", "ф" => "f", "х" => "x", "ҳ" => "h" , "ц" => "ts", "ч" => "ch",
            "ш" => "sh", "щ" => "sch", "ы" => "ie", "э" => "e", "ю" => "yu",
            "я" => "ya",
            "А" => "A", "Б" => "B", "В" => "V", "Г" => "G", "Ғ" => "G`" , "Д" => "D",
            "Е" => "Ye", "Ё" => "Yo", "Ж" => "J", "З" => "Z", "И" => "I",
            "Й" => "Y", "К" => "K", "Қ" => "Q", "Л" => "L", "М" => "M", "Н" => "N",
            "О" => "O", "П" => "P", "Р" => "R", "С" => "S", "Т" => "T",
            "У" => "U", "Ф" => "F", "Х" => "H","Ҳ" => "H", "Ц" => "Ts", "Ч" => "Ch",
            "Ш" => "Sh", "Щ" => "Sch", "Ы" => "Ie", "Э" => "E", "Ю" => "Yu",
            "Я" => "Ya", "Ў" => "O`",
            "ь" => "'", "Ь" => "_'", "ъ" => "'", "Ъ" => "_''"
        ];
        return strtr($string, $gost);
    }

}
