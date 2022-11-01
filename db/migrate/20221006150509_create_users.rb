class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :password_digest
      t.string :last_name
      t.string :email
      t.integer :role
      t.integer :cohort_id

      t.timestamps
    end
  end
end
