class AddEdescriptionToCohorts < ActiveRecord::Migration[7.0]
  def change
    add_column :cohorts, :description, :string
  end
end
