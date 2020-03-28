class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :name
      t.text :description
      t.text :photo_url
      t.datetime :start_date
      t.datetime :end_date
      t.timestamps
    end
  end
end
