class AddMovieIdToBookings < ActiveRecord::Migration[6.0]
  def change
    add_column :bookings, :movie_id, :integer
  end
end
