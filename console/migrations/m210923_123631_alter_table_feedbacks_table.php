<?php

use yii\db\Migration;

/**
 * Class m210923_123631_alter_table_feedbacks_table
 */
class m210923_123631_alter_table_feedbacks_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        if (!(Yii::$app->db->getTableSchema('{{%feedback}}', true) === null)) {
            $this->dropTable('{{%feedback}}');
        }

        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            // http://stackoverflow.com/questions/766809/whats-the-difference-between-utf8-general-ci-and-utf8-unicode-ci
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%feedback}}', [
            'id' => $this->primaryKey(),
            'full_name' => $this->string()->notNull(),
            'email_phone' => $this->string()->notNull(),
            'message' => $this->text(),
            'created_at' => $this->integer(),
        ], $tableOptions);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%feedback}}');
    }
}
