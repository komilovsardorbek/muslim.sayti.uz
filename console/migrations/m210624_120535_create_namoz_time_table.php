<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%namoz_time}}`.
 */
class m210624_120535_create_namoz_time_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%namoz_time}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'parent_id' => $this->integer()->Null(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%namoz_time}}');
    }
}
