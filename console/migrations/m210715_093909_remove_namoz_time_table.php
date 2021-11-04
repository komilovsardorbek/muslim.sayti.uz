<?php

use yii\db\Migration;

/**
 * Class m210715_093909_remove_namoz_time_table
 */
class m210715_093909_remove_namoz_time_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->dropTable('{{%namoz_time}}');

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->createTable('{{%namoz_time}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'parent_id' => $this->integer()->Null(),
        ]);

    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m210715_093909_remove_namoz_time_table cannot be reverted.\n";

        return false;
    }
    */
}
