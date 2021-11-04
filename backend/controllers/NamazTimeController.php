<?php

namespace backend\controllers;

use backend\models\NamazTime;
use backend\models\NamazTimeImport;
use backend\models\NamazTimeSearch;
use common\models\DateConvertor;
use Exception;
use PHPExcel_IOFactory;
use Yii;
use yii\filters\VerbFilter;
use yii\web\Controller;
use yii\web\NotFoundHttpException;

class NamazTimeController extends Controller
{
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    public function actionIndex()
    {
        $searchModel = new NamazTimeSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single NamazTime model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Finds the NamazTime model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return NamazTime the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = NamazTime::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    /**
     * Creates a new NamazTime model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new NamazTime();


        if ($model->load(Yii::$app->request->post())) {

            $test = true;
            $dates = NamazTime::find()->where(['system_date' => DateConvertor::dateToSystemDate(strtotime($model->date))])->all();
            if (!empty($dates)) {
                foreach ($dates as $date) {
                    if ($date->region_id == $model->region_id) {
                        $test = false;
                    }
                };
            }
            if ($test) {
                $model->save();
                return $this->redirect(['view', 'id' => $model->id]);
            }
            {
                Yii::$app->session->setFlash('error', 'Ushbu sana va hudud bazada mavjud');
                return $this->redirect(['create', 'model' => $model]);
            };

        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing NamazTime model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing NamazTime model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    public function actionImport()
    {
        $model = new NamazTimeImport();
        try {
            if ($model->load(Yii::$app->request->post()) && $model->validate() && $model->saveFile()) {
                Yii::$app->session->setFlash('success', 'File yangilandi');

                $inputFile = '/app/storage/data/importexcell/namaztime.xlsx';
                try {
                    $inputFileType = PHPExcel_IOFactory::identify($inputFile);
                    $objReader = PHPExcel_IOFactory::createReader($inputFileType);
                    $objPHPExcel = $objReader->load($inputFile);
                } catch (Exception $e) {
                    die('Error');
                }

                $sheet = $objPHPExcel->getSheet(0);
                $highestRow = $sheet->getHighestRow();
                $highestColumn = $sheet->getHighestColumn();

                for ($row = 1; $row <= $highestRow; $row++) {
                    $rowData = $sheet->rangeToArray('A' . $row . ':' . $highestColumn . $row, NULL, TRUE, FALSE);
                    $namaztime = new NamazTime();
                    if ($row == 1) {
                        continue;
                    }
                    $namaztime->date = $rowData[0][0];
                    $namaztime->region_id = $model->region_id;
                    $namaztime->system_date = DateConvertor::dateToSystemDate(strtotime($rowData[0][0]));
                    $namaztime->fajr = $rowData[0][1];
                    $namaztime->sunrise = $rowData[0][2];
                    $namaztime->dhuhr = $rowData[0][3];
                    $namaztime->asr = $rowData[0][4];
                    $namaztime->maghrib = $rowData[0][5];
                    $namaztime->isha = $rowData[0][6];

                    $test = true;
                    $dates = NamazTime::find()->where(['system_date' => DateConvertor::dateToSystemDate(strtotime($rowData[0][0]))])->all();
                    if (!empty($dates)) {
                        foreach ($dates as $date) {
                            if ($date->region_id == $model->region_id) {
                                $test = false;
                            }
                        };
                    }
                    if ($test) {
                        $namaztime->save();
                    }
                    print_r($namaztime->getErrors());
                }
                return $this->redirect(['index']);

            } else {
                Yii::$app->session->setFlash('warning', 'File yangilanmadi');
            }
        } catch (Exception $e) {
            Yii::$app->session->setFlash('error', $e->getMessage());
        }

        return $this->render('/import-namaz-time/index', [
            'model' => $model,
        ]);
    }

}
