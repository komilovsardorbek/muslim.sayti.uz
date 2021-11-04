<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%namaz_time}}`.
 */
class m210715_094413_create_namaz_time_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%namaz_time}}', [
            'id' => $this->primaryKey(),
            'date' => $this->integer()->notNull(),
            'region_id' => $this->integer()->notNull(),
            'system_date' => $this->integer()->notNull(),
            'fajr' => $this->integer()->Null(),
            'sunrise' => $this->integer()->Null(),
            'dhuhr' => $this->integer()->Null(),
            'asr' => $this->integer()->Null(),
            'maghrib' => $this->integer()->Null(),
            'isha' => $this->integer()->Null(),
        ]);

        $this->createIndex('{{%idx-namaz_time-region_id}}', '{{%namaz_time}}', 'region_id');

        $this->addForeignKey('{{%fkey-namaz_time-region_id}}', '{{%namaz_time}}', 'region_id', '{{%regions}}', 'id', 'RESTRICT', 'RESTRICT');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%namaz_time}}');
    }
}
