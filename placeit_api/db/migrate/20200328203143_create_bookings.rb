class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.string :name
      t.string :email
      t.datetime :date
      t.string :id_number
      t.string :mobile_phone


      t.timestamps
    end
  end
end
