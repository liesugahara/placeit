class AddFullyBookedMovies < ActiveRecord::Migration[6.0]
  def change
    add_column :movies, :fully_booked, :boolean, :default => false
  end
end
