class Movie < ApplicationRecord
  has_many :bookings
  validates :name, presence: true
  validates :description, presence: true, length: { minimum: 10, maximum: 300 }
  validates :photo_url, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true

  def is_fully_booked?
    bookings = Booking.where(movie_id: id).where(created_at: Date.today..Date.tomorrow).count
    if bookings >= 10 
      update_attributes!(fully_booked: true)
    else
      update_attributes!(fully_booked: false)
    end
    save!
    reload
  end

end